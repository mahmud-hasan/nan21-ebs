create or replace trigger DOCUMENT_SERIAL_NO_BD before delete on DOCUMENT_SERIAL_NO
for each row
begin
  if :old.is_allocated = 'Y' then
    raise_error('CantDeleteDocsernoAllocated');
  end if;  
end;
/
