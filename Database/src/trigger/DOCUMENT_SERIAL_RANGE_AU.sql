create or replace trigger DOCUMENT_SERIAL_RANGE_AU after update on DOCUMENT_SERIAL_RANGE
for each row
begin
   
  if :new.is_installed <> :old.is_installed and :new.is_installed = 'Y' then 
    pbo_iinv.install_doc_serial_range(:new.docser_id, :new.id, :new.minval, :new.maxval);
  end if;

  if :new.is_installed <> :old.is_installed and :new.is_installed = 'N' then 
    pbo_iinv.uninstall_doc_serial_range( :new.id );
  end if;
    
end;
/
