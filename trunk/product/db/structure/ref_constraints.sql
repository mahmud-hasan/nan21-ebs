prompt Creating foreign key FK_ACCDOCLINM_ACCDOC on table AC_ACCDOC_LINE ...
ALTER TABLE AC_ACCDOC_LINE ADD CONSTRAINT FK_ACCDOCLINM_ACCDOC FOREIGN KEY (ACCDOC_ID) REFERENCES AC_ACCDOC(ID) on delete CASCADE;

prompt Creating foreign key FK_ACCDOCLIN_CLIENT on table AC_ACCDOC_LINE ...
ALTER TABLE AC_ACCDOC_LINE ADD CONSTRAINT FK_ACCDOCLIN_CLIENT FOREIGN KEY (CLIENT_ID) REFERENCES CLIENT(ID);

prompt Creating foreign key FK_ACCSCHACCT_ACCSCHACCT on table AC_ACCSCHEMA_ACCT ...
ALTER TABLE AC_ACCSCHEMA_ACCT ADD CONSTRAINT FK_ACCSCHACCT_ACCSCHACCT FOREIGN KEY (PARENT_ID) REFERENCES AC_ACCSCHEMA_ACCT(ID);

prompt Creating foreign key FK_ACCSCHACCT_ACCSCHEMA on table AC_ACCSCHEMA_ACCT ...
ALTER TABLE AC_ACCSCHEMA_ACCT ADD CONSTRAINT FK_ACCSCHACCT_ACCSCHEMA FOREIGN KEY (ACCSCHEMA_ID) REFERENCES AC_ACCSCHEMA(ID);

prompt Creating foreign key FK_ACCOUNT_CLIACCSCHEMA on table AC_ACCT ...
ALTER TABLE AC_ACCT ADD CONSTRAINT FK_ACCOUNT_CLIACCSCHEMA FOREIGN KEY (CLIENT_ID,ACCSCHEMA_ID) REFERENCES AC_CLIENT_ACCSCHEMA(CLIENT_ID,ACCSCHEMA_ID);

prompt Creating foreign key FK_ACCTGRP_ACCSCHEMA on table AC_ACCT_GRP ...
ALTER TABLE AC_ACCT_GRP ADD CONSTRAINT FK_ACCTGRP_ACCSCHEMA FOREIGN KEY (ACCSCHEMA_ID) REFERENCES AC_ACCSCHEMA(ID);

prompt Creating foreign key FK_ACCTMVM_ACCDOC on table AC_ACCT_MOVEMENT ...
ALTER TABLE AC_ACCT_MOVEMENT ADD CONSTRAINT FK_ACCTMVM_ACCDOC FOREIGN KEY (ACCDOC_ID) REFERENCES AC_ACCDOC(ID);

prompt Creating foreign key FK_ACCTMVM_ACCDOCLIN on table AC_ACCT_MOVEMENT ...
ALTER TABLE AC_ACCT_MOVEMENT ADD CONSTRAINT FK_ACCTMVM_ACCDOCLIN FOREIGN KEY (ACCDOCLIN_ID) REFERENCES AC_ACCDOC_LINE(ID);

prompt Creating foreign key FK_ACCJOURN_ACCSCHEMA on table AC_ACC_JOURNAL ...
ALTER TABLE AC_ACC_JOURNAL ADD CONSTRAINT FK_ACCJOURN_ACCSCHEMA FOREIGN KEY (ACCSCHEMA_ID) REFERENCES AC_ACCSCHEMA(ID);

prompt Creating foreign key FK_ACCJOURN_CLIENT on table AC_ACC_JOURNAL ...
ALTER TABLE AC_ACC_JOURNAL ADD CONSTRAINT FK_ACCJOURN_CLIENT FOREIGN KEY (CLIENT_ID) REFERENCES CLIENT(ID);

prompt Creating foreign key FK_ACCPERIOD_ACCPERIOD on table AC_ACC_PERIOD ...
ALTER TABLE AC_ACC_PERIOD ADD CONSTRAINT FK_ACCPERIOD_ACCPERIOD FOREIGN KEY (CLIENT_ID,PREV_PERIOD_NAME) REFERENCES AC_ACC_PERIOD(CLIENT_ID,NAME);

