create or replace trigger IINVOICE_BU before update on IINVOICE
for each row
begin

  -- validate 
  
  if :old.is_posted = 'Y' and :new.is_posted = 'Y' then
  	raise_error('CantUpdPostedDoc');
  end if;
  
  if :old.is_inserted = 'N' and :new.is_posted = 'Y' then
		raise_error('CantPostNewInv');
	end if;
  
  -- validate invoice when marking as inserted  
  if :old.is_inserted = 'N' and :new.is_inserted = 'Y' then
    declare
      v_net number;
      v_tax number;
    begin
      if pk_iinv.get_doc_line_count(:new.id) = 0 then
      	raise_error('DocHasNoLines');
      end if;
      pk_iinv.calc_inv_amounts(:new.id, v_net, v_tax);
      dbms_output.put_line(v_net ||v_tax);
      if v_net <> :new.total_net_amount or v_tax <> :new.total_tax_amount then
      	raise_error('DocAmountsMismatch');
      end if;
    end;  	
  end if;
  
  if :new.acct is null then
    -- get default revenue account for default accounting schema
    :new.acct := pk_iinv.get_doc_charge_acct(:new.client_id, pk_acc.get_def_accschema_id(:new.client_id),:new.receiver_id);                                     
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
      vr_rec iinvoice%rowtype;
    begin
      vr_rec.id                := :new.id                   ;       
      vr_rec.doc_date          := :new.doc_date             ;       
      vr_rec.doc_no            := :new.doc_no               ;       
      vr_rec.client_id         := :new.client_id            ;       
      vr_rec.issuer_id         := :new.issuer_id            ;       
      vr_rec.receiver_id       := :new.receiver_id          ;       
      vr_rec.payby_id          := :new.payby_id             ;       
      vr_rec.doc_type          := :new.doc_type             ;       
      vr_rec.inv_status        := :new.inv_status           ;       
      vr_rec.doc_currency      := :new.doc_currency         ;       
      vr_rec.transtype_code    := :new.transtype_code       ;       
      vr_rec.due_date          := :new.due_date             ;       
      vr_rec.inv_line_count    := :new.inv_line_count       ;       
      vr_rec.ref_iinv_id       := :new.ref_iinv_id          ;       
      vr_rec.ref_iinv_doc_no   := :new.ref_iinv_doc_no      ;       
      vr_rec.order_id          := :new.order_id             ;       
      vr_rec.total_net_amount  := :new.total_net_amount     ;       
      vr_rec.total_tax_amount  := :new.total_tax_amount     ;       
      vr_rec.total_amount      := :new.total_amount         ;       
      vr_rec.createdon         := :new.createdon            ;       
      vr_rec.createdby         := :new.createdby            ;       
      vr_rec.modifiedon        := :new.modifiedon           ;       
      vr_rec.modifiedby        := :new.modifiedby           ;       
      vr_rec.is_printed        := :new.is_printed           ;       
      vr_rec.notes             := :new.notes                ;       
      vr_rec.currency_xrate    := :new.currency_xrate       ;       
      vr_rec.doc_no_serial     := :new.doc_no_serial        ;       
      vr_rec.is_posted         := :new.is_posted            ;       
      vr_rec.vat_rate          := :new.vat_rate             ;       
      vr_rec.is_inserted       := :new.is_inserted          ;       
      vr_rec.acct              := :new.acct                 ;       
      vr_rec.postedon          := :new.postedon             ;       
      vr_rec.postedby          := :new.postedby             ;       
      vr_rec.accdoc_id         := :new.accdoc_id            ;
      pk_iinv.post_iinv(vr_rec, :new.accdoc_id);
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

