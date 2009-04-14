create or replace package pbo_parcel is
  
  --Into warehouse movements. 
  -- parcel is not defined in DB, initial reception
  EVENT_TYPE_GRP_WAREHOUSE_IN_0 constant varchar2(16) := 'WAREHOUSE_IN_0';  
  -- parcel already defined in DB, intermediary reception point
  EVENT_TYPE_GRP_WAREHOUSE_IN_1 constant varchar2(16) := 'WAREHOUSE_IN_1';  
  -- parcel already defined in DB, return to warehouse
  EVENT_TYPE_GRP_WAREHOUSE_IN_2 constant varchar2(16) := 'WAREHOUSE_IN_2';
  -- delivery confirmation event
  EVENT_TYPE_GRP_DELIVERY constant varchar2(16) := 'DELIVERY';
  -- allocate to delivery agent
  EVENT_TYPE_GRP_WAREHOUSE_OUT constant varchar2(16) := 'WAREHOUSE_OUT';
  
  
  function get_code_by_id(p_id in number, p_raise in char default 'N') return varchar2;
  function get_evnttyp_id_by_grp(p_grp in varchar2, p_raise in char default 'N') return varchar2;
  function get_evnttyp_name_by_evntid(p_id in number, p_raise in char default 'N') return varchar2;
  function get_evnttyp_name_by_id(p_id in number, p_raise in char default 'N') return varchar2;
  
  procedure reception_existing(p_parcel_code in varchar2, p_event_date in date, p_agent_id in number, p_warehouse_id in number, p_raise in char default 'N');
  procedure reception_new(p_parcel_code in varchar2, p_event_date in date, p_agent_id in number, p_warehouse_id in number, p_raise in char default 'N');
  procedure allocate_to_agent(p_parcel_code in varchar2, p_event_date in date, p_agent_id in number, p_warehouse_id in number, p_raise in char default 'N');
  procedure mark_delivered(p_parcel_code in varchar2, p_event_date in date, p_agent_id in number, p_raise in char default 'N');
  procedure mark_return(p_parcel_code in varchar2, p_event_date in date, p_agent_id in number, p_warehouse_id in number, p_reason_code in varchar2, p_reason in varchar2, p_raise in char default 'N');
  
     
end;
/
show errors package PBO_PARCEL; 