prompt Creating foreign key FK_ACCPERIOD_ACCYEAR on table AC_ACC_PERIOD ...
ALTER TABLE AC_ACC_PERIOD ADD CONSTRAINT FK_ACCPERIOD_ACCYEAR FOREIGN KEY (CLIENT_ID,ACCYEAR_CODE) REFERENCES AC_ACC_YEAR(CLIENT_ID,CODE);

prompt Creating foreign key FK_ACCYEAR_ACCYEAR on table AC_ACC_YEAR ...
ALTER TABLE AC_ACC_YEAR ADD CONSTRAINT FK_ACCYEAR_ACCYEAR FOREIGN KEY (CLIENT_ID,PREV_YEAR_CODE) REFERENCES AC_ACC_YEAR(CLIENT_ID,CODE);

prompt Creating foreign key FK_CLIACCSCHPACCT_ACCOUNT on table AC_CLIACCSCHEMA_PARAMACCT ...
ALTER TABLE AC_CLIACCSCHEMA_PARAMACCT ADD CONSTRAINT FK_CLIACCSCHPACCT_ACCOUNT FOREIGN KEY (CLIENT_ID,ACCSCHEMA_ID,PARAM_ACCT_ID) REFERENCES AC_ACCT(CLIENT_ID,ACCSCHEMA_ID,ID);

prompt Creating foreign key FK_CLIACCSCHPACCT_ACCSCHPARAM on table AC_CLIACCSCHEMA_PARAMACCT ...
ALTER TABLE AC_CLIACCSCHEMA_PARAMACCT ADD CONSTRAINT FK_CLIACCSCHPACCT_ACCSCHPARAM FOREIGN KEY (ACCSCHEMAPARAM_ID) REFERENCES AC_ACCSCHEMA_PARAM(ID);

prompt Creating foreign key FK_CLIACCSCHPACCT_CLIACCSCHEMA on table AC_CLIACCSCHEMA_PARAMACCT ...
ALTER TABLE AC_CLIACCSCHEMA_PARAMACCT ADD CONSTRAINT FK_CLIACCSCHPACCT_CLIACCSCHEMA FOREIGN KEY (CLIENT_ID,ACCSCHEMA_ID) REFERENCES AC_CLIENT_ACCSCHEMA(CLIENT_ID,ACCSCHEMA_ID);

prompt Creating foreign key FK_CLIACCSCHPVAL_ACCSCHPARAM on table AC_CLIACCSCHEMA_PARAMVAL ...
ALTER TABLE AC_CLIACCSCHEMA_PARAMVAL ADD CONSTRAINT FK_CLIACCSCHPVAL_ACCSCHPARAM FOREIGN KEY (ACCSCHEMAPARAM_ID) REFERENCES AC_ACCSCHEMA_PARAM(ID);

prompt Creating foreign key FK_CLIACCSCHPVAL_CLIACCSCHEMA on table AC_CLIACCSCHEMA_PARAMVAL ...
ALTER TABLE AC_CLIACCSCHEMA_PARAMVAL ADD CONSTRAINT FK_CLIACCSCHPVAL_CLIACCSCHEMA FOREIGN KEY (CLIENT_ID,ACCSCHEMA_ID) REFERENCES AC_CLIENT_ACCSCHEMA(CLIENT_ID,ACCSCHEMA_ID);

prompt Creating foreign key FK_BANKAG_BANK on table BANK_AGENCY ...
ALTER TABLE BANK_AGENCY ADD CONSTRAINT FK_BANKAG_BANK FOREIGN KEY (BANK_CODE) REFERENCES BANK(CODE);

prompt Creating foreign key FK_BPCONTACTPH_BPCONTACT on table BPCONTACT_PHONE ...
ALTER TABLE BPCONTACT_PHONE ADD CONSTRAINT FK_BPCONTACTPH_BPCONTACT FOREIGN KEY (BPCONTACT_ID) REFERENCES BP_CONTACT(ID);

