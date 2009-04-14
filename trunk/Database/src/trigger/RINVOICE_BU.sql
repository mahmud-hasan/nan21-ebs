create or replace trigger RINVOICE_BU before update on RINVOICE for each row
begin
   
  -- validate 
  
  
  if :new.is_inserted = 'Y' and :old.is_inserted = 'N' then
    :new.insertedon := sysdate;
    :new.insertedby := pk_session.getUser;  
  end if;
  
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;  
   
end;
/
