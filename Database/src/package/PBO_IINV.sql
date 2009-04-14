create or replace package pbo_iinv is
  function get_doc_line_count(p_iinv_id in number) return number;
  procedure calc_inv_amounts(p_iinv_id in number, p_total_net_amount in out number, p_total_tax_amount in out number);
  function get_fulldocno_by_id(p_id in number, p_raise in char default 'N') return varchar2;

  function is_posted(p_iinv_id in number) return boolean;

  procedure install_doc_serial_range(p_docser_id in number, p_range_id in number, p_from in number, p_to in number);
  procedure uninstall_doc_serial_range(p_range_id in number);

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
  
  

  
  /**
   * Install a range of numbers for a certain document serial
   *   
   */
  procedure install_doc_serial_range(p_docser_id in number, p_range_id in number, p_from in number, p_to in number) is
    v_docser document_serial%rowtype;
    i number;
  begin
    pdao_findby_pk.document_serial_t(p_id => p_docser_id, p_record => v_docser, p_raise => 'Y');
    for i in p_from .. p_to loop
       insert into document_serial_no(id, client_id, docser_id, docserrng_id,value,is_allocated)
      values(seq_docserno_id.nextval, v_docser.client_id, v_docser.id, p_range_id, i, 'N');
    end loop;
  end; 
  
  
  
  /**
   * Un-install a range of numbers for a certain document serial
   *   
   */
  procedure uninstall_doc_serial_range(p_range_id in number) is
  begin
     delete from document_serial_no where docserrng_id = p_range_id;
  end; 
    
  
end;
/
show errors package body PBO_IINV; 

