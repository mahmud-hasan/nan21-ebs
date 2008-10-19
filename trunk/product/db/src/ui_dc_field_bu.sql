create or replace trigger UI_DC_FIELD_BU before update on UI_DC_FIELD
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/

