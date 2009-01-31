create or replace trigger TR_VEHICLE_BU before update on TR_VEHICLE
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
