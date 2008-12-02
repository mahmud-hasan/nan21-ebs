create or replace trigger ACCOUNTING_YEAR_BI before insert on ACCOUNTING_YEAR
for each row
begin
  if :new.id is null then
    select SEQ_ACCYEAR_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/
