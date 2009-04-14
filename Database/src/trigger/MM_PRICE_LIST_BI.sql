create or replace trigger MM_PRICE_LIST_BI before insert on MM_PRICE_LIST
for each row
begin
  if :new.id is null then
    select SEQ_PRICELST_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/
