create or replace trigger CURRENCY_BI before insert on CURRENCY
for each row
begin
  if :new.id is null then
    select SEQ_CURRENCY_ID.nextval into :new.id from dual;
  end if;
end;
/

