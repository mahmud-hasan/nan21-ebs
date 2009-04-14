create or replace trigger AC_CLIACCSCHEMA_PARAMACCT_BU before update on AC_CLIACCSCHEMA_PARAMACCT
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
