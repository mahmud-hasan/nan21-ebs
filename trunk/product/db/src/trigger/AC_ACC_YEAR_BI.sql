create or replace trigger AC_ACC_YEAR_BI before insert on AC_ACC_YEAR
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
   
  if :new.id is null then
    select SEQ_ACCYEAR_ID.nextval into :new.id from dual;
  end if;
  
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/
