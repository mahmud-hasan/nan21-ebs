create or replace trigger UOM_BI before insert on UOM
for each row
begin
  if :new.id is null then
    select SEQ_UOM_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/
