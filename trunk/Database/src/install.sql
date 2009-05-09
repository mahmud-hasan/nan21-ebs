
@@ddl_tables.sql 
@@ddl_keys.sql
@@ddl_chkeys.sql
@@ddl_refkeys.sql
@@ddl_sequences.sql
@@ddl_functions.sql
@@ddl_procedures.sql
@@ddl_pck_sgn.sql
@@ddl_views.sql
@@run_pck.sql
@@ddl_triggers.sql

prompt Recompiling schema objects...
exec dbms_utility.compile_schema(user);
exit;
    