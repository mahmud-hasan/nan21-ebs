create or replace trigger ORGANIZATION_BU before update on ORGANIZATION
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
