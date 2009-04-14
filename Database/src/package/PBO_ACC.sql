create or replace package pbo_acc is

  -- customer related
  P_DEF_CUST_ACCT_RECEIVABLES constant varchar2(32) := 'DEF_CUST_ACCT_RECEIVABLES';
  P_DEF_CUST_ACCT_PREPAY constant varchar2(32) := 'DEF_CUST_ACCT_PREPAY';
  -- vendor related
  P_DEF_VEND_ACCT_PAYABLES constant varchar2(32) := 'DEF_VEND_ACCT_PAYABLES';
  P_DEF_VEND_ACCT_PREPAY constant varchar2(32) := 'DEF_VEND_ACCT_PREPAY';


  function get_accyear_code_by_id(p_id in number, p_raise in char default 'N') return varchar2;
  function get_accschema_name_by_id(p_id in number, p_raise in char default 'N') return varchar2;
  function get_journal_name_by_id(p_id in number, p_raise in char default 'N') return varchar2;
  function get_accdoc_name_by_id(p_id in number, p_raise in char default 'N') return varchar2;
  function get_accschemaparam_name_by_id(p_id in number, p_raise in char default 'N') return varchar2;
  function get_acct_code_by_id(p_id in number, p_raise in char default 'N') return varchar2;
  function get_accschema_paramacct (p_param_name in varchar2, p_client_id in number, p_accschema_id in number, p_raise in char default 'N') return number;
  function get_accschema_paramval (p_param_name in varchar2, p_client_id in number, p_accschema_id in number, p_raise in char default 'N') return varchar2;
  
  
  function get_accdoc_db_amount(p_accdoc_id in number) return number;
  function get_accdoc_cr_amount(p_accdoc_id in number) return number;
  
  function get_accperiod_by_date(p_date in date, p_client_id in number, p_raise in char default 'N') return ac_acc_period%rowtype;
  function is_posted(p_id in number, p_raise in char default 'N') return char;



end;
/
show errors package PBO_ACC; 



