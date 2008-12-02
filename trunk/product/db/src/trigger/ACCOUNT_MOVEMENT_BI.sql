create or replace trigger ACCOUNT_MOVEMENT_BI before insert on ACCOUNT_MOVEMENT
for each row
begin
  if :new.id is null then
    select SEQ_ACCTMVM_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.createdby := pk_session.getUser;
end;
/
