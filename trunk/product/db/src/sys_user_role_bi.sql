create or replace trigger SYS_USER_ROLE_BI before insert on SYS_USER_ROLE
for each row
begin
  if :new.id is null then
    select SEQ_USRROL_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.createdby := pk_session.getUser;
end;
/

