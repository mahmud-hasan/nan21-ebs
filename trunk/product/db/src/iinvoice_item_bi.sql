create or replace trigger IINVOICE_ITEM_BI before insert on IINVOICE_ITEM
for each row
begin
  if :new.id is null then
    select SEQ_IINVITEM_ID.nextval into :new.id from dual;
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

