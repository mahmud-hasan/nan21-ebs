create or replace package pbo_bpartner as

  C_BP_ADRESS_BILLING constant char(1)  := 'I';
  
  function get_name_by_id(p_id in number, p_raise in char default 'N') return varchar2;
  function get_code_by_id(p_id in number, p_raise in char default 'N') return varchar2;
  
  
  procedure add_default_accounts(p_bpartner_id in number, p_client_id in number);
  
  function get_print_adress_billing(p_bpartner_id in number, p_format in varchar2 default null) return varchar2;
  function get_invoice_bankaccount(p_bpartner_id in number) return varchar2;
  function get_invoice_bank(p_bpartner_id in number) return varchar2;
  
  
end;
/
show errors package PBO_BPARTNER; 



create or replace package body pbo_bpartner as

  /* Get a business partner name by its ID
   * Params: p_id: Business partner ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_name_by_id(p_id in number, p_raise in char default 'N') return varchar2 is 
    vrec bpartner%rowtype;
  begin     
    pdao_findby_pk.bpartner_t(p_id, vrec, p_raise);
    return vrec.name; 
  end;  
  
  /* Get a business partner code by its ID
   * Params: p_id: Business partner ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_code_by_id(p_id in number, p_raise in char default 'N') return varchar2 is 
    vrec bpartner%rowtype;
  begin     
    pdao_findby_pk.bpartner_t(p_id, vrec, p_raise);
    return vrec.code; 
  end;    
  
  
  /* Add default accounts to business partner for each client
   * Params: p_bpartner_id: Business partner ID
   *         p_client_id: Client ID
   */
  procedure add_default_accounts(p_bpartner_id in number, p_client_id in number) is
   cursor c is 
     select t.* 
       from ac_client_accschema t
      where t.client_id = p_client_id; 
   r c%rowtype;    
   v_bpacct bp_account%rowtype;

  begin     
    for r in c loop

      select seq_bpacct_id.nextval into v_bpacct.id from dual;
      
      v_bpacct.bpartner_id :=  p_bpartner_id;
      v_bpacct.client_id :=  p_client_id;
      v_bpacct.accschema_id := r.accschema_id ;
      v_bpacct.c_acct_receivable_id := pbo_acc.get_accschema_paramacct(pbo_acc.P_DEF_CUST_ACCT_RECEIVABLES, p_client_id, r.accschema_id );
      v_bpacct.c_acct_prepay_id := pbo_acc.get_accschema_paramacct(pbo_acc.P_DEF_CUST_ACCT_PREPAY, p_client_id, r.accschema_id );
      v_bpacct.v_acct_payable_id := pbo_acc.get_accschema_paramacct(pbo_acc.P_DEF_VEND_ACCT_PAYABLES, p_client_id, r.accschema_id );
      v_bpacct.v_acct_prepay_id := pbo_acc.get_accschema_paramacct(pbo_acc.P_DEF_VEND_ACCT_PREPAY, p_client_id, r.accschema_id );
      v_bpacct.i_acct_payable_id := null;
      v_bpacct.i_acct_receivable_id := null;
      v_bpacct.i_acct_prepay_id := null;

      pdao_insert.bp_account_t(v_bpacct);
      
    end loop;
  end;    
  
  
  
   
   
  function get_print_adress(p_adress_id in number, p_format in varchar2 default null) return varchar2 is
    vc_out varchar2(255);
    cursor c is 
      select a.* 
        from bp_adress a
       where a.id = p_adress_id; 
    r c%rowtype; 
    vc_country_name varchar2(100);  
  begin
    open c;
    fetch c into r;
    if c%found then 
      if r.street is not null then 
        vc_out := vc_out || 'Str. '; 
        vc_out := vc_out || r.street || ' '; 
      end if;
    	
      if r.no is not null then 
        vc_out := vc_out || 'Nr. ';
        vc_out := vc_out || r.no || ' ';  
      end if;
      
      if r.building is not null then 
        vc_out := vc_out || 'Bl. ';
        vc_out := vc_out || r.building || ' ';  
      end if;
      
      if r.entrance is not null then 
        vc_out := vc_out || 'Sc. ';  
        vc_out := vc_out || r.entrance || ' ';
      end if;
      
      if r.floor is not null then 
        vc_out := vc_out || 'Et. ';
        vc_out := vc_out || r.floor || ' ';
      end if;
      
      if r.apt is not null then 
        vc_out := vc_out || 'Ap. ';  
        vc_out := vc_out || r.apt || ' ';
      end if;
      
      if r.city is not null then 
        vc_out := vc_out || 'Loc. ';  
        vc_out := vc_out || r.city ;
      end if;
      
      --if r.region_code is not null then vc_out := vc_out || 'Jud. ';  end if;
      --vc_out := vc_out || r.region_code || ' ';
      if r.country_code is not null then 
        vc_out := vc_out || ', ';  
        select name into vc_country_name 
          from country 
         where code = r.country_code;
         vc_out := vc_out || vc_country_name;
      end if;
      
    end if;
    close c;
    return vc_out;
  end;
  
  
  
  function get_print_adress_billing(p_bpartner_id in number, p_format in varchar2 default null) return varchar2 is
    vn_adress_id number;
  begin
    	select id into vn_adress_id
        from bp_adress 
       where bpartner_id = p_bpartner_id 
         and is_billing = 'Y';
    return get_print_adress(vn_adress_id, p_format);
  exception 
   when no_data_found then 
     return null;
  end;
  
  
  
  function get_invoice_bankaccount(p_bpartner_id in number) return varchar2 is     
    vc_out varchar2(32);   
  begin
     select iban into vc_out
        from bp_bankaccount
       where bpartner_id = p_bpartner_id;
     return vc_out;
   exception when no_data_found then 
    return null;    
  end;
  
  
  
  function get_invoice_bank(p_bpartner_id in number) return varchar2 is     
    vc_out varchar2(100);   
  begin
     select b.name || ' - ' || bag.name into vc_out
        from bp_bankaccount ba, bank b, bank_agency bag
       where ba.bpartner_id = p_bpartner_id
         and ba.bank_code = b.code
         and ba.bank_code = bag.bank_code
         and ba.bankag_code = bag.code;
     return vc_out;
   exception when no_data_found then 
    return null;    
  end;  
  
   
 
end;
/
show errors package body PBO_BPARTNER; 

