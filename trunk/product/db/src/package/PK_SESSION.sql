create or replace package pk_session is

  usr varchar2(16);
  lang varchar2(16) := 'en';
  date_format varchar2(10) := 'DD.MM.YYYY';
  function getUser return varchar2;
  procedure setUser(p_user in varchar2);
  
  procedure setDateFormat(p_value in varchar2);
  function getDateFormat return varchar2 ;
  
  function getLang return varchar2;
  procedure setLang(p_lang in varchar2);
  function translateErrorMessage(p_message in varchar2, p_lang in varchar2) return varchar2;
  
  procedure do_user_login(p_username in varchar2, p_password in varchar2, p_ip_adress in varchar2);
end;
/
show errors package PK_SESSION; 



create or replace package body pk_session is

  function getUser return varchar2 is
  begin
    --insert into test(column_1) values (nvl(usr,user));
    return nvl(usr,user);
  end;
 
  procedure setUser(p_user in varchar2) is
  begin
    usr := p_user;
    --insert into test(column_1) values (usr);
  end;
  
  function getDateFormat return varchar2 is
  begin
    return date_format;
  end;
 
  procedure setDateFormat(p_value in varchar2) is
  begin
    date_format := p_value;
  end;
    
  function getLang return varchar2 is
  begin
    return lang;
  end;
 
  procedure setLang(p_lang in varchar2) is
  begin
    lang := p_lang;
  end;

  function translateErrorMessage(p_message in varchar2, p_lang in varchar2) return varchar2 is
    cursor c is
      select t.translation
        from server_message_trl t
       where t.srvmsg_code = p_message
         and t.lang_code = p_lang;
    v_out server_message_trl.translation%type;    
  begin
    open c;
    fetch c into v_out;
    if c%notfound then
    	v_out := p_message;
    end if;    
    close c;
    return v_out;  
  end;
  
  procedure do_user_login(p_username in varchar2, p_password in varchar2, p_ip_adress in varchar2) is
    cursor c is 
      select * 
        from sys_user 
       where login_code = p_username
         and login_password = p_password;
    r c%rowtype;    
    b boolean; 
  begin
    open c;
    fetch c into r;
    b := c%found;
    close c;
    if not b then
    	raise_error('AUTH_INVALID_CREDENTIALS');
    end if;

    insert into usr_login(username,login,ip_adress) values(p_username, sysdate, p_ip_adress); 

  end;
  
end;
/
show errors package body PK_SESSION; 

