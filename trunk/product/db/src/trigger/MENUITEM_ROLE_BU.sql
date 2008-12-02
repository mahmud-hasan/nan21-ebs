create or replace trigger MENUITEM_ROLE_BU before update on MENUITEM_ROLE
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
