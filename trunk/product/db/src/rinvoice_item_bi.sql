create or replace trigger RINVOICE_ITEM_BI before insert on RINVOICE_ITEM
for each row
begin
  if pk_rinv.is_posted(:new.rinv_id) then
    raise_error('CantUpdPostedDoc');
  end if;

  if :new.id is null then
    select SEQ_RINVITEM_ID.nextval into :new.id from dual;
  end if;
  if :new.createdon is null then
    :new.createdon := sysdate;
  end if;
  if :new.modifiedon is null then
    :new.modifiedon := sysdate;
  end if;
  if :new.createdby is null then
    :new.createdby := pk_session.getUser;
  end if;
  if :new.modifiedby is null then
    :new.modifiedby := pk_session.getUser;
  end if;
end;
/

