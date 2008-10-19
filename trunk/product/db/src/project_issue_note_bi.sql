create or replace trigger PROJECT_ISSUE_NOTE_BI before insert on PROJECT_ISSUE_NOTE
for each row
begin
  if :new.id is null then
    select SEQ_PRJISSNOTE_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/

