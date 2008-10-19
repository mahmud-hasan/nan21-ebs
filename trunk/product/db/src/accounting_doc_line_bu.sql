create or replace trigger ACCOUNTING_DOC_LINE_BU before update on ACCOUNTING_DOC_LINE
for each row
begin
  if pk_acc.is_posted(:new.accdoc_id) then
  	raise_error('CantUpdPostedDoc');
  end if;
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/

