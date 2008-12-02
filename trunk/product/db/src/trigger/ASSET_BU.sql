create or replace trigger ASSET_BU before update on ASSET
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
