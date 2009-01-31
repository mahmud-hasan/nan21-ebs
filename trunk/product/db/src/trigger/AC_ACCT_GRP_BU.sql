create or replace trigger AC_ACCT_GRP_BU before update on AC_ACCT_GRP
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
