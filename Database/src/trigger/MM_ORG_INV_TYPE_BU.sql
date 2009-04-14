create or replace trigger MM_ORG_INV_TYPE_BU before update on MM_ORG_INV_TYPE
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
