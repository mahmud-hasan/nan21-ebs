create or replace trigger ASSET_BI before insert on ASSET
for each row
begin
  if :new.id is null then
    select SEQ_ASSET_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/