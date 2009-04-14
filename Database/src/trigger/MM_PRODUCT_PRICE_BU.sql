create or replace trigger MM_PRODUCT_PRICE_BU before update on MM_PRODUCT_PRICE
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
