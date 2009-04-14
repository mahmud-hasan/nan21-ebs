create or replace trigger AC_ACCSCHEMA_PARAM_BU before update on AC_ACCSCHEMA_PARAM
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
