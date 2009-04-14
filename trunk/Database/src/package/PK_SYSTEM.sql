create or replace package pk_system is
  
  function has_user_dc_permission(p_dc in varchar2, p_action in varchar2, p_user in varchar2 default pk_session.getUser) return char;
  procedure init_dc_role_for_role(p_role in varchar2, p_fetch char, p_insert char, p_update char, p_delete char );
  procedure init_dc_role_for_role(p_role in varchar2 );
  procedure init_dc_role_for_dc(p_dc in varchar2, p_fetch char, p_insert char, p_update char, p_delete char);
  procedure init_dc_role_for_dc(p_dc in varchar2 );

end;
/
show errors package PK_SYSTEM; 



create or replace package body pk_system is

  function has_user_dc_permission(p_dc in varchar2, p_action in varchar2, p_user in varchar2 default pk_session.getUser) return char is
    cursor c is 
    select 1
      from ui_dc_role_permission p
     where p.ui_dc = p_dc
       and p.role_name in (select r.role_name 
                             from sys_user_role r 
                            where r.user_id = (select id 
                                                 from sys_user u 
                                                where u.login_code = p_user)) 
       and (   (p_action = 'fetch' and p.fetch_allowed = 'Y')
            or (p_action = 'insert' and p.insert_allowed = 'Y')
            or (p_action = 'update' and p.update_allowed = 'Y')
            or (p_action = 'delete' and p.delete_allowed = 'Y') 
           );
     r c%rowtype;    
     v_found boolean;   
  begin
    if lower(p_action) not in ('fetch','insert','update','delete')  then
    	raise_error('Invalid action provided for DC permission check.');
    end if;
    open c;
    fetch c into r;
    v_found := c%found ;
    close c;
    if v_found then
    	return 'Y';
    else
      return 'N';  
    end if; 
   end;
  
  /**
   * 
   */
  procedure init_dc_role_for_role(p_role in varchar2, p_fetch char, p_insert char, p_update char, p_delete char ) is    
  begin
    insert into ui_dc_role_permission (ui_dc, role_name, fetch_allowed, insert_allowed, update_allowed, delete_allowed)
      select dc.code, p_role, p_fetch, p_insert, p_update, p_delete
        from ui_dc dc
       where dc.code not in  (
         select rp.ui_dc
           from ui_dc_role_permission rp
          where rp.role_name = p_role
       );   
    insert into ui_dc_role_permission (ui_dc, role_name, fetch_allowed, insert_allowed, update_allowed, delete_allowed)
      select dc.code, p_role, p_fetch, 'N', 'N', 'N'
        from ui_lov dc
       where dc.code not in  (
         select rp.ui_dc
           from ui_dc_role_permission rp
          where rp.role_name = p_role
       );           
  end;
  
  procedure init_dc_role_for_role(p_role in varchar2 ) is
  begin
    init_dc_role_for_role(p_role, 'N','N','N','N' );
  end;
  
  
  
  /**
   * 
   */
  procedure init_dc_role_for_dc(p_dc in varchar2, p_fetch char, p_insert char, p_update char, p_delete char) is    
  begin
    insert into ui_dc_role_permission (ui_dc, role_name, fetch_allowed, insert_allowed, update_allowed, delete_allowed)
      select p_dc, r.name, p_fetch, p_insert, p_update, p_delete
        from sys_role r
       where r.name not in  (
         select rp.role_name
           from ui_dc_role_permission rp
          where rp.ui_dc = p_dc
       );  
  end;  
  
  procedure init_dc_role_for_dc(p_dc in varchar2 ) is
  begin
    init_dc_role_for_dc(p_dc, 'N','N','N','N' );
  end;
  
end;
/
show errors package body PK_SYSTEM; 

