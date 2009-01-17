create or replace trigger MM_MOVEMENT_IN_DOC_BU before update on MM_MOVEMENT_IN_DOC
for each row
begin
  
  -- validation flags checked
  if :new.qty_check = 'Y' and :old.qty_check = 'N' then 
    :new.qty_check_by := pk_session.getUser;
    :new.qty_check_on := sysdate;
  end if;
  
  if  :new.quality_check = 'Y' and :old.quality_check = 'N' then 
    :new.quality_check_by := pk_session.getUser;
    :new.quality_check_on := sysdate;
  end if;
  
  if  :new.value_check = 'Y' and :old.value_check = 'N' then 
    :new.value_check_by := pk_session.getUser;
    :new.value_check_on := sysdate;
  end if;
  
  -- validation flags un-checked
  if :new.qty_check = 'N' and :old.qty_check = 'Y' then 
    :new.qty_check_by := null;
    :new.qty_check_on := null;
  end if;
  
  if  :new.quality_check = 'N' and :old.quality_check = 'Y' then 
    :new.quality_check_by := null;
    :new.quality_check_on := null;
  end if;
  
  if  :new.value_check = 'N' and :old.value_check = 'Y' then 
    :new.value_check_by := null;
    :new.value_check_on := null;
  end if;
  
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/
