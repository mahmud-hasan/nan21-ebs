create or replace trigger PRODUCT_CATEGORY_ACCOUNT_BI before insert on PRODUCT_CATEGORY_ACCOUNT
for each row
begin
  if :new.id is null then
    select SEQ_PRODCATEGACC_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/
