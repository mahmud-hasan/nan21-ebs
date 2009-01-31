create or replace trigger RINVOICE_ITEM_BU before update on RINVOICE_ITEM
for each row
begin

  if :new.price is null and ( :new.net_amount is not null and :new.quantity is not null) then 
    :new.price := :new.net_amount/:new.quantity;  
  end if;
  
  if :new.modifiedon is null then
    :new.modifiedon := sysdate;
  end if;
  if :new.modifiedby is null then
    :new.modifiedby := pk_session.getUser;
  end if;

end;
/
