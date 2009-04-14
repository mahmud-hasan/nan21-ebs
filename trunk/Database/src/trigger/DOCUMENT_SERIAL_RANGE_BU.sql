create or replace trigger DOCUMENT_SERIAL_RANGE_BU before update on DOCUMENT_SERIAL_RANGE
for each row
begin
  
  if :new.is_installed = :old.is_installed and :new.is_installed = 'Y' then  
    raise_error('CantUpdateDocsernoInstalled');
  end if;
  if :new.is_closed = :old.is_closed and :new.is_closed = 'Y' then  
    raise_error('CantUpdateDocsernoClosed');
  end if;     
end;
/
