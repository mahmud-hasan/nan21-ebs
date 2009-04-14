create or replace trigger UOM_TYPE_BI before insert on UOM_TYPE
for each row
begin
  if :new.id is null then
    select SEQ_UOMTYPE_ID.nextval into :new.id from dual;
  end if;
end;
/
