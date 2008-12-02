create or replace trigger PRODUCT_CATEGORY_BI before insert on PRODUCT_CATEGORY
for each row
begin
  if :new.id is null then
    select SEQ_PRODCATEG_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/
