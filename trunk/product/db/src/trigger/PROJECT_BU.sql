create or replace trigger PROJECT_BU before update on PROJECT
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
