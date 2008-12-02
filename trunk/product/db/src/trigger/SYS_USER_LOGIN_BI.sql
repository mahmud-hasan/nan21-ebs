create or replace trigger SYS_USER_LOGIN_BI before insert on SYS_USER_LOGIN
for each row
begin
  if :new.id is null then
    select SEQ_USRLOG_ID.nextval into :new.id from dual;
  end if;
end;
/
