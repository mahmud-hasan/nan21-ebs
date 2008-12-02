create or replace trigger UI_DC_ROLE_PERMISSION_BI before insert on UI_DC_ROLE_PERMISSION
for each row
begin
  if :new.id is null then
    select SEQ_UIDCROLEPRMS_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/
