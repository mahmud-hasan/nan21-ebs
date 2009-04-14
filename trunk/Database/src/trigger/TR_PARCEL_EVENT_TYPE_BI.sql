create or replace trigger TR_PARCEL_EVENT_TYPE_BI before insert on TR_PARCEL_EVENT_TYPE
for each row
begin
  if :new.id is null then
    select SEQ_PARCELEVNTTYP_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/
