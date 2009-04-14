create or replace trigger SYS_USER_BU before update on SYS_USER
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
