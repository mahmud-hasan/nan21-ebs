create or replace trigger TR_TRANSPORT_TYPE_BU before update on TR_TRANSPORT_TYPE
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
