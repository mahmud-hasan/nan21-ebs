create or replace trigger MM_PRODUCT_PRICE_BI before insert on MM_PRODUCT_PRICE
for each row
begin
  if :new.id is null then
    select SEQ_PRODPRICE_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/
