create or replace trigger TEST_BI before insert on TEST
for each row
begin
  if :new.id is null then
    select SEQ_TEST_ID.nextval into :new.id from dual;
  end if;
end;
/
