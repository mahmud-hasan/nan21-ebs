create or replace trigger CLIENT_BI before insert on CLIENT
for each row
begin
  if :new.id is null then
    select SEQ_CLIENT_ID.nextval into :new.id from dual;
  end if;
end;
/

