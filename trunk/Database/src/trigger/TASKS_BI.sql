create or replace trigger TASKS_BI before insert on TASKS
for each row
begin
  if :new.id is null then
    select SEQ_TASK_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/
