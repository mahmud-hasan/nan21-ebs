create or replace trigger ORG_TYPE_BU before update on ORG_TYPE
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
