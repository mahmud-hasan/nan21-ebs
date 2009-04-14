create or replace trigger AC_ACCDOC_BI before insert on AC_ACCDOC
for each row
begin
  --pk_acc.check_if_accperiod_valid(:new.accperiod_name, :new.client_id, :new.doc_date);
  if :new.id is null then
    select SEQ_ACCDOC_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/