prompt Creating foreign key FK_BPACCT_BPCLIENT on table BP_ACCOUNT ...
ALTER TABLE BP_ACCOUNT ADD CONSTRAINT FK_BPACCT_BPCLIENT FOREIGN KEY (BPARTNER_ID,CLIENT_ID) REFERENCES BP_CLIENT(BPARTNER_ID,CLIENT_ID) on delete CASCADE;

prompt Creating foreign key FK_BPADR_BP on table BP_ADRESS ...
ALTER TABLE BP_ADRESS ADD CONSTRAINT FK_BPADR_BP FOREIGN KEY (BPARTNER_ID) REFERENCES BPARTNER(ID) on delete CASCADE;

prompt Creating foreign key FK_BPBANKACCT_BPARTNER on table BP_BANKACCOUNT ...
ALTER TABLE BP_BANKACCOUNT ADD CONSTRAINT FK_BPBANKACCT_BPARTNER FOREIGN KEY (BPARTNER_ID) REFERENCES BPARTNER(ID) on delete CASCADE;

prompt Creating foreign key FK_BPCLIENT_BPARTNER on table BP_CLIENT ...
ALTER TABLE BP_CLIENT ADD CONSTRAINT FK_BPCLIENT_BPARTNER FOREIGN KEY (BPARTNER_ID) REFERENCES BPARTNER(ID);

prompt Creating foreign key FK_BPCONTACT_BPARTNER on table BP_CONTACT ...
ALTER TABLE BP_CONTACT ADD CONSTRAINT FK_BPCONTACT_BPARTNER FOREIGN KEY (BPARTNER_ID) REFERENCES BPARTNER(ID);

prompt Creating foreign key FK_BPPHONE_BPARTNER on table BP_PHONE ...
ALTER TABLE BP_PHONE ADD CONSTRAINT FK_BPPHONE_BPARTNER FOREIGN KEY (BPARTNER_ID) REFERENCES BPARTNER(ID);

prompt Creating foreign key FK_BPPHONE_CMNCTYP on table BP_PHONE ...
ALTER TABLE BP_PHONE ADD CONSTRAINT FK_BPPHONE_CMNCTYP FOREIGN KEY (CMNCT_TYPE) REFERENCES COMMUNIC_TYPE(CODE);

prompt Creating foreign key FK_CITY_COUNTRY on table CITY ...
ALTER TABLE CITY ADD CONSTRAINT FK_CITY_COUNTRY FOREIGN KEY (COUNTRY_CODE) REFERENCES COUNTRY(CODE);

prompt Creating foreign key FK_CITY_REGION on table CITY ...
ALTER TABLE CITY ADD CONSTRAINT FK_CITY_REGION FOREIGN KEY (COUNTRY_CODE,REGION_CODE) REFERENCES REGION(COUNTRY_CODE,CODE);

prompt Creating foreign key FK_COSTCENTER_CLIENT on table COST_CENTER ...
ALTER TABLE COST_CENTER ADD CONSTRAINT FK_COSTCENTER_CLIENT FOREIGN KEY (CLIENT_ID) REFERENCES CLIENT(ID);

prompt Creating foreign key FK_DOCSERRNG_DOCSER on table DOCUMENT_SERIAL_RANGE ...
ALTER TABLE DOCUMENT_SERIAL_RANGE ADD CONSTRAINT FK_DOCSERRNG_DOCSER FOREIGN KEY (DOCSER_ID) REFERENCES DOCUMENT_SERIAL(ID);

prompt Creating foreign key FK_IINV_CLIENT on table IINVOICE ...
ALTER TABLE IINVOICE ADD CONSTRAINT FK_IINV_CLIENT FOREIGN KEY (CLIENT_ID) REFERENCES CLIENT(ID);

prompt Creating foreign key FK_IINV_RECEIVER on table IINVOICE ...
ALTER TABLE IINVOICE ADD CONSTRAINT FK_IINV_RECEIVER FOREIGN KEY (RECEIVER_ID) REFERENCES BPARTNER(ID);

prompt Creating foreign key FK_IINVITEM_CURRENCY on table IINVOICE_ITEM ...
ALTER TABLE IINVOICE_ITEM ADD CONSTRAINT FK_IINVITEM_CURRENCY FOREIGN KEY (ORIG_CURRENCY) REFERENCES CURRENCY(CODE);

