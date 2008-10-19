create or replace trigger RINVOICE_BU before update on RINVOICE for each row
begin
   
  -- validate 
  
  if :old.is_posted = 'Y' and :new.is_posted = 'Y' then
  	raise_error('CantUpdPostedDoc');
  end if;
  
  if :old.is_inserted = 'N' and :new.is_posted = 'Y' then
		raise_error('CantPostNewInv');
	end if;
  


  if :new.acct is null then
    -- get default liability account for default accounting schema
    :new.acct := pk_rinv.get_doc_charge_acct(:new.client_id, pk_acc.get_def_accschema_id(:new.client_id),:new.receiver_id);                                     
  end if;
  
   -- un post invoice, i.e delete accounting document and accruals
  if :old.is_posted = 'Y' and :new.is_posted = 'N' then
  	delete from accounting_doc where id = :old.accdoc_id;
    :new.accdoc_id := null;
    :new.postedon  := null;
    :new.postedby  := null;
  end if;
   
  
  -- post invoice, i.e create accounting document and accruals
  if :old.is_posted = 'N' and :new.is_posted = 'Y' then
  	
    declare
      vr_rec rinvoice%rowtype;
    begin
      vr_rec.id := :new.id;
      vr_rec.doc_no := :new.doc_no;
      vr_rec.doc_date := :new.doc_date;
      vr_rec.client_id := :new.client_id;
      vr_rec.doc_type := :new.doc_type;
      vr_rec.doc_currency := :new.doc_currency;
      vr_rec.total_net_amount := :new.total_net_amount;
      vr_rec.total_tax_amount := :new.total_tax_amount;
      vr_rec.total_amount := :new.total_amount;
      vr_rec.createdon := :new.createdon;
      vr_rec.createdby := :new.createdby;
      vr_rec.modifiedon := :new.modifiedon;
      vr_rec.modifiedby := :new.modifiedby;
      vr_rec.issuer_id := :new.issuer_id;
      vr_rec.receiver_id := :new.receiver_id;
      vr_rec.due_date := :new.due_date;
      vr_rec.is_inserted := :new.is_inserted;
      vr_rec.is_payable := :new.is_payable;
      vr_rec.is_payed := :new.is_payed;
      vr_rec.is_posted := :new.is_posted;
      vr_rec.acct := :new.acct;
      vr_rec.postedon := :new.postedon;
      vr_rec.postedby := :new.postedby;
      vr_rec.accdoc_id := :new.accdoc_id;
      vr_rec.ref_rinvoice_id := :new.ref_rinvoice_id;
      vr_rec.notes := :new.notes;

      pk_rinv.post_rinv(vr_rec, :new.accdoc_id);
      :new.postedby := user;
      :new.postedon := sysdate;
    end;
  end if;  
  
  if :new.is_inserted = 'Y' and :old.is_inserted = 'N' then
    :new.insertedon := sysdate;
    :new.insertedby := pk_session.getUser;  
  end if;
  
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;  
   
end;
/

