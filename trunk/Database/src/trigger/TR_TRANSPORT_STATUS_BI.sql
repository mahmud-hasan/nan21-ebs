create or replace trigger TR_TRANSPORT_STATUS_BI before insert on TR_TRANSPORT_STATUS
for each row
begin
  if :new.id is null then
    select SEQ_TRANSPSTAT_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/
