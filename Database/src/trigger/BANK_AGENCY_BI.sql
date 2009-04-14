create or replace trigger BANK_AGENCY_BI before insert on BANK_AGENCY
for each row
begin
  if :new.id is null then
    select SEQ_BANKAG_ID.nextval into :new.id from dual;
  end if;
end;
/
