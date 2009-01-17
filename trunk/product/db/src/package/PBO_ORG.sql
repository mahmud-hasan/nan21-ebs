create or replace package pbo_org is

  function get_name_by_id(p_org_id in number, p_raise in char default 'N') return varchar2;
  function get_orginv_code_by_id(p_orginv_id in number, p_raise in char default 'N') return varchar2; 
  function get_costcenter_name_by_id(p_costcenter_id in number, p_raise in char default 'N') return varchar2;
  function get_stockloc_code_by_id(p_stockloc_id in number, p_raise in char default 'N') return varchar2;

  function find_def_inventory_id(p_org_id in number) return number;
  function find_def_stockloc_id(p_org_id in number) return number;
  
  
  
end;
/
show errors package PBO_ORG; 



create or replace package body pbo_org is


  /* Get a organization name by its ID
   * Params: p_org_id: Organization ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_name_by_id(p_org_id in number, p_raise in char default 'N') return varchar2 is 
    v_out organization.name%type;
  begin
    if p_org_id is null then 
      return null; 
    end if;
    select t.name into v_out
        from organization t
       where t.id = p_org_id; 
    return v_out;    
    exception when NO_DATA_FOUND then
      if p_raise = 'Y' then 
        raise_error('OrgByIdNotFound');
      else
        return null;  
      end if; 
  end;  
    
  

  /* Get a organization inventory name by its ID
   * Params: p_orginv_id: Organization inventory ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_orginv_code_by_id(p_orginv_id in number, p_raise in char default 'N') return varchar2 is 
    v_out mm_org_inv.code%type;
  begin
    if p_orginv_id is null then 
      return null; 
    end if;
    select t.code into v_out
        from mm_org_inv t
       where t.id = p_orginv_id; 
    return v_out;    
    exception when NO_DATA_FOUND then
      if p_raise = 'Y' then 
        raise_error('OrgInvByIdNotFound');
      else
        return null;  
      end if; 
  end;  


  /* Get a stock location code by its ID
   * Params: p_stockloc_id: Stock location ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_stockloc_code_by_id(p_stockloc_id in number, p_raise in char default 'N') return varchar2 is 
    v_out mm_stock_loc.code%type;
  begin
    if p_stockloc_id is null then 
      return null; 
    end if;
    select t.code into v_out
        from mm_stock_loc t
       where t.id = p_stockloc_id; 
    return v_out;    
    exception when NO_DATA_FOUND then
      if p_raise = 'Y' then 
        raise_error('StockLocByIdNotFound');
      else
        return null;  
      end if; 
  end; 
  
  
  /* Get a cost center name by its ID
   * Params: p_costcenter_id: Cost center ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_costcenter_name_by_id(p_costcenter_id in number, p_raise in char default 'N') return varchar2 is 
    v_out cost_center.name%type;
  begin
    if p_costcenter_id is null then 
      return null; 
    end if;
    select t.name into v_out
        from cost_center t
       where t.id = p_costcenter_id; 
    return v_out;    
    exception when NO_DATA_FOUND then
      if p_raise = 'Y' then 
        raise_error('CostCenterByIdNotFound');
      else 
        return null;  
      end if; 
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

