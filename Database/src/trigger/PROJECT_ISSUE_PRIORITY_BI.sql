create or replace trigger PROJECT_ISSUE_PRIORITY_BI before insert on PROJECT_ISSUE_PRIORITY
for each row
begin
  if :new.id is null then
    select SEQ_PRJISSPRI_ID.nextval into :new.id from dual;
  end if;
end;
/
