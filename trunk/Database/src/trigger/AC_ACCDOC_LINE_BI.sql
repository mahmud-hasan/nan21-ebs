create or replace trigger AC_ACCDOC_LINE_BI before insert on AC_ACCDOC_LINE
for each row
begin
  if pbo_acc.is_posted(:new.accdoc_id) = 'Y' then
  	raise_error('CantUpdPostedDoc');
  end if;
  if :new.id is null then
    select SEQ_ACCDOCLIN_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/
