create or replace trigger BANK_BI before insert on BANK
for each row
begin
  if :new.id is null then
    select SEQ_BANK_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser();
  :new.modifiedby := pk_session.getUser();
end;
/
