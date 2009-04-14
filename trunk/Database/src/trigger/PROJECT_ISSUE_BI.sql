create or replace trigger PROJECT_ISSUE_BI before insert on PROJECT_ISSUE
for each row
begin
  if :new.id is null then
    select SEQ_PRJISSUE_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/
