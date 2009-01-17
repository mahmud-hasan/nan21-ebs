create or replace package pbo_rinv is

  procedure generate_reception_doc(p_rinv_id in number, p_doc_id out number);

end;
/
show errors package PBO_RINV; 



create or replace package body pbo_rinv is

  procedure generate_reception_doc(p_rinv_id in number, p_doc_id out number) is 
    
  begin
  
    select seq_mvmntindoc_id.nextval into p_doc_id from dual;
    insert into mm_movement_in_doc(id, client_id, doc_no, doc_date, doc_type, from_bpartner_id, rinv_id)
      select p_doc_id, t.client_id, p_doc_id, sysdate, 'x', t.issuer_id, t.id 
        from rinvoice t
       where t.id = p_rinv_id;
       
    insert into mm_movement_in_line(id, mvmntindoc_id, product_id, 
           qty, base_doc_qty, received_qty, inventory_qty, uom,
           base_doc_price, base_doc_currency )
      select seq_mvmntindoc_id.nextval, p_doc_id, t.prod_id,
           t.quantity, t.quantity, t.quantity, t.quantity, t.quantity_unit,
           t.price, t.currency
        from rinvoice_item t
       where t.rinv_id = p_rinv_id;  
              
  end;
end;
/
show errors package body PBO_RINV; 

