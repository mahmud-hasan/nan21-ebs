create or replace trigger PURCHASE_ORDER_BU before update on PURCHASE_ORDER
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/

