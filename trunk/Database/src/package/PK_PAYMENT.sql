create or replace package pk_payment is
  function get_fulldocno_by_id(p_paym_id in number) return varchar2;
  procedure post_payment(pr_paym in payment%rowtype, p_accdoc_id in out number) ;
  function get_bp_name_by_id(p_paym_id in number) return varchar2;
end;
/
show errors package PK_PAYMENT; 



create or replace package body pk_payment is

  function get_fulldocno_by_id(p_paym_id in number) return varchar2 is
    cursor c is 
      select r.paydoctype_code || '/' || r.doc_no fullno
        from payment r
       where r.id = p_paym_id; 
    v_out varchar2(100);   
  begin
    open c;
    fetch c into v_out;
    close c;
    return v_out;
  end;
  
  function get_bp_name_by_id(p_paym_id in number) return varchar2 is
    cursor c is 
      select t.name
        from bpartner t
       where t.id = (select r.bpartner_to from payment r where r.id = p_paym_id); 
    v_out varchar2(100);   
  begin
    open c;
    fetch c into v_out;
    close c;
    return v_out;
  end;
  
  
    
  -- post document, create accounting doc and charged amounts
  procedure post_payment_simple(pr_paym in payment%rowtype, p_accdoc_id in out number) is 
    cursor c is 
      select * from rinvoice r where r.id = pr_paym.rinv_id;
    r c%rowtype;
    
    --pr_accdoc pk_acc.accdoc_t;   
    --pr_accdocitem pk_acc.accdocitem_t; 
    
  begin
    null;
    /*
    -- create the acc. doc. 
    pr_accdoc.client_id := pr_paym.client_id;                                        
    pr_accdoc.doc_no    := null;
    pr_accdoc.doc_date  := pr_paym.doc_date;                                               
    pr_accdoc.basedoc_type := 'PAYM';
    pr_accdoc.basedoc_no   := pr_paym.doc_no; 
    pr_accdoc.basedoc_date := pr_paym.doc_date;
    pr_accdoc.basedoc_id   := pr_paym.id;
    pr_accdoc.notes        := '';
    pr_accdoc.is_generated := 'Y';
  
    pk_acc.gen_accdoc(pr_accdoc);
      
   -- create the credit line
    
    pr_accdocitem.accdoc_id := pr_accdoc.id;
    pr_accdocitem.client_id := pr_accdoc.client_id;
    pr_accdocitem.db_acct   := null;
    pr_accdocitem.cr_acct   := pr_paym.paymnt_acct;
    pr_accdocitem.db_amount    := 0;
    pr_accdocitem.cr_amount    := pr_paym.amount;
    pr_accdocitem.currency  := pr_paym.currency;
    pr_accdocitem.xrate     := null;
    pr_accdocitem.is_generated := 'Y';
    pr_accdocitem.notes         := 'Plata';
    pr_accdocitem.orig_amount   := null;
    pr_accdocitem.orig_currency := null;
    
    pk_acc.gen_accdoc_item(pr_accdocitem);   
    
    -- create the debit line
    open c;
    fetch c into r;
    close c;
    
    pr_accdocitem.accdoc_id := pr_accdoc.id;
    pr_accdocitem.client_id := pr_accdoc.client_id;
    pr_accdocitem.db_acct   := r.acct;
    pr_accdocitem.cr_acct   := null;
    pr_accdocitem.db_amount    := pr_paym.amount;
    pr_accdocitem.cr_amount    := 0;
    pr_accdocitem.currency  := pr_paym.currency;
    pr_accdocitem.xrate     := null;
    pr_accdocitem.is_generated := 'Y';
    pr_accdocitem.notes         := r.doc_type||'-'||r.doc_no||'/'||r.doc_date;
    pr_accdocitem.orig_amount   := null;
    pr_accdocitem.orig_currency := null;
    
    pk_acc.gen_accdoc_item(pr_accdocitem);
    
    p_accdoc_id := pr_accdoc.id;    
    */
  end;
  
  
  

  -- post document, create accounting doc and charged amounts
  procedure post_payment(pr_paym in payment%rowtype, p_accdoc_id in out number) is                

  begin
   
    -- validate 
    if pr_paym.PAYMNT_ACCT is null then
    	raise_error('NoPaymSrcAcctOnPayment');
    end if;
  
    if pr_paym.is_prepayment = 'Y' and pr_paym.prepay_acct is null then
    	raise_error('NoPrepayAcctOnPayment');
    end if;    
    
    if pr_paym.is_multi_payment = 'N' then
    	post_payment_simple(pr_paym, p_accdoc_id);
    end if;
    
  
  end;
  
  
  
end;
/
show errors package body PK_PAYMENT; 

