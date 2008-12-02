create or replace trigger PROJECT_ISSUE_STATUS_BI before insert on PROJECT_ISSUE_STATUS
for each row
begin
  if :new.id is null then
    select SEQ_PRJISSSTS_ID.nextval into :new.id from dual;
  end if;
end;
/