prompt Creating foreign key FK_IINVITEM_UOM on table IINVOICE_ITEM ...
ALTER TABLE IINVOICE_ITEM ADD CONSTRAINT FK_IINVITEM_UOM FOREIGN KEY (QUANTITY_UNIT) REFERENCES UOM(CODE);

prompt Creating foreign key FK_IMPEXMAPITEM_IMPEXMAP on table IMPEX_MAP_ITEM ...
ALTER TABLE IMPEX_MAP_ITEM ADD CONSTRAINT FK_IMPEXMAPITEM_IMPEXMAP FOREIGN KEY (IMPEXMAP_CODE) REFERENCES IMPEX_MAP(CODE);

prompt Creating foreign key FK_MENUITEM_MENUITEM on table MENUITEM ...
ALTER TABLE MENUITEM ADD CONSTRAINT FK_MENUITEM_MENUITEM FOREIGN KEY (MENUITEM_ID) REFERENCES MENUITEM(ID);

prompt Creating foreign key FK_MENUITEMROLE_MENUITEM on table MENUITEM_ROLE ...
ALTER TABLE MENUITEM_ROLE ADD CONSTRAINT FK_MENUITEMROLE_MENUITEM FOREIGN KEY (MENUITEM_ID) REFERENCES MENUITEM(ID);

prompt Creating foreign key FK_MENUITEMROLE_ROLE on table MENUITEM_ROLE ...
ALTER TABLE MENUITEM_ROLE ADD CONSTRAINT FK_MENUITEMROLE_ROLE FOREIGN KEY (ROLE_NAME) REFERENCES SYS_ROLE(NAME);

prompt Creating foreign key FK_MENUITEMTRL_LANG on table MENUITEM_TRL ...
ALTER TABLE MENUITEM_TRL ADD CONSTRAINT FK_MENUITEMTRL_LANG FOREIGN KEY (LANG) REFERENCES LANGUAGES(CODE);

prompt Creating foreign key FK_MENUITEMTRL_MENUITEM on table MENUITEM_TRL ...
ALTER TABLE MENUITEM_TRL ADD CONSTRAINT FK_MENUITEMTRL_MENUITEM FOREIGN KEY (MENUITEM_ID) REFERENCES MENUITEM(ID) on delete CASCADE;

prompt Creating foreign key FK_MVMNTINDOC_CLIENT on table MM_MOVEMENT_IN_DOC ...
ALTER TABLE MM_MOVEMENT_IN_DOC ADD CONSTRAINT FK_MVMNTINDOC_CLIENT FOREIGN KEY (CLIENT_ID) REFERENCES CLIENT(ID);

prompt Creating foreign key FK_MVMNTINDOC_ORG on table MM_MOVEMENT_IN_DOC ...
ALTER TABLE MM_MOVEMENT_IN_DOC ADD CONSTRAINT FK_MVMNTINDOC_ORG FOREIGN KEY (ORG_ID) REFERENCES ORGANIZATION(ID);

prompt Creating foreign key FK_MVMNTINDOC_ORGINV on table MM_MOVEMENT_IN_DOC ...
ALTER TABLE MM_MOVEMENT_IN_DOC ADD CONSTRAINT FK_MVMNTINDOC_ORGINV FOREIGN KEY (ORGINV_ID) REFERENCES MM_ORG_INV(ID);

prompt Creating foreign key FK_MVMNTINLIN_MVMNTINDOC on table MM_MOVEMENT_IN_LINE ...
ALTER TABLE MM_MOVEMENT_IN_LINE ADD CONSTRAINT FK_MVMNTINLIN_MVMNTINDOC FOREIGN KEY (MVMNTINDOC_ID) REFERENCES MM_MOVEMENT_IN_DOC(ID);

prompt Creating foreign key FK_MVMNTINLIN_PRODUCT on table MM_MOVEMENT_IN_LINE ...
ALTER TABLE MM_MOVEMENT_IN_LINE ADD CONSTRAINT FK_MVMNTINLIN_PRODUCT FOREIGN KEY (PRODUCT_ID) REFERENCES MM_PRODUCT(ID);

