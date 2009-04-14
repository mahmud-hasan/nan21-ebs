create or replace trigger TR_PARCEL_EVENT_TYPE_BU before update on TR_PARCEL_EVENT_TYPE
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
