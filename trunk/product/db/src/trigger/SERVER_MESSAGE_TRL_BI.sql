create or replace trigger SERVER_MESSAGE_TRL_BI before insert on SERVER_MESSAGE_TRL
for each row
begin
  if :new.id is null then
    select SEQ_SRVMSGTRL_ID.nextval into :new.id from dual;
  end if;
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
