create or replace trigger TR_PARCEL_EVENT_BU before update on TR_PARCEL_EVENT
for each row
begin
  if :new.src_org_id is null and :new.dest_org_id is null  then
   raise_error('ParcelEvntSpecifyOneOrg');
  end if;
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
