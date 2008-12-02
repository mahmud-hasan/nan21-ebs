create or replace trigger PURCHASE_ORDER_LINE_BI before insert on PURCHASE_ORDER_LINE
for each row
begin
  if :new.id is null then
    select SEQ_PORDLIN_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/
