create or replace trigger AC_ACC_YEAR_BU before update on AC_ACC_YEAR
for each row
begin
  
  if (:new.is_first_year = 'N' and :new.prev_year_code is null) or 
     (:new.is_first_year = 'Y' and :new.prev_year_code is not null )  then
    raise_error('AccYear_SetPrevOrIsFirst');
  end if;  
  
  if :new.prev_year_code = :new.code then 
    raise_error('InvalidPrevPeriod');
  end if;
  
  if ps_util.is_period_year(:new.startdate, :new.enddate) = 'N' then
    raise_error('AccYear_InvalidPeriod');
  end if;
 

  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
