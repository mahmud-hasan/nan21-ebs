create or replace trigger LANGUAGES_BI before insert on LANGUAGES
for each row
begin
  if :new.id is null then
    select SEQ_LANG_ID.nextval into :new.id from dual;
  end if;
end;
/
