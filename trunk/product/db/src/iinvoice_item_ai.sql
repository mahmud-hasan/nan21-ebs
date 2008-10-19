create or replace trigger IINVOICE_ITEM_AI after insert on IINVOICE_ITEM
for each row
begin
  	update iinvoice set 
       total_net_amount = total_net_amount + :new.net_amount
      ,total_tax_amount = total_tax_amount + :new.tax_amount      
    where id = :new.iinv_id;  
end;
/

