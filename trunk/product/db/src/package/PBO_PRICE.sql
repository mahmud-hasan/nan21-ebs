create or replace package pbo_price is

  function get_list_full_name_by_id(p_list_id in number, p_raise in char default 'N') return varchar2;
  function get_pricelvl_name_by_id(p_lvl_id in number, p_raise in char default 'N') return varchar2;

end;
/
show errors package PBO_PRICE; 



create or replace package body pbo_price is




  
  /* Get a price level's name by its ID.
   * Params: p_lvl_id: Price level ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_pricelvl_name_by_id(p_lvl_id in number, p_raise in char default 'N') return varchar2 is 
    v_out mm_price_level.name%type;
  begin
    if p_lvl_id is null then 
      return null; 
    end if;  
    select a.name into v_out
        from mm_price_level a
       where a.id = p_lvl_id; 
    return v_out;    
    exception when NO_DATA_FOUND then
      if p_raise = 'Y' then 
        raise_error('PriceLevelByIdNotFound');
      else 
        return null;    
      end if; 
  end;  
  
  
  
    
  /* Get a price list's full name (list title / currency / valid_from - valid_to ) by its ID.
   * Params: p_list_id: Price list ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_list_full_name_by_id(p_list_id in number, p_raise in char default 'N') return varchar2 is 
    v_out varchar2(100);
  begin
    if p_list_id is null then 
      return null; 
    end if;  
    select a.name|| ' / ' || a.currency || ' / ' || to_char(a.valid_from, pk_session.getDateFormat) into v_out
        from mm_price_list a
       where a.id = p_list_id; 
    return v_out;    
    exception when NO_DATA_FOUND then
      if p_raise = 'Y' then 
        raise_error('PriceListByIdNotFound');
      else 
        return null;    
      end if; 
  end;  
  
  
end;
/
show errors package body PBO_PRICE; 

