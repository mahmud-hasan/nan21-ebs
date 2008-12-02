create or replace trigger PRODUCT_ACCOUNT_BU before update on PRODUCT_ACCOUNT
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
