create or replace trigger PROJECT_TYPE_BI before insert on PROJECT_TYPE
for each row
begin
  if :new.id is null then
    select SEQ_PRJTYPE_ID.nextval into :new.id from dual;
  end if;
end;
/
