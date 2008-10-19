create or replace trigger COUNTRY_BI before insert on COUNTRY
for each row
begin
  if :new.id is null then
    select SEQ_COUNTRY_ID.nextval into :new.id from dual;
  end if;
end;
/

