create or replace trigger MM_MOVEMENT_IN_LINE_BI before insert on MM_MOVEMENT_IN_LINE
for each row
begin
  if :new.id is null then
    select SEQ_MVMNTINLIN_ID.nextval into :new.id from dual;
  end if;
end;
/
