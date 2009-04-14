create or replace trigger ORG_ATTR_VAL_BU before update on ORG_ATTR_VAL
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
