create or replace trigger MENUITEM_BU before update on MENUITEM
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/

