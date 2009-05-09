
@@ddl_triggers.sql
@@ddl_functions.sql
@@ddl_procedures.sql
@@ddl_views.sql
@@run_pck.sql

prompt Recompiling schema objects...
exec dbms_utility.compile_schema(user);
exit;
    