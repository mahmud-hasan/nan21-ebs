create or replace trigger SYS_PARAM_VALUE_BU before update on SYS_PARAM_VALUE
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
