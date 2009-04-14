create or replace trigger IINVOICE_BI before insert on IINVOICE
for each row
begin

  -- validate   

  if :new.is_inserted = 'Y' then
  	raise_error('CantInsertedNewInv');
  end if;
  if :new.is_printed = 'Y' then
  	raise_error('CantPrintedNewInv');
  end if;    
  
   
  -- amounts
  if :new.total_net_amount is null then
  	:new.total_net_amount := 0;
  end if;
  if :new.total_tax_amount is null then
  	:new.total_tax_amount := 0;
  end if;  
	:new.total_amount := nvl(:new.total_net_amount,0) + nvl(:new.total_tax_amount,0);
  

  if :new.id is null then
    select SEQ_IINV_ID.nextval into :new.id from dual;
  end if;
  
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/
