create or replace trigger INV_DOC_TYPE_BI before insert on RINV_DOC_TYPE
for each row
begin
  if :new.id is null then
    select SEQ_INVDOCTYPE_ID.nextval into :new.id from dual;
  end if;
end;
/
