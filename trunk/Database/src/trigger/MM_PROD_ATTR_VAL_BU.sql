create or replace trigger MM_PROD_ATTR_VAL_BU before update on MM_PROD_ATTR_VAL
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
