create or replace package pk_rinv is
  
  function is_posted(p_rinv_id in number) return boolean;
  function get_doc_charge_acct(p_client_id in number, p_accschema_id in number, p_bpartner_id in number) return varchar2;
  procedure post_rinv(pr_doc in rinvoice%rowtype, p_accdoc_id in out number); 
  function get_fulldocno_by_id(p_rinv_id in number) return varchar2;
  function get_bp_name_by_id(p_rinv_id in number) return varchar2;
end;
/
show errors package PK_RINV; 



create or replace package body pk_rinv is

  function get_fulldocno_by_id(p_rinv_id in number) return varchar2 is
    cursor c is 
      select r.doc_type || '/' || r.doc_no fullno
        from rinvoice r
       where r.id = p_rinv_id; 
    v_out varchar2(100);   
  begin
    open c;
    fetch c into v_out;
    close c;
    return v_out;
  end;
  
  function get_bp_name_by_id(p_rinv_id in number) return varchar2 is
    cursor c is 
      select t.name
        from bpartner t
       where t.id = (select r.issuer_id from rinvoice r where r.id = p_rinv_id); 
    v_out varchar2(100);   
  begin
    open c;
    fetch c into v_out;
    close c;
    return v_out;
  end;
    
  
  function is_posted(p_rinv_id in number) return boolean is
    cursor c is
      select t.is_posted
        from rinvoice t
       where t.id = p_rinv_id;
    r  rinvoice.is_posted%type;    
  begin
    open c;
    fetch c into r;
    if c%notfound then
    	raise_error('RecordNotFound');
    end if;
    close c;
    if r = 'Y' then
    	return true;
    else 
      return false;   
    end if;    
  end;
    
  -- return the liability account for the specified selection                                 
  function get_doc_charge_acct(p_client_id in number, p_accschema_id in number, p_bpartner_id in number) return varchar2 is 
    cursor c is 
      select t.*
        from bp_account_vendor t         
       where t.client_id = p_client_id
         and t.bpartner_id = p_bpartner_id
         and t.accschema_id = p_accschema_id;
    r c%rowtype;     
  begin
    open c;
    fetch c into r;
    close c;
    return r.acct_liability;  
  end;
  
  
  -- post document, create accounting doc and charged amounts
  procedure post_rinv(pr_doc in rinvoice%rowtype, p_accdoc_id in out number) is 
     
     -- invoice items cursor
     cursor ci is 
      select t.* , p.name prod_name
        from rinvoice_item t, product p
       where t.rinv_id = pr_doc.id
         and t.prod_id = p.id(+); 
         
    -- tax cursor     
    cursor ct is 
      select sum(nvl(t.tax_amount,0)) val, 
             t.tax_id, tx.payed_refund_acct, txt.name||' '||tx.name tax_name, t.currency
        from rinvoice_item t, tax tx, tax_type txt
       where t.rinv_id = pr_doc.id
         and t.tax_id = tx.id
         and tx.taxtype_code = txt.code
       group by t.tax_id, tx.payed_refund_acct, txt.name||' '||tx.name, t.currency;   
    
    pr_accdoc pk_acc.accdoc_t;   
    pr_accdocitem pk_acc.accdocitem_t;   
  begin
   
    if pr_doc.acct is null then
    	raise_error('NoRevenueAcctOnInvoice');
    end if;
  
    pr_accdoc.client_id := pr_doc.client_id;                                        
    pr_accdoc.doc_no    := null;
    pr_accdoc.doc_date := pr_doc.doc_date;
                                               
    pr_accdoc.basedoc_type := 'RINV';
    pr_accdoc.basedoc_no   := pr_doc.doc_no; 
    pr_accdoc.basedoc_date := pr_doc.doc_date;
    pr_accdoc.basedoc_id   := pr_doc.id;
    pr_accdoc.notes        := '';
    pr_accdoc.is_generated := 'Y';
      
	  pk_acc.gen_accdoc(pr_accdoc);
        
   -- create the total line
    
    pr_accdocitem.accdoc_id := pr_accdoc.id;
    pr_accdocitem.client_id := pr_accdoc.client_id;
    pr_accdocitem.db_acct   := null;
    pr_accdocitem.cr_acct   := pr_doc.acct;
    pr_accdocitem.db_amount    := 0;
    pr_accdocitem.cr_amount    := pr_doc.total_amount;
    pr_accdocitem.currency  := pr_doc.doc_currency;
    pr_accdocitem.xrate     := null;
    pr_accdocitem.is_generated := 'Y';
    pr_accdocitem.notes         := 'Total';
    pr_accdocitem.orig_amount   := null;
    pr_accdocitem.orig_currency := null;
    
    pk_acc.gen_accdoc_item(pr_accdocitem);   
       
    
    -- create the lines for document items;                          
    for ri in ci loop
      if ri.purchase_acct is null then
    	  raise_error('NoSalesAcctOnInvLine');        
      end if;

    	pr_accdocitem.accdoc_id := pr_accdoc.id;
      pr_accdocitem.client_id := pr_accdoc.client_id;
      pr_accdocitem.db_acct   := ri.purchase_acct;
      pr_accdocitem.cr_acct   := null;
      pr_accdocitem.db_amount    := ri.net_amount + nvl(ri.tax_amount_nr,0);
      pr_accdocitem.cr_amount    := 0;
      pr_accdocitem.currency  := ri.currency;
      pr_accdocitem.xrate     := ri.currency_xrate;
      pr_accdocitem.is_generated := 'Y';
      pr_accdocitem.notes         := ri.notes;
      pr_accdocitem.orig_amount   := ri.orig_amount;
      pr_accdocitem.orig_currency := ri.orig_currency;

      pk_acc.gen_accdoc_item(pr_accdocitem);

    end loop;
    
    -- create the line for VAT
    for rt in ct loop
    	if rt.val <>0 then
    		pr_accdocitem.accdoc_id := pr_accdoc.id;
        pr_accdocitem.client_id := pr_accdoc.client_id;
        pr_accdocitem.db_acct   := rt.payed_refund_acct;
        pr_accdocitem.cr_acct   := null;
        pr_accdocitem.db_amount    := rt.val;
        pr_accdocitem.cr_amount    := 0;
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


 
end;
/
show errors package body PK_RINV; 

