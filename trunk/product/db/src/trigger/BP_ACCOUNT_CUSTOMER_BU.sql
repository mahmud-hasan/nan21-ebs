create or replace trigger BP_ACCOUNT_CUSTOMER_BU before update on BP_ACCOUNT_CUSTOMER
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
