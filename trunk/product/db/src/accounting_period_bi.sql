create or replace trigger ACCOUNTING_PERIOD_BI before insert on ACCOUNTING_PERIOD
for each row
begin
  if :new.id is null then
    select SEQ_ACCPERIOD_ID.nextval into :new.id from dual;
  end if;
  
  :new.opened := 'N';
  :new.closed := 'N';
  
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/

