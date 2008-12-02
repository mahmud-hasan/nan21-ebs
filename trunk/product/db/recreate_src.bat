@ECHO OFF
@Title Nan21 eBusiness Suite - Recreate source 
echo *******************************************************************
echo * Nan21 eBusiness Suite
echo * Recreates the source code for :
echo *  - procedures
echo *  - functions
echo *  - triggers
echo *  - packages
echo *  - views 
echo * Database user must be already created at this point!  
echo *  If it does not exist yet, run create_user.bat utility.
echo *  
echo * Specify DB user which will be the owner of the objects when prompted
echo * 
echo *******************************************************************


 
SET /P N21EBS_DB_USER=Enter DB username:
SET /P N21EBS_DB_PSWD=Enter DB user password:
SET /P N21EBS_DB_SID=Enter DB service name (SID):


 
echo Connection string: %N21EBS_DB_USER%/%N21EBS_DB_PSWD%@%N21EBS_DB_SID%

 

sqlplus %N21EBS_DB_USER%/%N21EBS_DB_PSWD%@%N21EBS_DB_SID%  @recreate_src.sql




pause
