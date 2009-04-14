create or replace package pbo_stock is


  -- functions
   function get_stock_id_by_uk( p_client_id in number
                              ,p_org_id in number
                              ,p_orginv_id in number
                              ,p_stockloc_id in number
                              ,p_product_id in number
                              ,p_raise in char default 'N') return number;
                              
  -- procedures                                
   procedure move_in( p_client_id in number
                            ,p_org_id in number
                            ,p_orginv_id in number
                            ,p_stockloc_id in number
                            ,p_product_id in number
                            ,p_qty in number
                            ,p_uom in varchar2
                            ,p_price in number
                            ,p_currency in varchar2
                            ,p_mvmnt_type in varchar2
                            ,p_srcdoc_id in number );
                            
  procedure process_doc_in(p_docin_id in number);                            
                            
end;
/
show errors package PBO_STOCK; 



create or replace package body pbo_stock is

 
  
  
  procedure update_stock(v_movement in mm_prod_stock_mvmnt%rowtype) is
    v_stock_id number;
    v_product mm_product%rowtype;
    v_stock mm_prod_stock%rowtype;
    v_stock_cmp mm_prod_stock_cmp%rowtype;
    v_qty number;
    cursor ccmp is 
      select t.*
        from mm_prod_stock_cmp t
       where t.prodstock_id = v_stock.id 
         and t.unit_price = v_movement.price;
    rcmp ccmp%rowtype;      
    
  begin
    
    v_stock_id := pbo_stock.get_stock_id_by_uk(v_movement.client_id, v_movement.org_id, v_movement.orginv_id, v_movement.stockloc_id, v_movement.product_id, 'N') ;    
    
    pdao_findby_pk.mm_prod_stock_t(v_stock_id, v_stock);
    pdao_findby_pk.mm_product_t(v_movement.product_id, v_product, 'Y');    
        
    if v_stock.id is null then
      select seq_prodstock_id.nextval into v_stock.id from dual;
      v_stock.client_id := v_movement.client_id; 
      v_stock.org_id := v_movement.org_id;
      v_stock.orginv_id := v_movement.orginv_id;
      v_stock.stockloc_id := v_movement.stockloc_id;
      v_stock.product_id := v_movement.product_id;
      v_stock.qty := 0;
      v_stock.uom := v_product.uom_code;
      pdao_insert.mm_prod_stock_t(v_stock);      
    end if;     
    
    -- convert uom    
    if v_movement.uom <> v_stock.uom then 
      v_qty := pbo_uom.convert(v_movement.qty, v_movement.uom, v_stock.uom) ;
    else 
      v_qty := v_movement.qty;
    end if;
    
    if v_movement.mvmnt_sense = 'I' then 
      --todo: handle concurent access  
      update mm_prod_stock set qty = qty + v_qty where id = v_stock.id;
      --pdao_update.mm_prod_stock_t(v_stock);
    else   
      update mm_prod_stock set qty = qty - v_qty where id = v_stock.id; 
    end if;
    
 
    open ccmp;
    fetch ccmp into rcmp;
    if ccmp%found then
      -- there is a component with our unit price, update quantity
      if v_movement.mvmnt_sense = 'I' then 
        update mm_prod_stock_cmp set qty = qty + v_qty
         where id = rcmp.id;      
      else 
        update mm_prod_stock_cmp set qty = qty - v_qty
         where id = rcmp.id;               
      end if;
    else
      -- there is no stock component with our unit price. Register entry with this new price
      
      v_stock_cmp.prodstock_id := v_stock.id;
      v_stock_cmp.unit_price := v_movement.price;
      v_stock_cmp.currency := v_movement.currency;
      v_stock_cmp.qty := v_qty;
      v_stock_cmp.uom := v_stock.uom;
      pdao_insert.mm_prod_stock_cmp_t(v_stock_cmp);
      
    end if;
    close ccmp;  
 
  end;
  
  
 
  /* Create an  inventory movement line
   * Params: p_client_id: Business unit ID
   *         p_org_id: Organization ID
   *         p_mvmnt_type: Type of movement, possible values:
   *                           'I': Inventory in, having a MM_MOVEMENT_IN_LINE as source 
   *                           'O': Inventory out, having a MM_MOVEMENT_OUT_LINE as source 
   *                           'T': Inventory transfer, having a MM_MOVEMENT_TRANSF_LINE as source 
   */     
  procedure move_in( p_client_id in number
                            ,p_org_id in number
                            ,p_orginv_id in number
                            ,p_stockloc_id in number
                            ,p_product_id in number
                            ,p_qty in number
                            ,p_uom in varchar2
                            ,p_price in number
                            ,p_currency in varchar2
                            ,p_mvmnt_type in varchar2
                            ,p_srcdoc_id in number ) is
    v_movement mm_prod_stock_mvmnt%rowtype;
  begin
  
    select seq_prdstckmvmnt_id.nextval into v_movement.id from dual;
    
    v_movement.client_id := p_client_id;
    v_movement.org_id := p_org_id;
    v_movement.orginv_id := p_orginv_id;
    v_movement.stockloc_id := p_stockloc_id;
    v_movement.product_id := p_product_id;
    v_movement.qty := p_qty;
    v_movement.uom := p_uom;
    v_movement.price := p_price;
    v_movement.currency := p_currency;
    
    v_movement.mvmnt_sense := p_mvmnt_type;
    v_movement.mvmnt_date := sysdate;
    select decode(p_mvmnt_type, 'I', p_srcdoc_id, null ) into v_movement.mvmntindoc_id from dual;
        
    pdao_insert.mm_prod_stock_mvmnt_t(v_movement);
    
    -- update stock 
    update_stock(v_movement);
    
  end;
  
  
 
  
  procedure move_out is     
  begin
   null;
  end;

  
  
  
  
  /* Get a stock ID by its unique key
   * Params: p_client_id: Business unit ID
   *         p_org_id: Organization ID 
   *         p_orginv_id: Organization inventory ID
   *         p_stockloc_id: Stock locator ID
   *         p_product_id: Product ID
   *         p_raise: Raise error if record with given key is not found (Y=yes, N=no)
   */  
  function get_stock_id_by_uk( p_client_id in number
                              ,p_org_id in number
                              ,p_orginv_id in number
                              ,p_stockloc_id in number
                              ,p_product_id in number
                              ,p_raise in char default 'N') return number is 
    v_out number;
  begin
    select t.id into v_out
        from mm_prod_stock t
       where t.client_id = p_client_id
         and t.org_id = p_org_id
         and t.orginv_id = p_orginv_id
         and t.stockloc_id = p_stockloc_id 
         and t.product_id = p_product_id; 
    return v_out;    
    exception when NO_DATA_FOUND then
      if p_raise = 'Y' then 
        raise_error('StockByUkNotFound');
      else
        return null;  
      end if;         
  end;
  

  
  
  
  procedure process_doc_in(p_docin_id in number) is
    
    cursor c is 
      select t.* 
        from mm_movement_in_line t
       where t.mvmntindoc_id = p_docin_id; 
    
    v_docin mm_movement_in_doc%rowtype;
       
  begin
    pdao_findby_pk.mm_movement_in_doc_t(p_docin_id,v_docin,'Y');
    --validate document
    
    --process lines 
    
    for r in c loop
      move_in(v_docin.client_id
              ,v_docin.org_id
              ,v_docin.orginv_id
              ,r.stockloc_id
              ,r.product_id
              ,r.inventory_qty
              ,r.uom
              ,r.base_doc_price
              ,r.base_doc_currency
              ,'I'
              ,v_docin.id );
    end loop;
    
  end;
  
  
  
end;
/
show errors package body PBO_STOCK; 