create or replace package body pbo_acc is
      
  /* Get accounting year(fiscal year) code by its ID
   * Params: p_id: Accounting year ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_accyear_code_by_id(p_id in number, p_raise in char default 'N') return varchar2 is 
    vrec ac_acc_year%rowtype;
  begin     
    pdao_findby_pk.ac_acc_year_t(p_id, vrec, p_raise);
    return vrec.code;          
  end;  
  
  
  /* Get accounting journal name by its ID
   * Params: p_id: Journal ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_journal_name_by_id(p_id in number, p_raise in char default 'N') return varchar2 is 
    vrec ac_acc_journal%rowtype;
  begin     
    pdao_findby_pk.ac_acc_journal_t(p_id, vrec, p_raise);
    return vrec.name;        
  end;   
  
  /* Get accounting schema name by its ID
   * Params: p_id: Accounting schema ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_accschema_name_by_id(p_id in number, p_raise in char default 'N') return varchar2 is 
    vrec ac_accschema%rowtype;
  begin     
    pdao_findby_pk.ac_accschema_t(p_id, vrec, p_raise);
    return vrec.name;         
  end;    
  
  
  /* Get accounting document name (doc_no with doc_date ) by its ID
   * Params: p_id: Accounting document ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_accdoc_name_by_id(p_id in number, p_raise in char default 'N') return varchar2 is
    vrec ac_accdoc%rowtype;
  begin     
    pdao_findby_pk.ac_accdoc_t(p_id, vrec, p_raise);
    return vrec.doc_no || ' ' || to_char(vrec.doc_date, pk_session.getDateFormat);              
  end;    
  
    
  /* Get accounting schema parameter name by its ID
   * Params: p_id: Parameter ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_accschemaparam_name_by_id(p_id in number, p_raise in char default 'N') return varchar2 is
    vrec ac_accschema_param%rowtype;
  begin     
    pdao_findby_pk.ac_accschema_param_t(p_id, vrec, p_raise);
    return vrec.name;              
  end;    
  
  
  /* Get account code (account) by its ID
   * Params: p_id: Account ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_acct_code_by_id(p_id in number, p_raise in char default 'N') return varchar2 is
    vrec ac_acct%rowtype;
  begin     
    pdao_findby_pk.ac_acct_t(p_id, vrec, p_raise);
    return vrec.account;              
  end;
  
        
  /* Get account schema param account-value. 
   * Param must be of type account (with flag is_account set to 'Y') and returns the account ID 
   * Values are set per client/accounting schema
   * Params: p_param_name: Parameter name
   *         p_client_id: Client ID
   *         p_accschema_id: Accounting schema ID 
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_accschema_paramacct (p_param_name in varchar2, p_client_id in number, p_accschema_id in number, p_raise in char default 'N') return number is
    vrec ac_cliaccschema_paramacct%rowtype;
    vparam ac_accschema_param%rowtype;
  begin
    pdao_findby_uk.ac_accschema_param_t(p_param_name, vparam, p_raise);
    pdao_findby_uk.ac_cliaccschema_paramacct_t( p_client_id => p_client_id
                                         ,p_accschema_id => p_accschema_id
                                         ,p_accschemaparam_id => vparam.id
                                         ,p_record => vrec
                                         ,p_raise => p_raise);
    return vrec.param_acct_id;   
  end;
  

  /* Get account schema param value. 
   * Param must NOT be of type account (i.e. flag is_account set to 'N') and returns the parameter value 
   * Values are set per client/accounting schema
   * Params: p_param_name: Parameter name
   *         p_client_id: Client ID
   *         p_accschema_id: Accounting schema ID 
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_accschema_paramval (p_param_name in varchar2, p_client_id in number, p_accschema_id in number, p_raise in char default 'N') return varchar2 is
    vrec ac_cliaccschema_paramval%rowtype;
    vparam ac_accschema_param%rowtype;
  begin
    pdao_findby_uk.ac_accschema_param_t(p_param_name, vparam, p_raise);
    pdao_findby_uk.ac_cliaccschema_paramval_t( p_client_id => p_client_id
                                         ,p_accschema_id => p_accschema_id
                                         ,p_accschemaparam_id => vparam.id
                                         ,p_record => vrec
                                         ,p_raise => p_raise);
    return vrec.param_val;   
  end;
    
  
  /* Get accounting document total debit amount
   * Params: p_accdoc_id: Accounting document ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_accdoc_db_amount(p_accdoc_id in number) return number is
    cursor c is 
     select sum(t.db_amount) db_amount
      from ac_accdoc_line t 
     where t.accdoc_id = p_accdoc_id;
   v_out number;  
  begin
    open c;
    fetch c into v_out;
    close c;
    return v_out;    
  end;
  
  
  
  /* Get accounting document total credit amount
   * Params: p_accdoc_id: Accounting document ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_accdoc_cr_amount(p_accdoc_id in number) return number is
    cursor c is 
     select sum(t.cr_amount) cr_amount
      from ac_accdoc_line t 
     where t.accdoc_id = p_accdoc_id;
   v_out number;  
  begin
    open c;
    fetch c into v_out;
    close c;
    return v_out;    
  end;
  
  

  /* Get accounting period for a given date
   * Params: p_date: Date
   *         p_client_id: Client ID 
   *         p_raise: Raise error if record is not found (Y=yes, N=no)
   */
  function get_accperiod_by_date(p_date in date, p_client_id in number, p_raise in char default 'N') return ac_acc_period%rowtype is
    cursor c is 
      select ap.*
        from ac_acc_period ap
       where ap.client_id = p_client_id
         and ap.startdate <= trunc(p_date)
         and ap.enddate >= trunc(p_date);
    vrec ac_acc_period%rowtype;
  begin     
    open c;
    fetch c into vrec;
    if c%notfound and p_raise = 'Y' then
      raise_error('AccPeriodForDateNotFound', p_date );
    end if;
    close c;
    return vrec;            
  end;   
  

  /* Check if an accounting document is posted
   * Params: p_id: Accounting document id
   *         p_raise: Raise error if record is not found (Y=yes, N=no)
   */
  function is_posted(p_id in number, p_raise in char default 'N') return char is
    vrec  ac_accdoc%rowtype;    
  begin
    pdao_findby_pk.ac_accdoc_t(p_id, vrec, p_raise);
    return vrec.is_posted;
  end;
  
end;
/
show errors package body PBO_ACC; 

