create or replace force view V_INVOICE_HEADER as
select
	  inv.id
	 ,inv.doc_date
	 ,inv.doc_no
   ,inv.doc_no_serial
   ,concat(inv.doc_no_serial, inv.doc_no) doc_no_full
	 ,inv.client_id
	 ,inv.issuer_id
	 ,issuer.name issuer_name
   ,issuer.company_reg_nr issuer_reg_no
   ,issuer.tax_number issuer_tax_no
   ,issuer.tax_number_type issuer_tax_no_type
	 ,inv.receiver_id
	 ,receiver.name receiver_name
   ,receiver.company_reg_nr receiver_reg_no
   ,receiver.tax_number receiver_tax_no
   ,receiver.tax_number_type receiver_tax_no_type
	 ,inv.payby_id
	 ,inv.doc_type
	 ,inv.inv_status
	 ,inv.doc_currency
	 ,inv.transtype_code
   ,inv.vat_rate
	 ,inv.due_date
	 ,inv.inv_line_count
	 ,inv.ref_iinv_id
	 ,inv.ref_iinv_doc_no
	 ,inv.order_id
	 ,inv.total_net_amount
	 ,inv.total_tax_amount
	 ,inv.total_amount
	 ,inv.createdon
	 ,inv.createdby
	 ,inv.modifiedon
	 ,inv.modifiedby
	 ,inv.is_printed
	 ,inv.notes
	 ,inv.currency_xrate
  from iinvoice inv, bpartner receiver, bpartner issuer
 where inv.issuer_id = issuer.id
   and inv.receiver_id = receiver.id
/
