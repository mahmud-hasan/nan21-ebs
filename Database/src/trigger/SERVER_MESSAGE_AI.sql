create or replace trigger SERVER_MESSAGE_AI after insert on SERVER_MESSAGE
for each row  
begin
  insert into server_message_trl (srvmsg_code, lang_code, translation)
   select :new.code, l.code, :new.code 
     from languages l
    where l.active = 'Y';  
end;
/
