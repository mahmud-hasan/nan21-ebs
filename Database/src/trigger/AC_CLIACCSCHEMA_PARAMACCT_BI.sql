create or replace trigger AC_CLIACCSCHEMA_PARAMACCT_BI before insert on AC_CLIACCSCHEMA_PARAMACCT
for each row
begin
  if :new.id is null then
    select SEQ_CLIACCSCHPACCT_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/
