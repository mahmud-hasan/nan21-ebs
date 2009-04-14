create or replace package ps_acc is
   /*
    * Service package for accounting
    */

end;
/
show errors package PS_ACC; 



create or replace package body ps_acc is
  

  /**
   * Post issued invoice.
   * Params: p_id: Invoice ID
   */
  procedure post_iinv(p_id in number, p_accschema_id in number) is
    v_inv iinvoice%rowtype;
    v_accdoc ac_accdoc%rowtype;  
    v_acc_period  ac_acc_period%rowtype;
  begin
    --todo: lock document! => pdao_lock.... 
    pdao_findby_pk.iinvoice_t(p_id, v_inv, 'Y');
    v_acc_period := pbo_acc.get_accperiod_by_date(v_inv.doc_date,v_inv.client_id,'Y');
    
    if v_acc_period.closed = 'Y' then
      raise_error('CannotPostClosedPeriod', v_acc_period.name);
    end if;
    
    select seq_accdoc_id.nextval into v_accdoc.id from dual;   

    v_accdoc.client_id :=  v_inv.client_id;
    v_accdoc.accperiod_id :=  v_acc_period.id;
    v_accdoc.doc_no :=  v_accdoc.id;
    v_accdoc.doc_date :=  v_inv.doc_date;
    v_accdoc.basedoc_type :=  'IINV';
    v_accdoc.basedoc_no :=  v_inv.doc_no;
    v_accdoc.basedoc_date :=  v_inv.doc_date;
    v_accdoc.basedoc_id :=  v_inv.id;
    v_accdoc.notes :=  null;
    v_accdoc.is_generated :=  'Y';
    v_accdoc.is_inserted :=  'Y';
    v_accdoc.is_posted :=  'N';
    v_accdoc.accschema_id :=  p_accschema_id;

    pdao_insert.ac_accdoc_t(p_record => v_accdoc);
    
  end;
  
  
  
end;
/
show errors package body PS_ACC; 

