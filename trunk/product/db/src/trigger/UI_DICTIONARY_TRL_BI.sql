create or replace trigger UI_DICTIONARY_TRL_BI before insert on UI_DICTIONARY_TRL
for each row
begin
  if :new.id is null then
    select SEQ_UIDICTTRL_ID.nextval into :new.id from dual;
  end if;
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
