create or replace trigger TIMESHEET_BU before update on TIMESHEET
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
