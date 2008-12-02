@ECHO OFF
@TITLE Nan21 eBusiness Suite. Create database user.

echo *******************************************************************
echo *
echo * Create the database user which will be the owner of the database objects
echo * 
echo * Enter the connection string to your Oracle database instance where you
echo * want to be created the application schema, specifing an existing 
echo * user which has the proper rights to create user 
echo * and grant necessary roles (for ex: SYSTEM)
echo *
echo *******************************************************************

  
 

SET /P cstring=Enter connection string(ex: SYSTEM/password@SID)  

sqlplus %cstring% @create_user.sql

echo Done

pause