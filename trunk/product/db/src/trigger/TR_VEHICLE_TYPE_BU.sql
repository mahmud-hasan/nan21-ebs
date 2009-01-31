create or replace trigger TR_VEHICLE_TYPE_BU before update on TR_VEHICLE_TYPE
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
