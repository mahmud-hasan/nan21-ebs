create or replace trigger SALES_ORDER_BU before update on SALES_ORDER
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
