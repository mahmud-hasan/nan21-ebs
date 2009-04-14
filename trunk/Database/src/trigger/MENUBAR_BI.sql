create or replace trigger MENUBAR_BI before insert on MENUBAR
for each row
begin
  if :new.id is null then
    select SEQ_MENUBAR_ID.nextval into :new.id from dual;
  end if;
end;
/
