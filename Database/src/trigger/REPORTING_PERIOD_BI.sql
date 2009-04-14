create or replace trigger REPORTING_PERIOD_BI before insert on REPORTING_PERIOD
for each row
begin
  if :new.id is null then
    select SEQ_REPPERIOD_ID.nextval into :new.id from dual;
  end if;
end;
/
