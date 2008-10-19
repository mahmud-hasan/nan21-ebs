create or replace trigger PROJECT_ISSUE_SEVERITY_BI before insert on PROJECT_ISSUE_SEVERITY
for each row
begin
  if :new.id is null then
    select SEQ_PRJISSSEV_ID.nextval into :new.id from dual;
  end if;
end;
/

