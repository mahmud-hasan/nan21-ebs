create or replace trigger MENU_SHORTCUT_BI before insert on MENU_SHORTCUT
for each row
begin
  if :new.id is null then
    select SEQ_MENUSHRCT_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/
