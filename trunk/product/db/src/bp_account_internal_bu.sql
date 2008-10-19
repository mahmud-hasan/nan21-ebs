create or replace trigger BP_ACCOUNT_INTERNAL_BU before update on BP_ACCOUNT_INTERNAL
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/

