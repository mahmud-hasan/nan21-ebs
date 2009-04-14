create or replace trigger MM_ORG_INV_BU before update on MM_ORG_INV
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;

/
