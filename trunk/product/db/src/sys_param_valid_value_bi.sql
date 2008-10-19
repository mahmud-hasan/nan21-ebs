create or replace trigger SYS_PARAM_VALID_VALUE_BI before insert on SYS_PARAM_VALID_VALUE
for each row
begin
  if :new.id is null then
    select SEQ_PARAMVLDVAL_ID.nextval into :new.id from dual;
  end if;
end;
/