prompt Creating foreign key FK_MVMNTINLIN_STOCKLOC on table MM_MOVEMENT_IN_LINE ...
ALTER TABLE MM_MOVEMENT_IN_LINE ADD CONSTRAINT FK_MVMNTINLIN_STOCKLOC FOREIGN KEY (STOCKLOC_ID) REFERENCES MM_STOCK_LOC(ID);

prompt Creating foreign key FK_PRODUCT_ATTRGRP on table MM_PRODUCT ...
ALTER TABLE MM_PRODUCT ADD CONSTRAINT FK_PRODUCT_ATTRGRP FOREIGN KEY (ATTRGRP_ID) REFERENCES MM_PROD_ATTR_GRP(ID);

prompt Creating foreign key FK_PRODACCT_ACCSCHEMA on table MM_PRODUCT_ACCOUNT ...
ALTER TABLE MM_PRODUCT_ACCOUNT ADD CONSTRAINT FK_PRODACCT_ACCSCHEMA FOREIGN KEY (ACCSCHEMA_ID) REFERENCES AC_ACCSCHEMA(ID);

prompt Creating foreign key FK_PRODACCT_PRODCLIENT on table MM_PRODUCT_ACCOUNT ...
ALTER TABLE MM_PRODUCT_ACCOUNT ADD CONSTRAINT FK_PRODACCT_PRODCLIENT FOREIGN KEY (PRODUCT_ID,CLIENT_ID) REFERENCES MM_PRODUCT_CLIENT(PRODUCT_ID,CLIENT_ID) on delete CASCADE;

prompt Creating foreign key FK_PRODCLIENT_CLIENT on table MM_PRODUCT_CLIENT ...
ALTER TABLE MM_PRODUCT_CLIENT ADD CONSTRAINT FK_PRODCLIENT_CLIENT FOREIGN KEY (CLIENT_ID) REFERENCES CLIENT(ID);

prompt Creating foreign key FK_PRODCLIENT_PRODUCT on table MM_PRODUCT_CLIENT ...
ALTER TABLE MM_PRODUCT_CLIENT ADD CONSTRAINT FK_PRODCLIENT_PRODUCT FOREIGN KEY (PRODUCT_ID) REFERENCES MM_PRODUCT(ID);

prompt Creating foreign key FK_PRODATTR_PRODATTRGRP on table MM_PROD_ATTR ...
ALTER TABLE MM_PROD_ATTR ADD CONSTRAINT FK_PRODATTR_PRODATTRGRP FOREIGN KEY (PRODATTRGRP_ID) REFERENCES MM_PROD_ATTR_GRP(ID);

prompt Creating foreign key FK_PAYMENT_CLIENT on table PAYMENT ...
ALTER TABLE PAYMENT ADD CONSTRAINT FK_PAYMENT_CLIENT FOREIGN KEY (CLIENT_ID) REFERENCES CLIENT(ID);

prompt Creating foreign key FK_PAYMENT_IINV on table PAYMENT ...
ALTER TABLE PAYMENT ADD CONSTRAINT FK_PAYMENT_IINV FOREIGN KEY (IINV_ID) REFERENCES IINVOICE(ID);

prompt Creating foreign key FK_PAYMENT_RINV on table PAYMENT ...
ALTER TABLE PAYMENT ADD CONSTRAINT FK_PAYMENT_RINV FOREIGN KEY (RINV_ID) REFERENCES RINVOICE(ID);

prompt Creating foreign key FK_PROJECT_CLIENT on table PROJECT ...
ALTER TABLE PROJECT ADD CONSTRAINT FK_PROJECT_CLIENT FOREIGN KEY (CLIENT_ID) REFERENCES CLIENT(ID);

prompt Creating foreign key FK_PROJECT_PRJSTS on table PROJECT ...
ALTER TABLE PROJECT ADD CONSTRAINT FK_PROJECT_PRJSTS FOREIGN KEY (STATUS_CODE) REFERENCES PROJECT_STATUS(CODE);

prompt Creating foreign key FK_PRJISSUE_PROJECT on table PROJECT_ISSUE ...
ALTER TABLE PROJECT_ISSUE ADD CONSTRAINT FK_PRJISSUE_PROJECT FOREIGN KEY (PROJECT_ID) REFERENCES PROJECT(ID);

