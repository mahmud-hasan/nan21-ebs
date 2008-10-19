create or replace trigger SYS_ROLE_BI before insert on SYS_ROLE
for each row
begin
  if :new.id is null then
    select SEQ_ROLE_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/

