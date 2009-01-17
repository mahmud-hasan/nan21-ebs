create or replace trigger MM_PRODUCT_ACCOUNT_BU before update on MM_PRODUCT_ACCOUNT
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
