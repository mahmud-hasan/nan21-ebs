create or replace trigger MENUITEM_TRL_BU before update on MENUITEM_TRL
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
