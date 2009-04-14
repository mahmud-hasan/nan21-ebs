create or replace trigger TR_PARCEL_REJECT_REASON_BU before update on TR_PARCEL_REJECT_REASON
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
