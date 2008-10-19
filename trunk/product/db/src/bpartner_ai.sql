create or replace trigger BPARTNER_AI after insert on BPARTNER
for each row
begin

  -- create default customer accounts
  if :new.is_customer = 'Y' then
  	pk_bpartner.create_def_cust_accts(:new.id, :new.client_id);
  end if;
  
  -- create default vendor accounts
  if :new.is_vendor = 'Y' then
    pk_bpartner.create_def_vend_accts(:new.id, :new.client_id);
  end if;
  
  -- create default employee accounts
  if :new.is_employee = 'Y' then
    pk_bpartner.create_def_emp_accts(:new.id, :new.client_id);
  end if;
  
end;
/

