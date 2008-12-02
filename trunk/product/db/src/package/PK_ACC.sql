create or replace package pk_acc is

  type accdoc_t is record (  
     id accounting_doc.id%type
    ,client_id accounting_doc.client_id%type 
    ,client_code client.code%type                                         
    ,accperiod_name accounting_doc.accperiod_name%type
    ,doc_no accounting_doc.doc_no%type
    ,doc_date accounting_doc.doc_date%type
    ,basedoc_type accounting_doc.basedoc_type%type
    ,basedoc_no accounting_doc.basedoc_no%type
    ,basedoc_date accounting_doc.basedoc_date%type
    ,basedoc_id accounting_doc.basedoc_id%type
    ,notes accounting_doc.notes%type
    ,is_generated accounting_doc.is_generated%type
    ,is_inserted accounting_doc.is_inserted%type
    ,is_posted accounting_doc.is_posted%type
    ,createdon accounting_doc.createdon%type
    ,createdby accounting_doc.createdby%type
    ,modifiedon accounting_doc.modifiedon%type
    ,modifiedby accounting_doc.modifiedby%type
    ,postedon accounting_doc.postedon%type
    ,postedby accounting_doc.postedby%type                                                                                                   
  );
  type accdocitem_t is record (
     id accounting_doc_line.id%type
    ,accdoc_id accounting_doc_line.accdoc_id%type
    ,client_id accounting_doc_line.client_id%type
    ,db_acct accounting_doc_line.db_acct%type
    ,cr_acct accounting_doc_line.cr_acct%type
    ,cr_amount accounting_doc_line.cr_amount%type
    ,db_amount accounting_doc_line.db_amount%type                                             
    ,currency accounting_doc_line.currency%type
    ,xrate accounting_doc_line.xrate%type
    ,createdon accounting_doc_line.createdon%type
    ,createdby accounting_doc_line.createdby%type
    ,modifiedon accounting_doc_line.modifiedon%type
    ,modifiedby accounting_doc_line.modifiedby%type
    ,notes accounting_doc_line.notes%type
    ,is_generated accounting_doc_line.is_generated%type
    ,orig_amount accounting_doc_line.orig_amount%type
    ,orig_currency accounting_doc_line.orig_currency%type 
  );
 
 function is_posted(p_accdoc_id in number) return boolean;
 function get_accschema_prop_value(p_accschema_id in number, p_property_name in varchar2) return varchar2;
 function get_refund_payed_tax_acct(p_id in number) return varchar2;
  
 procedure gen_accdoc(pr_accdoc in out accdoc_t);
 procedure check_if_accperiod_valid(p_accperiod in varchar2, p_client_id in number, p_date in date); 
 
 procedure gen_accdoc_item(pr_accdocitem in out accdocitem_t);
 function get_def_accschema_id(p_client_id in number ) return number;
 
 procedure post_accdoc(p_accdoc_id in number, p_posting_date in date);
  
end;
/
show errors package PK_ACC; 



