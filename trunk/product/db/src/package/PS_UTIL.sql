create or replace package ps_util is
  /**
   * Service package with utility methods
   */

  function is_period_year(p_from in date, p_to in date) return char;
end;
/
show errors package PS_UTIL; 



create or replace package body ps_util is
  


  function is_period_year(p_from in date, p_to in date) return char is
    v_days number;
  begin
    v_days := p_to - p_from ;
    if v_days = 364 or v_days = 365 then 
      return 'Y';
    else 
      return 'N';
    end if;  
  end;
end;
/
show errors package body PS_UTIL; 

