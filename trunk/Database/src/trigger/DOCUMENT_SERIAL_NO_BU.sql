create or replace trigger DOCUMENT_SERIAL_NO_BU
before update of ID, CLIENT_ID, DOCSER_ID, DOCSERRNG_ID, VALUE
on DOCUMENT_SERIAL_NO
for each row
begin
  raise_error('CantUpdateDocserno');
end;
/
