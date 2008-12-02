create or replace trigger SYS_PARAM_VALUE_BI before insert on SYS_PARAM_VALUE
for each row
begin
  if :new.id is null then
    select SEQ_SYSPRMVAL_ID.nextval into :new.id from dual;
  end if;
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
