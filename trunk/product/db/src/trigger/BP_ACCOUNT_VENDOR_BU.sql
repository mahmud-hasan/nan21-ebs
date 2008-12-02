create or replace trigger BP_ACCOUNT_VENDOR_BU before update on BP_ACCOUNT_VENDOR
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
