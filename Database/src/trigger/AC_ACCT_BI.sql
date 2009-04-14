create or replace trigger AC_ACCT_BI before insert on AC_ACCT
for each row
begin
  if :new.id is null then
    select SEQ_ACCT_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/
