create or replace trigger MM_STOCK_LOC_TYPE_BU before update on MM_STOCK_LOC_TYPE
for each row
begin
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
