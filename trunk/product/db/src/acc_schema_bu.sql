create or replace trigger ACC_SCHEMA_BU before update on ACC_SCHEMA
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/

