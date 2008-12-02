create or replace trigger IINVOICE_BI before insert on IINVOICE
for each row
begin

  -- validate   
  if :new.is_posted = 'Y' then
  	raise_error('CantPostNewInv');
  end if;
  if :new.is_inserted = 'Y' then
  	raise_error('CantInsertedNewInv');
  end if;
  if :new.is_printed = 'Y' then
  	raise_error('CantPrintedNewInv');
  end if;    
  
  :new.is_posted := 'N';

  -- get default revenue account for default accounting schema  
  if :new.acct is null then    
    :new.acct := pk_iinv.get_doc_charge_acct(:new.client_id, pk_acc.get_def_accschema_id(:new.client_id),:new.issuer_id);                                     
  end if;
  
  -- amounts
  if :new.total_net_amount is null then
  	:new.total_net_amount := 0;
  end if;
  if :new.total_tax_amount is null then
  	:new.total_tax_amount := 0;
  end if;  
	:new.total_amount := nvl(:new.total_net_amount,0) + nvl(:new.total_tax_amount,0);
  
  
  --
  if :new.id is null then
    select SEQ_IINV_ID.nextval into :new.id from dual;
  end if;
  
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/
