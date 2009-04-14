create or replace trigger TR_TRANSPORT_BU before update on TR_TRANSPORT
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
