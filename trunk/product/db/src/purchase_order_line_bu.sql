create or replace trigger PURCHASE_ORDER_LINE_BU before update on PURCHASE_ORDER_LINE
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/

