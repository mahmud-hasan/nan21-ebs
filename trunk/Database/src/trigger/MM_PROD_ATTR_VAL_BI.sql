create or replace trigger MM_PROD_ATTR_VAL_BI before insert on MM_PROD_ATTR_VAL
for each row
begin
  if :new.id is null then
    select SEQ_PRDATTRVAL_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/
