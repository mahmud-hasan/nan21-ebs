create or replace trigger AC_ACC_JOURNAL_BU before update on AC_ACC_JOURNAL
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
