create or replace force view V_INVOICE_ITEM as
select
   invitem.id
  ,invitem.iinv_id
  ,invitem.line_no
  ,invitem.prod_id
  ,prod.name           prod_name
  ,prod.description    prod_description
  ,invitem.quantity
  ,invitem.quantity_unit
  ,invitem.orig_price
  ,invitem.net_amount
  ,invitem.orig_currency
  ,invitem.price
  ,invitem.currency_xrate
  ,invitem.currency
  ,invitem.createdon
  ,invitem.createdby
  ,invitem.modifiedon
  ,invitem.modifiedby
  ,invitem.iinvitem_id
  ,invitem.notes
  ,invitem.tax_rate vat_rate
  ,invitem.tax_amount vat_amount
 from iinvoice_item invitem, product prod
where invitem.prod_id = prod.id
/
