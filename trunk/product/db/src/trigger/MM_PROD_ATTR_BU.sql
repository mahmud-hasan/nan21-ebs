create or replace trigger MM_PROD_ATTR_BU before update on MM_PROD_ATTR
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
