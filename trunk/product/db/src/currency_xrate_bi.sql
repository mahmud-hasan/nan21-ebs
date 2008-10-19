create or replace trigger CURRENCY_XRATE_BI before insert on CURRENCY_XRATE
for each row
begin
  if :new.id is null then
    select SEQ_CRNCYXRATE_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/

