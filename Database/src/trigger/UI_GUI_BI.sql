create or replace trigger UI_GUI_BI before insert on UI_GUI
for each row
begin
  if :new.id is null then
    select SEQ_UIGUI_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/
