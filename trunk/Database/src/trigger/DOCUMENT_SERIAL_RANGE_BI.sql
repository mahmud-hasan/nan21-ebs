create or replace trigger DOCUMENT_SERIAL_RANGE_BI before insert on DOCUMENT_SERIAL_RANGE
for each row
begin
  if :new.id is null then
    select SEQ_DOCSERRNG_ID.nextval into :new.id from dual;
  end if;
  
  :new.is_installed := 'N';
  :new.is_closed := 'N';
  
end;
/
