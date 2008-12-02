create or replace trigger PROJECT_ISSUE_NOTE_BU before update on PROJECT_ISSUE_NOTE
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
