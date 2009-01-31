create or replace package pbo_iinv is
  function get_doc_line_count(p_iinv_id in number) return number;
  procedure calc_inv_amounts(p_iinv_id in number, p_total_net_amount in out number, p_total_tax_amount in out number);
  function get_fulldocno_by_id(p_id in number, p_raise in char default 'N') return varchar2;

  function is_posted(p_iinv_id in number) return boolean;


end;
/
show errors package PBO_IINV; 



create or replace package body pbo_iinv is

  -- return the number of lines for the specified invoice. 
  function get_doc_line_count(p_iinv_id in number) return number is
    v_out number;
  begin
    select count(*) into v_out 
      from iinvoice_item where iinv_id = p_iinv_id;
    return v_out;
  end;
  
  -- calculate the sum of the line amounts 
  procedure calc_inv_amounts(p_iinv_id in number, p_total_net_amount in out number, p_total_tax_amount in out number) is
    cursor c is 
      select sum(nvl(t.net_amount,0)) total_net_amount, sum(nvl(t.tax_amount,0)) total_tax_amount
        from iinvoice_item t
       where t.iinv_id = p_iinv_id; 
     r c%rowtype;  
  begin
    open c;
    fetch c into r;
    close c;
    p_total_net_amount := r.total_net_amount ;
    p_total_tax_amount := r.total_tax_amount ;
  end;
  

  
  /* Get issued invoice document name (doc_no_serial with doc_no ) by its ID
   * Params: p_id: Invoice ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_fulldocno_by_id(p_id in number, p_raise in char default 'N') return varchar2 is
    vrec iinvoice%rowtype;
  begin     
    pdao_findby_pk.iinvoice_t(p_id, vrec, p_raise);
    return vrec.doc_no_serial || ' ' || vrec.doc_no;              
  end; 
    
 

  
  -- check if document is posted to accounting
  function is_posted(p_iinv_id in number) return boolean is
    
  begin
    return false;
  end;
  
  
  /*
  -- return the revenue account for the specified selection                                 
  function get_doc_charge_acct(p_client_id in number, p_accschema_id in number, p_bpartner_id in number) return varchar2 is 
    cursor c is 
      select t.*
        from bp_account_customer t         
       where t.client_id = p_client_id
         and t.bpartner_id = p_bpartner_id
         and t.accschema_id = p_accschema_id;
    r c%rowtype;     
  begin
    open c;
    fetch c into r;
    close c;
    return r.acct_receivable;  
  end;
 */
  /* 
  -- post document, create accounting doc and charged amounts
  procedure post_iinv(pr_iinv in iinvoice%rowtype, p_accdoc_id in out number) is 
     
     -- invoice items cursor
     cursor ci is 
      select t.* , p.name prod_name
        from iinvoice_item t, mm_product p
       where t.iinv_id = pr_iinv.id
         and t.prod_id = p.id; 
         
    -- tax cursor     
    cursor ct is 
      select sum(nvl(t.tax_amount,0)) val, 
             t.tax_id, tx.collect_acct, txt.name||' '||tx.name tax_name, t.currency
        from iinvoice_item t, tax tx, tax_type txt
       where t.iinv_id = pr_iinv.id
         and t.tax_id = tx.id
         and tx.taxtype_code = txt.code
       group by t.tax_id, tx.collect_acct, txt.name||' '||tx.name, t.currency;   
    
    --pr_accdoc pk_acc.accdoc_t;   
    --pr_accdocitem pk_acc.accdocitem_t;   
  begin
    null;
    
    if pr_iinv.acct is null then
    	raise_error('NoRevenueAcctOnInvoice');
    end if;
  
    pr_accdoc.client_id := pr_iinv.client_id;                                        
    pr_accdoc.doc_no    := null;
    pr_accdoc.doc_date := pr_iinv.doc_date;
                                               
    pr_accdoc.basedoc_type := 'IINV';
    pr_accdoc.basedoc_no   := pr_iinv.doc_no_serial || pr_iinv.doc_no; 
    pr_accdoc.basedoc_date := pr_iinv.doc_date;
    pr_accdoc.basedoc_id   := pr_iinv.id;
    pr_accdoc.notes        := '';
    pr_accdoc.is_generated := 'Y';
      
	  pk_acc.gen_accdoc(pr_accdoc);
  
   -- create the total credit line
    
    pr_accdocitem.accdoc_id := pr_accdoc.id;
    pr_accdocitem.client_id := pr_accdoc.client_id;
    pr_accdocitem.db_acct   := pr_iinv.acct;
    pr_accdocitem.cr_acct   := null;
    pr_accdocitem.db_amount    := pr_iinv.total_amount;
    pr_accdocitem.cr_amount    := 0;
    pr_accdocitem.currency  := pr_iinv.doc_currency;
    pr_accdocitem.xrate     := null;
    pr_accdocitem.is_generated := 'Y';
    pr_accdocitem.notes         := 'Total';
    pr_accdocitem.orig_amount   := null;
    pr_accdocitem.orig_currency := null;
    
    pk_acc.gen_accdoc_item(pr_accdocitem);
  
  
    -- create the lines for document items;                          
    for ri in ci loop
      if ri.sales_acct is null then
    	  raise_error('NoSalesAcctOnInvLine');        
      end if;
      pr_accdocitem.accdoc_id := null;
    	pr_accdocitem.accdoc_id := pr_accdoc.id;
      pr_accdocitem.client_id := pr_accdoc.client_id;
      pr_accdocitem.db_acct   := null;
      pr_accdocitem.cr_acct   := ri.sales_acct;
      pr_accdocitem.db_amount    := 0;
      pr_accdocitem.cr_amount    := ri.net_amount;
      pr_accdocitem.currency  := ri.currency;
      pr_accdocitem.xrate     := ri.currency_xrate;
      pr_accdocitem.is_generated := 'Y';
      pr_accdocitem.notes         := ri.prod_name;
      pr_accdocitem.orig_amount   := null;
      pr_accdocitem.orig_currency := null;

      pk_acc.gen_accdoc_item(pr_accdocitem);

    end loop;
    
    -- create the line for VAT
    for rt in ct loop
    	if rt.val <>0 then
    		pr_accdocitem.accdoc_id := pr_accdoc.id;
        pr_accdocitem.client_id := pr_accdoc.client_id;
        pr_accdocitem.db_acct   := null;
        pr_accdocitem.cr_acct   := rt.collect_acct;
        pr_accdocitem.db_amount    := 0;
        pr_accdocitem.cr_amount    := rt.val;
        pr_accdocitem.currency  := rt.currency;
        pr_accdocitem.xrate     := null;
        pr_accdocitem.is_generated := 'Y';
        pr_accdocitem.notes         := rt.tax_name;
        pr_accdocitem.orig_amount   := null;
        pr_accdocitem.orig_currency := null;
  
        pk_acc.gen_accdoc_item(pr_accdocitem);
    	end if;            
    end loop;
    
    p_accdoc_id := pr_accdoc.id;
    
  end;
  */
  
  
  
end;
/
show errors package body PBO_IINV; 
