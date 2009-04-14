create or replace trigger MM_PRODUCT_BI before insert on MM_PRODUCT
for each row
begin
  if :new.id is null then
    select SEQ_PROD_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/