create or replace package body pk_acc is
  
  -- check if doc is posted
  function is_posted(p_accdoc_id in number) return boolean is
    cursor c is
      select t.is_posted
        from accounting_doc t
       where t.id = p_accdoc_id;
    r  accounting_doc.is_posted%type;    
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
  
  
  -- return the default accounting schema id for the specified client
  function get_def_accschema_id(p_client_id in number ) return number is
    cursor c is 
      select t.id 
        from acc_schema t
       where t.client_id = p_client_id
         and t.is_default = 'Y'; 
    v_out  acc_schema.id%type;    
  begin
    open c;
    fetch c into v_out;
    if c%notfound then
    	raise_error('NoDefaultAccountingSchemaForClient',pk_client.get_client_code_by_id(p_client_id)  );
    end if;
    close c;
    return v_out;
  end;
  
  -- return the value of the specified accounting schema property
  function get_accschema_prop_value(p_accschema_id in number, p_property_name in varchar2) return varchar2 is
    cursor c is
      select t.property_value
        from acc_schema_attr t
       where t.accschema_id = p_accschema_id
         and t.property_name = p_property_name; 
    v_out acc_schema_attr.property_value%type;     
  begin
    open c;
    fetch c into v_out;
    close c;
    return v_out;  
  end;
  
  
  
  function get_refund_payed_tax_acct(p_id in number) return varchar2 is
    cursor c is 
      select t.payed_refund_acct
        from tax t
       where t.id = p_id;
    r c%rowtype;   
  begin
    open c;
    fetch c into r;
    close c;
    return r.payed_refund_acct;
  end;
  
  
  /*********************************   ACCOUNTING DOCUMENTS  *********************************************/
  
  
  -- check if the given period is valid for the selected posting date
  -------------------------------------------------------------------
  procedure check_if_accperiod_valid(p_accperiod in varchar2, p_client_id in number, p_date in date) is  
    cursor c is 
      select ap.*
        from accounting_period ap
       where ap.client_id = p_client_id
         and ap.name = p_accperiod
         and ap.startdate <= trunc(p_date)
         and ap.enddate >= trunc(p_date); 
    r c%rowtype;      
  begin   
    if (p_accperiod is null or p_client_id is null) then
      raise_error('Invalid request to check accounting period. Specify both, period and business unit.');
    else    
     	open c;
      fetch c into r;
      if c%notfound then
      	close c;
        raise_error('InvlidDateForPeriod',p_date, p_accperiod);
      end if;
      close c;
      if r.closed = 'Y' then
      	raise_error('NoOperationOnClosedAccPeriod', r.name||': '||r.startdate||'-'||r.enddate);
      end if; 
            
    end if; 
  end;
  
  
      
  
  -- generate an accounting document. 
  -----------------------------------  
  procedure gen_accdoc(pr_accdoc in out accdoc_t) is
    cursor cp is 
      select ap.*
        from accounting_period ap
       where ap.client_id = pr_accdoc.client_id
         and ap.startdate <= trunc(pr_accdoc.doc_date)
         and ap.enddate >= trunc(pr_accdoc.doc_date);
    rp cp%rowtype;
    
    cursor cadn(p_client_id in number, p_period in varchar2) is
      select nvl(max(doc_no),0)+1 next_no
        from accounting_doc ad
       where ad.client_id = p_client_id
         and ad.accperiod_name = p_period;
  begin
            
    if pr_accdoc.client_code is null then
    	pr_accdoc.client_code := pk_client.get_client_code_by_id(pr_accdoc.client_id);
    end if;
                  
    -- no accounting period given, try to find one    
    if pr_accdoc.accperiod_name is null then
    	open cp;
      fetch cp into rp;
      if cp%notfound then
      	close cp;
        raise_error('There is no accounting period for client '||pr_accdoc.client_code||' to include '||pr_accdoc.doc_date);
      end if;
      pr_accdoc.accperiod_name := rp.name;
      close cp;
    end if;                
    
    select seq_accdoc_id.nextval into pr_accdoc.id from dual;
    
    -- fetch the next doc_no if not given
    if pr_accdoc.doc_no is null then
    	open cadn(pr_accdoc.client_id, pr_accdoc.accperiod_name);
      fetch cadn into pr_accdoc.doc_no;
      close cadn;
    end if;
    
    -- create the document    
    insert into accounting_doc(id, client_id, accperiod_name, doc_no, doc_date, 
           basedoc_type, basedoc_id, basedoc_no, basedoc_date, 
           is_generated, is_inserted)
    values(pr_accdoc.id, pr_accdoc.client_id, pr_accdoc.accperiod_name, pr_accdoc.doc_no, pr_accdoc.doc_date, 
           pr_accdoc.basedoc_type, pr_accdoc.basedoc_id, pr_accdoc.basedoc_no, pr_accdoc.basedoc_date, 
           'Y','Y');  
           
  end;    
  
  
  
  /*********************************   ACCOUNTING DOCUMENT ITEMS  *********************************************/  
  
  
  
  -- generate an accounting document item. 
  ----------------------------------------      
  procedure gen_accdoc_item(pr_accdocitem in out accdocitem_t) is
    
  begin
    
    select seq_accdoclin_id.nextval into pr_accdocitem.id from dual;
    
    insert into accounting_doc_line(id,accdoc_id,client_id,db_acct,cr_acct,db_amount,cr_amount,currency
                           ,is_generated,notes)
    values(pr_accdocitem.id,pr_accdocitem.accdoc_id,pr_accdocitem.client_id,pr_accdocitem.db_acct,pr_accdocitem.cr_acct,pr_accdocitem.db_amount,pr_accdocitem.cr_amount,pr_accdocitem.currency
                           ,'Y',pr_accdocitem.notes);
     
  end;  
 
  
  -- post accounting document to ledger
  procedure post_accdoc(p_accdoc_id in number, p_posting_date in date) is
  
    cursor chk is 
      select sum(1) total
          ,sum( decode(nvl(t.db_acct,'-'),'-',0,1)) dbn
          ,sum( decode(nvl(t.cr_acct,'-'),'-',0,1)) crn
        from accounting_doc_line t 
       where t.accdoc_id = p_accdoc_id; 
    rhk chk%rowtype;    
            
    cursor cacr is 
      select t.db_acct
        from accounting_doc_line t
       where t.accdoc_id = p_accdoc_id
         and t.db_acct is not null;
    racr cacr%rowtype;     
                  
  begin
    open chk;
    fetch chk into rhk;
    close chk;
    
    if rhk.dbn = 0 then
    	raise_error('InvalidAccDocLinNoDb');
    end if;
    if rhk.crn = 0 then
    	raise_error('InvalidAccDocLinNoCr');
    end if;    
    if rhk.crn < rhk.total and rhk.dbn < rhk.total and ((rhk.crn+rhk.dbn) <> rhk.total) then
    	raise_error('InvalidAccDocLinNo');
    end if;
    
    dbms_output.put_line('db line no='||rhk.dbn);
    dbms_output.put_line('cr line no='||rhk.crn);
    
    -- db = cr on each line 
    if rhk.crn = rhk.dbn and rhk.total = rhk.dbn then
      declare
        cursor c is 
          select t.*
            from accounting_doc_line t
           where t.accdoc_id = p_accdoc_id;
      begin
        for r in c loop
          if r.db_acct is null and r.cr_acct is not null then
          	insert into account_movement(client_id,posting_date,accdoc_id,accdoclin_id
                       ,cr_acct,db_acct,db_amount,cr_amount)
              values(r.client_id, p_posting_date, r.accdoc_id, r.id
                       , r.cr_acct, r.db_acct, r.db_amount, r.cr_amount);        	
          end if; 
        end loop;
      end;

    else      
     
       
      -- db = sum cr
      if rhk.dbn = 1 then
        declare
          cursor cadr is 
            select t.db_acct
              from accounting_doc_line t
             where t.accdoc_id = p_accdoc_id
               and t.db_acct is not null;
          radr cadr%rowtype;
          cursor c is 
            select t.*
              from accounting_doc_line t
             where t.accdoc_id = p_accdoc_id
               and t.cr_acct is not null;
        begin
          open cadr;
          fetch cadr into radr;
          close cadr;
          for r in c loop
            if r.db_acct is null and r.cr_acct is not null then
            	insert into account_movement(client_id,posting_date,accdoc_id,accdoclin_id
                         ,cr_acct,db_acct,db_amount,cr_amount)
                values(r.client_id, p_posting_date, r.accdoc_id, r.id
                         , r.cr_acct, radr.db_acct, r.cr_amount, r.cr_amount);        	
            end if;      
          end loop;      
        end;    	
      -- sum db = cr
      elsif rhk.crn = 1 then
      
        declare
          cursor cacr is 
            select t.cr_acct
              from accounting_doc_line t
             where t.accdoc_id = p_accdoc_id
               and t.cr_acct is not null;
          racr cacr%rowtype;
          cursor c is 
            select t.*
              from accounting_doc_line t
             where t.accdoc_id = p_accdoc_id
               and t.db_acct is not null;
        begin
          open cacr;
          fetch cacr into racr;
          close cacr;
          for r in c loop
            if r.cr_acct is null and r.db_acct is not null then
            	insert into account_movement(client_id,posting_date,accdoc_id,accdoclin_id
                         ,cr_acct,db_acct,db_amount,cr_amount)
                values(r.client_id, p_posting_date, r.accdoc_id, r.id
                         , racr.cr_acct, r.db_acct, r.db_amount, r.db_amount);        	
            end if;      
          end loop;      
        end; 
        
      else -- sum db = sum cr
        raise_error('MultiCDAccDocError');     	
      end if;    
      
           
       
    end if;
    

    
  end;

end;
/
show errors package body PK_ACC; 

