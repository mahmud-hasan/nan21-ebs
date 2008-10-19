create or replace trigger PERSON_BI before insert on PERSON
for each row
begin
  if :new.id is null then
    select SEQ_PERS_ID.nextval into :new.id from dual;
  end if;
end;
/

