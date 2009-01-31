create or replace trigger AC_ACC_YEAR_BD before delete on AC_ACC_YEAR
for each row
begin
  
  if :new.closed = 'Y' then
    raise_error('AccYear_CannotDeleteClosed');
  end if;  
  
end;
/
