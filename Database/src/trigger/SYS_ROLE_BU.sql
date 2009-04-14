create or replace trigger SYS_ROLE_BU before update on SYS_ROLE
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
