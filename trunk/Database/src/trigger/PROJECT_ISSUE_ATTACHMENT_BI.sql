create or replace trigger PROJECT_ISSUE_ATTACHMENT_BI before insert on PROJECT_ISSUE_ATTACHMENT
for each row
begin
  if :new.id is null then
    select SEQ_PRJISSATT_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.createdby := pk_session.getUser;
end;
/
