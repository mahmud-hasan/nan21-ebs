create or replace package pbo_uom is
  function convert(p_qty in number, p_from in varchar2, p_to in varchar2) return number;

end;
/
show errors package PBO_UOM; 



create or replace package body pbo_uom is

  function convert(p_qty in number, p_from in varchar2, p_to in varchar2) return number is 
    cursor c is 
      select t.*
        from uom_conversion t 
       where t.uom_from = p_from
         and t.uom_to = p_to ;
    r c%rowtype; 
    b boolean;    
  begin
    open c;
    fetch c into r;
    b := c%found;
    close c;
    if not b then 
      raise_error('NoUomConvRule', p_from, p_to);
    end if;
    if r.conversion_type = 'x' then 
      return p_qty * r.conversion_factor;
    elsif r.conversion_type = ':' then 
      return p_qty / r.conversion_factor;
    else
     raise_error('InvalidUomConvType', r.conversion_type);
    end if;    
  end;
end;
/
show errors package body PBO_UOM; 

