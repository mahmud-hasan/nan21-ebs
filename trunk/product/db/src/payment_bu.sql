create or replace trigger PAYMENT_BU before update on PAYMENT
for each row
begin

  -- validate   
  if :old.is_posted = 'Y' and :new.is_posted = 'Y' then
  	raise_error('CannotChangePostedDocument.');
  end if;
  
 
  -- un post document, i.e delete accounting document and accruals
  if :old.is_posted = 'Y' and :new.is_posted = 'N' then
  	delete from accounting_doc where id = :old.accdoc_id;
    :new.accdoc_id := null;
    :new.postedon  := null;
    :new.postedby  := null;
  end if;  
  
  

  -- post document, i.e create accounting document and accruals
  if :old.is_posted = 'N' and :new.is_posted = 'Y' then
  	if :old.is_inserted = 'N' or :old.is_approved = 'N'  then
  		raise_error('Nu pot inregistra un document care nu a fost marcat Introdus sau nu a fost Aprobat');
  	end if;
    
    declare
      vr_rec payment%rowtype;
    begin
      vr_rec.id := :new.id;
      vr_rec.client_id := :new.client_id;
      vr_rec.paydoctype_code := :new.paydoctype_code;
      vr_rec.doc_no := :new.doc_no;
      vr_rec.doc_date := :new.doc_date;
      vr_rec.bpartner_from := :new.bpartner_from;
      vr_rec.bpartner_to := :new.bpartner_to;
      vr_rec.is_payable := :new.is_payable;
      vr_rec.is_receivable := :new.is_receivable;
      vr_rec.amount := :new.amount;
      vr_rec.currency := :new.currency;
      vr_rec.notes := :new.notes;
      vr_rec.createdon := :new.createdon;
      vr_rec.createdby := :new.createdby;
      vr_rec.modifiedon := :new.modifiedon;
      vr_rec.modifiedby := :new.modifiedby;
      vr_rec.paymnt_acct := :new.paymnt_acct;
      vr_rec.is_inserted := :new.is_inserted;
      vr_rec.is_generated := :new.is_generated;
      vr_rec.is_approved := :new.is_approved;
      vr_rec.is_posted := :new.is_posted;
      vr_rec.accdoc_id := :new.accdoc_id;
      vr_rec.is_prepayment := :new.is_prepayment;
      vr_rec.prepay_acct := :new.prepay_acct;
      vr_rec.rinv_id := :new.rinv_id;
      vr_rec.is_multi_payment := :new.is_multi_payment;
      vr_rec.iinv_id := :new.iinv_id;

      pk_payment.post_payment(vr_rec, :new.accdoc_id);
      :new.postedby := pk_session.getUser;
      :new.postedon := sysdate;
    end;
  end if;  
  
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/

