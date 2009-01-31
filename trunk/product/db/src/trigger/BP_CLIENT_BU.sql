create or replace trigger BP_CLIENT_BU before update on BP_CLIENT
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
