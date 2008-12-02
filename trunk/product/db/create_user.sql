-- Create the user
set echo off

accept user_name default NAN21 prompt 'Enter application owner schema (Default NAN21):'

create user &user_name identified by &user_name
  default tablespace USERS
  temporary tablespace TEMP
  profile DEFAULT;

GRANT CONNECT, RESOURCE TO &user_name;

GRANT CREATE TABLE TO &user_name;
GRANT CREATE TRIGGER TO &user_name;
GRANT CREATE SESSION TO &user_name;
GRANT CREATE ROLLBACK SEGMENT TO &user_name;
GRANT CREATE JOB TO &user_name;
GRANT CREATE SEQUENCE TO &user_name;
GRANT CREATE TYPE TO &user_name;
GRANT CREATE VIEW TO &user_name;
GRANT CREATE PROCEDURE TO &user_name;
GRANT DEBUG CONNECT SESSION TO &user_name;
exit;