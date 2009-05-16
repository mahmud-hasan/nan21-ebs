prompt Creating table AC_ACCDOC...                                                                  
create table AC_ACCDOC(                                                                             
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,ACCPERIOD_ID VARCHAR2(32) NOT NULL                                                               
  ,DOC_NO NUMBER(10,0) NOT NULL                                                                     
  ,DOC_DATE DATE NOT NULL                                                                           
  ,BASEDOC_TYPE VARCHAR2(32)                                                                        
  ,BASEDOC_NO VARCHAR2(32)                                                                          
  ,BASEDOC_DATE DATE                                                                                
  ,BASEDOC_ID NUMBER(10,0)                                                                          
  ,NOTES VARCHAR2(255)                                                                              
  ,IS_GENERATED CHAR(1) DEFAULT 'N' NOT NULL                                                        
  ,IS_INSERTED CHAR(1) DEFAULT 'N' NOT NULL                                                         
  ,IS_POSTED CHAR(1) DEFAULT 'N' NOT NULL                                                           
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,POSTEDON DATE                                                                                    
  ,POSTEDBY VARCHAR2(16)                                                                            
  ,ACCSCHEMA_ID NUMBER(10,0) NOT NULL                                                               
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table AC_ACCDOC_LINE...                                                             
create table AC_ACCDOC_LINE(                                                                        
  ID NUMBER(10,0) NOT NULL                                                                          
  ,ACCDOC_ID NUMBER(10,0) NOT NULL                                                                  
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,DB_ACCT VARCHAR2(16)                                                                             
  ,CR_ACCT VARCHAR2(16)                                                                             
  ,DB_AMOUNT NUMBER(22,6) DEFAULT 0 NOT NULL                                                        
  ,CR_AMOUNT NUMBER(22,6) DEFAULT 0 NOT NULL                                                        
  ,CURRENCY VARCHAR2(4) NOT NULL                                                                    
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,NOTES VARCHAR2(255)                                                                              
  ,IS_GENERATED CHAR(1) DEFAULT 'N' NOT NULL                                                        
  ,ORIG_AMOUNT NUMBER(22,6)                                                                         
  ,ORIG_CURRENCY VARCHAR2(4)                                                                        
  ,XRATE NUMBER(22,6)                                                                               
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table AC_ACCSCHEMA...                                                               
create table AC_ACCSCHEMA(                                                                          
  ID NUMBER(10,0) NOT NULL                                                                          
  ,NAME VARCHAR2(32) NOT NULL                                                                       
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table AC_ACCSCHEMA_ACCT...                                                          
create table AC_ACCSCHEMA_ACCT(                                                                     
  ID NUMBER(10,0) NOT NULL                                                                          
  ,ACCSCHEMA_ID NUMBER(10,0) NOT NULL                                                               
  ,ACCOUNT VARCHAR2(32) NOT NULL                                                                    
  ,NAME VARCHAR2(128) NOT NULL                                                                      
  ,PARENT_ID NUMBER(10,0)                                                                           
  ,ACCTGRP_ID NUMBER(10,0) NOT NULL                                                                 
  ,CREATEDON DATE DEFAULT sysdate NOT NULL                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE DEFAULT sysdate NOT NULL                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table AC_ACCSCHEMA_PARAM...                                                         
create table AC_ACCSCHEMA_PARAM(                                                                    
  ID NUMBER(10,0) NOT NULL                                                                          
  ,NAME VARCHAR2(32) NOT NULL                                                                       
  ,DESCRIPTION VARCHAR2(4000) NOT NULL                                                              
  ,CREATEDON DATE DEFAULT sysdate NOT NULL                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE DEFAULT sysdate NOT NULL                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,IS_ACCOUNT CHAR(1) DEFAULT 'N'                                                                   
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table AC_ACCSCHEMA_PARAM_VAL...                                                     
create table AC_ACCSCHEMA_PARAM_VAL(                                                                
  ID NUMBER(10,0) NOT NULL                                                                          
  ,ACCSCHEMA_ID NUMBER(10,0) NOT NULL                                                               
  ,ACCSCHEMAPARAM_ID NUMBER(10,0) NOT NULL                                                          
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,PARAM_VAL VARCHAR2(255) NOT NULL                                                                 
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table AC_ACCT...                                                                    
create table AC_ACCT(                                                                               
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CLIENT_ID NUMBER(10,0) DEFAULT 1 NOT NULL                                                        
  ,ACCOUNT VARCHAR2(32) NOT NULL                                                                    
  ,NAME VARCHAR2(128) NOT NULL                                                                      
  ,SUMMARY CHAR(1)                                                                                  
  ,PARENT_ACCOUNT VARCHAR2(32)                                                                      
  ,CURRENCY VARCHAR2(4)                                                                             
  ,DESCRIPTION VARCHAR2(255)                                                                        
  ,ACTIVE CHAR(1) DEFAULT 'N' NOT NULL                                                              
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,ACCJOURNAL_ID NUMBER(10,0)                                                                       
  ,ACCTGRP_ID NUMBER(10,0)                                                                          
  ,ACCSCHEMA_ID NUMBER(10,0) NOT NULL                                                               
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table AC_ACCT_BALANCE...                                                            
create table AC_ACCT_BALANCE(                                                                       
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,ACCSCHEMA_ID NUMBER(10,0) NOT NULL                                                               
  ,ACCPERIOD_ID NUMBER(10,0) NOT NULL                                                               
  ,ACCOUNT VARCHAR2(32) NOT NULL                                                                    
  ,OPEN_BALANCE NUMBER(22,6) NOT NULL                                                               
  ,CLOSE_BALANCE NUMBER(22,6) NOT NULL                                                              
  ,TOTAL_CR NUMBER(22,6) NOT NULL                                                                   
  ,TOTAL_DB NUMBER(22,6) NOT NULL                                                                   
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table AC_ACCT_GRP...                                                                
create table AC_ACCT_GRP(                                                                           
  ID NUMBER(10,0) NOT NULL                                                                          
  ,ACCSCHEMA_ID NUMBER(10,0) NOT NULL                                                               
  ,CODE VARCHAR2(4) NOT NULL                                                                        
  ,NAME VARCHAR2(32) NOT NULL                                                                       
  ,CREATEDON DATE DEFAULT sysdate NOT NULL                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE DEFAULT sysdate NOT NULL                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table AC_ACCT_MOVEMENT...                                                           
create table AC_ACCT_MOVEMENT(                                                                      
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,POSTING_DATE DATE NOT NULL                                                                       
  ,ACCDOC_ID NUMBER(10,0) NOT NULL                                                                  
  ,ACCDOCLIN_ID NUMBER(10,0) NOT NULL                                                               
  ,CR_ACCT VARCHAR2(16) NOT NULL                                                                    
  ,DB_ACCT VARCHAR2(16) NOT NULL                                                                    
  ,CR_AMOUNT NUMBER(22,6) DEFAULT 0 NOT NULL                                                        
  ,DB_AMOUNT NUMBER(22,6) DEFAULT 0 NOT NULL                                                        
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,ACCSCHEMA_ID NUMBER(10,0) NOT NULL                                                               
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table AC_ACC_JOURNAL...                                                             
create table AC_ACC_JOURNAL(                                                                        
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,NAME VARCHAR2(64) NOT NULL                                                                       
  ,DESCRIPTION VARCHAR2(255) NOT NULL                                                               
  ,ACCSCHEMA_ID NUMBER(10,0) NOT NULL                                                               
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table AC_ACC_PERIOD...                                                              
create table AC_ACC_PERIOD(                                                                         
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,ACCYEAR_CODE VARCHAR2(16) NOT NULL                                                               
  ,CODE VARCHAR2(32) NOT NULL                                                                       
  ,STARTDATE DATE NOT NULL                                                                          
  ,ENDDATE DATE NOT NULL                                                                            
  ,CLOSED CHAR(1) DEFAULT 'N' NOT NULL                                                              
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,PREV_PERIOD_NAME VARCHAR2(32)                                                                    
  ,NOTES VARCHAR2(255)                                                                              
  ,PERIODTYPE VARCHAR2(1)                                                                           
  ,PROCESSING VARCHAR2(1)                                                                           
  ,OPENED CHAR(1) DEFAULT 'N' NOT NULL                                                              
  ,IS_FIRST_PERIOD CHAR(1) DEFAULT 'N' NOT NULL                                                     
  ,NAME VARCHAR2(64) NOT NULL                                                                       
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table AC_ACC_YEAR...                                                                
create table AC_ACC_YEAR(                                                                           
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,STARTDATE DATE NOT NULL                                                                          
  ,ENDDATE DATE NOT NULL                                                                            
  ,PREV_YEAR_CODE VARCHAR2(4)                                                                       
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,NOTES VARCHAR2(255)                                                                              
  ,CLOSED CHAR(1) DEFAULT 'N' NOT NULL                                                              
  ,OPENED CHAR(1) DEFAULT 'N' NOT NULL                                                              
  ,IS_FIRST_YEAR CHAR(1) DEFAULT 'N' NOT NULL                                                       
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table AC_CLIACCSCHEMA_PARAMACCT...                                                  
create table AC_CLIACCSCHEMA_PARAMACCT(                                                             
  ID NUMBER(10,0) NOT NULL                                                                          
  ,ACCSCHEMA_ID NUMBER(10,0) NOT NULL                                                               
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,ACCSCHEMAPARAM_ID NUMBER(10,0) NOT NULL                                                          
  ,PARAM_ACCT_ID NUMBER(10,0) NOT NULL                                                              
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table AC_CLIACCSCHEMA_PARAMVAL...                                                   
create table AC_CLIACCSCHEMA_PARAMVAL(                                                              
  ID NUMBER(10,0) NOT NULL                                                                          
  ,ACCSCHEMA_ID NUMBER(10,0) NOT NULL                                                               
  ,ACCSCHEMAPARAM_ID NUMBER(10,0) NOT NULL                                                          
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,PARAM_VAL VARCHAR2(255) NOT NULL                                                                 
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table AC_CLIENT_ACCSCHEMA...                                                        
create table AC_CLIENT_ACCSCHEMA(                                                                   
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,ACCSCHEMA_ID NUMBER(10,0) NOT NULL                                                               
  ,CREATEDON DATE DEFAULT sysdate NOT NULL                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE DEFAULT sysdate NOT NULL                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,IS_DEFAULT CHAR(1) DEFAULT 'N' NOT NULL                                                          
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table APP_DATA_TYPE...                                                              
create table APP_DATA_TYPE(                                                                         
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,IS_DEFAULT CHAR(1) NOT NULL                                                                      
  ,HAS_LENGTH CHAR(1) NOT NULL                                                                      
  ,HAS_PRECISION CHAR(1) NOT NULL                                                                   
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table APP_DUAL1000...                                                               
create table APP_DUAL1000(                                                                          
  ID NUMBER(10,0) NOT NULL                                                                          
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table ASSET...                                                                      
create table ASSET(                                                                                 
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,CLIORG_ID NUMBER(10,0)                                                                           
  ,PRODUCT_ID NUMBER(10,0)                                                                          
  ,ASSETGRP_ID NUMBER(10,0) NOT NULL                                                                
  ,NAME VARCHAR2(64) NOT NULL                                                                       
  ,NOTES VARCHAR2(400)                                                                              
  ,QUANTITY NUMBER(10,0) NOT NULL                                                                   
  ,SERIAL_NO VARCHAR2(32)                                                                           
  ,IS_ACTIVE CHAR(1) DEFAULT 'N' NOT NULL                                                           
  ,IS_DEPRECIATED CHAR(1) DEFAULT 'N' NOT NULL                                                      
  ,IS_DISPOSED CHAR(1) DEFAULT 'N' NOT NULL                                                         
  ,IS_OWNED CHAR(1) DEFAULT 'N' NOT NULL                                                            
  ,IS_INPOSESSION CHAR(1) DEFAULT 'N' NOT NULL                                                      
  ,LAST_MAINTENANCE_DATE DATE                                                                       
  ,NEXT_MAINTENENCE_DATE DATE                                                                       
  ,MAINTENANCE_PLAN_ID NUMBER(10,0)                                                                 
  ,WITH_DEPRECIATION CHAR(1) DEFAULT 'N' NOT NULL                                                   
  ,DEPREC_MONTHS NUMBER(10,0)                                                                       
  ,DEPREC_BASE_VALUE NUMBER(22,6)                                                                   
  ,DEPREC_MONTHS_REMAINED NUMBER(10,0)                                                              
  ,BPARTNER_ID NUMBER(10,0)                                                                         
  ,INUSE_BPARTNER_ID NUMBER(10,0)                                                                   
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table ASSET_GROUP...                                                                
create table ASSET_GROUP(                                                                           
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,NAME VARCHAR2(64) NOT NULL                                                                       
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table BANK...                                                                       
create table BANK(                                                                                  
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,NAME VARCHAR2(255) NOT NULL                                                                      
  ,SWIFTCODE VARCHAR2(32)                                                                           
  ,LOCATION_ID NUMBER(10,0)                                                                         
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table BANK_AGENCY...                                                                
create table BANK_AGENCY(                                                                           
  ID NUMBER(10,0) NOT NULL                                                                          
  ,BANK_CODE VARCHAR2(16) NOT NULL                                                                  
  ,NAME VARCHAR2(64) NOT NULL                                                                       
  ,TYPE VARCHAR2(4) NOT NULL                                                                        
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,ADRESS VARCHAR2(128)                                                                             
  ,CREATEDON DATE                                                                                   
  ,CREATEDBY VARCHAR2(16)                                                                           
  ,MODIFIEDON DATE                                                                                  
  ,MODIFIEDBY VARCHAR2(16)                                                                          
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table BILLING_CYCLE...                                                              
create table BILLING_CYCLE(                                                                         
  ID NUMBER(10,0) NOT NULL                                                                          
  ,BILLCYCCLASS_CODE VARCHAR2(16) NOT NULL                                                          
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,STARTDATE DATE NOT NULL                                                                          
  ,ENDDATE DATE NOT NULL                                                                            
  ,NAME VARCHAR2(64)                                                                                
  ,CLOSED CHAR(1) DEFAULT 'N' NOT NULL                                                              
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table BILLING_CYCLE_CLASS...                                                        
create table BILLING_CYCLE_CLASS(                                                                   
  CODE VARCHAR2(16) NOT NULL                                                                        
  ,NAME VARCHAR2(32)                                                                                
  ,STARTDAY NUMBER(2,0)                                                                             
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table BPARTNER...                                                                   
create table BPARTNER(                                                                              
  ID NUMBER(10,0) NOT NULL                                                                          
  ,NAME VARCHAR2(255) NOT NULL                                                                      
  ,BPARTNER_TYPE VARCHAR2(8)                                                                        
  ,BPARTNER_ID NUMBER(10,0)                                                                         
  ,CODE VARCHAR2(32) NOT NULL                                                                       
  ,COPIED_FROM_BPARTNER_ID NUMBER(10,0)                                                             
  ,TAX_NUMBER VARCHAR2(32)                                                                          
  ,TAX_NUMBER_TYPE VARCHAR2(16)                                                                     
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,COMPANY_REG_NR VARCHAR2(32)                                                                      
  ,PHONE VARCHAR2(16)                                                                               
  ,EMAIL VARCHAR2(100)                                                                              
  ,FAX VARCHAR2(16)                                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table BPCONTACT_PHONE...                                                            
create table BPCONTACT_PHONE(                                                                       
  ID NUMBER(10,0) NOT NULL                                                                          
  ,BPCONTACT_ID NUMBER(10,0) NOT NULL                                                               
  ,CMNCT_TYPE VARCHAR2(16) NOT NULL                                                                 
  ,CMNCT_VALUE VARCHAR2(100) NOT NULL                                                               
  ,NOTES VARCHAR2(100)                                                                              
  ,CREATEDON DATE DEFAULT sysdate NOT NULL                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE DEFAULT sysdate NOT NULL                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table BP_ACCOUNT...                                                                 
create table BP_ACCOUNT(                                                                            
  ID NUMBER(10,0) NOT NULL                                                                          
  ,BPARTNER_ID NUMBER(10,0) NOT NULL                                                                
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,ACCSCHEMA_ID NUMBER(10,0) NOT NULL                                                               
  ,C_ACCT_RECEIVABLE_ID NUMBER(10,0)                                                                
  ,C_ACCT_PREPAY_ID NUMBER(10,0)                                                                    
  ,V_ACCT_PAYABLE_ID NUMBER(10,0)                                                                   
  ,V_ACCT_PREPAY_ID NUMBER(10,0)                                                                    
  ,I_ACCT_PAYABLE_ID NUMBER(10,0)                                                                   
  ,I_ACCT_RECEIVABLE_ID NUMBER(10,0)                                                                
  ,I_ACCT_PREPAY_ID NUMBER(10,0)                                                                    
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table BP_ADRESS...                                                                  
create table BP_ADRESS(                                                                             
  ID NUMBER(10,0) NOT NULL                                                                          
  ,BPARTNER_ID NUMBER(10,0) NOT NULL                                                                
  ,COUNTRY_CODE VARCHAR2(16)                                                                        
  ,REGION_CODE VARCHAR2(16)                                                                         
  ,CITY VARCHAR2(255)                                                                               
  ,CITY_ID NUMBER(10,0)                                                                             
  ,STREET VARCHAR2(255)                                                                             
  ,STREET_ID NUMBER(10,0)                                                                           
  ,NO VARCHAR2(32)                                                                                  
  ,BUILDING VARCHAR2(32)                                                                            
  ,FLOOR VARCHAR2(32)                                                                               
  ,APT VARCHAR2(32)                                                                                 
  ,ADRESS_TYPE VARCHAR2(16)                                                                         
  ,NOTES VARCHAR2(255)                                                                              
  ,ENTRANCE VARCHAR2(32)                                                                            
  ,IS_BILLING CHAR(1)                                                                               
  ,IS_DELIVERY CHAR(1)                                                                              
  ,NAME VARCHAR2(32) NOT NULL                                                                       
  ,CREATEDON DATE DEFAULT sysdate                                                                   
  ,CREATEDBY VARCHAR2(16)                                                                           
  ,MODIFIEDON DATE                                                                                  
  ,MODIFIEDBY VARCHAR2(16)                                                                          
  ,ZIP VARCHAR2(16)                                                                                 
  ,ADRESS VARCHAR2(255)                                                                             
  ,IS_DETAILED CHAR(1) DEFAULT 'N'                                                                  
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table BP_AMOUNT...                                                                  
create table BP_AMOUNT(                                                                             
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,BPARTNER_ID NUMBER(10,0) NOT NULL                                                                
  ,IINV_ID NUMBER(10,0) NOT NULL                                                                    
  ,RINV_ID NUMBER(10,0) NOT NULL                                                                    
  ,PAYMENT_ID NUMBER(10,0) NOT NULL                                                                 
  ,NET_AMOUNT NUMBER(22,6)                                                                          
  ,TAX_AMOUNT NUMBER(22,6)                                                                          
  ,TOTAL_AMOUNT NUMBER(22,6)                                                                        
  ,DOC_NET_AMOUNT NUMBER(22,6)                                                                      
  ,DOC_TAX_AMOUNT NUMBER(22,6)                                                                      
  ,DOC_TOTAL_AMOUNT NUMBER(22,6)                                                                    
  ,DOC_CURRENCY VARCHAR2(4)                                                                         
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table BP_BALANCE...                                                                 
create table BP_BALANCE(                                                                            
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CLIENT_ID NUMBER(10,0)                                                                           
  ,BPARTNER_ID NUMBER(10,0)                                                                         
  ,IINV_ID NUMBER(10,0)                                                                             
  ,RINV_ID NUMBER(10,0)                                                                             
  ,PAYMENT_ID NUMBER(10,0)                                                                          
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table BP_BANKACCOUNT...                                                             
create table BP_BANKACCOUNT(                                                                        
  ID NUMBER(10,0) NOT NULL                                                                          
  ,BANK_CODE VARCHAR2(16) NOT NULL                                                                  
  ,IBAN VARCHAR2(32) NOT NULL                                                                       
  ,CURRENCY VARCHAR2(4) NOT NULL                                                                    
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,BPARTNER_ID NUMBER(10,0) NOT NULL                                                                
  ,BANKAG_CODE VARCHAR2(16)                                                                         
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table BP_CLIENT...                                                                  
create table BP_CLIENT(                                                                             
  ID NUMBER(10,0) NOT NULL                                                                          
  ,BPARTNER_ID NUMBER(10,0) NOT NULL                                                                
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,IS_CUSTOMER CHAR(1) DEFAULT 'N' NOT NULL                                                         
  ,IS_VENDOR CHAR(1) DEFAULT 'N' NOT NULL                                                           
  ,IS_EMPLOYEE CHAR(1) DEFAULT 'N' NOT NULL                                                         
  ,CUSTGRP_CODE VARCHAR2(16)                                                                        
  ,CREDITCLASS_CODE VARCHAR2(16)                                                                    
  ,PAYMETHOD_CODE VARCHAR2(16)                                                                      
  ,PAYTERMCLASS_CODE VARCHAR2(16)                                                                   
  ,MAX_CREDIT_LIMIT NUMBER(10,0)                                                                    
  ,MAX_CREDIT_LIMIT_CURRENCY VARCHAR2(4)                                                            
  ,MAX_PAYMENT_TERM NUMBER(4,0)                                                                     
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table BP_CONTACT...                                                                 
create table BP_CONTACT(                                                                            
  ID NUMBER(10,0) NOT NULL                                                                          
  ,BPARTNER_ID NUMBER(10,0) NOT NULL                                                                
  ,NAME VARCHAR2(64) NOT NULL                                                                       
  ,FIRSTNAME VARCHAR2(32)                                                                           
  ,LASTNAME VARCHAR2(32)                                                                            
  ,PHONE VARCHAR2(32)                                                                               
  ,EMAIL VARCHAR2(100)                                                                              
  ,FAX VARCHAR2(32)                                                                                 
  ,NOTES VARCHAR2(255)                                                                              
  ,MOBILE VARCHAR2(32)                                                                              
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,BIRTHDATE DATE                                                                                   
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table BP_CONTRACT...                                                                
create table BP_CONTRACT(                                                                           
  ID NUMBER(10,0) NOT NULL                                                                          
  ,DOC_NO VARCHAR2(20) NOT NULL                                                                     
  ,DOC_DATE DATE NOT NULL                                                                           
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,CUST_BPARTNER_ID NUMBER(10,0) NOT NULL                                                           
  ,CONTRTYPE_CODE VARCHAR2(16) NOT NULL                                                             
  ,STARTDATE DATE NOT NULL                                                                          
  ,ENDDATE DATE                                                                                     
  ,NOTES VARCHAR2(4000)                                                                             
  ,BPCONTR_ID NUMBER(10,0)                                                                          
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,CONTRSTAT_CODE VARCHAR2(16)                                                                      
  ,SUPP_BPARTNER_ID NUMBER(10,0) NOT NULL                                                           
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table BP_PHONE...                                                                   
create table BP_PHONE(                                                                              
  ID NUMBER(10,0) NOT NULL                                                                          
  ,BPARTNER_ID NUMBER(10,0) NOT NULL                                                                
  ,CMNCT_TYPE VARCHAR2(16) NOT NULL                                                                 
  ,CMNCT_VALUE VARCHAR2(100) NOT NULL                                                               
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,NOTES VARCHAR2(100)                                                                              
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table BP_SUBSCRIPTION...                                                            
create table BP_SUBSCRIPTION(                                                                       
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,BPARTNER_ID NUMBER(10,0) NOT NULL                                                                
  ,BPCONTR_ID NUMBER(10,0)                                                                          
  ,SUBSC_CODE VARCHAR2(16) NOT NULL                                                                 
  ,STARTDATE DATE NOT NULL                                                                          
  ,ENDDATE DATE                                                                                     
  ,BPACCCUST_ID NUMBER(10,0) NOT NULL                                                               
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table BUDGET...                                                                     
create table BUDGET(                                                                                
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CLIENT_ID NUMBER(10,0)                                                                           
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table CITY...                                                                       
create table CITY(                                                                                  
  ID NUMBER(10,0) NOT NULL                                                                          
  ,COUNTRY_CODE VARCHAR2(16) NOT NULL                                                               
  ,REGION_CODE VARCHAR2(16) NOT NULL                                                                
  ,NAME VARCHAR2(64) NOT NULL                                                                       
  ,AREA_CODE VARCHAR2(32)                                                                           
  ,POSTAL_CODE VARCHAR2(32)                                                                         
  ,ACTIVE CHAR(1) DEFAULT 'Y' NOT NULL                                                              
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,CODE VARCHAR2(32) NOT NULL                                                                       
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table CLIENT...                                                                     
create table CLIENT(                                                                                
  ID NUMBER(10,0) NOT NULL                                                                          
  ,NAME VARCHAR2(255) NOT NULL                                                                      
  ,BPARTNER_ID NUMBER(10,0)                                                                         
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,DEFAULT_CLIENT CHAR(1) DEFAULT 'N' NOT NULL                                                      
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table COMMUNIC_TYPE...                                                              
create table COMMUNIC_TYPE(                                                                         
  CODE VARCHAR2(16)                                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table CONTRACT_STATUS...                                                            
create table CONTRACT_STATUS(                                                                       
  CODE VARCHAR2(16) NOT NULL                                                                        
  ,NAME VARCHAR2(64)                                                                                
  ,ACTIVE CHAR(1)                                                                                   
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table CONTRACT_TYPE...                                                              
create table CONTRACT_TYPE(                                                                         
  CODE VARCHAR2(16) NOT NULL                                                                        
  ,NAME VARCHAR2(32) NOT NULL                                                                       
  ,DESCRIPTION VARCHAR2(4000)                                                                       
  ,ACTIVE CHAR(1) DEFAULT 'N' NOT NULL                                                              
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table COSTING_METHOD...                                                             
create table COSTING_METHOD(                                                                        
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,NAME VARCHAR2(64)                                                                                
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table COST_CENTER...                                                                
create table COST_CENTER(                                                                           
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,NAME VARCHAR2(64) NOT NULL                                                                       
  ,ACTIVE CHAR(1) DEFAULT 'N' NOT NULL                                                              
  ,CREATEDON DATE DEFAULT sysdate NOT NULL                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE DEFAULT sysdate NOT NULL                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table COUNTRY...                                                                    
create table COUNTRY(                                                                               
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,NAME VARCHAR2(64) NOT NULL                                                                       
  ,ACTIVE CHAR(1) DEFAULT 'Y' NOT NULL                                                              
  ,WITH_REGIONS CHAR(1) DEFAULT 'N' NOT NULL                                                        
  ,WITH_CITIES CHAR(1) DEFAULT 'N' NOT NULL                                                         
  ,ISO2 VARCHAR2(2)                                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table CREDIT_CLASS...                                                               
create table CREDIT_CLASS(                                                                          
  CODE VARCHAR2(16) NOT NULL                                                                        
  ,NAME VARCHAR2(64) NOT NULL                                                                       
  ,CLIENT_ID NUMBER(10,0)                                                                           
  ,CREDIT_LIMIT NUMBER(22,6)                                                                        
  ,CREDIT_LIMIT_CURRENCY VARCHAR2(4)                                                                
  ,NOTES VARCHAR2(255)                                                                              
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,ACTIVE CHAR(1) DEFAULT 'N' NOT NULL                                                              
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table CURRENCY...                                                                   
create table CURRENCY(                                                                              
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(4) NOT NULL                                                                        
  ,NAME VARCHAR2(64) NOT NULL                                                                       
  ,ACTIVE CHAR(1) NOT NULL                                                                          
  ,ACCOUNT_GAIN VARCHAR2(32)                                                                        
  ,ACCOUNT_LOSS VARCHAR2(32)                                                                        
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table CURRENCY_AVG_RATE...                                                          
create table CURRENCY_AVG_RATE(                                                                     
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CRNCYEXCH_ID NUMBER(10,0) NOT NULL                                                               
  ,EXCHANGE_RATE NUMBER(22,6) NOT NULL                                                              
  ,PERIOD_ID NUMBER(10,0) NOT NULL                                                                  
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table CURRENCY_XRATE...                                                             
create table CURRENCY_XRATE(                                                                        
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CURRENCY_FROM VARCHAR2(4) NOT NULL                                                               
  ,XRATE NUMBER(22,6) NOT NULL                                                                      
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,VALID_FROM DATE NOT NULL                                                                         
  ,VALID_TO DATE                                                                                    
  ,CURRENCY_TO VARCHAR2(4)                                                                          
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table DOCUMENT_SERIAL...                                                            
create table DOCUMENT_SERIAL(                                                                       
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,DOCUMENT_TYPE VARCHAR2(16) NOT NULL                                                              
  ,SERIAL VARCHAR2(16) NOT NULL                                                                     
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table DOCUMENT_SERIAL_NO...                                                         
create table DOCUMENT_SERIAL_NO(                                                                    
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,DOCSER_ID NUMBER(10,0) NOT NULL                                                                  
  ,DOCSERRNG_ID NUMBER(10,0) NOT NULL                                                               
  ,VALUE NUMBER(10,0) NOT NULL                                                                      
  ,IS_ALLOCATED CHAR(1) DEFAULT 'N' NOT NULL                                                        
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table DOCUMENT_SERIAL_RANGE...                                                      
create table DOCUMENT_SERIAL_RANGE(                                                                 
  ID NUMBER(10,0) NOT NULL                                                                          
  ,DOCSER_ID NUMBER(10,0) NOT NULL                                                                  
  ,MINVAL NUMBER(10,0) NOT NULL                                                                     
  ,MAXVAL NUMBER(10,0) NOT NULL                                                                     
  ,IS_INSTALLED CHAR(1) DEFAULT 'N' NOT NULL                                                        
  ,IS_CLOSED CHAR(1) DEFAULT 'N' NOT NULL                                                           
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table EMPLOYEE...                                                                   
create table EMPLOYEE(                                                                              
  ID NUMBER(10,0) NOT NULL                                                                          
  ,FIRSTNAME VARCHAR2(32) NOT NULL                                                                  
  ,LASTNAME VARCHAR2(32) NOT NULL                                                                   
  ,CREATEDON DATE DEFAULT sysdate NOT NULL                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE DEFAULT sysdate NOT NULL                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table EXPENSESHEET...                                                               
create table EXPENSESHEET(                                                                          
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table IE_DEF_IMPSTGFLD_PROP...                                                      
create table IE_DEF_IMPSTGFLD_PROP(                                                                 
  ID NUMBER(10,0) NOT NULL                                                                          
  ,PROPERTY_NAME VARCHAR2(32) NOT NULL                                                              
  ,DATA_TYPE VARCHAR2(16) NOT NULL                                                                  
  ,DEFAULT_VALUE VARCHAR2(4000)                                                                     
  ,ACTIVE CHAR(1) DEFAULT 'Y' NOT NULL                                                              
  ,POSITION NUMBER(4,0) NOT NULL                                                                    
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table IE_DEF_IMPSTG_PROP...                                                         
create table IE_DEF_IMPSTG_PROP(                                                                    
  ID NUMBER(10,0) NOT NULL                                                                          
  ,PROPERTY_NAME VARCHAR2(32) NOT NULL                                                              
  ,DATA_TYPE VARCHAR2(16) NOT NULL                                                                  
  ,DEFAULT_VALUE VARCHAR2(4000)                                                                     
  ,ACTIVE CHAR(1) DEFAULT 'Y' NOT NULL                                                              
  ,POSITION NUMBER(4,0) NOT NULL                                                                    
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table IE_IMPEX_MAP...                                                               
create table IE_IMPEX_MAP(                                                                          
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,DESCRIPTION VARCHAR2(400) NOT NULL                                                               
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table IE_IMPEX_MAP_ITEM...                                                          
create table IE_IMPEX_MAP_ITEM(                                                                     
  ID NUMBER(10,0) NOT NULL                                                                          
  ,IMPEXMAP_CODE VARCHAR2(16) NOT NULL                                                              
  ,ITEM_NAME VARCHAR2(32) NOT NULL                                                                  
  ,ITEM_TYPE VARCHAR2(16) NOT NULL                                                                  
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table IE_IMPORT...                                                                  
create table IE_IMPORT(                                                                             
  ID NUMBER(10,0) NOT NULL                                                                          
  ,IMPSTG_ID NUMBER(10,0) NOT NULL                                                                  
  ,PROCESSING_STATUS NUMBER(1,0) DEFAULT 0 NOT NULL                                                 
  ,IS_SUCCESS CHAR(1) DEFAULT 'N' NOT NULL                                                          
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table IE_IMPORT_DATA...                                                             
create table IE_IMPORT_DATA(                                                                        
  ID NUMBER(10,0) NOT NULL                                                                          
  ,IMPORT_ID NUMBER(10,0)                                                                           
  ,COL1 VARCHAR2(4000)                                                                              
  ,COL2 VARCHAR2(4000)                                                                              
  ,COL3 VARCHAR2(4000)                                                                              
  ,COL4 VARCHAR2(4000)                                                                              
  ,COL5 VARCHAR2(4000)                                                                              
  ,COL6 VARCHAR2(4000)                                                                              
  ,COL7 VARCHAR2(4000)                                                                              
  ,COL8 VARCHAR2(4000)                                                                              
  ,COL9 VARCHAR2(4000)                                                                              
  ,COL10 VARCHAR2(4000)                                                                             
  ,COL11 VARCHAR2(4000)                                                                             
  ,COL12 VARCHAR2(4000)                                                                             
  ,COL13 VARCHAR2(4000)                                                                             
  ,COL14 VARCHAR2(4000)                                                                             
  ,COL15 VARCHAR2(4000)                                                                             
  ,COL16 VARCHAR2(4000)                                                                             
  ,COL17 VARCHAR2(4000)                                                                             
  ,COL18 VARCHAR2(4000)                                                                             
  ,COL19 VARCHAR2(4000)                                                                             
  ,COL20 VARCHAR2(4000)                                                                             
  ,COL21 VARCHAR2(4000)                                                                             
  ,COL22 VARCHAR2(4000)                                                                             
  ,COL23 VARCHAR2(4000)                                                                             
  ,COL24 VARCHAR2(4000)                                                                             
  ,COL25 VARCHAR2(4000)                                                                             
  ,COL26 VARCHAR2(4000)                                                                             
  ,COL27 VARCHAR2(4000)                                                                             
  ,COL28 VARCHAR2(4000)                                                                             
  ,COL29 VARCHAR2(4000)                                                                             
  ,COL30 VARCHAR2(4000)                                                                             
  ,COL31 VARCHAR2(4000)                                                                             
  ,COL32 VARCHAR2(4000)                                                                             
  ,COL33 VARCHAR2(4000)                                                                             
  ,COL34 VARCHAR2(4000)                                                                             
  ,COL35 VARCHAR2(4000)                                                                             
  ,COL36 VARCHAR2(4000)                                                                             
  ,COL37 VARCHAR2(4000)                                                                             
  ,COL38 VARCHAR2(4000)                                                                             
  ,COL39 VARCHAR2(4000)                                                                             
  ,COL40 VARCHAR2(4000)                                                                             
  ,COL41 VARCHAR2(4000)                                                                             
  ,COL42 VARCHAR2(4000)                                                                             
  ,COL43 VARCHAR2(4000)                                                                             
  ,COL44 VARCHAR2(4000)                                                                             
  ,COL45 VARCHAR2(4000)                                                                             
  ,COL46 VARCHAR2(4000)                                                                             
  ,COL47 VARCHAR2(4000)                                                                             
  ,COL48 VARCHAR2(4000)                                                                             
  ,COL49 VARCHAR2(4000)                                                                             
  ,COL50 VARCHAR2(4000)                                                                             
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table IE_IMPORT_DATA_RAW...                                                         
create table IE_IMPORT_DATA_RAW(                                                                    
  ID NUMBER(10,0) NOT NULL                                                                          
  ,IMPORT_ID NUMBER(10,0) NOT NULL                                                                  
  ,COL1 VARCHAR2(4000)                                                                              
  ,COL2 VARCHAR2(4000)                                                                              
  ,COL3 VARCHAR2(4000)                                                                              
  ,COL4 VARCHAR2(4000)                                                                              
  ,COL5 VARCHAR2(4000)                                                                              
  ,COL6 VARCHAR2(4000)                                                                              
  ,COL7 VARCHAR2(4000)                                                                              
  ,COL8 VARCHAR2(4000)                                                                              
  ,COL9 VARCHAR2(4000)                                                                              
  ,COL10 VARCHAR2(4000)                                                                             
  ,COL11 VARCHAR2(4000)                                                                             
  ,COL12 VARCHAR2(4000)                                                                             
  ,COL13 VARCHAR2(4000)                                                                             
  ,COL14 VARCHAR2(4000)                                                                             
  ,COL15 VARCHAR2(4000)                                                                             
  ,COL16 VARCHAR2(4000)                                                                             
  ,COL17 VARCHAR2(4000)                                                                             
  ,COL18 VARCHAR2(4000)                                                                             
  ,COL19 VARCHAR2(4000)                                                                             
  ,COL20 VARCHAR2(4000)                                                                             
  ,COL21 VARCHAR2(4000)                                                                             
  ,COL22 VARCHAR2(4000)                                                                             
  ,COL23 VARCHAR2(4000)                                                                             
  ,COL24 VARCHAR2(4000)                                                                             
  ,COL25 VARCHAR2(4000)                                                                             
  ,COL26 VARCHAR2(4000)                                                                             
  ,COL27 VARCHAR2(4000)                                                                             
  ,COL28 VARCHAR2(4000)                                                                             
  ,COL29 VARCHAR2(4000)                                                                             
  ,COL30 VARCHAR2(4000)                                                                             
  ,COL31 VARCHAR2(4000)                                                                             
  ,COL32 VARCHAR2(4000)                                                                             
  ,COL33 VARCHAR2(4000)                                                                             
  ,COL34 VARCHAR2(4000)                                                                             
  ,COL35 VARCHAR2(4000)                                                                             
  ,COL36 VARCHAR2(4000)                                                                             
  ,COL37 VARCHAR2(4000)                                                                             
  ,COL38 VARCHAR2(4000)                                                                             
  ,COL39 VARCHAR2(4000)                                                                             
  ,COL40 VARCHAR2(4000)                                                                             
  ,COL41 VARCHAR2(4000)                                                                             
  ,COL42 VARCHAR2(4000)                                                                             
  ,COL43 VARCHAR2(4000)                                                                             
  ,COL44 VARCHAR2(4000)                                                                             
  ,COL45 VARCHAR2(4000)                                                                             
  ,COL46 VARCHAR2(4000)                                                                             
  ,COL47 VARCHAR2(4000)                                                                             
  ,COL48 VARCHAR2(4000)                                                                             
  ,COL49 VARCHAR2(4000)                                                                             
  ,COL50 VARCHAR2(4000)                                                                             
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table IE_IMP_STRATEGY...                                                            
create table IE_IMP_STRATEGY(                                                                       
  ID NUMBER(10,0) NOT NULL                                                                          
  ,NAME VARCHAR2(64) NOT NULL                                                                       
  ,FILE_TYPE VARCHAR2(4) NOT NULL                                                                   
  ,DESCRIPTION VARCHAR2(400)                                                                        
  ,IMPSTGGRP_ID NUMBER(10,0) NOT NULL                                                               
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,ACTIVE CHAR(1) DEFAULT 'N' NOT NULL                                                              
  ,DEST_TABLE VARCHAR2(32) NOT NULL                                                                 
  ,FILE_LOCATION VARCHAR2(400)                                                                      
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table IE_IMP_STRATEGY_FIELD...                                                      
create table IE_IMP_STRATEGY_FIELD(                                                                 
  ID NUMBER(10,0) NOT NULL                                                                          
  ,IMPSTG_ID NUMBER(10,0) NOT NULL                                                                  
  ,IN_SRC CHAR(1) DEFAULT 'Y' NOT NULL                                                              
  ,IN_DEST CHAR(1) DEFAULT 'Y' NOT NULL                                                             
  ,DATA_TYPE VARCHAR2(16) NOT NULL                                                                  
  ,DATA_LENGTH NUMBER(10,0)                                                                         
  ,SRC_NAME VARCHAR2(32)                                                                            
  ,DEST_NAME VARCHAR2(32)                                                                           
  ,POSITION NUMBER(4,0) NOT NULL                                                                    
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table IE_IMP_STRATEGY_FIELD_PROP...                                                 
create table IE_IMP_STRATEGY_FIELD_PROP(                                                            
  ID NUMBER(10,0) NOT NULL                                                                          
  ,IMPSTGFLD_ID NUMBER(10,0) NOT NULL                                                               
  ,PROPERTY_NAME VARCHAR2(32) NOT NULL                                                              
  ,PROPERTY_VALUE VARCHAR2(4000)                                                                    
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table IE_IMP_STRATEGY_GROUP...                                                      
create table IE_IMP_STRATEGY_GROUP(                                                                 
  ID NUMBER(10,0) NOT NULL                                                                          
  ,NAME VARCHAR2(32) NOT NULL                                                                       
  ,ACTIVE CHAR(1) DEFAULT 'Y' NOT NULL                                                              
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table IE_IMP_STRATEGY_PROP...                                                       
create table IE_IMP_STRATEGY_PROP(                                                                  
  ID NUMBER(10,0) NOT NULL                                                                          
  ,IMPSTG_ID NUMBER(10,0) NOT NULL                                                                  
  ,PROPERTY_NAME VARCHAR2(32) NOT NULL                                                              
  ,PROPERTY_VALUE VARCHAR2(4000)                                                                    
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table IINVOICE...                                                                   
create table IINVOICE(                                                                              
  ID NUMBER(10,0) NOT NULL                                                                          
  ,DOC_DATE DATE NOT NULL                                                                           
  ,DOC_NO VARCHAR2(16) NOT NULL                                                                     
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,ISSUER_ID NUMBER(10,0) NOT NULL                                                                  
  ,RECEIVER_ID NUMBER(10,0) NOT NULL                                                                
  ,PAYBY_ID NUMBER(10,0)                                                                            
  ,DOC_TYPE VARCHAR2(16) NOT NULL                                                                   
  ,INV_STATUS VARCHAR2(16)                                                                          
  ,DOC_CURRENCY VARCHAR2(4) NOT NULL                                                                
  ,TRANSTYPE_CODE VARCHAR2(16)                                                                      
  ,DUE_DATE DATE                                                                                    
  ,INV_LINE_COUNT NUMBER(10,0)                                                                      
  ,REF_IINV_ID NUMBER(10,0)                                                                         
  ,REF_IINV_DOC_NO VARCHAR2(20)                                                                     
  ,ORDER_ID NUMBER(10,0)                                                                            
  ,TOTAL_NET_AMOUNT NUMBER(22,6) DEFAULT 0 NOT NULL                                                 
  ,TOTAL_TAX_AMOUNT NUMBER(22,6) DEFAULT 0 NOT NULL                                                 
  ,TOTAL_AMOUNT NUMBER(22,6) DEFAULT 0 NOT NULL                                                     
  ,CREATEDON DATE DEFAULT sysdate NOT NULL                                                          
  ,CREATEDBY VARCHAR2(16) DEFAULT user NOT NULL                                                     
  ,MODIFIEDON DATE DEFAULT sysdate NOT NULL                                                         
  ,MODIFIEDBY VARCHAR2(16) DEFAULT user NOT NULL                                                    
  ,IS_PRINTED CHAR(1) DEFAULT 'N' NOT NULL                                                          
  ,NOTES VARCHAR2(4000)                                                                             
  ,CURRENCY_XRATE NUMBER(22,6)                                                                      
  ,DOC_NO_SERIAL VARCHAR2(8)                                                                        
  ,VAT_RATE NUMBER(22,6)                                                                            
  ,IS_INSERTED CHAR(1) DEFAULT 'N'                                                                  
  ,INSERTEDON DATE                                                                                  
  ,INSERTEDBY VARCHAR2(16)                                                                          
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table IINVOICE_ITEM...                                                              
create table IINVOICE_ITEM(                                                                         
  ID NUMBER(10,0) NOT NULL                                                                          
  ,IINV_ID NUMBER(10,0) NOT NULL                                                                    
  ,LINE_NO VARCHAR2(16) DEFAULT 1 NOT NULL                                                          
  ,PROD_ID NUMBER(10,0) NOT NULL                                                                    
  ,QUANTITY NUMBER(22,6) NOT NULL                                                                   
  ,QUANTITY_UNIT VARCHAR2(16) NOT NULL                                                              
  ,ORIG_PRICE NUMBER(22,6) NOT NULL                                                                 
  ,NET_AMOUNT NUMBER(22,6) NOT NULL                                                                 
  ,ORIG_CURRENCY VARCHAR2(4)                                                                        
  ,PRICE NUMBER(22,6)                                                                               
  ,CURRENCY_XRATE NUMBER(22,6)                                                                      
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,IINVITEM_ID NUMBER(10,0)                                                                         
  ,NOTES VARCHAR2(4000)                                                                             
  ,TAX_RATE NUMBER(22,6)                                                                            
  ,TAX_AMOUNT NUMBER(22,6)                                                                          
  ,CURRENCY VARCHAR2(4) NOT NULL                                                                    
  ,SALES_ACCT VARCHAR2(16)                                                                          
  ,TAX_ID NUMBER(10,0)                                                                              
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table IINV_DOCTYP_ATTR...                                                           
create table IINV_DOCTYP_ATTR(                                                                      
  ID NUMBER(10,0) NOT NULL                                                                          
  ,IINVDOCTYP_ID NUMBER(10,0) NOT NULL                                                              
  ,ACCSCHEMA_ID NUMBER(10,0) NOT NULL                                                               
  ,ATTR_NAME VARCHAR2(32) NOT NULL                                                                  
  ,ATTR_VALUE VARCHAR2(32)                                                                          
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table IINV_DOC_TYPE...                                                              
create table IINV_DOC_TYPE(                                                                         
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,NAME VARCHAR2(64) NOT NULL                                                                       
  ,ACTIVE CHAR(1) DEFAULT 'N' NOT NULL                                                              
  ,PRINT_REPORT_CODE VARCHAR2(32)                                                                   
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table INSURANCE...                                                                  
create table INSURANCE(                                                                             
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,BPARTNER_ID NUMBER(10,0) NOT NULL                                                                
  ,ISSUER_BPARTNER_ID NUMBER(10,0) NOT NULL                                                         
  ,INSURANCE_TYPE VARCHAR2(16) NOT NULL                                                             
  ,VALID_FROM DATE NOT NULL                                                                         
  ,VALID_TO DATE NOT NULL                                                                           
  ,PAYMENT_RATE_NO NUMBER(10,0) NOT NULL                                                            
  ,CREATEDON DATE DEFAULT sysdate NOT NULL                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE DEFAULT sysdate NOT NULL                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table LANGUAGES...                                                                  
create table LANGUAGES(                                                                             
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,NAME VARCHAR2(32) NOT NULL                                                                       
  ,ACTIVE CHAR(1) DEFAULT 'N' NOT NULL                                                              
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table MENUBAR...                                                                    
create table MENUBAR(                                                                               
  CODE VARCHAR2(16) NOT NULL                                                                        
  ,NAME VARCHAR2(32) NOT NULL                                                                       
  ,IS_DEFAULT CHAR(1) DEFAULT 'N' NOT NULL                                                          
  ,POSITION NUMBER(2,0) DEFAULT 1 NOT NULL                                                          
  ,IS_MODULE_MENUBAR CHAR(1) DEFAULT 'Y' NOT NULL                                                   
  ,ID NUMBER(10,0) NOT NULL                                                                         
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table MENUITEM...                                                                   
create table MENUITEM(                                                                              
  ID NUMBER(10,0) NOT NULL                                                                          
  ,MENUBAR_CODE VARCHAR2(16) NOT NULL                                                               
  ,NAME VARCHAR2(32) NOT NULL                                                                       
  ,POSITION NUMBER(2,0) NOT NULL                                                                    
  ,MENUITEM_ID NUMBER(10,0)                                                                         
  ,CODE VARCHAR2(16)                                                                                
  ,LINK VARCHAR2(32)                                                                                
  ,TARGET VARCHAR2(32)                                                                              
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(32) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(32) NOT NULL                                                                 
  ,ACTIVE CHAR(1) DEFAULT 'N' NOT NULL                                                              
  ,IMPORT_ID NUMBER(10,0)                                                                           
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table MENUITEM_PARAM...                                                             
create table MENUITEM_PARAM(                                                                        
  ID NUMBER(10,0) NOT NULL                                                                          
  ,MENUITEM_ID NUMBER(10,0) NOT NULL                                                                
  ,PARAM_NAME VARCHAR2(32) NOT NULL                                                                 
  ,PARAM_VALUE VARCHAR2(255)                                                                        
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table MENUITEM_ROLE...                                                              
create table MENUITEM_ROLE(                                                                         
  ID NUMBER(10,0) NOT NULL                                                                          
  ,MENUITEM_ID NUMBER(10,0) NOT NULL                                                                
  ,ROLE_NAME VARCHAR2(16) NOT NULL                                                                  
  ,CREATEDON DATE DEFAULT sysdate NOT NULL                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE DEFAULT sysdate NOT NULL                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table MENUITEM_TRL...                                                               
create table MENUITEM_TRL(                                                                          
  ID NUMBER(10,0) NOT NULL                                                                          
  ,MENUITEM_ID NUMBER(10,0) NOT NULL                                                                
  ,LANG VARCHAR2(16) NOT NULL                                                                       
  ,TRANSLATION VARCHAR2(255) NOT NULL                                                               
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table MENU_SHORTCUT...                                                              
create table MENU_SHORTCUT(                                                                         
  ID NUMBER(10,0) NOT NULL                                                                          
  ,OWNER VARCHAR2(16) NOT NULL                                                                      
  ,TITLE VARCHAR2(64) NOT NULL                                                                      
  ,LINK VARCHAR2(32)                                                                                
  ,MENUITEM_ID NUMBER(10,0)                                                                         
  ,MENUSHRCT_ID NUMBER(10,0)                                                                        
  ,POSITION NUMBER(10,0) DEFAULT 1 NOT NULL                                                         
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table MM_MOVEMENT_IN_DOC...                                                         
create table MM_MOVEMENT_IN_DOC(                                                                    
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,DOC_NO NUMBER(10,0) NOT NULL                                                                     
  ,DOC_DATE DATE DEFAULT sysdate NOT NULL                                                           
  ,FROM_BPARTNER_ID NUMBER(10,0) NOT NULL                                                           
  ,NOTES VARCHAR2(400)                                                                              
  ,DOC_TYPE VARCHAR2(16) NOT NULL                                                                   
  ,RINV_ID NUMBER(10,0)                                                                             
  ,QTY_CHECK CHAR(1) DEFAULT 'N' NOT NULL                                                           
  ,QTY_CHECK_ON DATE                                                                                
  ,QTY_CHECK_BY VARCHAR2(16)                                                                        
  ,QUALITY_CHECK CHAR(1) DEFAULT 'N' NOT NULL                                                       
  ,QUALITY_CHECK_ON DATE                                                                            
  ,QUALITY_CHECK_BY VARCHAR2(16)                                                                    
  ,VALUE_CHECK CHAR(1) DEFAULT 'N' NOT NULL                                                         
  ,VALUE_CHECK_ON DATE                                                                              
  ,VALUE_CHECK_BY VARCHAR2(16)                                                                      
  ,CREATEDON DATE DEFAULT sysdate NOT NULL                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE DEFAULT sysdate NOT NULL                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,ORG_ID NUMBER(10,0) NOT NULL                                                                     
  ,ORGINV_ID NUMBER(10,0) NOT NULL                                                                  
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table MM_MOVEMENT_IN_LINE...                                                        
create table MM_MOVEMENT_IN_LINE(                                                                   
  ID NUMBER(10,0) NOT NULL                                                                          
  ,LINE_NO NUMBER(10,0) DEFAULT 1 NOT NULL                                                          
  ,MVMNTINDOC_ID NUMBER(10,0) NOT NULL                                                              
  ,PRODUCT_ID NUMBER(10,0) NOT NULL                                                                 
  ,QTY NUMBER(22,6) NOT NULL                                                                        
  ,BASE_DOC_QTY NUMBER(22,6) NOT NULL                                                               
  ,RECEIVED_QTY NUMBER(22,6) NOT NULL                                                               
  ,INVENTORY_QTY NUMBER(22,6) NOT NULL                                                              
  ,BASE_DOC_PRICE NUMBER(22,6) NOT NULL                                                             
  ,BASE_DOC_CURRENCY VARCHAR2(4) NOT NULL                                                           
  ,NOTES VARCHAR2(255)                                                                              
  ,UOM VARCHAR2(16) NOT NULL                                                                        
  ,STOCKLOC_ID NUMBER(10,0) NOT NULL                                                                
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table MM_MOVEMENT_OUT_DOC...                                                        
create table MM_MOVEMENT_OUT_DOC(                                                                   
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,ORG_ID NUMBER(10,0) NOT NULL                                                                     
  ,DOC_NO NUMBER(10,0) NOT NULL                                                                     
  ,DOC_DATE DATE NOT NULL                                                                           
  ,DOC_TYPE VARCHAR2(16) NOT NULL                                                                   
  ,TO_BPARTNER_ID NUMBER(10,0) NOT NULL                                                             
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table MM_MVMNTIN_DOCTYPE...                                                         
create table MM_MVMNTIN_DOCTYPE(                                                                    
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,NAME VARCHAR2(64) NOT NULL                                                                       
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table MM_ORG_INV...                                                                 
create table MM_ORG_INV(                                                                            
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,ORG_ID NUMBER(10,0) NOT NULL                                                                     
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,DESCRIPTION VARCHAR2(64)                                                                         
  ,ORGINVTYPE_CODE VARCHAR2(16) NOT NULL                                                            
  ,CREATEDON DATE DEFAULT sysdate NOT NULL                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE DEFAULT sysdate NOT NULL                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,IS_DEFAULT CHAR(1) DEFAULT 'N' NOT NULL                                                          
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table MM_ORG_INV_TYPE...                                                            
create table MM_ORG_INV_TYPE(                                                                       
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,DESCRIPTION VARCHAR2(255)                                                                        
  ,CREATEDON DATE DEFAULT sysdate NOT NULL                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE DEFAULT sysdate NOT NULL                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table MM_PRICE_LEVEL...                                                             
create table MM_PRICE_LEVEL(                                                                        
  ID NUMBER(10,0) NOT NULL                                                                          
  ,NAME VARCHAR2(32) NOT NULL                                                                       
  ,IS_DEFAULT CHAR(1) DEFAULT 'N' NOT NULL                                                          
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table MM_PRICE_LIST...                                                              
create table MM_PRICE_LIST(                                                                         
  ID NUMBER(10,0) NOT NULL                                                                          
  ,VALID_FROM DATE NOT NULL                                                                         
  ,VALID_TO DATE                                                                                    
  ,CURRENCY VARCHAR2(4) NOT NULL                                                                    
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,COPY_FROM_LIST_IS NUMBER(10,0)                                                                   
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,NAME VARCHAR2(64) NOT NULL                                                                       
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table MM_PRODUCT...                                                                 
create table MM_PRODUCT(                                                                            
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(32) NOT NULL                                                                       
  ,NAME VARCHAR2(128) NOT NULL                                                                      
  ,DESCRIPTION VARCHAR2(4000)                                                                       
  ,PROD_TYPE VARCHAR2(8)                                                                            
  ,SUMMARY CHAR(1) NOT NULL                                                                         
  ,STORABLE CHAR(1) NOT NULL                                                                        
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,UOM_CODE VARCHAR2(16) NOT NULL                                                                   
  ,VOLUME NUMBER(10,0)                                                                              
  ,WEIGHT NUMBER(10,0)                                                                              
  ,PRODCATEG_ID NUMBER(10,0) NOT NULL                                                               
  ,ATTRGRP_ID NUMBER(10,0)                                                                          
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table MM_PRODUCT_ACCOUNT...                                                         
create table MM_PRODUCT_ACCOUNT(                                                                    
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,PRODUCT_ID NUMBER(10,0) NOT NULL                                                                 
  ,REVENUE_ACCT_ID NUMBER(10,0)                                                                     
  ,EXPENSE_ACCT_ID NUMBER(10,0)                                                                     
  ,ASSET_ACCT_ID NUMBER(10,0)                                                                       
  ,ACCSCHEMA_ID NUMBER(10,0) NOT NULL                                                               
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table MM_PRODUCT_CATEGORY...                                                        
create table MM_PRODUCT_CATEGORY(                                                                   
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(32) NOT NULL                                                                       
  ,NAME VARCHAR2(128) NOT NULL                                                                      
  ,PRODCATEG_ID NUMBER(10,0)                                                                        
  ,DESCRIPTION VARCHAR2(4000)                                                                       
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,ACTIVE CHAR(1) NOT NULL                                                                          
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table MM_PRODUCT_CATEGORY_ACCOUNT...                                                
create table MM_PRODUCT_CATEGORY_ACCOUNT(                                                           
  ID NUMBER(10,0) NOT NULL                                                                          
  ,PRODCATEG_ID NUMBER(10,0) NOT NULL                                                               
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,ACCSCHEMA_ID NUMBER(10,0) NOT NULL                                                               
  ,ACCOUNT_NAME VARCHAR2(32) NOT NULL                                                               
  ,ACCOUNT_VALUE VARCHAR2(32) NOT NULL                                                              
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,ACTIVE CHAR(1) NOT NULL                                                                          
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table MM_PRODUCT_CLIENT...                                                          
create table MM_PRODUCT_CLIENT(                                                                     
  ID NUMBER(10,0) NOT NULL                                                                          
  ,PRODUCT_ID NUMBER(10,0) NOT NULL                                                                 
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,FOR_SALE CHAR(1) DEFAULT 'N' NOT NULL                                                            
  ,PRODCLASS_CODE VARCHAR2(16)                                                                      
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table MM_PRODUCT_PRICE...                                                           
create table MM_PRODUCT_PRICE(                                                                      
  ID NUMBER(10,0) NOT NULL                                                                          
  ,PRICELIST_ID NUMBER(10,0) NOT NULL                                                               
  ,PRODUCT_ID NUMBER(10,0) NOT NULL                                                                 
  ,PRICELVL_ID NUMBER(10,0) NOT NULL                                                                
  ,PRICE NUMBER(22,6) NOT NULL                                                                      
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table MM_PROD_ATTR...                                                               
create table MM_PROD_ATTR(                                                                          
  ID NUMBER(10,0) NOT NULL                                                                          
  ,NAME VARCHAR2(64) NOT NULL                                                                       
  ,DESCRIPTION VARCHAR2(400)                                                                        
  ,DATA_TYPE VARCHAR2(16) NOT NULL                                                                  
  ,CREATEDON DATE DEFAULT sysdate NOT NULL                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE DEFAULT sysdate NOT NULL                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,PRODATTRGRP_ID NUMBER(10,0) NOT NULL                                                             
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table MM_PROD_ATTR_GRP...                                                           
create table MM_PROD_ATTR_GRP(                                                                      
  ID NUMBER(10,0) NOT NULL                                                                          
  ,NAME VARCHAR2(32) NOT NULL                                                                       
  ,DESCRIPTION VARCHAR2(255)                                                                        
  ,PRODATTRGRP_ID NUMBER(10,0)                                                                      
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table MM_PROD_ATTR_VAL...                                                           
create table MM_PROD_ATTR_VAL(                                                                      
  ID NUMBER(10,0) NOT NULL                                                                          
  ,PRODUCT_ID NUMBER(10,0) NOT NULL                                                                 
  ,PRDATTR_ID NUMBER(10,0) NOT NULL                                                                 
  ,ATTR_VAL VARCHAR2(4000)                                                                          
  ,CREATEDON DATE DEFAULT sysdate NOT NULL                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE DEFAULT sysdate NOT NULL                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table MM_PROD_STOCK...                                                              
create table MM_PROD_STOCK(                                                                         
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,ORG_ID NUMBER(10,0) NOT NULL                                                                     
  ,ORGINV_ID NUMBER(10,0) NOT NULL                                                                  
  ,STOCKLOC_ID NUMBER(10,0) NOT NULL                                                                
  ,PRODUCT_ID NUMBER(10,0) NOT NULL                                                                 
  ,QTY NUMBER(22,6) NOT NULL                                                                        
  ,UOM VARCHAR2(16) NOT NULL                                                                        
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table MM_PROD_STOCK_BALANCE...                                                      
create table MM_PROD_STOCK_BALANCE(                                                                 
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,ORG_ID NUMBER(10,0) NOT NULL                                                                     
  ,ORGINV_ID NUMBER(10,0) NOT NULL                                                                  
  ,STOCKLOC_ID NUMBER(10,0) NOT NULL                                                                
  ,PRODUCT_ID NUMBER(10,0) NOT NULL                                                                 
  ,QTY NUMBER(22,6) NOT NULL                                                                        
  ,UOM VARCHAR2(16) NOT NULL                                                                        
  ,BALANCE_DATE DATE NOT NULL                                                                       
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table MM_PROD_STOCK_CMP...                                                          
create table MM_PROD_STOCK_CMP(                                                                     
  ID NUMBER(10,0) NOT NULL                                                                          
  ,PRODSTOCK_ID NUMBER(10,0) NOT NULL                                                               
  ,UNIT_PRICE NUMBER(22,6) NOT NULL                                                                 
  ,CURRENCY VARCHAR2(4) NOT NULL                                                                    
  ,QTY NUMBER(22,6) NOT NULL                                                                        
  ,UOM VARCHAR2(16) NOT NULL                                                                        
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table MM_PROD_STOCK_CMP_BALANCE...                                                  
create table MM_PROD_STOCK_CMP_BALANCE(                                                             
  ID NUMBER(10,0) NOT NULL                                                                          
  ,PRODSTOCKBLN_ID NUMBER(10,0) NOT NULL                                                            
  ,UNIT_PRICE NUMBER(22,6) NOT NULL                                                                 
  ,CURRENCY VARCHAR2(4) NOT NULL                                                                    
  ,QTY NUMBER(22,6) NOT NULL                                                                        
  ,UOM VARCHAR2(16) NOT NULL                                                                        
  ,BALANCE_DATE DATE DEFAULT sysdate NOT NULL                                                       
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table MM_PROD_STOCK_MVMNT...                                                        
create table MM_PROD_STOCK_MVMNT(                                                                   
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,ORG_ID NUMBER(10,0) NOT NULL                                                                     
  ,ORGINV_ID NUMBER(10,0) NOT NULL                                                                  
  ,STOCKLOC_ID NUMBER(10,0) NOT NULL                                                                
  ,PRODUCT_ID NUMBER(10,0) NOT NULL                                                                 
  ,QTY NUMBER(22,6) NOT NULL                                                                        
  ,UOM VARCHAR2(16) NOT NULL                                                                        
  ,PRICE NUMBER(22,6) NOT NULL                                                                      
  ,CURRENCY VARCHAR2(4) NOT NULL                                                                    
  ,MVMNT_SENSE CHAR(1) NOT NULL                                                                     
  ,MVMNT_DATE DATE DEFAULT sysdate NOT NULL                                                         
  ,MVMNTINDOC_ID NUMBER(10,0)                                                                       
  ,MVMNTINLIN_ID NUMBER(10,0)                                                                       
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table MM_STOCK_LOC...                                                               
create table MM_STOCK_LOC(                                                                          
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,ORG_ID NUMBER(10,0) NOT NULL                                                                     
  ,ORGINV_ID NUMBER(10,0) NOT NULL                                                                  
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,DESCRIPTION VARCHAR2(64)                                                                         
  ,IS_DEFAULT CHAR(1) DEFAULT 'N' NOT NULL                                                          
  ,STOCKLOC_TYPE VARCHAR2(16)                                                                       
  ,IS_VIRTUAL CHAR(1) DEFAULT 'N' NOT NULL                                                          
  ,CREATEDON DATE DEFAULT sysdate NOT NULL                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE DEFAULT sysdate NOT NULL                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table MM_STOCK_LOC_TYPE...                                                          
create table MM_STOCK_LOC_TYPE(                                                                     
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,CREATEDON DATE DEFAULT sysdate NOT NULL                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE DEFAULT sysdate NOT NULL                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table ORGANIZATION...                                                               
create table ORGANIZATION(                                                                          
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,NAME VARCHAR2(64) NOT NULL                                                                       
  ,ORG_ID NUMBER(10,0)                                                                              
  ,ORG_TYPE VARCHAR2(16) NOT NULL                                                                   
  ,BPARTNER_ID NUMBER(10,0)                                                                         
  ,COSTMETHOD_CODE VARCHAR2(16)                                                                     
  ,COSTCENTER_ID NUMBER(10,0)                                                                       
  ,NOTES VARCHAR2(255)                                                                              
  ,ACTIVE CHAR(1) DEFAULT 'N' NOT NULL                                                              
  ,CREATEDON DATE DEFAULT sysdate NOT NULL                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE DEFAULT sysdate NOT NULL                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table ORG_ATTR...                                                                   
create table ORG_ATTR(                                                                              
  ID NUMBER(10,0) NOT NULL                                                                          
  ,NAME VARCHAR2(32) NOT NULL                                                                       
  ,DESCRIPTION VARCHAR2(255) NOT NULL                                                               
  ,DATA_TYPE VARCHAR2(32) NOT NULL                                                                  
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table ORG_ATTR_VAL...                                                               
create table ORG_ATTR_VAL(                                                                          
  ID NUMBER(10,0) NOT NULL                                                                          
  ,ORG_ID NUMBER(10,0) NOT NULL                                                                     
  ,ORGATTR_ID NUMBER(10,0) NOT NULL                                                                 
  ,ATTR_VAL VARCHAR2(255) NOT NULL                                                                  
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table ORG_TYPE...                                                                   
create table ORG_TYPE(                                                                              
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,NAME VARCHAR2(64) NOT NULL                                                                       
  ,CREATEDON DATE DEFAULT sysdate NOT NULL                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE DEFAULT sysdate NOT NULL                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,ACTIVE CHAR(1) DEFAULT 'N' NOT NULL                                                              
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table PAYMENT...                                                                    
create table PAYMENT(                                                                               
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,PAYDOCTYPE_CODE VARCHAR2(16) NOT NULL                                                            
  ,DOC_NO VARCHAR2(32)                                                                              
  ,DOC_DATE DATE                                                                                    
  ,BPARTNER_FROM NUMBER(10,0) NOT NULL                                                              
  ,BPARTNER_TO NUMBER(10,0) NOT NULL                                                                
  ,IS_PAYABLE CHAR(1) DEFAULT 'N' NOT NULL                                                          
  ,IS_RECEIVABLE CHAR(1) DEFAULT 'N' NOT NULL                                                       
  ,AMOUNT NUMBER(22,6)                                                                              
  ,CURRENCY VARCHAR2(4)                                                                             
  ,NOTES VARCHAR2(400)                                                                              
  ,CREATEDON DATE DEFAULT sysdate NOT NULL                                                          
  ,CREATEDBY VARCHAR2(16) DEFAULT user NOT NULL                                                     
  ,MODIFIEDON DATE DEFAULT sysdate NOT NULL                                                         
  ,MODIFIEDBY VARCHAR2(16) DEFAULT user NOT NULL                                                    
  ,PAYMNT_ACCT VARCHAR2(16)                                                                         
  ,IS_INSERTED CHAR(1) DEFAULT 'N' NOT NULL                                                         
  ,IS_GENERATED CHAR(1) DEFAULT 'N' NOT NULL                                                        
  ,IS_APPROVED CHAR(1) DEFAULT 'N' NOT NULL                                                         
  ,IS_POSTED CHAR(1) DEFAULT 'N' NOT NULL                                                           
  ,ACCDOC_ID NUMBER(10,0)                                                                           
  ,IS_PREPAYMENT CHAR(1) DEFAULT 'N' NOT NULL                                                       
  ,PREPAY_ACCT VARCHAR2(16)                                                                         
  ,RINV_ID NUMBER(10,0)                                                                             
  ,IS_MULTI_PAYMENT CHAR(1) DEFAULT 'N'                                                             
  ,IINV_ID NUMBER(10,0)                                                                             
  ,POSTEDON DATE                                                                                    
  ,POSTEDBY VARCHAR2(16)                                                                            
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table PAYMENT_DOCTYPE_ATTR...                                                       
create table PAYMENT_DOCTYPE_ATTR(                                                                  
  ID NUMBER(10,0) NOT NULL                                                                          
  ,PAYDOCTYP_ID NUMBER(10,0) NOT NULL                                                               
  ,ACCSCHEMA_ID NUMBER(10,0) NOT NULL                                                               
  ,ATTR_NAME VARCHAR2(32) NOT NULL                                                                  
  ,ATTR_VALUE VARCHAR2(32) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table PAYMENT_DOC_TYPE...                                                           
create table PAYMENT_DOC_TYPE(                                                                      
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,NAME VARCHAR2(32) NOT NULL                                                                       
  ,COMPENSATION CHAR(1) NOT NULL                                                                    
  ,PAYABLE CHAR(1) NOT NULL                                                                         
  ,RECEIVABLE CHAR(1) NOT NULL                                                                      
  ,PRINT_REPORT VARCHAR2(16)                                                                        
  ,CREATEDON DATE DEFAULT sysdate NOT NULL                                                          
  ,CREATEDBY VARCHAR2(16) DEFAULT user NOT NULL                                                     
  ,MODIFIEDON DATE DEFAULT sysdate NOT NULL                                                         
  ,MODIFIEDBY VARCHAR2(16) DEFAULT user NOT NULL                                                    
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table PAYMENT_ITEM...                                                               
create table PAYMENT_ITEM(                                                                          
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,PAYMENT_ID NUMBER(10,0) NOT NULL                                                                 
  ,AMOUNT NUMBER(22,6) NOT NULL                                                                     
  ,CURRENCY VARCHAR2(4) NOT NULL                                                                    
  ,ORIG_AMOUNT NUMBER(22,6)                                                                         
  ,ORIG_CURRENCY VARCHAR2(4)                                                                        
  ,DEBIT_CREDIT CHAR(1) NOT NULL                                                                    
  ,NOTES VARCHAR2(400)                                                                              
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table PAYMENT_METHOD...                                                             
create table PAYMENT_METHOD(                                                                        
  CODE VARCHAR2(16) NOT NULL                                                                        
  ,NAME VARCHAR2(16)                                                                                
  ,ACTIVE CHAR(1)                                                                                   
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table PAYMENT_TERM_CLASS...                                                         
create table PAYMENT_TERM_CLASS(                                                                    
  CODE VARCHAR2(16)                                                                                 
  ,NAME VARCHAR2(64)                                                                                
  ,ACTIVE CHAR(1)                                                                                   
  ,DAYS_NO NUMBER(10,0)                                                                             
  ,CLIENT_ID NUMBER(10,0)                                                                           
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table PERSON...                                                                     
create table PERSON(                                                                                
  ID NUMBER(10,0) NOT NULL                                                                          
  ,BPARTNER_ID NUMBER(10,0)                                                                         
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table PROJECT...                                                                    
create table PROJECT(                                                                               
  ID NUMBER(10,0) NOT NULL                                                                          
  ,NAME VARCHAR2(64) NOT NULL                                                                       
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,STATUS_CODE VARCHAR2(16) NOT NULL                                                                
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,TYPE_CODE VARCHAR2(16) NOT NULL                                                                  
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table PROJECT_CMP_TYPE...                                                           
create table PROJECT_CMP_TYPE(                                                                      
  ID NUMBER(10,0) NOT NULL                                                                          
  ,PROJECT_ID NUMBER(10,0) NOT NULL                                                                 
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,NAME VARCHAR2(32) NOT NULL                                                                       
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table PROJECT_ISSUE...                                                              
create table PROJECT_ISSUE(                                                                         
  ID NUMBER(10,0) NOT NULL                                                                          
  ,PROJECT_ID NUMBER(10,0) NOT NULL                                                                 
  ,TITLE VARCHAR2(255) NOT NULL                                                                     
  ,ISSUE_TYPE_CODE VARCHAR2(16) NOT NULL                                                            
  ,SEVERITY_CODE VARCHAR2(16)                                                                       
  ,AFF_CMP_TYPE_CODE VARCHAR2(16)                                                                   
  ,AFF_CMP VARCHAR2(64)                                                                             
  ,AFF_PROJECT_RELEASE_CODE VARCHAR2(16)                                                            
  ,STATUS_CODE VARCHAR2(16)                                                                         
  ,IS_CLOSED CHAR(1) DEFAULT 'N' NOT NULL                                                           
  ,DESCRIPTION VARCHAR2(4000)                                                                       
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,PRIORITY_CODE VARCHAR2(16)                                                                       
  ,ASSIGNED_TO VARCHAR2(16)                                                                         
  ,PLAN_STARTDATE DATE                                                                              
  ,PLAN_ENDDATE DATE                                                                                
  ,ACT_STARTDATE DATE                                                                               
  ,ACT_ENDDATE DATE                                                                                 
  ,ESTIMATE_EFFORT NUMBER(22,6)                                                                     
  ,ACTUAL_EFFORT NUMBER(22,6)                                                                       
  ,EFFORT_UNIT VARCHAR2(16)                                                                         
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table PROJECT_ISSUE_ATTACHMENT...                                                   
create table PROJECT_ISSUE_ATTACHMENT(                                                              
  ID NUMBER(10,0) NOT NULL                                                                          
  ,PROJECT_ISSUE_ID NUMBER(10,0) NOT NULL                                                           
  ,FILE_NAME VARCHAR2(255) NOT NULL                                                                 
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,NOTES VARCHAR2(400)                                                                              
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table PROJECT_ISSUE_CMP_ASSOC...                                                    
create table PROJECT_ISSUE_CMP_ASSOC(                                                               
  ID NUMBER(10,0) NOT NULL                                                                          
  ,PROJECT_ISSUE_ID NUMBER(10,0) NOT NULL                                                           
  ,CMP_NAME VARCHAR2(255) NOT NULL                                                                  
  ,CMP_LOCATION VARCHAR2(255)                                                                       
  ,CMP_VERSION VARCHAR2(16)                                                                         
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table PROJECT_ISSUE_NOTE...                                                         
create table PROJECT_ISSUE_NOTE(                                                                    
  ID NUMBER(10,0) NOT NULL                                                                          
  ,PROJECT_ISSUE_ID NUMBER(10,0) NOT NULL                                                           
  ,NOTE VARCHAR2(4000) NOT NULL                                                                     
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,CREATEDON DATE NOT NULL                                                                          
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,MODIFIEDON DATE NOT NULL                                                                         
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table PROJECT_ISSUE_PRIORITY...                                                     
create table PROJECT_ISSUE_PRIORITY(                                                                
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,NAME VARCHAR2(64) NOT NULL                                                                       
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table PROJECT_ISSUE_SEVERITY...                                                     
create table PROJECT_ISSUE_SEVERITY(                                                                
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,NAME VARCHAR2(64) NOT NULL                                                                       
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table PROJECT_ISSUE_STATUS...                                                       
create table PROJECT_ISSUE_STATUS(                                                                  
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,NAME VARCHAR2(64) NOT NULL                                                                       
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table PROJECT_ISSUE_TYPE...                                                         
create table PROJECT_ISSUE_TYPE(                                                                    
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,NAME VARCHAR2(64) NOT NULL                                                                       
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table PROJECT_STATUS...                                                             
create table PROJECT_STATUS(                                                                        
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,NAME VARCHAR2(32) NOT NULL                                                                       
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table PROJECT_TYPE...                                                               
create table PROJECT_TYPE(                                                                          
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,NAME VARCHAR2(64) NOT NULL                                                                       
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table PURCHASE_NEED...                                                              
create table PURCHASE_NEED(                                                                         
  ID NUMBER(10,0) NOT NULL                                                                          
  ,DOC_DATE DATE DEFAULT sysdate NOT NULL                                                           
  ,DOC_NO VARCHAR2(16) NOT NULL                                                                     
  ,CLIENT_ID NUMBER(10,0)                                                                           
  ,CREATEDON DATE DEFAULT sysdate                                                                   
  ,CREATEDBY VARCHAR2(16)                                                                           
  ,MODIFIEDON DATE DEFAULT sysdate                                                                  
  ,MODIFIEDBY VARCHAR2(16)                                                                          
  ,TITLE VARCHAR2(128)                                                                              
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table PURCHASE_NEED_LINE...                                                         
create table PURCHASE_NEED_LINE(                                                                    
  ID NUMBER(10,0) NOT NULL                                                                          
  ,PNEED_ID NUMBER(10,0) NOT NULL                                                                   
  ,POSITION NUMBER(10,0) DEFAULT 1 NOT NULL                                                         
  ,PROD_ID NUMBER(10,0)                                                                             
  ,NOTES VARCHAR2(400)                                                                              
  ,QTY NUMBER(22,6)                                                                                 
  ,UOM_CODE VARCHAR2(16)                                                                            
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table PURCHASE_ORDER...                                                             
create table PURCHASE_ORDER(                                                                        
  ID NUMBER(10,0) NOT NULL                                                                          
  ,DOC_NO VARCHAR2(20) NOT NULL                                                                     
  ,DOC_DATE DATE NOT NULL                                                                           
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,BPARTNER_ID NUMBER(10,0) NOT NULL                                                                
  ,BPARTNER_CONTACT_ID NUMBER(10,0)                                                                 
  ,REF_PORDER_ID NUMBER(10,0)                                                                       
  ,CURRENCY VARCHAR2(4) NOT NULL                                                                    
  ,TOTAL_AMOUNT NUMBER(22,6) DEFAULT 0 NOT NULL                                                     
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table PURCHASE_ORDER_LINE...                                                        
create table PURCHASE_ORDER_LINE(                                                                   
  ID NUMBER(10,0) NOT NULL                                                                          
  ,PORDER_ID NUMBER(10,0) NOT NULL                                                                  
  ,LINE_NR NUMBER(10,0) DEFAULT 1 NOT NULL                                                          
  ,PRODUCT_ID NUMBER(10,0)                                                                          
  ,QTY NUMBER(22,6) DEFAULT 0 NOT NULL                                                              
  ,UOM_CODE VARCHAR2(16) NOT NULL                                                                   
  ,PRICE NUMBER(22,6) NOT NULL                                                                      
  ,NET_AMOUNT NUMBER(22,6) DEFAULT 0 NOT NULL                                                       
  ,CURRENCY_CODE VARCHAR2(4)                                                                        
  ,NOTES VARCHAR2(255)                                                                              
  ,DATE_REQUESTED DATE                                                                              
  ,DATE_PROMISED DATE                                                                               
  ,DATE_DELIVERED DATE                                                                              
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table REGION...                                                                     
create table REGION(                                                                                
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,NAME VARCHAR2(64) NOT NULL                                                                       
  ,COUNTRY_CODE VARCHAR2(16) NOT NULL                                                               
  ,ACTIVE CHAR(1) DEFAULT 'Y' NOT NULL                                                              
  ,WITH_CITIES CHAR(1) DEFAULT 'N' NOT NULL                                                         
  ,ISO VARCHAR2(4)                                                                                  
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table REPORTING_PERIOD...                                                           
create table REPORTING_PERIOD(                                                                      
  ID NUMBER(10,0) NOT NULL                                                                          
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table RINVOICE...                                                                   
create table RINVOICE(                                                                              
  ID NUMBER(10,0) NOT NULL                                                                          
  ,DOC_NO VARCHAR2(32) NOT NULL                                                                     
  ,DOC_DATE DATE NOT NULL                                                                           
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,DOC_TYPE VARCHAR2(16) NOT NULL                                                                   
  ,DOC_CURRENCY VARCHAR2(4) NOT NULL                                                                
  ,TOTAL_NET_AMOUNT NUMBER(22,6) NOT NULL                                                           
  ,TOTAL_TAX_AMOUNT NUMBER(22,6) NOT NULL                                                           
  ,TOTAL_AMOUNT NUMBER(22,6) NOT NULL                                                               
  ,CREATEDON DATE DEFAULT sysdate NOT NULL                                                          
  ,CREATEDBY VARCHAR2(16) DEFAULT user NOT NULL                                                     
  ,MODIFIEDON DATE DEFAULT sysdate NOT NULL                                                         
  ,MODIFIEDBY VARCHAR2(16) DEFAULT user NOT NULL                                                    
  ,ISSUER_ID NUMBER(10,0) NOT NULL                                                                  
  ,RECEIVER_ID NUMBER(10,0) NOT NULL                                                                
  ,DUE_DATE DATE                                                                                    
  ,IS_INSERTED CHAR(1) DEFAULT 'N' NOT NULL                                                         
  ,IS_PAYABLE CHAR(1) DEFAULT 'N' NOT NULL                                                          
  ,IS_PAYED CHAR(1) DEFAULT 'N' NOT NULL                                                            
  ,REF_RINVOICE_ID NUMBER(10,0)                                                                     
  ,NOTES VARCHAR2(400)                                                                              
  ,INSERTEDBY VARCHAR2(16)                                                                          
  ,INSERTEDON DATE                                                                                  
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table RINVOICE_ITEM...                                                              
create table RINVOICE_ITEM(                                                                         
  ID NUMBER(10,0) NOT NULL                                                                          
  ,RINV_ID NUMBER(10,0) NOT NULL                                                                    
  ,PROD_ID NUMBER(10,0)                                                                             
  ,QUANTITY NUMBER(22,6)                                                                            
  ,QUANTITY_UNIT VARCHAR2(16)                                                                       
  ,NET_AMOUNT NUMBER(22,6) NOT NULL                                                                 
  ,PRICE NUMBER(22,6)                                                                               
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,RINVITEM_ID NUMBER(10,0)                                                                         
  ,NOTES VARCHAR2(400)                                                                              
  ,TAX_ID NUMBER(10,0)                                                                              
  ,TAX_RATE NUMBER(22,6)                                                                            
  ,TAX_AMOUNT NUMBER(22,6)                                                                          
  ,CURRENCY VARCHAR2(4)                                                                             
  ,CURRENCY_XRATE NUMBER(22,6)                                                                      
  ,PURCHASE_ACCT VARCHAR2(32) NOT NULL                                                              
  ,ORIG_AMOUNT NUMBER(22,6)                                                                         
  ,ORIG_CURRENCY VARCHAR2(4)                                                                        
  ,TAX_AMOUNT_NR NUMBER(22,6)                                                                       
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table RINV_DOCTYP_ATTR...                                                           
create table RINV_DOCTYP_ATTR(                                                                      
  ID NUMBER(10,0) NOT NULL                                                                          
  ,RINVDOCTYP_ID NUMBER(10,0) NOT NULL                                                              
  ,ACCSCHEMA_ID NUMBER(10,0) NOT NULL                                                               
  ,ATTR_NAME VARCHAR2(32) NOT NULL                                                                  
  ,ATTR_VALUE VARCHAR2(32)                                                                          
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table RINV_DOC_TYPE...                                                              
create table RINV_DOC_TYPE(                                                                         
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,NAME VARCHAR2(64) NOT NULL                                                                       
  ,ACTIVE CHAR(1) NOT NULL                                                                          
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table SALES_ORDER...                                                                
create table SALES_ORDER(                                                                           
  ID NUMBER(10,0) NOT NULL                                                                          
  ,DOC_NO VARCHAR2(20) NOT NULL                                                                     
  ,DOC_DATE DATE NOT NULL                                                                           
  ,CLIENT_ID NUMBER(10,0)                                                                           
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,BPARTNER_ID NUMBER(10,0) NOT NULL                                                                
  ,BILL_BPARTNER_ID NUMBER(10,0)                                                                    
  ,DELIV_BPARTNER_ID NUMBER(10,0)                                                                   
  ,PAY_BPARTNER_ID NUMBER(10,0)                                                                     
  ,BPARTNER_CONTACT_ID NUMBER(10,0)                                                                 
  ,BILL_BPARTNER_CONTACT_ID NUMBER(10,0)                                                            
  ,DELIV_BPARTNER_CONTACT_ID NUMBER(10,0)                                                           
  ,PAY_BPARTNER_CONTACT_ID NUMBER(10,0)                                                             
  ,REF_SORDER_ID NUMBER(10,0)                                                                       
  ,CURRENCY VARCHAR2(4) NOT NULL                                                                    
  ,PAYMETHOD_CODE VARCHAR2(16)                                                                      
  ,SALESREP_ID NUMBER(10,0)                                                                         
  ,TOTAL_AMOUNT NUMBER(22,6) DEFAULT 0 NOT NULL                                                     
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table SALES_ORDER_LINE...                                                           
create table SALES_ORDER_LINE(                                                                      
  ID NUMBER(10,0) NOT NULL                                                                          
  ,SORDER_ID NUMBER(10,0) NOT NULL                                                                  
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,LINE_NR NUMBER(10,0) DEFAULT 1 NOT NULL                                                          
  ,PRODUCT_ID NUMBER(10,0)                                                                          
  ,QTY_ORDERED NUMBER(22,6) DEFAULT 0 NOT NULL                                                      
  ,QTY NUMBER(22,6) DEFAULT 0 NOT NULL                                                              
  ,QTY_INVOICED NUMBER(22,6) DEFAULT 0 NOT NULL                                                     
  ,QTY_DELIVERED NUMBER(22,6) DEFAULT 0 NOT NULL                                                    
  ,QTY_RESERVED NUMBER(22,6) DEFAULT 0 NOT NULL                                                     
  ,UOM_CODE VARCHAR2(16) NOT NULL                                                                   
  ,PRICE NUMBER(22,6) NOT NULL                                                                      
  ,DISCOUNT NUMBER(22,6) DEFAULT 0 NOT NULL                                                         
  ,DISCOUNT_TYPE CHAR(1) DEFAULT 'N' NOT NULL                                                       
  ,CURRENCY_CODE VARCHAR2(4)                                                                        
  ,NOTES VARCHAR2(255)                                                                              
  ,DATE_REQUESTED DATE                                                                              
  ,DATE_PROMISED DATE                                                                               
  ,DATE_DELIVERED DATE                                                                              
  ,NET_AMOUNT NUMBER(22,6) DEFAULT 0 NOT NULL                                                       
  ,RAW_NET_AMOUNT NUMBER(22,6) DEFAULT 0 NOT NULL                                                   
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table SERVER_MESSAGE...                                                             
create table SERVER_MESSAGE(                                                                        
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(64) NOT NULL                                                                       
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table SERVER_MESSAGE_TRL...                                                         
create table SERVER_MESSAGE_TRL(                                                                    
  ID NUMBER(10,0) NOT NULL                                                                          
  ,SRVMSG_CODE VARCHAR2(64) NOT NULL                                                                
  ,LANG_CODE VARCHAR2(16) NOT NULL                                                                  
  ,TRANSLATION VARCHAR2(400) NOT NULL                                                               
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table STREET...                                                                     
create table STREET(                                                                                
  ID NUMBER(10,0) NOT NULL                                                                          
  ,COUNTRY_CODE VARCHAR2(16) NOT NULL                                                               
  ,REGION_CODE VARCHAR2(16) NOT NULL                                                                
  ,CITY_ID NUMBER(10,0) NOT NULL                                                                    
  ,NAME VARCHAR2(255) NOT NULL                                                                      
  ,ACTIVE VARCHAR2(1) NOT NULL                                                                      
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table SUBSCRIPTION...                                                               
create table SUBSCRIPTION(                                                                          
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(16)                                                                                
  ,NAME VARCHAR2(255)                                                                               
  ,CLIENT_ID NUMBER(10,0)                                                                           
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table SYS_PARAM...                                                                  
create table SYS_PARAM(                                                                             
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(32) NOT NULL                                                                       
  ,NAME VARCHAR2(128) NOT NULL                                                                      
  ,DESCRIPTION VARCHAR2(4000) NOT NULL                                                              
  ,SYSPARAMGRP_CODE VARCHAR2(16) NOT NULL                                                           
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table SYS_PARAM_GROUP...                                                            
create table SYS_PARAM_GROUP(                                                                       
  CODE VARCHAR2(16) NOT NULL                                                                        
  ,NAME VARCHAR2(64) NOT NULL                                                                       
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table SYS_PARAM_USR_VALUE...                                                        
create table SYS_PARAM_USR_VALUE(                                                                   
  ID NUMBER(10,0) NOT NULL                                                                          
  ,USERNAME VARCHAR2(32) NOT NULL                                                                   
  ,PARAM_CODE VARCHAR2(32) NOT NULL                                                                 
  ,PARAM_VALUE VARCHAR2(400)                                                                        
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table SYS_PARAM_VALID_VALUE...                                                      
create table SYS_PARAM_VALID_VALUE(                                                                 
  ID NUMBER(10,0) NOT NULL                                                                          
  ,PARAM_CODE VARCHAR2(32) NOT NULL                                                                 
  ,VALUE VARCHAR2(255) NOT NULL                                                                     
  ,NOTES VARCHAR2(400)                                                                              
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table SYS_PARAM_VALUE...                                                            
create table SYS_PARAM_VALUE(                                                                       
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,PARAM_CODE VARCHAR2(32) NOT NULL                                                                 
  ,PARAM_VALUE VARCHAR2(400)                                                                        
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table SYS_ROLE...                                                                   
create table SYS_ROLE(                                                                              
  ID NUMBER(10,0) NOT NULL                                                                          
  ,NAME VARCHAR2(16) NOT NULL                                                                       
  ,DESCRIPTION VARCHAR2(255)                                                                        
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table SYS_USER...                                                                   
create table SYS_USER(                                                                              
  ID NUMBER(10,0) NOT NULL                                                                          
  ,LOGIN_CODE VARCHAR2(32) NOT NULL                                                                 
  ,LOGIN_PASSWORD VARCHAR2(32)                                                                      
  ,PERSON_ID NUMBER(10,0)                                                                           
  ,ACCOUNT_LOCKED CHAR(1) DEFAULT 'N' NOT NULL                                                      
  ,ACCOUNT_EXPIRED CHAR(1) DEFAULT 'N' NOT NULL                                                     
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,DBUSER VARCHAR2(16)                                                                              
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table SYS_USER_DOCSERRNG...                                                         
create table SYS_USER_DOCSERRNG(                                                                    
  ID NUMBER(10,0) NOT NULL                                                                          
  ,GRANTED_TO VARCHAR2(16) NOT NULL                                                                 
  ,DOCSERRNG_ID NUMBER(10,0) NOT NULL                                                               
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table SYS_USER_ROLE...                                                              
create table SYS_USER_ROLE(                                                                         
  ID NUMBER(10,0) NOT NULL                                                                          
  ,USER_ID NUMBER(10,0) NOT NULL                                                                    
  ,ROLE_NAME VARCHAR2(16) NOT NULL                                                                  
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table TASKS...                                                                      
create table TASKS(                                                                                 
  ID NUMBER(10,0) NOT NULL                                                                          
  ,TITLE VARCHAR2(255)                                                                              
  ,FINISH_DATE DATE                                                                                 
  ,START_DATE DATE                                                                                  
  ,STATUS VARCHAR2(16)                                                                              
  ,ASSIGNED_TO VARCHAR2(16)                                                                         
  ,CREATEDON DATE                                                                                   
  ,CREATEDBY VARCHAR2(16)                                                                           
  ,MODIFIEDON DATE                                                                                  
  ,MODIFIEDBY VARCHAR2(16)                                                                          
  ,NOTES VARCHAR2(4000)                                                                             
  ,CLOSED CHAR(1) DEFAULT 'N'                                                                       
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table TAX...                                                                        
create table TAX(                                                                                   
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,TAXTYPE_CODE VARCHAR2(16) NOT NULL                                                               
  ,VALUE_TYPE CHAR(16)                                                                              
  ,VALUE NUMBER(22,6) NOT NULL                                                                      
  ,ACTIVE CHAR(1) DEFAULT 'N' NOT NULL                                                              
  ,DEFAULT_VALUE CHAR(1)                                                                            
  ,NAME VARCHAR2(32) NOT NULL                                                                       
  ,PAYED_REFUND_ACCT VARCHAR2(16)                                                                   
  ,COLLECT_ACCT VARCHAR2(16)                                                                        
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table TAX_TYPE...                                                                   
create table TAX_TYPE(                                                                              
  CODE VARCHAR2(16) NOT NULL                                                                        
  ,NAME VARCHAR2(64) NOT NULL                                                                       
  ,NOTES VARCHAR2(255)                                                                              
  ,ACTIVE CHAR(1) NOT NULL                                                                          
  ,IS_SYSTEM CHAR(1) NOT NULL                                                                       
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table TEST...                                                                       
create table TEST(                                                                                  
  ID NUMBER(10,0) NOT NULL                                                                          
  ,COLUMN_1 VARCHAR2(400) NOT NULL                                                                  
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table TIMESHEET...                                                                  
create table TIMESHEET(                                                                             
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,CHARGED_DATE DATE NOT NULL                                                                       
  ,USER_ACCOUNT VARCHAR2(16) NOT NULL                                                               
  ,EFFORT NUMBER(22,6) NOT NULL                                                                     
  ,IS_INSERTED CHAR(1) DEFAULT 'N' NOT NULL                                                         
  ,IS_APPROVED CHAR(1) DEFAULT 'N' NOT NULL                                                         
  ,IS_POSTED CHAR(1) DEFAULT 'N' NOT NULL                                                           
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,POSTEDON DATE                                                                                    
  ,POSTEDBY VARCHAR2(16)                                                                            
  ,PROJECT_ISSUE_ID NUMBER(10,0)                                                                    
  ,EFFORT_UNIT VARCHAR2(16) NOT NULL                                                                
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table TR_PARCEL...                                                                  
create table TR_PARCEL(                                                                             
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(32) NOT NULL                                                                       
  ,CLIENT_ID NUMBER(10,0) NOT NULL                                                                  
  ,EXP_BPARTNER_ID NUMBER(10,0)                                                                     
  ,EXP_NAME VARCHAR2(255)                                                                           
  ,EXP_BPADRESS_ID NUMBER(10,0)                                                                     
  ,EXP_BPADRESS VARCHAR2(255)                                                                       
  ,EXP_COUNTRY VARCHAR2(32)                                                                         
  ,EXP_REGION VARCHAR2(32)                                                                          
  ,EXP_CITY VARCHAR2(32)                                                                            
  ,EXP_CITY_ID NUMBER(10,0)                                                                         
  ,EXP_ZIP VARCHAR2(32)                                                                             
  ,EXP_ADRESS_NOTE VARCHAR2(255)                                                                    
  ,DEST_BPARTNER_ID NUMBER(10,0)                                                                    
  ,DEST_NAME VARCHAR2(255)                                                                          
  ,DEST_BPADRESS_ID NUMBER(10,0)                                                                    
  ,DEST_BPADRESS VARCHAR2(255)                                                                      
  ,DEST_COUNTRY VARCHAR2(32)                                                                        
  ,DEST_REGION VARCHAR2(32)                                                                         
  ,DEST_CITY VARCHAR2(32)                                                                           
  ,DEST_CITY_ID NUMBER(10,0)                                                                        
  ,DEST_ZIP VARCHAR2(32)                                                                            
  ,DEST_ADRESS_NOTE VARCHAR2(255)                                                                   
  ,PICKEDUP CHAR(1)                                                                                 
  ,PICKUP_MODE VARCHAR2(16)                                                                         
  ,PICKUP_DATE DATE                                                                                 
  ,PICKUP_AGENT_ID NUMBER(10,0)                                                                     
  ,DELIVERED CHAR(1) DEFAULT 'N' NOT NULL                                                           
  ,DELIVERY_MODE VARCHAR2(16)                                                                       
  ,DELIVERY_DATE DATE                                                                               
  ,DELIVERY_AGENT_ID NUMBER(10,0)                                                                   
  ,DELIVERED_TO_NAME VARCHAR2(64)                                                                   
  ,DELIVERED_TO_IDENT VARCHAR2(32)                                                                  
  ,REJECTED CHAR(1) DEFAULT 'N' NOT NULL                                                            
  ,REJECT_DATE DATE                                                                                 
  ,REJECT_REASON VARCHAR2(255)                                                                      
  ,REJECTED_BY_NAME VARCHAR2(64)                                                                    
  ,REJECTED_BY_IDENT VARCHAR2(32)                                                                   
  ,PACKAGE_COUNT NUMBER(10,0)                                                                       
  ,CONTENT VARCHAR2(255)                                                                            
  ,NOTES VARCHAR2(255)                                                                              
  ,DECLARED_VALUE NUMBER(22,6)                                                                      
  ,INSURED_VALUE NUMBER(22,6)                                                                       
  ,REF_PARCEL_ID NUMBER(10,0)                                                                       
  ,REF_PARCEL_REFERENCE_TYPE VARCHAR2(32)                                                           
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,REJECT_REASON_CODE VARCHAR2(16)                                                                  
  ,CUSTODY_ORG_ID NUMBER(10,0)                                                                      
  ,LAST_EVENT_ID NUMBER(10,0)                                                                       
  ,PRODUCT_ID NUMBER(10,0)                                                                          
  ,WEIGHT NUMBER(22,6)                                                                              
  ,WEIGHT_UNIT VARCHAR2(16)                                                                         
  ,VOLUME NUMBER(22,6)                                                                              
  ,VOLUME_UNIT VARCHAR2(16)                                                                         
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table TR_PARCEL_EVENT...                                                            
create table TR_PARCEL_EVENT(                                                                       
  ID NUMBER(10,0) NOT NULL                                                                          
  ,PARCEL_ID NUMBER(10,0) NOT NULL                                                                  
  ,EVENTTYP_ID NUMBER(10,0) NOT NULL                                                                
  ,EVENT_DATE DATE NOT NULL                                                                         
  ,SRC_ORG_ID NUMBER(10,0)                                                                          
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,DEST_ORG_ID NUMBER(10,0)                                                                         
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table TR_PARCEL_EVENT_TYPE...                                                       
create table TR_PARCEL_EVENT_TYPE(                                                                  
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,NAME VARCHAR2(64) NOT NULL                                                                       
  ,ACTIVE CHAR(1) DEFAULT 'N' NOT NULL                                                              
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,EVNTGRP_CODE VARCHAR2(16) NOT NULL                                                               
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table TR_PARCEL_EVENT_TYPE_GRP...                                                   
create table TR_PARCEL_EVENT_TYPE_GRP(                                                              
  CODE VARCHAR2(16) NOT NULL                                                                        
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table TR_PARCEL_REJECT_REASON...                                                    
create table TR_PARCEL_REJECT_REASON(                                                               
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,NAME VARCHAR2(64) NOT NULL                                                                       
  ,ACTIVE CHAR(1) DEFAULT 'N' NOT NULL                                                              
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table TR_TRANSPORT...                                                               
create table TR_TRANSPORT(                                                                          
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,PLANNED_DEP_DATE DATE NOT NULL                                                                   
  ,EFECTIVE_DEP_DATE DATE                                                                           
  ,PLANNED_ARRIVE_DATE DATE                                                                         
  ,EFECTIVE_ARRIVE_DATE DATE                                                                        
  ,TRANSPTYPE_CODE VARCHAR2(16) NOT NULL                                                            
  ,TRANSPSTAT_CODE VARCHAR2(16) NOT NULL                                                            
  ,VEHICLE_ID NUMBER(10,0)                                                                          
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table TR_TRANSPORT_STATUS...                                                        
create table TR_TRANSPORT_STATUS(                                                                   
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,NAME VARCHAR2(32) NOT NULL                                                                       
  ,ACTIVE CHAR(1) NOT NULL                                                                          
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table TR_TRANSPORT_TYPE...                                                          
create table TR_TRANSPORT_TYPE(                                                                     
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,NAME VARCHAR2(64) NOT NULL                                                                       
  ,ACTIVE CHAR(1) DEFAULT 'N' NOT NULL                                                              
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table TR_VEHICLE...                                                                 
create table TR_VEHICLE(                                                                            
  ID NUMBER(10,0) NOT NULL                                                                          
  ,VEHICLETYP_CODE VARCHAR2(16) NOT NULL                                                            
  ,REG_NO VARCHAR2(16) NOT NULL                                                                     
  ,ASSET_ID NUMBER(10,0)                                                                            
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table TR_VEHICLE_TYPE...                                                            
create table TR_VEHICLE_TYPE(                                                                       
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,NAME VARCHAR2(64) NOT NULL                                                                       
  ,ACTIVE CHAR(1) DEFAULT 'N' NOT NULL                                                              
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table UI_DC...                                                                      
create table UI_DC(                                                                                 
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,NAME VARCHAR2(64) NOT NULL                                                                       
  ,NBS_STANDARD CHAR(1) DEFAULT 'N'                                                                 
  ,USER_BUILD CHAR(1) DEFAULT 'N'                                                                   
  ,DEPRECATED CHAR(1) DEFAULT 'N'                                                                   
  ,DESCRIPTION VARCHAR2(400)                                                                        
  ,CREATEDON DATE DEFAULT sysdate                                                                   
  ,CREATEDBY VARCHAR2(16) DEFAULT user                                                              
  ,MODIFIEDON DATE DEFAULT sysdate                                                                  
  ,MODIFIEDBY VARCHAR2(16) DEFAULT user                                                             
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table UI_DC_FIELD...                                                                
create table UI_DC_FIELD(                                                                           
  ID NUMBER(10,0) NOT NULL                                                                          
  ,UIDC_CODE VARCHAR2(16) NOT NULL                                                                  
  ,FIELD_NAME VARCHAR2(64) NOT NULL                                                                 
  ,DESCRIPTION VARCHAR2(400)                                                                        
  ,CREATEDON DATE DEFAULT sysdate NOT NULL                                                          
  ,CREATEDBY VARCHAR2(16) DEFAULT user NOT NULL                                                     
  ,MODIFIEDON DATE DEFAULT sysdate NOT NULL                                                         
  ,MODIFIEDBY VARCHAR2(16) DEFAULT user NOT NULL                                                    
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table UI_DC_FIELD_INITVAL...                                                        
create table UI_DC_FIELD_INITVAL(                                                                   
  ID NUMBER(10,0) NOT NULL                                                                          
  ,UIDC_CODE VARCHAR2(16) NOT NULL                                                                  
  ,FIELD_NAME VARCHAR2(64) NOT NULL                                                                 
  ,FIELD_VALUE VARCHAR2(255) NOT NULL                                                               
  ,VALUE_TYPE VARCHAR2(16) NOT NULL                                                                 
  ,CREATEDON DATE DEFAULT sysdate NOT NULL                                                          
  ,CREATEDBY VARCHAR2(16) DEFAULT user NOT NULL                                                     
  ,MODIFIEDON DATE DEFAULT sysdate NOT NULL                                                         
  ,MODIFIEDBY VARCHAR2(16) DEFAULT user NOT NULL                                                    
  ,ACTIVE CHAR(1) DEFAULT 'N' NOT NULL                                                              
  ,APPLY_TO_USER VARCHAR2(16)                                                                       
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table UI_DC_ROLE_PERMISSION...                                                      
create table UI_DC_ROLE_PERMISSION(                                                                 
  ID NUMBER(10,0) NOT NULL                                                                          
  ,UI_DC VARCHAR2(16) NOT NULL                                                                      
  ,ROLE_NAME VARCHAR2(16) NOT NULL                                                                  
  ,FETCH_ALLOWED CHAR(1) DEFAULT 'N' NOT NULL                                                       
  ,INSERT_ALLOWED CHAR(1) DEFAULT 'N' NOT NULL                                                      
  ,UPDATE_ALLOWED CHAR(1) DEFAULT 'N' NOT NULL                                                      
  ,DELETE_ALLOWED CHAR(1) DEFAULT 'N' NOT NULL                                                      
  ,CREATEDON DATE DEFAULT sysdate NOT NULL                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE DEFAULT sysdate NOT NULL                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table UI_DICTIONARY...                                                              
create table UI_DICTIONARY(                                                                         
  ID NUMBER(10,0) NOT NULL                                                                          
  ,UIDC_CODE VARCHAR2(16)                                                                           
  ,MSG_TYPE VARCHAR2(16)                                                                            
  ,MSG_CODE VARCHAR2(64)                                                                            
  ,MAINTAINED_BY VARCHAR2(16)                                                                       
  ,CREATEDON DATE                                                                                   
  ,CREATEDBY VARCHAR2(16)                                                                           
  ,MODIFIEDON DATE                                                                                  
  ,MODIFIEDBY VARCHAR2(16)                                                                          
  ,DEFAULT_VALUE VARCHAR2(400)                                                                      
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table UI_DICTIONARY_TRL...                                                          
create table UI_DICTIONARY_TRL(                                                                     
  ID NUMBER(10,0) NOT NULL                                                                          
  ,UIDICT_ID NUMBER(10,0) NOT NULL                                                                  
  ,LANGUAGE_CODE VARCHAR2(16) NOT NULL                                                              
  ,TRANSLATION VARCHAR2(1000)                                                                       
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table UI_GUI...                                                                     
create table UI_GUI(                                                                                
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,NAME VARCHAR2(64) NOT NULL                                                                       
  ,NBS_STANDARD CHAR(1) DEFAULT 'N' NOT NULL                                                        
  ,USER_BUILD CHAR(1) DEFAULT 'N' NOT NULL                                                          
  ,CREATEDON DATE DEFAULT sysdate NOT NULL                                                          
  ,CREATEDBY VARCHAR2(16) DEFAULT user NOT NULL                                                     
  ,MODIFIEDON DATE DEFAULT sysdate NOT NULL                                                         
  ,MODIFIEDBY VARCHAR2(16) DEFAULT user NOT NULL                                                    
  ,DEPRECATED CHAR(1) DEFAULT 'N' NOT NULL                                                          
  ,DESCRIPTION VARCHAR2(4000)                                                                       
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table UI_LOV...                                                                     
create table UI_LOV(                                                                                
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(16)                                                                                
  ,NAME VARCHAR2(64)                                                                                
  ,DESCRIPTION VARCHAR2(255)                                                                        
  ,NBS_STANDARD CHAR(1) DEFAULT 'N'                                                                 
  ,USER_BUILD CHAR(1) DEFAULT 'N'                                                                   
  ,CREATEDON DATE DEFAULT sysdate                                                                   
  ,CREATEDBY VARCHAR2(16) DEFAULT user                                                              
  ,MODIFIEDON DATE DEFAULT sysdate                                                                  
  ,MODIFIEDBY VARCHAR2(16) DEFAULT user                                                             
  ,DEPRECATED CHAR(1) DEFAULT 'N'                                                                   
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table UOM...                                                                        
create table UOM(                                                                                   
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,UOM_TYPE VARCHAR2(16) NOT NULL                                                                   
  ,NAME VARCHAR2(64) NOT NULL                                                                       
  ,CREATEDON DATE NOT NULL                                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE NOT NULL                                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,ACTIVE CHAR(1) DEFAULT 'N' NOT NULL                                                              
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table UOM_CONVERSION...                                                             
create table UOM_CONVERSION(                                                                        
  ID NUMBER(10,0) NOT NULL                                                                          
  ,UOM_FROM VARCHAR2(16) NOT NULL                                                                   
  ,UOM_TO VARCHAR2(16) NOT NULL                                                                     
  ,CONVERSION_FACTOR NUMBER(22,0) NOT NULL                                                          
  ,CREATEDON DATE DEFAULT sysdate NOT NULL                                                          
  ,CREATEDBY VARCHAR2(16) NOT NULL                                                                  
  ,MODIFIEDON DATE DEFAULT sysdate NOT NULL                                                         
  ,MODIFIEDBY VARCHAR2(16) NOT NULL                                                                 
  ,CONVERSION_TYPE CHAR(1) NOT NULL                                                                 
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table UOM_TYPE...                                                                   
create table UOM_TYPE(                                                                              
  ID NUMBER(10,0) NOT NULL                                                                          
  ,CODE VARCHAR2(16) NOT NULL                                                                       
  ,NAME VARCHAR2(64) NOT NULL                                                                       
  ,IS_PERIOD CHAR(1) DEFAULT 'N' NOT NULL                                                           
  ,IS_VOLUME CHAR(1) DEFAULT 'N' NOT NULL                                                           
  ,IS_WEIGHT CHAR(1) DEFAULT 'N' NOT NULL                                                           
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table USR_DC_LAST_FILTER...                                                         
create table USR_DC_LAST_FILTER(                                                                    
  ID NUMBER(10,0) NOT NULL                                                                          
  ,USERNAME VARCHAR2(16) NOT NULL                                                                   
  ,DC_CODE VARCHAR2(16) NOT NULL                                                                    
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table USR_LOGIN...                                                                  
create table USR_LOGIN(                                                                             
  ID NUMBER(10,0) NOT NULL                                                                          
  ,USERNAME VARCHAR2(16) NOT NULL                                                                   
  ,LOGIN DATE DEFAULT sysdate NOT NULL                                                              
  ,LOGOUT DATE                                                                                      
  ,IP_ADRESS VARCHAR2(32) NOT NULL                                                                  
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table X_IMP_PARCEL...                                                               
create table X_IMP_PARCEL(                                                                          
  ID NUMBER(10,0) NOT NULL                                                                          
  ,EXP_NAME VARCHAR2(100)                                                                           
  ,EXP_COUNTRY VARCHAR2(100)                                                                        
  ,EXP_REGION VARCHAR2(100)                                                                         
  ,EXP_CITY VARCHAR2(100)                                                                           
  ,EXP_ADRESS VARCHAR2(100)                                                                         
  ,EXP_ZIP VARCHAR2(100)                                                                            
  ,EXP_ADRESS_NOTE VARCHAR2(400)                                                                    
  ,DEST_NAME VARCHAR2(100)                                                                          
  ,DEST_COUNTRY VARCHAR2(100)                                                                       
  ,DEST_REGION VARCHAR2(100)                                                                        
  ,DEST_CITY VARCHAR2(100)                                                                          
  ,DEST_ADRESS VARCHAR2(100)                                                                        
  ,DEST_ZIP VARCHAR2(100)                                                                           
  ,DEST_ADRESS_NOTE VARCHAR2(400)                                                                   
  ,CODE VARCHAR2(100)                                                                               
  ,EXP_PHONE1 VARCHAR2(100)                                                                         
  ,EXP_PHONE2 VARCHAR2(100)                                                                         
  ,DEST_PHONE1 VARCHAR2(100)                                                                        
  ,DEST_PHONE2 VARCHAR2(100)                                                                        
  ,CONTENT VARCHAR2(400)                                                                            
  ,NOTES VARCHAR2(400)                                                                              
  ,PACKAGE_COUNT NUMBER                                                                             
  ,WEIGHT_NET NUMBER                                                                                
  ,WEIGHT_BRUT NUMBER                                                                               
  ,VOL_NET NUMBER                                                                                   
  ,VOL_BRUT NUMBER                                                                                  
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table X_IMP_UI_DC...                                                                
create table X_IMP_UI_DC(                                                                           
  CODE VARCHAR2(16)                                                                                 
  ,NAME VARCHAR2(255)                                                                               
  ,IS_STANDARD CHAR(1)                                                                              
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table X_IMP_UI_DC_FIELD...                                                          
create table X_IMP_UI_DC_FIELD(                                                                     
  UIDC_CODE VARCHAR2(16)                                                                            
  ,NAME VARCHAR2(32)                                                                                
  ,DESCRIPTION VARCHAR2(400)                                                                        
);                                                                                                  
                                                                                                    
                                                                                                    
prompt Creating table X_IMP_UI_GUI...                                                               
create table X_IMP_UI_GUI(                                                                          
  CODE VARCHAR2(16)                                                                                 
  ,NAME VARCHAR2(255)                                                                               
  ,IS_STANDARD CHAR(1)                                                                              
);                                                                                                  
                                                                                                    
                                                                                                    
