create or replace force view V_STOCKS as
select s.id stock_id
      ,s.client_id
      ,c.code client_code
      ,s.org_id
      ,o.name org_name
      ,s.orginv_id
      ,oi.code orginv_code
      ,s.stockloc_id
      ,sl.code stockloc_code
      ,s.product_id
      ,p.code product_code
      ,p.name product_name
      ,s.qty
      ,s.uom
  from mm_prod_stock s, client c, organization o, mm_org_inv oi, mm_stock_loc sl, mm_product p
 where s.client_id = c.id
   and s.org_id = o.id
   and s.orginv_id = oi.id
   and s.stockloc_id = sl.id
   and s.product_id = p.id
/
