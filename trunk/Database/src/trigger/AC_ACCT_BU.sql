create or replace trigger AC_ACCT_BU before update on AC_ACCT
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
