create or replace trigger ACC_SCHEMA_ACCT_BI before insert on ACC_SCHEMA_ACCT
for each row
begin
  if :new.id is null then
    select SEQ_ACCSCHACCT_ID.nextval into :new.id from dual;
  end if;
end;
/

