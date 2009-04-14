create or replace trigger MM_PRODUCT_ACCOUNT_BI before insert on MM_PRODUCT_ACCOUNT
for each row
begin
  if :new.id is null then
    select SEQ_PRODACCT_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/