create or replace trigger MM_MVMNTIN_DOCTYPE_BI before insert on MM_MVMNTIN_DOCTYPE
for each row
begin
  if :new.id is null then
    select SEQ_MVMNTINDOCTYP_ID.nextval into :new.id from dual;
  end if;
end;
/
