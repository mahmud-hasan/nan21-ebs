create or replace package pbo_product is

  -- functions
  function get_name_by_id(p_id in number, p_raise in char default 'N') return varchar2;
  function get_code_by_id(p_id in number, p_raise in char default 'N') return varchar2;
  
  function get_attr_name_by_id(p_id in number, p_raise in char default 'N') return varchar2;
  function get_attrgrp_name_by_id(p_id in number, p_raise in char default 'N') return varchar2;
  function get_categ_name_by_id(p_id in number, p_raise in char default 'N') return varchar2 ;
  
  -- procedures  
  procedure add_attributes(p_product_id in number, p_attr_grp_id in number, p_delete_current in boolean default true);
  procedure add_default_accounts(p_product_id in number, p_client_id in number);
  
end;
/
show errors package PBO_PRODUCT; 



create or replace package body pbo_product is
    
  /* Get a product's code by its ID
   * Params: p_id: Product ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_code_by_id(p_id in number, p_raise in char default 'N') return varchar2 is 
    vrec mm_product%rowtype;
  begin     
    pdao_findby_pk.mm_product_t(p_id, vrec, p_raise);
    return vrec.code;  
  end;    
  
    
  /* Get a product's name by its ID
   * Params: p_id: Product ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_name_by_id(p_id in number, p_raise in char default 'N') return varchar2 is 
    vrec mm_product%rowtype;
  begin     
    pdao_findby_pk.mm_product_t(p_id, vrec, p_raise);
    return vrec.name;
  end;  
     
  
  /* Get product attribute group name by its ID
   * Params: p_id: Attribute group ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_attrgrp_name_by_id(p_id in number, p_raise in char default 'N') return varchar2 is 
    vrec mm_prod_attr_grp%rowtype;
  begin     
    pdao_findby_pk.mm_prod_attr_grp_t(p_id, vrec, p_raise);
    return vrec.name;       
  end;
      
  
  /* Get a product attribute's name by its ID
   * Params: p_id: Attribute ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_attr_name_by_id(p_id in number, p_raise in char default 'N') return varchar2 is 
    vrec mm_prod_attr%rowtype;
  begin     
    pdao_findby_pk.mm_prod_attr_t(p_id, vrec, p_raise);
    return vrec.name;   
  end;
   
  
  /* Get product category name by its ID
   * Params: p_id: Product category ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_categ_name_by_id(p_id in number, p_raise in char default 'N') return varchar2 is 
    vrec mm_product_category%rowtype;
  begin     
    pdao_findby_pk.mm_product_category_t(p_id, vrec, p_raise);
    return vrec.name;  
  end;
  
    
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
  
  
    
  /* Add default accounts to product for each client
   * Params: p_product_id: Product ID
   *         p_client_id: Client ID
   */
  procedure add_default_accounts(p_product_id in number, p_client_id in number) is
   cursor c is 
     select t.* 
       from ac_client_accschema t
      where t.client_id = p_client_id; 
   r c%rowtype;    
   v_pracct mm_product_account%rowtype;

  begin     
    for r in c loop

      select seq_prodacct_id.nextval into v_pracct.id from dual;
      
      v_pracct.client_id := p_client_id;
      v_pracct.product_id := p_product_id;
      v_pracct.accschema_id := r.accschema_id;
      
      v_pracct.revenue_acct_id := null;
      v_pracct.expense_acct_id := null;
      v_pracct.asset_acct_id := null;
      
      pdao_insert.mm_product_account_t(v_pracct);
      
    end loop;
  end;    
  
  
end;
/
show errors package body PBO_PRODUCT; 

