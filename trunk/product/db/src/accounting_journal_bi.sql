create or replace trigger ACCOUNTING_JOURNAL_BI before insert on ACCOUNTING_JOURNAL
for each row
begin
  if :new.id is null then
    select SEQ_ACCJOURN_ID.nextval into :new.id from dual;
  end if;
end;
/

