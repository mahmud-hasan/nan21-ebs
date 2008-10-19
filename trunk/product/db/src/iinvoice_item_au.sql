create or replace trigger IINVOICE_ITEM_AU after update on IINVOICE_ITEM
for each row
begin
  if :old.net_amount <> :new.net_amount or 
     :old.tax_amount <> :new.tax_amount then
  	update iinvoice set 
       total_net_amount = total_net_amount - :old.net_amount + :new.net_amount
      ,total_tax_amount = total_tax_amount - :old.tax_amount + :new.tax_amount
    where id = :new.iinv_id;  
  end if;
end;
/

