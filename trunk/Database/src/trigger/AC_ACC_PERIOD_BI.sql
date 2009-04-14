create or replace trigger AC_ACC_PERIOD_BI before insert on AC_ACC_PERIOD
for each row
begin
  if :new.id is null then
    select SEQ_ACCPERIOD_ID.nextval into :new.id from dual;
  end if;
  :new.name := :new.accyear_code || '_' || :new.code;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/
