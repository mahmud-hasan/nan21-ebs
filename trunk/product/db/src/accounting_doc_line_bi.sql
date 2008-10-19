create or replace trigger ACCOUNTING_DOC_LINE_BI before insert on ACCOUNTING_DOC_LINE
for each row
begin
  if pk_acc.is_posted(:new.accdoc_id) then
  	raise_error('CantUpdPostedDoc');
  end if;
  
  if :new.id is null then
    select SEQ_ACCDOCLIN_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/

