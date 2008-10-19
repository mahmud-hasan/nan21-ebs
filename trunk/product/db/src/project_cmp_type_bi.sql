create or replace trigger PROJECT_CMP_TYPE_BI before insert on PROJECT_CMP_TYPE
for each row
begin
  if :new.id is null then
    select SEQ_PRJCMPTYP_ID.nextval into :new.id from dual;
  end if;
end;
/

