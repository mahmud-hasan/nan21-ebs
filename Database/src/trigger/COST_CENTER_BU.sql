create or replace trigger COST_CENTER_BU before update on COST_CENTER
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
