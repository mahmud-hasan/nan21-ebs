create or replace force view V_ORCL_SESSION as
select
   s.saddr
  ,s.sid
  ,s.serial#     serial_
  ,s.audsid
  ,s.paddr
  ,s.user#       user_
  ,s.username
  ,s.command
  ,s.ownerid
  ,s.taddr
  ,s.lockwait
  ,s.status
  ,s.server
  ,s.schema#   schema_
  ,s.schemaname
  ,s.osuser
  ,s.process
  ,s.machine
  ,s.terminal
  ,s.program
  ,s.type
  ,s.sql_address
  ,s.sql_hash_value
  ,s.sql_id
  ,s.module
  ,s.logon_time
  ,s.action
  ,s.client_info
  ,s.blocking_session_status


  /*,s.sql_child_number
  ,s.prev_sql_addr
  ,s.prev_hash_value
  ,s.prev_sql_id
  ,s.prev_child_number

  ,s.module_hash

  ,s.action_hash

  ,s.fixed_table_sequence
  ,s.row_wait_obj#           row_wait_obj_
  ,s.row_wait_file#          row_wait_file_
  ,s.row_wait_block#         row_wait_block_
  ,s.row_wait_row#           row_wait_row_

  ,s.last_call_et
  ,s.pdml_enabled
  ,s.failover_type
  ,s.failover_method
  ,s.failed_over
  ,s.resource_consumer_group
  ,s.pdml_status
  ,s.pddl_status
  ,s.pq_status
  ,s.current_queue_duration
  ,s.client_identifier

  ,s.blocking_instance
  ,s.blocking_session
  ,s.seq#                     seq_
  ,s.event#                   event_
  ,s.event
  ,s.p1text
  ,s.p1
  ,s.p1raw
  ,s.p2text
  ,s.p2
  ,s.p2raw
  ,s.p3text
  ,s.p3
  ,s.p3raw
  */
  ,s.wait_class_id
  ,s.wait_class#                 wait_class_
  ,s.wait_class
  ,s.wait_time
  ,s.seconds_in_wait
  ,s.state
  ,s.service_name
  ,s.sql_trace
  ,s.sql_trace_waits
  ,s.sql_trace_binds
  ,sq.SQL_FULLTEXT sql_text
from v$session s, v$sql sq
 where s.SQL_ID = sq.SQL_ID(+)
/
