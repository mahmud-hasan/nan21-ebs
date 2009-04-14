create or replace trigger ORG_ATTR_BI before insert on ORG_ATTR
for each row
begin
  if :new.id is null then
    select SEQ_ORGATTR_ID.nextval into :new.id from dual;
  end if;
end;
/
