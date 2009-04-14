create or replace force view V_DOC_SERIAL_NO as
select
	  dsn.id
   ,dsn.client_id
   ,c.code client_code
   ,ds.document_type
   ,ds.serial
   ,dsr.minval
   ,dsr.maxval
   ,dsn.value
   ,dsn.is_allocated
  from document_serial ds, document_serial_no dsn, document_serial_range dsr, client c
 where ds.id = dsn.docser_id
   and dsr.docser_id = dsn.docser_id
   and dsr.id = dsn.docserrng_id
   and ds.client_id = c.id
/