prompt Creating foreign key FK_PRJISSATT_PRJISSUE on table PROJECT_ISSUE_ATTACHMENT ...
ALTER TABLE PROJECT_ISSUE_ATTACHMENT ADD CONSTRAINT FK_PRJISSATT_PRJISSUE FOREIGN KEY (PROJECT_ISSUE_ID) REFERENCES PROJECT_ISSUE(ID);

prompt Creating foreign key FK_PRJISSCMPASC_PRJISS on table PROJECT_ISSUE_CMP_ASSOC ...
ALTER TABLE PROJECT_ISSUE_CMP_ASSOC ADD CONSTRAINT FK_PRJISSCMPASC_PRJISS FOREIGN KEY (PROJECT_ISSUE_ID) REFERENCES PROJECT_ISSUE(ID);

prompt Creating foreign key FK_PRJISSNOTE_PRJISSUE on table PROJECT_ISSUE_NOTE ...
ALTER TABLE PROJECT_ISSUE_NOTE ADD CONSTRAINT FK_PRJISSNOTE_PRJISSUE FOREIGN KEY (PROJECT_ISSUE_ID) REFERENCES PROJECT_ISSUE(ID);

prompt Creating foreign key FK_PNEEDLIN_PNEED on table PURCHASE_NEED_LINE ...
ALTER TABLE PURCHASE_NEED_LINE ADD CONSTRAINT FK_PNEEDLIN_PNEED FOREIGN KEY (PNEED_ID) REFERENCES PURCHASE_NEED(ID);

prompt Creating foreign key FK_PORDLIN_PORDER on table PURCHASE_ORDER_LINE ...
ALTER TABLE PURCHASE_ORDER_LINE ADD CONSTRAINT FK_PORDLIN_PORDER FOREIGN KEY (PORDER_ID) REFERENCES PURCHASE_ORDER(ID);

prompt Creating foreign key FK_RINV_BPARTNER_1 on table RINVOICE ...
ALTER TABLE RINVOICE ADD CONSTRAINT FK_RINV_BPARTNER_1 FOREIGN KEY (ISSUER_ID) REFERENCES BPARTNER(ID);

prompt Creating foreign key FK_RINV_BPARTNER_2 on table RINVOICE ...
ALTER TABLE RINVOICE ADD CONSTRAINT FK_RINV_BPARTNER_2 FOREIGN KEY (RECEIVER_ID) REFERENCES BPARTNER(ID);

prompt Creating foreign key FK_RINV_CLIENT on table RINVOICE ...
ALTER TABLE RINVOICE ADD CONSTRAINT FK_RINV_CLIENT FOREIGN KEY (CLIENT_ID) REFERENCES CLIENT(ID);

prompt Creating foreign key FK_RINVITEM_UOM on table RINVOICE_ITEM ...
ALTER TABLE RINVOICE_ITEM ADD CONSTRAINT FK_RINVITEM_UOM FOREIGN KEY (QUANTITY_UNIT) REFERENCES UOM(CODE);

prompt Creating foreign key FK_SRVMSGTRL_LANG on table SERVER_MESSAGE_TRL ...
ALTER TABLE SERVER_MESSAGE_TRL ADD CONSTRAINT FK_SRVMSGTRL_LANG FOREIGN KEY (LANG_CODE) REFERENCES LANGUAGES(CODE);

prompt Creating foreign key FK_SRVMSGTRL_SRVMSG on table SERVER_MESSAGE_TRL ...
ALTER TABLE SERVER_MESSAGE_TRL ADD CONSTRAINT FK_SRVMSGTRL_SRVMSG FOREIGN KEY (SRVMSG_CODE) REFERENCES SERVER_MESSAGE(CODE) on delete CASCADE;

prompt Creating foreign key FK_PARAMVLDVAL_SYSPARAM on table SYS_PARAM_VALID_VALUE ...
ALTER TABLE SYS_PARAM_VALID_VALUE ADD CONSTRAINT FK_PARAMVLDVAL_SYSPARAM FOREIGN KEY (PARAM_CODE) REFERENCES SYS_PARAM(CODE);

