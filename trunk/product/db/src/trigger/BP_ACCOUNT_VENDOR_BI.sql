create or replace trigger BP_ACCOUNT_VENDOR_BI before insert on BP_ACCOUNT_VENDOR
for each row
begin
  if :new.id is null then
    select SEQ_BPACCVEND_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/
