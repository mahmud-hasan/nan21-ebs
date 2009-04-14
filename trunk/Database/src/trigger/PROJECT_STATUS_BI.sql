create or replace trigger PROJECT_STATUS_BI before insert on PROJECT_STATUS
for each row
begin
  if :new.id is null then
    select SEQ_PRJSTS_ID.nextval into :new.id from dual;
  end if;
end;
/
