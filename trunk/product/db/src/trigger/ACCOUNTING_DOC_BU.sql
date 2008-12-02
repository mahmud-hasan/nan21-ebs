create or replace trigger ACCOUNTING_DOC_BU before update on ACCOUNTING_DOC
for each row
begin
  
  
  if :old.is_posted = 'Y' and :new.is_posted = 'Y' then
  	raise_error('CantUpdPostedDoc');
  end if;

  -- ?
  pk_acc.check_if_accperiod_valid(:new.accperiod_name, :new.client_id, :new.doc_date);
  
  if :old.is_posted = 'N' and :new.is_posted = 'Y' then
  	pk_acc.post_accdoc(:new.id, :new.doc_date);
    :new.postedon := sysdate;
    :new.postedby := pk_session.getUser;
  end if;
  
  
    
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
