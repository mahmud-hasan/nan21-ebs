create or replace trigger UI_DC_ROLE_PERMISSION_BU before update on UI_DC_ROLE_PERMISSION
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
