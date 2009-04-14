create or replace trigger PAYMENT_BI before insert on PAYMENT
for each row
begin
  if :new.id is null then
    select SEQ_PAYMENT_ID.nextval into :new.id from dual;
  end if;
  if :new.is_payable is null then
    :new.is_payable := 'N';
  end if;  
  if :new.is_receivable is null then
    :new.is_receivable := 'N';
  end if; 
 
  
    
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/
