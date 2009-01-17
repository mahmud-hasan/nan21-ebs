create or replace trigger MM_PROD_STOCK_CMP_BI before insert on MM_PROD_STOCK_CMP
for each row
begin
  if :new.id is null then
    select SEQ_PRODSTOCKCMP_ID.nextval into :new.id from dual;
  end if;
end;
/
