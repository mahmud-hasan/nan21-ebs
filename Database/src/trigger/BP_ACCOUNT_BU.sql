create or replace trigger BP_ACCOUNT_BU before update on BP_ACCOUNT
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
