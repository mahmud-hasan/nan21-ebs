create or replace package pbo_price is

  function get_list_full_name_by_id(p_id in number, p_raise in char default 'N') return varchar2;
  function get_pricelvl_name_by_id(p_id in number, p_raise in char default 'N') return varchar2;

end;
/
show errors package PBO_PRICE; 



create or replace package body pbo_price is

  /* Get price level name by its ID.
   * Params: p_id: Price level ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_pricelvl_name_by_id(p_id in number, p_raise in char default 'N') return varchar2 is 
    vrec mm_price_level%rowtype;
  begin     
    pdao_findby_pk.mm_price_level_t(p_id, vrec, p_raise);
    return vrec.name;     
  end;  
  
  
  
    
  /* Get a price list's full name (list title / currency / valid_from - valid_to ) by its ID.
   * Params: p_id: Price list ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_list_full_name_by_id(p_id in number, p_raise in char default 'N') return varchar2 is 
    vrec mm_price_list%rowtype;
  begin     
    pdao_findby_pk.mm_price_list_t(p_id, vrec, p_raise);
    return vrec.name|| ' / ' || vrec.currency || ' / ' || to_char(vrec.valid_from, pk_session.getDateFormat);      
  end;  
  
  
end;
/
show errors package body PBO_PRICE; 

