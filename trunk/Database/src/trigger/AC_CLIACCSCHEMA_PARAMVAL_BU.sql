create or replace trigger AC_CLIACCSCHEMA_PARAMVAL_BU before update on AC_CLIACCSCHEMA_PARAMVAL
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
