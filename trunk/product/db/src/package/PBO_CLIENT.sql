create or replace package pbo_client is

  function get_code_by_id(p_client_id in number, p_raise in char default 'N') return varchar2;
  function get_name_by_id(p_client_id in number, p_raise in char default 'N') return varchar2;
end;
/
show errors package PBO_CLIENT; 



create or replace package body pbo_client is

  /* Get client code by its ID
   * Params: p_client_id: Client ID
   *         p_raise: Raise error if client with given id is not found (Y=yes, N=no)
   */
  function get_code_by_id(p_client_id in number, p_raise in char default 'N') return varchar2 is 
    cursor c is 
      select a.code
        from client a
       where a.id = p_client_id;  
    r c%rowtype; 
    b boolean;  
  begin
    open c;
    fetch c into r;
    b := c%found;
    close c;
    if p_raise = 'Y' and not b then 
      raise_error('ClientByIdNotFound');
    end if; 
    return r.code;    
  end;    
  
  
  
  
  
  /* Get client name by its ID
   * Params: p_client_id: Client ID
   *         p_raise: Raise error if client with given id is not found (Y=yes, N=no)
   */
  function get_name_by_id(p_client_id in number, p_raise in char default 'N') return varchar2 is 
    cursor c is 
      select a.name
        from client a
       where a.id = p_client_id;  
    r c%rowtype; 
    b boolean;  
  begin
    open c;
    fetch c into r;
    b := c%found;
    close c;
    if p_raise = 'Y' and not b then 
      raise_error('ClientByIdNotFound');
    end if; 
    return r.name;    
  end;  
  
end;
/
show errors package body PBO_CLIENT; 

