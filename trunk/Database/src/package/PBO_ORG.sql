create or replace package pbo_org is

  function get_name_by_id(p_id in number, p_raise in char default 'N') return varchar2;
  function get_orginv_code_by_id(p_id in number, p_raise in char default 'N') return varchar2; 
  function get_costcenter_name_by_id(p_id in number, p_raise in char default 'N') return varchar2;
  function get_stockloc_code_by_id(p_id in number, p_raise in char default 'N') return varchar2;
  function get_orgattr_name_by_id(p_id in number, p_raise in char default 'N') return varchar2;
  function get_orgattr_id_by_name(p_name in varchar2, p_raise in char default 'N') return number;
  
  
  function find_def_inventory_id(p_org_id in number) return number;
  function find_def_stockloc_id(p_org_id in number) return number;
  
  
  
end;
/
show errors package PBO_ORG; 



create or replace package body pbo_org is


  /* Get a organization name by its ID
   * Params: p_id: Organization ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_name_by_id(p_id in number, p_raise in char default 'N') return varchar2 is
    vrec organization%rowtype;
  begin     
    pdao_findby_pk.organization_t(p_id, vrec, p_raise);
    return vrec.name; 
  end;  
    
  

  /* Get a organization inventory name by its ID
   * Params: p_id: Organization inventory ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_orginv_code_by_id(p_id in number, p_raise in char default 'N') return varchar2 is
    vrec mm_org_inv%rowtype;
  begin     
    pdao_findby_pk.mm_org_inv_t(p_id, vrec, p_raise);
    return vrec.code;           
  end;  


  /* Get a stock location code by its ID
   * Params: p_id: Stock location ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_stockloc_code_by_id(p_id in number, p_raise in char default 'N') return varchar2 is 
    vrec mm_stock_loc%rowtype;
  begin     
    pdao_findby_pk.mm_stock_loc_t(p_id, vrec, p_raise);
    return vrec.code;           
  end; 
  
  
  /* Get a cost center name by its ID
   * Params: p_id: Cost center ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_costcenter_name_by_id(p_id in number, p_raise in char default 'N') return varchar2 is 
    vrec cost_center%rowtype;
  begin     
    pdao_findby_pk.cost_center_t(p_id, vrec, p_raise);
    return vrec.name;     
  end;  


  /* Get a organization attribute name by its ID
   * Params: p_id: Organization attribute ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_orgattr_name_by_id(p_id in number, p_raise in char default 'N') return varchar2 is
    vrec org_attr%rowtype;
  begin     
    pdao_findby_pk.org_attr_t(p_id, vrec, p_raise);
    return vrec.name;           
  end;  
  
  /* Get a organization attribute ID by name
   * Params: p_name: Organization attribute name
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_orgattr_id_by_name(p_name in varchar2, p_raise in char default 'N') return number is
    vrec org_attr%rowtype;
  begin     
    pdao_findby_uk.org_attr_t(p_name, vrec, p_raise);
    return vrec.id;           
  end; 
  
  
  /* Find default inventory for the specified organization
   * Params: p_org_id: Organization ID
   */
  function find_def_inventory_id(p_org_id in number) return number is 
    v_out mm_org_inv.id%type;
  begin
    select a.id into v_out
        from mm_org_inv a
       where a.org_id = p_org_id
         and a.is_default = 'Y'; 
    return v_out;    
    exception when NO_DATA_FOUND then
      return null;
  end;
  
  
  /* Find default stock locator for the specified organization
   * Params: p_org_id: Organization ID
   */
  function find_def_stockloc_id(p_org_id in number) return number is 
    v_out mm_stock_loc.id%type;
  begin
    select a.id into v_out
        from mm_stock_loc a
       where a.orginv_id = pbo_org.find_def_inventory_id(p_org_id)
         and a.is_default = 'Y'; 
    return v_out;    
    exception when NO_DATA_FOUND then
      return null;
  end;  
  
  
  
  /* Find default stock locator for the specified organization inventory
   * Params: p_orginv_id: Organization inventory ID
   */
  function find_orginv_def_stockloc_id(p_orginv_id in number) return number is 
    v_out mm_stock_loc.id%type;
  begin
    select a.id into v_out
        from mm_stock_loc a
       where a.orginv_id = p_orginv_id
         and a.is_default = 'Y'; 
    return v_out;    
    exception when NO_DATA_FOUND then
      return null;
  end;   
    
  
  
  
  
  
end;
/
show errors package body PBO_ORG; 

