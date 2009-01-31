create or replace trigger IINVOICE_BU before update on IINVOICE
for each row
begin

 
  
  -- validate invoice when marking as inserted  
  if :old.is_inserted = 'N' and :new.is_inserted = 'Y' then
    declare
      v_net number;
      v_tax number;
    begin
      if pbo_iinv.get_doc_line_count(:new.id) = 0 then
      	raise_error('DocHasNoLines');
      end if;
      pbo_iinv.calc_inv_amounts(:new.id, v_net, v_tax);
      dbms_output.put_line(v_net ||v_tax);
      if v_net <> :new.total_net_amount or v_tax <> :new.total_tax_amount then
      	raise_error('DocAmountsMismatch');
      end if;
    end;  	
  end if;
  
 
  
  -- amounts
  if :new.total_net_amount is null then
  	:new.total_net_amount := 0;
  end if;
  if :new.total_tax_amount is null then
  	:new.total_tax_amount := 0;
  end if;
  if nvl(:new.total_net_amount,0) <> nvl(:old.total_net_amount,0) or 
     nvl(:new.total_tax_amount,0) <> nvl(:old.total_tax_amount,0) or 
     nvl(:new.total_amount,0) <> nvl(:old.total_amount,0) then
  	:new.total_amount := nvl(:new.total_net_amount,0) + nvl(:new.total_tax_amount,0) ;
  end if;
  
  
  if :new.is_inserted = 'Y' and :old.is_inserted = 'N' then
    :new.insertedon := sysdate;
    :new.insertedby := pk_session.getUser;  
  end if;
    
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