prompt Creating foreign key FK_SYSPRMVAL_CLIENT on table SYS_PARAM_VALUE ...
ALTER TABLE SYS_PARAM_VALUE ADD CONSTRAINT FK_SYSPRMVAL_CLIENT FOREIGN KEY (CLIENT_ID) REFERENCES CLIENT(ID);

prompt Creating foreign key FK_SYSPRMVAL_SYSPARAM on table SYS_PARAM_VALUE ...
ALTER TABLE SYS_PARAM_VALUE ADD CONSTRAINT FK_SYSPRMVAL_SYSPARAM FOREIGN KEY (PARAM_CODE) REFERENCES SYS_PARAM(CODE);

prompt Creating foreign key FK_USRDOCSERRNG_DOCSERRNG on table SYS_USER_DOCSERRNG ...
ALTER TABLE SYS_USER_DOCSERRNG ADD CONSTRAINT FK_USRDOCSERRNG_DOCSERRNG FOREIGN KEY (DOCSERRNG_ID) REFERENCES DOCUMENT_SERIAL_RANGE(ID);

prompt Creating foreign key FK_USRROL_ROLE on table SYS_USER_ROLE ...
ALTER TABLE SYS_USER_ROLE ADD CONSTRAINT FK_USRROL_ROLE FOREIGN KEY (ROLE_NAME) REFERENCES SYS_ROLE(NAME) on delete CASCADE;

prompt Creating foreign key FK_USRROL_USER on table SYS_USER_ROLE ...
ALTER TABLE SYS_USER_ROLE ADD CONSTRAINT FK_USRROL_USER FOREIGN KEY (USER_ID) REFERENCES SYS_USER(ID) on delete CASCADE;

prompt Creating foreign key FK_TAX_TAXTYPE on table TAX ...
ALTER TABLE TAX ADD CONSTRAINT FK_TAX_TAXTYPE FOREIGN KEY (TAXTYPE_CODE) REFERENCES TAX_TYPE(CODE) on delete CASCADE;

prompt Creating foreign key FK_TIMESHT_PRJISS on table TIMESHEET ...
ALTER TABLE TIMESHEET ADD CONSTRAINT FK_TIMESHT_PRJISS FOREIGN KEY (PROJECT_ISSUE_ID) REFERENCES PROJECT_ISSUE(ID);

prompt Creating foreign key FK_UIDCFIELD_UIDC on table UI_DC_FIELD ...
ALTER TABLE UI_DC_FIELD ADD CONSTRAINT FK_UIDCFIELD_UIDC FOREIGN KEY (UIDC_CODE) REFERENCES UI_DC(CODE);

prompt Creating foreign key FK_UIFLDINITVAL_UIDC on table UI_DC_FIELD_INITVAL ...
ALTER TABLE UI_DC_FIELD_INITVAL ADD CONSTRAINT FK_UIFLDINITVAL_UIDC FOREIGN KEY (UIDC_CODE) REFERENCES UI_DC(CODE);

prompt Creating foreign key FK_UIDICTTRL_LANG on table UI_DICTIONARY_TRL ...
ALTER TABLE UI_DICTIONARY_TRL ADD CONSTRAINT FK_UIDICTTRL_LANG FOREIGN KEY (LANGUAGE_CODE) REFERENCES LANGUAGES(CODE);

prompt Creating foreign key FK_UIDICTTRL_UIDICT on table UI_DICTIONARY_TRL ...
ALTER TABLE UI_DICTIONARY_TRL ADD CONSTRAINT FK_UIDICTTRL_UIDICT FOREIGN KEY (UIDICT_ID) REFERENCES UI_DICTIONARY(ID) on delete CASCADE;

prompt Creating foreign key FK_UOM_CONVERSION_1 on table UOM_CONVERSION ...
ALTER TABLE UOM_CONVERSION ADD CONSTRAINT FK_UOM_CONVERSION_1 FOREIGN KEY (UOM_FROM) REFERENCES UOM(CODE);

prompt Creating foreign key FK_UOM_CONVERSION_2 on table UOM_CONVERSION ...
ALTER TABLE UOM_CONVERSION ADD CONSTRAINT FK_UOM_CONVERSION_2 FOREIGN KEY (UOM_TO) REFERENCES UOM(CODE);

