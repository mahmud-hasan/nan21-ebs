create or replace trigger RINVOICE_ITEM_BU before update on RINVOICE_ITEM
for each row
begin
  if pk_rinv.is_posted(:new.rinv_id) then
    raise_error('CantUpdPostedDoc');
  end if;

  if :new.modifiedon is null then
    :new.modifiedon := sysdate;
  end if;
  if :new.modifiedby is null then
    :new.modifiedby := pk_session.getUser;
  end if;

end;
/