create or replace package body pbo_parcel is
  
  /* Get parcel code by its ID
   * Params: p_id: Parcel ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_code_by_id(p_id in number, p_raise in char default 'N') return varchar2 is 
    vrec tr_parcel%rowtype;
  begin     
    pdao_findby_pk.tr_parcel_t(p_id, vrec, p_raise);
    return vrec.code;  
  end; 
  
  /* Get the event type by event group
   * Params: p_grp: Event type group
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_evnttyp_id_by_grp(p_grp in varchar2, p_raise in char default 'N') return varchar2 is 
    cursor c is 
      select t.id
        from tr_parcel_event_type t
       where t.evntgrp_code = p_grp;   
    v_out number;   
  begin     
    open c;
    fetch c into v_out;
    if c%notfound and p_raise = 'Y' then
      close c;
      raise_error('EvntTypNotFound');
    end if;
    close c;    
    return v_out;           
  end; 
  

  /* Get the event type name by event ID
   * Params: p_id: Event ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_evnttyp_name_by_evntid(p_id in number, p_raise in char default 'N') return varchar2 is 
    cursor c is 
      select t.name
        from tr_parcel_event_type t
       where t.id = (select tt.eventtyp_id from tr_parcel_event tt where tt.id = p_id);   
    v_out tr_parcel_event_type.name%type;   
  begin     
    open c;
    fetch c into v_out;
    if c%notfound and p_raise = 'Y' then
      close c;
      raise_error('EvntTypNotFound');
    end if;
    close c;    
    return v_out;           
  end; 
  
  
  /* Get eventtype name by its ID
   * Params: p_id: event type ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_evnttyp_name_by_id(p_id in number, p_raise in char default 'N') return varchar2 is 
    vrec tr_parcel_event_type%rowtype;
  begin     
    pdao_findby_pk.tr_parcel_event_type_t(p_id, vrec, p_raise);
    return vrec.name;  
  end; 
  
  
  /**
   *  Mark the parcel delivered. Update agent inventory
   * Params: p_parcel_code Parcel code
   */ 
  procedure mark_delivered(p_parcel_code in varchar2, p_event_date in date, p_agent_id in number, p_raise in char default 'N') is
    v_rec tr_parcel%rowtype;
    v_event tr_parcel_event%rowtype;
  begin
    pdao_findby_uk.tr_parcel_t(p_code => p_parcel_code, p_record => v_rec, p_raise => p_raise);

    if v_rec.rejected = 'Y' or v_rec.delivered = 'Y' then
      raise_error('ParcelMarkedRejected_CannotDelivered');
    end if;
    
    update tr_parcel set 
       delivered = 'Y'
      ,delivery_date = p_event_date
      ,delivery_agent_id = p_agent_id
      ,custody_org_id = null
     where code = p_parcel_code;
    
    v_event.parcel_id := v_rec.id;
    v_event.eventtyp_id := get_evnttyp_id_by_grp(pbo_parcel.EVENT_TYPE_GRP_DELIVERY);
    v_event.event_date := p_event_date;
    v_event.src_org_id := p_agent_id;
    
    pdao_insert.tr_parcel_event_t(p_record => v_event);
  end;


  /**
   *  Mark the parcel rejected. Update agent inventory
   * Params: p_parcel_code Parcel code
   */ 
  procedure mark_return(p_parcel_code in varchar2, p_event_date in date, p_agent_id in number, p_warehouse_id in number, p_reason_code in varchar2, p_reason in varchar2, p_raise in char default 'N') is
    v_rec tr_parcel%rowtype;
    v_event tr_parcel_event%rowtype;
  begin 
    pdao_findby_uk.tr_parcel_t(p_code => p_parcel_code, p_record => v_rec, p_raise => p_raise);
 
    if v_rec.delivered = 'Y' then
      raise_error('ParcelMarkedDelivered_NoEvent');
    end if;
    
    update tr_parcel set 
       rejected = 'Y'
      ,reject_date = p_event_date
      ,reject_reason_code = p_reason_code
      ,reject_reason = p_reason 
      ,custody_org_id = p_warehouse_id
     where code = p_parcel_code;

    
    v_event.parcel_id := v_rec.id;
    v_event.eventtyp_id := get_evnttyp_id_by_grp(pbo_parcel.EVENT_TYPE_GRP_WAREHOUSE_IN_2);
    v_event.event_date := p_event_date;
    v_event.src_org_id := p_agent_id;
    v_event.dest_org_id := p_warehouse_id;
    
    pdao_insert.tr_parcel_event_t(p_record => v_event);
        
  end;
  
  
  /**
   *  Allocate the parcel to agent. 
   *  Params: p_parcel_code Parcel code
   */ 
  procedure allocate_to_agent(p_parcel_code in varchar2, p_event_date in date, p_agent_id in number, p_warehouse_id in number, p_raise in char default 'N') is
    v_rec tr_parcel%rowtype;
    v_event tr_parcel_event%rowtype;
  begin
    pdao_findby_uk.tr_parcel_t(p_code => p_parcel_code, p_record => v_rec, p_raise => p_raise);

    if v_rec.delivered = 'Y' then
      raise_error('ParcelMarkedDelivered_NoEvent');
    end if;
    
    update tr_parcel set custody_org_id = p_agent_id  
     where code = p_parcel_code;
    
    v_event.parcel_id := v_rec.id;
    v_event.eventtyp_id := get_evnttyp_id_by_grp(pbo_parcel.EVENT_TYPE_GRP_WAREHOUSE_OUT);
    v_event.event_date := p_event_date;
    v_event.src_org_id := p_warehouse_id;
    v_event.dest_org_id := p_agent_id;
    
    pdao_insert.tr_parcel_event_t(p_record => v_event);
        
  end;
  
  


  /**
   *  Reception of existing parcel. Moves the parcel into warehouse.
   *   Params: p_parcel_code Parcel code
   */ 
  procedure reception_existing(p_parcel_code in varchar2, p_event_date in date, p_agent_id in number, p_warehouse_id in number, p_raise in char default 'N') is
    v_rec tr_parcel%rowtype;
    v_event tr_parcel_event%rowtype;
  begin 
    pdao_findby_uk.tr_parcel_t(p_code => p_parcel_code, p_record => v_rec, p_raise => p_raise);
 
    if v_rec.delivered = 'Y' then
      raise_error('ParcelMarkedDelivered_NoEvent');
    end if;
    
    update tr_parcel set custody_org_id = p_warehouse_id  
     where code = p_parcel_code;
    
    v_event.parcel_id := v_rec.id;
    v_event.eventtyp_id := get_evnttyp_id_by_grp(pbo_parcel.EVENT_TYPE_GRP_WAREHOUSE_IN_1);
    v_event.event_date := p_event_date;
    v_event.src_org_id := p_agent_id;
    v_event.dest_org_id := p_warehouse_id;
    
    pdao_insert.tr_parcel_event_t(p_record => v_event);
        
  end;
    
  
  /**
   *  Reception of new parcel.Creates the parcel record and an into warehouse movement event.
   *   Params: p_parcel_code Parcel code
   */ 
  procedure reception_new(p_parcel_code in varchar2, p_event_date in date, p_agent_id in number, p_warehouse_id in number, p_raise in char default 'N') is
    v_rec tr_parcel%rowtype;
    v_event tr_parcel_event%rowtype;
  begin 
    pdao_findby_uk.tr_parcel_t(p_code => p_parcel_code, p_record => v_rec, p_raise => p_raise);
 
    if v_rec.delivered = 'Y' then
      raise_error('ParcelMarkedDelivered_CannotRejected');
    end if;
    
    update tr_parcel set custody_org_id = p_warehouse_id
     where code = p_parcel_code;

    
    v_event.parcel_id := v_rec.id;
    v_event.eventtyp_id := get_evnttyp_id_by_grp(pbo_parcel.EVENT_TYPE_GRP_WAREHOUSE_IN_0);
    v_event.event_date := p_event_date;
    v_event.src_org_id := p_agent_id;
    v_event.dest_org_id := p_warehouse_id;
    
    pdao_insert.tr_parcel_event_t(p_record => v_event);
        
  end;
end;
/
show errors package body PBO_PARCEL; 

