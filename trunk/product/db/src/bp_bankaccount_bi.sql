create or replace trigger BP_BANKACCOUNT_BI before insert on BP_BANKACCOUNT
for each row
begin
  if :new.id is null then
    select SEQ_BPBANKACCT_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/

