create or replace trigger ACC_SCHEMA_BI before insert on ACC_SCHEMA
for each row
begin
  if :new.id is null then
    select SEQ_ACCSCHEMA_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/

