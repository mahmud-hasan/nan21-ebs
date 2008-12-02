create or replace package pk_bpartner as

  C_BP_ADRESS_BILLING constant char(1)  := 'I';
  function get_print_adress_billing(p_bpartner_id in number, p_format in varchar2 default null) return varchar2;
  function get_invoice_bankaccount(p_bpartner_id in number) return varchar2;
  function get_invoice_bank(p_bpartner_id in number) return varchar2;
  
  procedure create_def_cust_accts(p_bpartner_id in number, p_client_id in number);
  procedure create_def_vend_accts(p_bpartner_id in number, p_client_id in number);
  procedure create_def_emp_accts(p_bpartner_id in number, p_client_id in number);
  
  procedure del_def_cust_accts(p_bpartner_id in number, p_client_id in number);
  procedure del_def_vend_accts(p_bpartner_id in number, p_client_id in number);
  procedure del_def_emp_accts(p_bpartner_id in number, p_client_id in number);
end;
/
show errors package PK_BPARTNER; 



create or replace package body pk_bpartner as



   
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
  
  
  
  /*********************  Bpartner accounts *********************************/
  
  
  -- create default customer accounts
  procedure create_def_cust_accts(p_bpartner_id in number, p_client_id in number) is
    cursor c is 
    select t.*
      from acc_schema t 
     where t.client_id = p_client_id;
  begin
    for r in c loop
      begin
  	    insert into bp_account_customer(bpartner_id,client_id,accschema_id,acct_receivable,acct_prepayment,acct_recevable_srvc)
          values(p_bpartner_id, p_client_id, r.id
                       , pk_acc.get_accschema_prop_value(r.id,'CUST_RECEIVABLE_ACCT')
                       , pk_acc.get_accschema_prop_value(r.id,'CUST_PREPAYMENT_ACCT')
                       , pk_acc.get_accschema_prop_value(r.id,'CUST_RECEIVABLE_SERVICES_ACCT')   
                 );
      exception when DUP_VAL_ON_INDEX then 
        null; -- already exist               
      end;             
    end loop;  
  end;
    
  -- create default vendor accounts
  procedure create_def_vend_accts(p_bpartner_id in number, p_client_id in number) is
    cursor c is 
    select t.*
      from acc_schema t 
     where t.client_id = p_client_id;
  begin
    for r in c loop
      begin
 	      insert into bp_account_vendor(bpartner_id,client_id,accschema_id,acct_liability,acct_prepayment,acct_liability_srvc)
          values(p_bpartner_id, p_client_id, r.id
                       , pk_acc.get_accschema_prop_value(r.id,'VEND_LIABILITY_ACCT')
                       , pk_acc.get_accschema_prop_value(r.id,'VEND_PREPAYMENT_ACCT')
                       , pk_acc.get_accschema_prop_value(r.id,'VEND_LIABILITY_SERVICES_ACCT')   
                 );
      exception when DUP_VAL_ON_INDEX then 
        null; -- already exist               
      end;         
    end loop;  
  
  end;
   
   -- create default employee accounts
  procedure create_def_emp_accts(p_bpartner_id in number, p_client_id in number) is
    cursor c is 
    select t.*
      from acc_schema t 
     where t.client_id = p_client_id;
  begin
    for r in c loop
      begin
        insert into bp_account_internal(bpartner_id,client_id,accschema_id,acct_expense,acct_prepayment)
          values(p_bpartner_id, p_client_id, r.id
                       , pk_acc.get_accschema_prop_value(r.id,'EMP_EXPENSE_ACCT')
                       , pk_acc.get_accschema_prop_value(r.id,'EMP_PREPAYMENT_ACCT')
                 );
      exception when DUP_VAL_ON_INDEX then 
        null; -- already exist               
      end;         
    end loop;    
  end;
 
 
 
  -- delete default customer accounts
  procedure del_def_cust_accts(p_bpartner_id in number, p_client_id in number) is
  begin
    delete from  bp_account_customer 
     where bpartner_id = p_bpartner_id 
       and client_id = p_client_id;
  end;
   
  -- delete default vendor accounts
  procedure del_def_vend_accts(p_bpartner_id in number, p_client_id in number) is
  begin
    delete from  bp_account_vendor 
     where bpartner_id = p_bpartner_id 
       and client_id = p_client_id;
  end;  
 
  -- delete default employee accounts
  procedure del_def_emp_accts(p_bpartner_id in number, p_client_id in number) is
  begin
    delete from  bp_account_internal 
     where bpartner_id = p_bpartner_id 
       and client_id = p_client_id;
  end;  
  

 
  
end;
/
show errors package body PK_BPARTNER; 

