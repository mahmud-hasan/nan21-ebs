create or replace package pbo_product is

  -- functions
  function get_name_by_id(p_prod_id in number, p_raise in char default 'N') return varchar2;
  function get_code_by_id(p_prod_id in number, p_raise in char default 'N') return varchar2;
  
  function get_attr_name_by_id(p_attr_id in number, p_raise in char default 'N') return varchar2;
  function get_attrgrp_name_by_id(p_attrgrp_id in number, p_raise in char default 'N') return varchar2;
  function get_categ_name_by_id(p_categ_id in number, p_raise in char default 'N') return varchar2 ;
  
  -- procedures  
  procedure add_attributes(p_product_id in number, p_attr_grp_id in number, p_delete_current in boolean default true);
  
  
end;
/
show errors package PBO_PRODUCT; 



create or replace package body pbo_product is

  /*  Add attributes to product.
   *   Params: p_product_id: Product ID
   *           p_attr_grp_id: Attribute group ID. This must be the attribute group set for the product.
   *           p_delete_current: Delete the existing attributes.
   */
  procedure add_attributes(p_product_id in number, p_attr_grp_id in number, p_delete_current in boolean default true) is

  begin

    if p_delete_current then
      delete from mm_prod_attr_val where product_id = p_product_id;
    end if;

    insert into mm_prod_attr_val(id, product_id, prdattr_id)
      select seq_prdattrval_id.nextval, p_product_id, a.id
        from mm_prod_attr a
       where a.prodattrgrp_id = p_attr_grp_id;
  end;
  
  
    
  /* Get a product's code by its ID
   * Params: p_prod_id: Product ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_code_by_id(p_prod_id in number, p_raise in char default 'N') return varchar2 is 
    v_out mm_product.code%type;
  begin
    if p_prod_id is null then 
      return null; 
    end if;
    select a.code into v_out
        from mm_product a
       where a.id = p_prod_id; 
    return v_out;    
    exception when NO_DATA_FOUND then
      if p_raise = 'Y' then 
        raise_error('ProdByIdNotFound');
      else 
        return null;   
      end if;   
  end;    
  
    
  
  /* Get a product's name by its ID
   * Params: p_prod_id: Product ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_name_by_id(p_prod_id in number, p_raise in char default 'N') return varchar2 is 
    v_out mm_product.name%type;
  begin
    if p_prod_id is null then 
      return null; 
    end if;  
    select a.name into v_out
        from mm_product a
       where a.id = p_prod_id; 
    return v_out;    
    exception when NO_DATA_FOUND then
      if p_raise = 'Y' then 
        raise_error('ProdByIdNotFound');
      else 
        return null;    
      end if; 
  end;  
  
   
  
  /* Get a product attribute group's name by its ID
   * Params: p_attrgrp_id: Attribute group ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_attrgrp_name_by_id(p_attrgrp_id in number, p_raise in char default 'N') return varchar2 is 
    v_out mm_prod_attr_grp.name%type;  
  begin
    if p_attrgrp_id is null then 
      return null; 
    end if;  
    select a.name into v_out
        from mm_prod_attr_grp a
       where a.id = p_attrgrp_id;
    return v_out;   
    exception when NO_DATA_FOUND then
      if p_raise = 'Y' then 
        raise_error('ProdAttrGrpByIdNotFound');
      else 
        return null;        
      end if;         
  end;
  
    
  
  /* Get a product attribute's name by its ID
   * Params: p_attr_id: Attribute ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_attr_name_by_id(p_attr_id in number, p_raise in char default 'N') return varchar2 is 
    v_out mm_prod_attr.name%type; 
  begin
    if p_attr_id is null then 
      return null; 
    end if;  
    select a.name into v_out
        from mm_prod_attr a
       where a.id = p_attr_id;
    return v_out;   
    exception when NO_DATA_FOUND then
      if p_raise = 'Y' then 
        raise_error('ProdAttrByIdNotFound');
      else 
        return null; 
      end if;    
  end;
  
 
  
  /* Get a product category's name by its ID
   * Params: p_categ_id: Product category ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_categ_name_by_id(p_categ_id in number, p_raise in char default 'N') return varchar2 is 
    v_out mm_product_category.name%type;
  begin
    if p_categ_id is null then 
      return null; 
    end if;    
    select a.name into v_out
        from mm_product_category a
       where a.id = p_categ_id;  
    return v_out;   
    exception when NO_DATA_FOUND then
      if p_raise = 'Y' then 
        raise_error('ProdCategByIdNotFound');
      else 
        return null; 
      end if;    
  end;
  
  
  
end;
/
show errors package body PBO_PRODUCT; 

