create or replace package x_imp as

  procedure exec_UiGui;
  procedure exec_UiDc;
  procedure exec_UiDc_field;
  
end;
/
show errors package X_IMP; 



create or replace package body x_imp as

  procedure exec_UiGui is 
  cursor c is 
    select t.code, t.name, t.IS_STANDARD 
      from x_imp_ui_gui t
     where t.code not in (select t1.code from ui_gui t1 );
  begin
  
    -- insert the new ones
    for r in c loop 
      dbms_output.put_line('Insert UI: '|| r.code || ' -> ' || r.name );
    	insert into ui_gui (code, name,  nbs_standard, user_build, deprecated )
      values ( r.code, r.name, r.IS_STANDARD, 'N', 'N' );
    end loop;
        
    
    --mark deprecated the ones that are not in list 
    update ui_gui set deprecated = 'Y'
     where user_build = 'N' 
       and code not in (select code from x_imp_ui_gui);   
    commit; 
  end;
  
  /**************************************************************************************
   * 
   */
  procedure exec_UiDc is 
  cursor c is 
    select t.code, t.name, t.IS_STANDARD 
      from x_imp_ui_dc t
     where t.code not in (select t1.code from ui_dc t1 );
  begin
  
    -- insert the new ones
    for r in c loop 
      dbms_output.put_line('Insert UI: '|| r.code || ' -> ' || r.name );
    	insert into ui_dc (code, name,  nbs_standard, user_build, deprecated )
      values ( r.code, r.name, r.IS_STANDARD, 'N', 'N' );
    end loop;
        
    
    --mark deprecated the ones that are not in list 
    update ui_dc set deprecated = 'Y'
     where user_build = 'N' 
       and code not in (select code from x_imp_ui_dc);   
    commit; 
  end;

  /**************************************************************************************
   * 
   */
  procedure exec_UiDc_field is 
  cursor c is 
    select t.uidc_code, t.name
      from x_imp_ui_dc_field t
     where (t.uidc_code, t.name ) not in (select t1.uidc_code ,t1.field_name  from ui_dc_field t1 );
  begin
  
    -- insert the new ones
    for r in c loop 
      --dbms_output.put_line('Insert UI: '|| r.code || ' -> ' || r.name );
    	insert into ui_dc_field (uidc_code, field_name )
      values ( r.uidc_code, r.name );
    end loop;
        
    /*
    --mark deprecated the ones that are not in list 
    update ui_dc set deprecated = 'Y'
     where user_build = 'N' 
       and code not in (select code from x_imp_ui_dc);   
    */
    commit;
         
  end;
    
    
end;
/
show errors package body X_IMP; 

