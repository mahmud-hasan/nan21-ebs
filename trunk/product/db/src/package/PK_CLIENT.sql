create or replace package pk_client is

  function get_client_code_by_id(p_id in number) return varchar2; 
  function get_client_name_by_id(p_id in number) return varchar2;

end;
/
show errors package PK_CLIENT; 



create or replace package body pk_client is

  -- return client code by id     
  function get_client_code_by_id(p_id in number) return varchar2 is
    v_out client.name%type;
  begin
    select code into v_out from client where id = p_id;
    return v_out;
  end; 
  
  -- return client name by id
  function get_client_name_by_id(p_id in number) return varchar2 is
    v_out client.name%type;
  begin
    select name into v_out from client where id = p_id;
    return v_out;
  end; 
  
end;
/
show errors package body PK_CLIENT; 

