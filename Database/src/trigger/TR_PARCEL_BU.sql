create or replace trigger TR_PARCEL_BU before update on TR_PARCEL
for each row
begin

  if :new.rejected = 'N' and :old.rejected = 'Y' then
    :new.reject_date := null;
    :new.reject_reason := null;
    :new.reject_reason_code := null;
    :new.rejected_by_name := null;
    :new.rejected_by_ident := null;
  end if;

  if :new.delivered = 'N' and :old.delivered = 'Y' then
    :new.delivery_date := null;
    :new.delivered_to_name := null;
    :new.delivered_to_ident := null;
  end if;

  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
