create or replace package pbo_transp is


  function get_vehicle_regno_by_id(p_id in number, p_raise in char default 'N') return varchar2;
  
  
  
end;
/
show errors package PBO_TRANSP; 



create or replace package body pbo_transp is

  /* Get vehicle registration no by its ID
   * Params: p_id: vehicle ID
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)
   */
  function get_vehicle_regno_by_id(p_id in number, p_raise in char default 'N') return varchar2 is 
    vrec tr_vehicle%rowtype;
  begin     
    pdao_findby_pk.tr_vehicle_t(p_id, vrec, p_raise);
    return vrec.reg_no;  
  end;    
  
end;
/
show errors package body PBO_TRANSP; 

