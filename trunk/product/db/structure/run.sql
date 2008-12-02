
spool run.log

prompt Creating tables...
@@tables.sql

prompt Creating foreign keys...
@@ref_constraints.sql

prompt Creating sequences...
@@sequences.sql

prompt Creating comments...
@@comments.sql

spool off

