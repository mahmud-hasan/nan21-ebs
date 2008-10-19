create or replace trigger ACCOUNTING_DOC_BI before insert on ACCOUNTING_DOC
for each row
begin
  
  pk_acc.check_if_accperiod_valid(:new.accperiod_name, :new.client_id, :new.doc_date);
  
  if :new.id is null then
    select SEQ_ACCDOC_ID.nextval into :new.id from dual;
  end if;
  if :new.createdon is null then
    :new.createdon := sysdate;
  end if;
  if :new.modifiedon is null then
    :new.modifiedon := sysdate;
  end if;
  if :new.createdby is null then
    :new.createdby := pk_session.getUser;
  end if;
  if :new.modifiedby is null then
    :new.modifiedby := pk_session.getUser;
  end if;
end;
/

