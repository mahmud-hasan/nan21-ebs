create or replace trigger BILLING_CYCLE_BI before insert on BILLING_CYCLE
for each row
begin
  if :new.id is null then
    select SEQ_BILLCYC_ID.nextval into :new.id from dual;
  end if;
end;
/

