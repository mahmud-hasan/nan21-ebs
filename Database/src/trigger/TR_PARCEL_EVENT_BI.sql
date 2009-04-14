create or replace trigger TR_PARCEL_EVENT_BI before insert on TR_PARCEL_EVENT
for each row
begin
  if :new.src_org_id is null and :new.dest_org_id is null  then
   raise_error('ParcelEvntSpecifyOneOrg');
  end if;
      
  if :new.id is null then
    select SEQ_PARCELEVNT_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/
