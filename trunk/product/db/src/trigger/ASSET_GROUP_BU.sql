create or replace trigger ASSET_GROUP_BU before update on ASSET_GROUP
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
