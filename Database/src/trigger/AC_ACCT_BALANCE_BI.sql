create or replace trigger AC_ACCT_BALANCE_BI before insert on AC_ACCT_BALANCE
for each row
begin
  if :new.id is null then
    select SEQ_ACCTBAL_ID.nextval into :new.id from dual;
  end if;
end;
/
