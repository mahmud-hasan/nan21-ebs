create or replace trigger MM_PRICE_LIST_BU before update on MM_PRICE_LIST
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
