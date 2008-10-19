create or replace trigger SALES_ORDER_LINE_BI before insert on SALES_ORDER_LINE
for each row
begin
  if :new.id is null then
    select SEQ_SORDLIN_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/

