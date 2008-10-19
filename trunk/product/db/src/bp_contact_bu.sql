create or replace trigger BP_CONTACT_BU before update on BP_CONTACT
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/

