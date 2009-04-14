create or replace procedure raise_error( p_error_code in varchar2
                                        ,p_arg1 in varchar2 default null
                                        ,p_arg2 in varchar2 default null
                                        ,p_arg3 in varchar2 default null) is
  v_msg varchar2(1000);
begin
  v_msg := pk_session.translateErrorMessage(p_error_code, pk_session.getLang);
  if p_arg1 is not null then
  	v_msg := replace( v_msg, '<@1@>',p_arg1);
  end if;
  if p_arg2 is not null then
  	v_msg := replace( v_msg, '<@2@>',p_arg2);
  end if;
  if p_arg3 is not null then
  	v_msg := replace( v_msg, '<@3@>',p_arg3);
  end if;
  raise_application_error(-20100, v_msg);
end;
/
show errors procedure RAISE_ERROR; 
