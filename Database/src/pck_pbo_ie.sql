prompt Creating package pbo_ie...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
create or replace package pbo_ie is                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
  function get_strategy_name_by_id(p_id in number, p_raise in char default 'N') return varchar2;                                                                                                                                                                                                                                                                                                                                                                                                                    
end;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
/                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
show errors package pbo_ie;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
create or replace package body pbo_ie is                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
 /* Get an import strategy  name by its ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
   * Params: p_id: Import strategy ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
   *         p_raise: Raise error if record with given id is not found (Y=yes, N=no)                                                                                                                                                                                                                                                                                                                                                                                                                                
   */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
  function get_strategy_name_by_id(p_id in number, p_raise in char default 'N') return varchar2 is                                                                                                                                                                                                                                                                                                                                                                                                                  
    vrec ie_imp_strategy%rowtype;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
  begin                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    pdao_findby_pk.ie_imp_strategy_t(p_id, vrec, p_raise);                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    return vrec.name;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
  end;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
  procedure run_imp_strategy(p_imp_strategy_id in number) is                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
  begin                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
   null;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
  end;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
end;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
/                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
show errors package body pbo_ie;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
