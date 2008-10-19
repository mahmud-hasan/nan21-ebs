create or replace trigger UI_DICTIONARY_AI after insert on UI_DICTIONARY
for each row
begin
   insert into ui_dictionary_trl (uidict_id, language_code, translation)
   select :new.id, l.code, :new.DEFAULT_VALUE
     from languages l;
end;
/

