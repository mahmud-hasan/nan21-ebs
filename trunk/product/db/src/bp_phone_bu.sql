create or replace trigger BP_PHONE_BU before update on BP_PHONE
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/

