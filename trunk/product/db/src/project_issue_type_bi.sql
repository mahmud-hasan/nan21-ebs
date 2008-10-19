create or replace trigger PROJECT_ISSUE_TYPE_BI before insert on PROJECT_ISSUE_TYPE
for each row
begin
  if :new.id is null then
    select SEQ_PRJISSTYP_ID.nextval into :new.id from dual;
  end if;
end;
/

