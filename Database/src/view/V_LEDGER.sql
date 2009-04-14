create or replace force view V_LEDGER as
select
    am.posting_date posting_date
   ,am.client_id
   ,ad.doc_no accdoc_no
   ,ad.doc_date accdoc_date
   ,ad.basedoc_type
   ,ad.basedoc_no
   ,ad.basedoc_date
   ,ad.basedoc_id
   ,decode(ad.basedoc_type
               ,'RINV', pk_rinv.get_fulldocno_by_id(ad.basedoc_id)
               ,'IINV', pk_iinv.get_fulldocno_by_id(ad.basedoc_id)
               ,'PAYM', pk_payment.get_fulldocno_by_id(ad.basedoc_id)
               , '' ) document
   ,decode(ad.basedoc_type
               ,'RINV', pk_rinv.get_bp_name_by_id(ad.basedoc_id)
               ,'IINV', pk_iinv.get_bp_name_by_id(ad.basedoc_id)
               ,'PAYM', pk_payment.get_bp_name_by_id(ad.basedoc_id)
               , '' ) bpartner
   ,am.db_acct
   ,am.cr_acct
   ,am.db_amount
   ,am.cr_amount
  from account_movement am, accounting_doc ad, accounting_doc_line adl
 where am.accdoc_id = ad.id
   and am.accdoclin_id = adl.id
/
