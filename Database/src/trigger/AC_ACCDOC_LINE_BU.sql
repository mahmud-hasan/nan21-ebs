create or replace trigger AC_ACCDOC_LINE_BU before update on AC_ACCDOC_LINE
for each row
begin
  if pbo_acc.is_posted(:new.accdoc_id) = 'Y' then
  	raise_error('CantUpdPostedDoc');
  end if;
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
