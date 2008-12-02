create or replace trigger IINVOICE_ITEM_BU before update on IINVOICE_ITEM
for each row
begin
  if pk_iinv.is_posted(:new.iinv_id) then
  	raise_error('CantUpdPostedDoc');
  end if;
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
