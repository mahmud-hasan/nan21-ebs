create or replace trigger SERVER_MESSAGE_TRL_BU before update on SERVER_MESSAGE_TRL
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
