create or replace trigger SERVER_MESSAGE_BI before insert on SERVER_MESSAGE
for each row
begin
  if :new.id is null then
    select SEQ_SRVMSG_ID.nextval into :new.id from dual;
  end if;
end;
/

