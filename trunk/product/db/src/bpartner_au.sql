create or replace trigger BPARTNER_AU after update on BPARTNER
for each row
begin
  
  -- default customer accounts
  if :old.is_customer = 'N' and :new.is_customer = 'Y' then
  	pk_bpartner.create_def_cust_accts(:new.id, :new.client_id);
  end if;
  if :old.is_customer = 'Y' and :new.is_customer = 'N' then
  	pk_bpartner.del_def_cust_accts(:new.id, :new.client_id);
  end if;  
    
  -- default vendor accounts
  if :old.is_customer = 'N' and :new.is_vendor = 'Y' then
    pk_bpartner.create_def_vend_accts(:new.id, :new.client_id);
  end if;
  if :old.is_vendor = 'Y' and :new.is_vendor = 'N' then
  	pk_bpartner.del_def_vend_accts(:new.id, :new.client_id);
  end if;
  
  -- default employee accounts
  if :old.is_employee = 'N' and :new.is_employee = 'Y' then
    pk_bpartner.create_def_emp_accts(:new.id, :new.client_id);
  end if;  
  if :old.is_employee = 'Y' and :new.is_employee = 'N' then
  	pk_bpartner.del_def_emp_accts(:new.id, :new.client_id);
  end if;  
  
end;
/

