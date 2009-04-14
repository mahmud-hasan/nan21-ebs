create or replace package pbo_client is

  function get_code_by_id(p_id in number, p_raise in char default 'N') return varchar2;
  function get_name_by_id(p_id in number, p_raise in char default 'N') return varchar2;
end;
/
show errors package PBO_CLIENT; 



create or replace package body pbo_client is

  /* Get client code by its ID
   * Params: p_id: Client ID
   *         p_raise: Raise error if client with given id is not found (Y=yes, N=no)
   */
  function get_code_by_id(p_id in number, p_raise in char default 'N') return varchar2 is 
    vrec client%rowtype;
  begin     
    pdao_findby_pk.client_t(p_id, vrec, p_raise);
    return vrec.code;        
  end;    
  
  
  /* Get client name by its ID
   * Params: p_id: Client ID
   *         p_raise: Raise error if client with given id is not found (Y=yes, N=no)
   */
  function get_name_by_id(p_id in number, p_raise in char default 'N') return varchar2 is 
    vrec client%rowtype;
  begin     
    pdao_findby_pk.client_t(p_id, vrec, p_raise);
    return vrec.name; 
  end;  
  

end;
/
show errors package body PBO_CLIENT; 

