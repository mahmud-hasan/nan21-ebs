
@@structure\run.sql
@@src\procedure\run.sql
@@src\function\run.sql
@@src\package\run.sql
@@src\trigger\run.sql
@@src\view\run.sql
prompt Recompiling schema objects...
exec dbms_utility.compile_schema(user);
exit;
