create or replace trigger MENU_SHORTCUT_BU before update on MENU_SHORTCUT
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
