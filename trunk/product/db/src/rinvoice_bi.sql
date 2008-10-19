create or replace trigger RINVOICE_BI before insert on RINVOICE
for each row
begin
  
  if :new.id is null then
    select SEQ_RINV_ID.nextval into :new.id from dual;
  end if;
  
  if :new.acct is null then
    -- get default liability account for default accounting schema
    :new.acct := pk_rinv.get_doc_charge_acct(:new.client_id, pk_acc.get_def_accschema_id(:new.client_id),:new.issuer_id);                                     
  end if;
  
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/

