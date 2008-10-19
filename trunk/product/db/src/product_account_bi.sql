create or replace trigger PRODUCT_ACCOUNT_BI before insert on PRODUCT_ACCOUNT
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

