create or replace trigger AC_ACC_PERIOD_BU before update on AC_ACC_PERIOD
for each row
begin
  if (:new.is_first_period = 'N' and :new.prev_period_name is null) or 
     (:new.is_first_period = 'Y' and :new.prev_period_name is not null )  then
    raise_error('AccPeriod_SetPrevOrIsFirst');
  end if;  
  
  if :new.prev_period_name = :new.name then 
    raise_error('InvalidPrevPeriod');
  end if;
  
  :new.name := :new.accyear_code || '_' || :new.code;
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
