prompt Creating function get_check_cons_cond...                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
create or replace function get_check_cons_cond( p_constraint_name in varchar2 ) return varchar2 as                                                                                                                                                                                                                                                                                                                                                                                                                  
    v_value long;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    v_out varchar2(4000);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
  begin                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    select t.search_condition into v_value                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
      from user_constraints t                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
     where t.constraint_name = upper(p_constraint_name);                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    v_out :=  substr(trim( both chr(13) from v_value) , 1, 4000);                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    v_out := trim(both chr(10) from v_out);                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    --v_out := length(v_out) || '-'||v_out;                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    return trim(v_out);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
end;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
/                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
show errors function get_check_cons_cond;                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
prompt Creating function get_column_default_value...                                                                                                                                                                                                                                                                                                                                                                                                                                                                
create or replace function get_column_default_value( p_table_name in varchar2, p_column_name in varchar2 ) return varchar2 as                                                                                                                                                                                                                                                                                                                                                                                       
    v_value long;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    v_out varchar2(4000);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
  begin                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    select t.data_default into v_value                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
      from user_tab_cols t                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
     where t.table_name = upper(p_table_name)                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
       and t.column_name = upper(p_column_name);                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    v_out :=  substr(trim( both chr(13) from v_value) , 1, 4000);                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    v_out := trim(both chr(10) from v_out);                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    --v_out := length(v_out) || '-'||v_out;                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    return trim(v_out);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
end;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
/                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
show errors function get_column_default_value;                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
prompt Creating function list_to_string...                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
create or replace function list_to_string (p_cursor in  sys_refcursor, p_delimiter in varchar2) return  varchar2                                                                                                                                                                                                                                                                                                                                                                                                    
is                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
  v_return  varchar2(32000);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
  v_temp    varchar2(32000);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
begin                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
  loop                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    fetch p_cursor into v_temp;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    exit when p_cursor%notfound;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    v_return := v_return || p_delimiter || v_temp;                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
  end loop;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
  return ltrim(v_return, p_delimiter);                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
end;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
/                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
show errors function list_to_string;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
prompt Creating function translate_error...                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
create or replace function translate_error(p_message in varchar2) return varchar2 is                                                                                                                                                                                                                                                                                                                                                                                                                                
    cursor c is                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
      select t.translation                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
        from server_message_trl t                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
       where t.srvmsg_code = p_message                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
         and t.lang_code = 'en';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    v_out server_message_trl.translation%type;                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
  begin                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    open c;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    fetch c into v_out;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    if c%notfound then                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
      v_out := p_message;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    end if;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    close c;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    return v_out;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
  end;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
/                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
show errors function translate_error;                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
