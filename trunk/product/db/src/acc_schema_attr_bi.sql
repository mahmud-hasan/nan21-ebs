create or replace trigger ACC_SCHEMA_ATTR_BI before insert on ACC_SCHEMA_ATTR
for each row
begin
  if :new.id is null then
    select SEQ_ACCSCHEMAATTR_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/

