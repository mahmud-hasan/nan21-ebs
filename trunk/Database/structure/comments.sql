prompt Comments on table AC_ACCDOC...
COMMENT ON TABLE AC_ACCDOC is 'Accounting document header (Code: ACCDOC)';
COMMENT ON COLUMN AC_ACCDOC.ACCPERIOD_ID is 'Accounting period id this document belongs to.';
COMMENT ON COLUMN AC_ACCDOC.DOC_NO is 'Acccounting document number.';
COMMENT ON COLUMN AC_ACCDOC.DOC_DATE is 'Acccounting document date.';
COMMENT ON COLUMN AC_ACCDOC.BASEDOC_TYPE is 'Type of the base document';
COMMENT ON COLUMN AC_ACCDOC.BASEDOC_NO is 'Base document number';
COMMENT ON COLUMN AC_ACCDOC.BASEDOC_DATE is 'Base document date';
COMMENT ON COLUMN AC_ACCDOC.BASEDOC_ID is 'Base document id';
COMMENT ON COLUMN AC_ACCDOC.IS_GENERATED is 'Whether is generated or created manually';
COMMENT ON COLUMN AC_ACCDOC.IS_INSERTED is 'Document fully introduced in system, ready to be checked and posted.';
COMMENT ON COLUMN AC_ACCDOC.IS_POSTED is 'Checked and approved to be correct. By posting an accounting doc it becomes visible in journals';
COMMENT ON COLUMN AC_ACCDOC.POSTEDON is 'Posting date';

prompt Comments on table AC_ACCDOC_LINE...
COMMENT ON TABLE AC_ACCDOC_LINE is 'Accounting document line. Contains records of accounting document, as operation in credit/debit account pairs (Code: ACCDOCLIN)  ';

prompt Comments on table AC_ACCSCHEMA...
COMMENT ON TABLE AC_ACCSCHEMA is 'Accounting schemas (Code: ACCSCHEMA)';

prompt Comments on table AC_ACCSCHEMA_ACCT...
COMMENT ON TABLE AC_ACCSCHEMA_ACCT is 'Chart of accounts for a certain accounting schema (Code: ACCSCHACCT)';

prompt Comments on table AC_ACCSCHEMA_PARAM...
COMMENT ON TABLE AC_ACCSCHEMA_PARAM is 'Definition of accounting schema params. (Code: ACCSCHPARAM)';
COMMENT ON COLUMN AC_ACCSCHEMA_PARAM.IS_ACCOUNT is 'Specifies if the parameter represents a default account.';

prompt Comments on table AC_ACCSCHEMA_PARAM_VAL...
COMMENT ON TABLE AC_ACCSCHEMA_PARAM_VAL is 'Accounting schema properties (Code: ACCSCHPARAMVAL)';

prompt Comments on table AC_ACCT...
COMMENT ON TABLE AC_ACCT is 'Complete accounts chart of a client for an accounting schema (Code: ACCT)';
COMMENT ON COLUMN AC_ACCT.ID is 'Unique account identifier';
COMMENT ON COLUMN AC_ACCT.CLIENT_ID is 'Client unique identifier';
COMMENT ON COLUMN AC_ACCT.ACCOUNT is 'Account code';
COMMENT ON COLUMN AC_ACCT.NAME is 'Account name';
COMMENT ON COLUMN AC_ACCT.SUMMARY is 'Indicates if this is a summary account (i.e. cannot have balances or be posted to) ';
COMMENT ON COLUMN AC_ACCT.PARENT_ACCOUNT is 'Parent account code';
COMMENT ON COLUMN AC_ACCT.DESCRIPTION is 'Notes about account';
COMMENT ON COLUMN AC_ACCT.ACTIVE is 'Is in use';

prompt Comments on table AC_ACCT_BALANCE...
COMMENT ON TABLE AC_ACCT_BALANCE is 'Account balance (Code: ACCTBAL)';

prompt Comments on table AC_ACCT_GRP...
COMMENT ON TABLE AC_ACCT_GRP is 'Account groups (Code: ACCTGRP)';

prompt Comments on table AC_ACCT_MOVEMENT...
COMMENT ON TABLE AC_ACCT_MOVEMENT is 'Account movements (Code: ACCTMVM)';

prompt Comments on table AC_ACC_JOURNAL...
COMMENT ON TABLE AC_ACC_JOURNAL is 'Accounting journals definition (Code: ACCJOURN)';

prompt Comments on table AC_ACC_PERIOD...
COMMENT ON TABLE AC_ACC_PERIOD is 'Accounting periods (Code: ACCPERIOD)';
COMMENT ON COLUMN AC_ACC_PERIOD.IS_FIRST_PERIOD is 'Specify if it is the first period in fiscal year for opening purpose';
COMMENT ON COLUMN AC_ACC_PERIOD.NAME is 'Automatically set as accyear_code concatenated with code. ';

prompt Comments on table AC_ACC_YEAR...
COMMENT ON TABLE AC_ACC_YEAR is 'Fiscal year definition. Might be different as calendaristic year (Code: ACCYEAR)';
COMMENT ON COLUMN AC_ACC_YEAR.CLOSED is 'Fiscal year closed. Is set to true by the fiscal year closing routine.';
COMMENT ON COLUMN AC_ACC_YEAR.OPENED is 'Fiscal year initialised. Is set to true by the fiscal year initialisation routine.';
COMMENT ON COLUMN AC_ACC_YEAR.IS_FIRST_YEAR is 'Specify if it is the first fiscal year for opening purpose';

prompt Comments on table AC_CLIACCSCHEMA_PARAMACCT...
COMMENT ON TABLE AC_CLIACCSCHEMA_PARAMACCT is 'Accounting schema parameter values. Stores only the parameters which are marked as account values ( IS_ACCOUNT true ) (Code: CLIACCSCHPACCT)';

prompt Comments on table AC_CLIACCSCHEMA_PARAMVAL...
COMMENT ON TABLE AC_CLIACCSCHEMA_PARAMVAL is 'Accounting schema parameter values. Stores only the parameters which are not marked as account values ( IS_ACCOUNT false ) (Code: CLIACCSCHPVAL)';

prompt Comments on table AC_CLIENT_ACCSCHEMA...
COMMENT ON TABLE AC_CLIENT_ACCSCHEMA is 'Accounting schemas used by a business unit [client] (Code: CLIACCSCHEMA)';

prompt Comments on table ASSET...
COMMENT ON TABLE ASSET is 'Assets (Code: ASSET)';

prompt Comments on table ASSET_GROUP...
COMMENT ON TABLE ASSET_GROUP is 'Asset group (Code: ASSETGRP)';

prompt Comments on table BANK...
COMMENT ON TABLE BANK is 'Banks (Code: BANK)';

prompt Comments on table BANK_AGENCY...
COMMENT ON TABLE BANK_AGENCY is 'Bank agencies (Code: BANKAG)';

prompt Comments on table BILLING_CYCLE...
COMMENT ON TABLE BILLING_CYCLE is 'Billing cycles (Code: BILLCYC)';

prompt Comments on table BILLING_CYCLE_CLASS...
COMMENT ON TABLE BILLING_CYCLE_CLASS is 'Billing cycle class (Code: BILLCYCCLASS)';
COMMENT ON COLUMN BILLING_CYCLE_CLASS.STARTDAY is 'Start day of the billing cycle, the N-th day of the month  ';

prompt Comments on table BPARTNER...
COMMENT ON TABLE BPARTNER is 'Business partner master data. Business partners can be customers, vendors, or internal stuff/hierarchical units. (Code: BPARTNER)';

prompt Comments on table BPCONTACT_PHONE...
COMMENT ON TABLE BPCONTACT_PHONE is 'Communication methods with a certain contact (Code: BPCONTACTPH)';

prompt Comments on table BP_ACCOUNT...
COMMENT ON TABLE BP_ACCOUNT is 'Accounts of a business partner (Code: BPACCT)';
COMMENT ON COLUMN BP_ACCOUNT.ID is 'Unique identifier';
COMMENT ON COLUMN BP_ACCOUNT.BPARTNER_ID is 'Business partner unique identifier';
COMMENT ON COLUMN BP_ACCOUNT.CLIENT_ID is 'Client business unit unique identifier';
COMMENT ON COLUMN BP_ACCOUNT.ACCSCHEMA_ID is 'Accounting schema ID';
COMMENT ON COLUMN BP_ACCOUNT.C_ACCT_RECEIVABLE_ID is 'Payables account of business partner as customer ';
COMMENT ON COLUMN BP_ACCOUNT.C_ACCT_PREPAY_ID is 'Prepayment account of business partner as customer ';
COMMENT ON COLUMN BP_ACCOUNT.V_ACCT_PAYABLE_ID is 'Receivables account of business partner as vendor';
COMMENT ON COLUMN BP_ACCOUNT.V_ACCT_PREPAY_ID is 'Prepayment account of business partner as vendor';
COMMENT ON COLUMN BP_ACCOUNT.I_ACCT_PAYABLE_ID is 'Payable account of business partner as internal staff';
COMMENT ON COLUMN BP_ACCOUNT.I_ACCT_RECEIVABLE_ID is 'Receivables account of business partner as internal staff';
COMMENT ON COLUMN BP_ACCOUNT.I_ACCT_PREPAY_ID is 'Prepayment account of business partner as internal staff';

prompt Comments on table BP_ADRESS...
COMMENT ON TABLE BP_ADRESS is 'Business partner adress info (Code: BPADR)';
COMMENT ON COLUMN BP_ADRESS.ADRESS_TYPE is 'Adress types: D (default), B (billing), S (shipping), M (mailing), O(other) ';

prompt Comments on table BP_AMOUNT...
COMMENT ON TABLE BP_AMOUNT is 'Charged amounts based on financial documents (invoices and receipts). Records in this table are generated automatically by triggers when validating financial documents. (Code: BPAMOUNT)';

prompt Comments on table BP_BALANCE...
COMMENT ON TABLE BP_BALANCE is 'Business partner balance created by validating income/expense documents (Code: BPBALANCE)';

prompt Comments on table BP_BANKACCOUNT...
COMMENT ON TABLE BP_BANKACCOUNT is 'Business partners bank accounts. (Code: BPBANKACCT)';

prompt Comments on table BP_CLIENT...
COMMENT ON TABLE BP_CLIENT is 'Client level business partner details. Business partner is visible only for specified clients. (Code: BPCLIENT)';
COMMENT ON COLUMN BP_CLIENT.CUSTGRP_CODE is 'Code of the customer group ';
COMMENT ON COLUMN BP_CLIENT.CREDITCLASS_CODE is 'Code of the credit class assigned to this account . Credit limit of the selected class is used unless MAX_CREDIT_LIMIT is specified';
COMMENT ON COLUMN BP_CLIENT.PAYMETHOD_CODE is 'Prefered payment method ';
COMMENT ON COLUMN BP_CLIENT.PAYTERMCLASS_CODE is 'Code of the payment term assigned to this account. Payment term of the selected class is used unless MAX_PAYMENT_TERM is specified';
COMMENT ON COLUMN BP_CLIENT.MAX_CREDIT_LIMIT is 'Maximum credit limit. Leave it blank to use the credit limit of the selected CREDITCLASS_CODE';
COMMENT ON COLUMN BP_CLIENT.MAX_PAYMENT_TERM is 'Maximum payment term in number of days. Leave it blank to use the term of the selected PAYTERMCLASS_CODE. ';

prompt Comments on table BP_CONTACT...
COMMENT ON TABLE BP_CONTACT is 'Contact persons (Code: BPCONTACT)';

prompt Comments on table BP_CONTRACT...
COMMENT ON TABLE BP_CONTRACT is 'Business contracts/agreements between parties. (Code: BPCONTR)';
COMMENT ON COLUMN BP_CONTRACT.DOC_NO is 'Document number';
COMMENT ON COLUMN BP_CONTRACT.DOC_DATE is 'Document date';
COMMENT ON COLUMN BP_CONTRACT.CLIENT_ID is 'Business unit unique identifier';
COMMENT ON COLUMN BP_CONTRACT.CUST_BPARTNER_ID is 'Customer business partner unique identifier';
COMMENT ON COLUMN BP_CONTRACT.CONTRTYPE_CODE is 'Code of the contract type';
COMMENT ON COLUMN BP_CONTRACT.STARTDATE is 'Start date of contract validity';
COMMENT ON COLUMN BP_CONTRACT.ENDDATE is 'End date of contract validity. Leave blank for undetermined period';
COMMENT ON COLUMN BP_CONTRACT.NOTES is 'Notes ';
COMMENT ON COLUMN BP_CONTRACT.BPCONTR_ID is 'Reference contract unique identifier. ';
COMMENT ON COLUMN BP_CONTRACT.CONTRSTAT_CODE is 'Contract status code.';
COMMENT ON COLUMN BP_CONTRACT.SUPP_BPARTNER_ID is 'Supplier business partner unique identifier';

prompt Comments on table BP_PHONE...
COMMENT ON TABLE BP_PHONE is 'Communication methods with a business partner (Code: BPPHONE)';
COMMENT ON COLUMN BP_PHONE.CMNCT_TYPE is 'Type of communication for ex: phone';
COMMENT ON COLUMN BP_PHONE.CMNCT_VALUE is 'phone number';
COMMENT ON COLUMN BP_PHONE.NOTES is 'Notes regarding this communication ';

prompt Comments on table BP_SUBSCRIPTION...
COMMENT ON TABLE BP_SUBSCRIPTION is 'Business partner subscriptions (Code: BPSUBSC)';
COMMENT ON COLUMN BP_SUBSCRIPTION.STARTDATE is 'Subscription period start date';
COMMENT ON COLUMN BP_SUBSCRIPTION.ENDDATE is 'Subscription period end date';
COMMENT ON COLUMN BP_SUBSCRIPTION.BPACCCUST_ID is 'Business partner account to charge ';

prompt Comments on table BUDGET...
COMMENT ON TABLE BUDGET is 'Budgets (Code: BUDGET)';

prompt Comments on table CITY...
COMMENT ON TABLE CITY is 'Geographical base data definition, cities (Code: CITY)';

prompt Comments on table CLIENT...
COMMENT ON TABLE CLIENT is 'ERP client business units. Each company can have many different business units, each client must be defined in BPARTNER as business partner also (Code: CLIENT)';
COMMENT ON COLUMN CLIENT.NAME is 'Business unit''s name';
COMMENT ON COLUMN CLIENT.BPARTNER_ID is 'The unique identifier of the business partner record for this business unit. ';
COMMENT ON COLUMN CLIENT.CODE is 'Unique alias for this client  ';

prompt Comments on table COMMUNIC_TYPE...
COMMENT ON TABLE COMMUNIC_TYPE is 'Types of communication (Code: CMNCTYP)';

prompt Comments on table CONTRACT_STATUS...
COMMENT ON TABLE CONTRACT_STATUS is 'Contract statuses (Code: CONTRSTAT)';

prompt Comments on table CONTRACT_TYPE...
COMMENT ON TABLE CONTRACT_TYPE is 'Contract types (Code: CONTRTYPE)';

prompt Comments on table COSTING_METHOD...
COMMENT ON TABLE COSTING_METHOD is 'Costing methods (Code: COSTMETHOD)';

prompt Comments on table COST_CENTER...
COMMENT ON TABLE COST_CENTER is 'Cost centers (Code: COSTCENTER)';

prompt Comments on table COUNTRY...
COMMENT ON TABLE COUNTRY is 'Geographical base data definition, countries (Code: COUNTRY)';
COMMENT ON COLUMN COUNTRY.ID is 'Unique system identifier';
COMMENT ON COLUMN COUNTRY.CODE is 'Unique system code';
COMMENT ON COLUMN COUNTRY.NAME is 'Country name';
COMMENT ON COLUMN COUNTRY.ACTIVE is 'Is in use';
COMMENT ON COLUMN COUNTRY.ISO2 is 'International 2 letter country code';

prompt Comments on table CREDIT_CLASS...
COMMENT ON TABLE CREDIT_CLASS is 'Possible credit class definition (Code: CREDCLASS)';
COMMENT ON COLUMN CREDIT_CLASS.CREDIT_LIMIT is 'Maximum credit limit.';
COMMENT ON COLUMN CREDIT_CLASS.CREDIT_LIMIT_CURRENCY is 'Credit limit currency';

prompt Comments on table CURRENCY...
COMMENT ON TABLE CURRENCY is 'Available currencies to be used in system (Code: CURRENCY)';

prompt Comments on table CURRENCY_AVG_RATE...
COMMENT ON TABLE CURRENCY_AVG_RATE is 'Exchange rates averages for various periods (Code: CRNCYAVGRATE)';

prompt Comments on table CURRENCY_XRATE...
COMMENT ON TABLE CURRENCY_XRATE is 'Exchange rates for the currency exchange pairs (Code: CRNCYXRATE)';

prompt Comments on table DOCUMENT_SERIAL...
COMMENT ON TABLE DOCUMENT_SERIAL is 'Document serials for all document types (Code: DOCSER)';
COMMENT ON COLUMN DOCUMENT_SERIAL.DOCUMENT_TYPE is 'IINV,..';

prompt Comments on table DOCUMENT_SERIAL_NO...
COMMENT ON TABLE DOCUMENT_SERIAL_NO is 'Detailed document numbers for a certain serial (DOCSERNO)';

prompt Comments on table DOCUMENT_SERIAL_RANGE...
COMMENT ON TABLE DOCUMENT_SERIAL_RANGE is 'Document serial numbers range for a certain serial (Code: DOCSERRNG)';
COMMENT ON COLUMN DOCUMENT_SERIAL_RANGE.IS_INSTALLED is 'Is installed for use, when setting this flag to true a detailed list of numbers between minval and maxval are generated into DOCUMENT_SERIAL_NO table';
COMMENT ON COLUMN DOCUMENT_SERIAL_RANGE.IS_CLOSED is 'Forced close of range . Altough there might be unused numbers the range can be closed, closing all unused numbers from this range.';

prompt Comments on table EMPLOYEE...
COMMENT ON TABLE EMPLOYEE is 'Employees (Code: EMPL)';

prompt Comments on table EXPENSESHEET...
COMMENT ON TABLE EXPENSESHEET is 'Expense sheet (Code: EXPSHEET)';

prompt Comments on table IINVOICE...
COMMENT ON TABLE IINVOICE is 'Issued invoice. Invoices issued by one of the system clients business units. (Code: IINV)';
COMMENT ON COLUMN IINVOICE.IS_PRINTED is 'Issued and sent to customer. Once this flag set, document cannot be changed  ';
COMMENT ON COLUMN IINVOICE.VAT_RATE is 'Used in invoice printing, global invoice level vat rate';
COMMENT ON COLUMN IINVOICE.IS_INSERTED is 'Document is fully registered in system and checked to be correct. Must set this flag before further processing.';

prompt Comments on table IINVOICE_ITEM...
COMMENT ON TABLE IINVOICE_ITEM is 'Invoice lines (Code: IINVITEM)';

prompt Comments on table IINV_DOCTYP_ATTR...
COMMENT ON TABLE IINV_DOCTYP_ATTR is 'Customer invoice document types (Code: IINVDOCTYPATT)';

prompt Comments on table IINV_DOC_TYPE...
COMMENT ON TABLE IINV_DOC_TYPE is 'Invoice document types (Code: IINVDOCTYPE)';

prompt Comments on table IMPEX_MAP...
COMMENT ON TABLE IMPEX_MAP is 'Data import-export map (Code: IMPEXMAP)';

prompt Comments on table IMPEX_MAP_ITEM...
COMMENT ON TABLE IMPEX_MAP_ITEM is 'List of items for an import-export map (Code: IMPEXMAPITEM)';

prompt Comments on table IMP_FILE...
COMMENT ON TABLE IMP_FILE is 'Imported files (Code: IMPFILE)';
COMMENT ON COLUMN IMP_FILE.PROCESSING_STATUS is '0 not started, 1- in progress, 2 finished';
COMMENT ON COLUMN IMP_FILE.IS_SUCCESS is 'Result of import is successful. If Y data has been successfully transfered to target data source';

prompt Comments on table INSURANCE...
COMMENT ON TABLE INSURANCE is 'Insurance documents (Code: INSR)';

prompt Comments on table LANGUAGES...
COMMENT ON TABLE LANGUAGES is 'Languages definition (Code: LANG)';

prompt Comments on table MENUBAR...
COMMENT ON TABLE MENUBAR is 'Menubars  (Code: MENUBAR)';

prompt Comments on table MENUITEM...
COMMENT ON TABLE MENUITEM is 'Menues (Code: MENUITEM)';
COMMENT ON COLUMN MENUITEM.POSITION is 'Sequence number of this menu item position in parent menu';
COMMENT ON COLUMN MENUITEM.MENUITEM_ID is 'Parent menu. ';

prompt Comments on table MENUITEM_PARAM...
COMMENT ON TABLE MENUITEM_PARAM is 'Parameters used to call the target GUI from menu (Code: MENUITEMPARAM)';

prompt Comments on table MENUITEM_ROLE...
COMMENT ON TABLE MENUITEM_ROLE is 'Restricts access to a menuitems only for users having one of the specified  roles. If there is no role set for a certein menu item then it is visible for all users (Code: MENUITEMROLE)';

prompt Comments on table MENUITEM_TRL...
COMMENT ON TABLE MENUITEM_TRL is 'Menu item translation (Code: MENUITEMTRL)';

prompt Comments on table MENU_SHORTCUT...
COMMENT ON TABLE MENU_SHORTCUT is 'Menu shortcuts created by user. Can be links or folders  (Code: MENUSHRCT)';
COMMENT ON COLUMN MENU_SHORTCUT.OWNER is 'User code, owner of this shortcut';
COMMENT ON COLUMN MENU_SHORTCUT.LINK is 'Code of the UI component, if not set this is a folder';
COMMENT ON COLUMN MENU_SHORTCUT.MENUSHRCT_ID is 'Parent folder';

prompt Comments on table MM_MOVEMENT_IN_DOC...
COMMENT ON TABLE MM_MOVEMENT_IN_DOC is 'Product movement document. Goods reception  (Code: MVMNTINDOC)';
COMMENT ON COLUMN MM_MOVEMENT_IN_DOC.RINV_ID is 'Supplier invoice ';

prompt Comments on table MM_MOVEMENT_IN_LINE...
COMMENT ON TABLE MM_MOVEMENT_IN_LINE is 'Lines of a movement document (Code: MVMNTINLIN)';

prompt Comments on table MM_MOVEMENT_OUT_DOC...
COMMENT ON TABLE MM_MOVEMENT_OUT_DOC is 'Product movement document. Goods delivery notes (Code: MVMNTOUTDOC)';

prompt Comments on table MM_MVMNTIN_DOCTYPE...
COMMENT ON TABLE MM_MVMNTIN_DOCTYPE is 'Inventory reception document types (Code: MVMNTINDOCTYP)';

prompt Comments on table MM_ORG_INV...
COMMENT ON TABLE MM_ORG_INV is 'Organization inventories (Code: ORGINV)';
COMMENT ON COLUMN MM_ORG_INV.ORGINVTYPE_CODE is 'Inventory type';
COMMENT ON COLUMN MM_ORG_INV.IS_DEFAULT is 'Is default inventory of  organization?';

prompt Comments on table MM_ORG_INV_TYPE...
COMMENT ON TABLE MM_ORG_INV_TYPE is 'Organization inventory type (Code: ORGINVTYP)';

prompt Comments on table MM_PRICE_LEVEL...
COMMENT ON TABLE MM_PRICE_LEVEL is 'Price levels (Code: PRICELVL)';

prompt Comments on table MM_PRICE_LIST...
COMMENT ON TABLE MM_PRICE_LIST is 'Product price lists (Code: PRICELST)';

prompt Comments on table MM_PRODUCT...
COMMENT ON TABLE MM_PRODUCT is 'Product master data (Code: PROD)';

prompt Comments on table MM_PRODUCT_ACCOUNT...
COMMENT ON TABLE MM_PRODUCT_ACCOUNT is 'Product accounts (Code: PRODACCT)';

prompt Comments on table MM_PRODUCT_CATEGORY...
COMMENT ON TABLE MM_PRODUCT_CATEGORY is 'Product categories (Code: PRODCATEG)';

prompt Comments on table MM_PRODUCT_CATEGORY_ACCOUNT...
COMMENT ON TABLE MM_PRODUCT_CATEGORY_ACCOUNT is 'Product category accounts (Code: PRODCATEGACC)';

prompt Comments on table MM_PRODUCT_CLIENT...
COMMENT ON TABLE MM_PRODUCT_CLIENT is 'Client level product details. Product is visible only for specified clients. (Code: PRODCLIENT)';

prompt Comments on table MM_PRODUCT_PRICE...
COMMENT ON TABLE MM_PRODUCT_PRICE is 'Product prices. (Code: PRODPRICE) ';

prompt Comments on table MM_PROD_ATTR...
COMMENT ON TABLE MM_PROD_ATTR is 'User defined product attributes (Code: PRDATTR)';

prompt Comments on table MM_PROD_ATTR_GRP...
COMMENT ON TABLE MM_PROD_ATTR_GRP is 'User defined product attribute groups. (Code: PRDATTRGRP) ';

prompt Comments on table MM_PROD_ATTR_VAL...
COMMENT ON TABLE MM_PROD_ATTR_VAL is 'User defined product attributes values. (Code: PRDATTRVAL) ';

prompt Comments on table MM_PROD_STOCK...
COMMENT ON TABLE MM_PROD_STOCK is 'Current product stock (Code: PRODSTOCK)';

prompt Comments on table MM_PROD_STOCK_BALANCE...
COMMENT ON TABLE MM_PROD_STOCK_BALANCE is 'Stock snapshots for certain dates, whenever an inventory balance is computed (Code: PRODSTOCKBLN)';

prompt Comments on table MM_PROD_STOCK_CMP...
COMMENT ON TABLE MM_PROD_STOCK_CMP is 'Stock components (Code: PRODSTOCKCMP)';

prompt Comments on table MM_PROD_STOCK_CMP_BALANCE...
COMMENT ON TABLE MM_PROD_STOCK_CMP_BALANCE is 'Stock components snapshots for certain dates, whenever an inventory balance is computed (Code: PRODSTOCKCMPBLN)';

prompt Comments on table MM_PROD_STOCK_MVMNT...
COMMENT ON TABLE MM_PROD_STOCK_MVMNT is 'Movements in inventory (Code: PRDSTCKMVMNT)';
COMMENT ON COLUMN MM_PROD_STOCK_MVMNT.MVMNT_SENSE is 'Sense of movement: I: in, O: out, T: transfer';

prompt Comments on table MM_STOCK_LOC...
COMMENT ON TABLE MM_STOCK_LOC is 'Stock locators for an inventory (Code: STOCKLOC)';

prompt Comments on table MM_STOCK_LOC_TYPE...
COMMENT ON TABLE MM_STOCK_LOC_TYPE is 'Stock location types (Code: STOCKLOCTYP)';

prompt Comments on table ORGANIZATION...
COMMENT ON TABLE ORGANIZATION is 'Client organizations (Code: ORG)';
COMMENT ON COLUMN ORGANIZATION.CLIENT_ID is 'Business unit';
COMMENT ON COLUMN ORGANIZATION.NAME is 'Organization name';
COMMENT ON COLUMN ORGANIZATION.ORG_ID is 'Parent organisation';

prompt Comments on table ORG_ATTR...
COMMENT ON TABLE ORG_ATTR is 'Organization attributes definition (Code: ORGATTR)';

prompt Comments on table ORG_ATTR_VAL...
COMMENT ON TABLE ORG_ATTR_VAL is 'Organization attribute values (Code: ORGATTRVAL)';

prompt Comments on table ORG_TYPE...
COMMENT ON TABLE ORG_TYPE is 'Organization types (Code: ORGTYP)';

prompt Comments on table PAYMENT...
COMMENT ON TABLE PAYMENT is 'Payment documents. Includes payables and receivables [Code: PAYMENT]';

prompt Comments on table PAYMENT_DOCTYPE_ATTR...
COMMENT ON TABLE PAYMENT_DOCTYPE_ATTR is 'Payment document type attributes. (Code: PAYDOCTYPATT)';

prompt Comments on table PAYMENT_DOC_TYPE...
COMMENT ON TABLE PAYMENT_DOC_TYPE is 'Payment document types (Code: PAYDOCTYPE)';

prompt Comments on table PAYMENT_ITEM...
COMMENT ON TABLE PAYMENT_ITEM is 'Payed amounts (Code: PAYITEM)';
COMMENT ON COLUMN PAYMENT_ITEM.DEBIT_CREDIT is 'D=debit/C=credit';

prompt Comments on table PAYMENT_METHOD...
COMMENT ON TABLE PAYMENT_METHOD is 'Payment methods (Code: PAYMETHOD)';

prompt Comments on table PAYMENT_TERM_CLASS...
COMMENT ON TABLE PAYMENT_TERM_CLASS is 'Payment terms (Code: PAYTERMCLASS)';

prompt Comments on table PERSON...
COMMENT ON TABLE PERSON is 'Contact persons (Code: PERS) ';

prompt Comments on table PROJECT...
COMMENT ON TABLE PROJECT is 'Projects (Code: PROJECT)';

prompt Comments on table PROJECT_CMP_TYPE...
COMMENT ON TABLE PROJECT_CMP_TYPE is 'Project component types (Code: PRJCMPTYP)';

prompt Comments on table PROJECT_ISSUE...
COMMENT ON TABLE PROJECT_ISSUE is '(Code: PRJISSUE)';
COMMENT ON COLUMN PROJECT_ISSUE.PLAN_STARTDATE is 'Planned start date';
COMMENT ON COLUMN PROJECT_ISSUE.PLAN_ENDDATE is 'Planned end date';
COMMENT ON COLUMN PROJECT_ISSUE.ACT_STARTDATE is 'Actual sart date';
COMMENT ON COLUMN PROJECT_ISSUE.ACT_ENDDATE is 'Actual end date';

prompt Comments on table PROJECT_ISSUE_ATTACHMENT...
COMMENT ON TABLE PROJECT_ISSUE_ATTACHMENT is '(Code: PRJISSATT)';

prompt Comments on table PROJECT_ISSUE_CMP_ASSOC...
COMMENT ON TABLE PROJECT_ISSUE_CMP_ASSOC is 'Project issues, component association. Stores the new or changed components (Code: PRJISSCMPASC) ';
COMMENT ON COLUMN PROJECT_ISSUE_CMP_ASSOC.CMP_NAME is 'Component name (file name)';
COMMENT ON COLUMN PROJECT_ISSUE_CMP_ASSOC.CMP_LOCATION is 'Component location, svn, storage etc';
COMMENT ON COLUMN PROJECT_ISSUE_CMP_ASSOC.CMP_VERSION is 'Component version number';

prompt Comments on table PROJECT_ISSUE_NOTE...
COMMENT ON TABLE PROJECT_ISSUE_NOTE is '(Code: PRJISSNOTE)';

prompt Comments on table PROJECT_ISSUE_PRIORITY...
COMMENT ON TABLE PROJECT_ISSUE_PRIORITY is '(Code: PRJISSPRI)';

prompt Comments on table PROJECT_ISSUE_SEVERITY...
COMMENT ON TABLE PROJECT_ISSUE_SEVERITY is '(Code: PRJISSSEV)';

prompt Comments on table PROJECT_ISSUE_STATUS...
COMMENT ON TABLE PROJECT_ISSUE_STATUS is '(Code: PRJISSSTS)';

prompt Comments on table PROJECT_ISSUE_TYPE...
COMMENT ON TABLE PROJECT_ISSUE_TYPE is '(Code: PRJISSTYP)';

prompt Comments on table PROJECT_STATUS...
COMMENT ON TABLE PROJECT_STATUS is '(Code: PRJSTS)';

prompt Comments on table PROJECT_TYPE...
COMMENT ON TABLE PROJECT_TYPE is 'Project types (Code: PRJTYPE)';

prompt Comments on table PURCHASE_NEED...
COMMENT ON TABLE PURCHASE_NEED is 'Purchase needs documents (Code: PNEED)';

prompt Comments on table PURCHASE_NEED_LINE...
COMMENT ON TABLE PURCHASE_NEED_LINE is 'Detail lines of a purchase need document (PNEEDLIN)';

prompt Comments on table PURCHASE_ORDER...
COMMENT ON TABLE PURCHASE_ORDER is 'Purchase orders (Code: PORDER)';

prompt Comments on table PURCHASE_ORDER_LINE...
COMMENT ON TABLE PURCHASE_ORDER_LINE is 'Purchase order lines (Code: PORDLIN)';

prompt Comments on table REGION...
COMMENT ON TABLE REGION is 'Geographical base data definition, regions (Code: REGION)';
COMMENT ON COLUMN REGION.ID is 'Unique system identifier';
COMMENT ON COLUMN REGION.CODE is 'Unique system code';
COMMENT ON COLUMN REGION.NAME is 'Region name';
COMMENT ON COLUMN REGION.COUNTRY_CODE is 'Country code';
COMMENT ON COLUMN REGION.ACTIVE is 'Is in use';
COMMENT ON COLUMN REGION.WITH_CITIES is 'Must be defined cities ';
COMMENT ON COLUMN REGION.ISO is 'Country specific iso code';

prompt Comments on table REPORTING_PERIOD...
COMMENT ON TABLE REPORTING_PERIOD is 'Custom reporting periods. Can be linked to accounting periods (Code: REPPERIOD)';

prompt Comments on table RINVOICE...
COMMENT ON TABLE RINVOICE is 'External invoice issued by suppliers on purchases (Code: RINV)';
COMMENT ON COLUMN RINVOICE.IS_INSERTED is 'Document is fully registered in system and checked to be correct. Must set this flag before further processing.';
COMMENT ON COLUMN RINVOICE.IS_PAYABLE is 'Approved to be payed';
COMMENT ON COLUMN RINVOICE.IS_PAYED is 'Is payed';

prompt Comments on table RINVOICE_ITEM...
COMMENT ON TABLE RINVOICE_ITEM is 'Received invoice lines (Code: RINVITEM)';

prompt Comments on table RINV_DOCTYP_ATTR...
COMMENT ON TABLE RINV_DOCTYP_ATTR is 'Supplier invoice document type attributes (Code: RINVDOCTYPATT)';

prompt Comments on table RINV_DOC_TYPE...
COMMENT ON TABLE RINV_DOC_TYPE is 'Invoice document types (Code: RINVDOCTYPE)';

prompt Comments on table SALES_ORDER...
COMMENT ON TABLE SALES_ORDER is 'Customer orders (Code: SORDER)';

prompt Comments on table SALES_ORDER_LINE...
COMMENT ON TABLE SALES_ORDER_LINE is 'Customer order items (Code: SORDLIN)';
COMMENT ON COLUMN SALES_ORDER_LINE.PRICE is 'Actual item price';
COMMENT ON COLUMN SALES_ORDER_LINE.DISCOUNT_TYPE is 'Amount per unit (U) , amount per cost (C),  Percent (P) , None (N)';
COMMENT ON COLUMN SALES_ORDER_LINE.NET_AMOUNT is 'Total line net amount with discount applied';
COMMENT ON COLUMN SALES_ORDER_LINE.RAW_NET_AMOUNT is 'Total line net amount without appling the discount';

prompt Comments on table SERVER_MESSAGE...
COMMENT ON TABLE SERVER_MESSAGE is 'Server messages (Code: SRVMSG)';

prompt Comments on table SERVER_MESSAGE_TRL...
COMMENT ON TABLE SERVER_MESSAGE_TRL is 'Server message translations (Code: SRVMSGTRL)';

prompt Comments on table STREET...
COMMENT ON TABLE STREET is 'Geographical base data definition, streets (Code: STREET)';

prompt Comments on table SUBSCRIPTION...
COMMENT ON TABLE SUBSCRIPTION is 'Subscriptions (Code: SUBSC)';

prompt Comments on table SYS_PARAM...
COMMENT ON TABLE SYS_PARAM is 'System parameters (Code: SYSPARAM)';

prompt Comments on table SYS_PARAM_GROUP...
COMMENT ON TABLE SYS_PARAM_GROUP is 'System parameter groups (Code: SYSPARAMGRP)';

prompt Comments on table SYS_PARAM_VALID_VALUE...
COMMENT ON TABLE SYS_PARAM_VALID_VALUE is 'Allowed valid values for system parameters (Code: PARAMVLDVAL)';

prompt Comments on table SYS_PARAM_VALUE...
COMMENT ON TABLE SYS_PARAM_VALUE is 'Actual values for the system parameters. These values are applied per client. (Code: SYSPRMVAL)';

prompt Comments on table SYS_ROLE...
COMMENT ON TABLE SYS_ROLE is 'System roles grantable to users. (Code: ROLE)';

prompt Comments on table SYS_USER...
COMMENT ON TABLE SYS_USER is 'System users. (Code: USER)';

prompt Comments on table SYS_USER_DOCSERRNG...
COMMENT ON TABLE SYS_USER_DOCSERRNG is 'Document serial range accesible to be used in billing by a certain user (USRDOCSERRNG)';

prompt Comments on table SYS_USER_ROLE...
COMMENT ON TABLE SYS_USER_ROLE is 'Roles granted to users (Code: USRROL)';

prompt Comments on table TASKS...
COMMENT ON TABLE TASKS is 'Tasks (Code: TASK)';

prompt Comments on table TAX...
COMMENT ON TABLE TAX is 'Possible tax definition (Code: TAX)';
COMMENT ON COLUMN TAX.VALUE_TYPE is 'RATE, PERCENT';

prompt Comments on table TAX_TYPE...
COMMENT ON TABLE TAX_TYPE is 'Possible tax type definitions (Code: TAXTYPE)';
COMMENT ON COLUMN TAX_TYPE.IS_SYSTEM is 'Specifies if this is a record required by the system to work properly. Cannot be updated/deleted by user. ';

prompt Comments on table TEST...
COMMENT ON TABLE TEST is 'Test table (Code: TEST)';

prompt Comments on table TIMESHEET...
COMMENT ON TABLE TIMESHEET is 'Work timesheet (Code: TIMESHT)';

prompt Comments on table TR_PARCEL...
COMMENT ON TABLE TR_PARCEL is 'Parcels (Code: PARCEL)';

prompt Comments on table TR_PARCEL_EVENT...
COMMENT ON TABLE TR_PARCEL_EVENT is 'Events which occur during a parcel delivery process (Code: PARCELEVNT)';

prompt Comments on table TR_PARCEL_EVENT_TYPE...
COMMENT ON TABLE TR_PARCEL_EVENT_TYPE is 'Types of events which might occur during parcel delivery process (Code: PARCELEVNTTYP)';

prompt Comments on table TR_PARCEL_EVENT_TYPE_GRP...
COMMENT ON TABLE TR_PARCEL_EVENT_TYPE_GRP is 'Parcel event groups. Values are used to identify the proper event types for parcel operations (Code: PARCELEVNTTYPGRP)  ';

prompt Comments on table TR_PARCEL_REJECT_REASON...
COMMENT ON TABLE TR_PARCEL_REJECT_REASON is 'List of reasons for parcel rejection (Code: PARCELREJRES)';

prompt Comments on table TR_TRANSPORT...
COMMENT ON TABLE TR_TRANSPORT is 'Transports (Code: TRANSP)';

prompt Comments on table TR_TRANSPORT_STATUS...
COMMENT ON TABLE TR_TRANSPORT_STATUS is 'Transport status (Code: TRANSPSTAT)';

prompt Comments on table TR_TRANSPORT_TYPE...
COMMENT ON TABLE TR_TRANSPORT_TYPE is 'Transport types (Code: TRANSPTYPE)';

prompt Comments on table TR_VEHICLE...
COMMENT ON TABLE TR_VEHICLE is 'Means of transport (Code: VEHICLE)';

prompt Comments on table TR_VEHICLE_TYPE...
COMMENT ON TABLE TR_VEHICLE_TYPE is 'Vehicle types (Code: VEHICLETYP)';

prompt Comments on table UI_DC...
COMMENT ON TABLE UI_DC is 'Basic data components used in user interfaces (Code: UIDC) ';

prompt Comments on table UI_DC_FIELD...
COMMENT ON TABLE UI_DC_FIELD is 'Datacontrol fields (Code: UIDCFIELD)';

prompt Comments on table UI_DC_FIELD_INITVAL...
COMMENT ON TABLE UI_DC_FIELD_INITVAL is 'Default initial values for data-control fields (Code: UIFLDINITVAL)';
COMMENT ON COLUMN UI_DC_FIELD_INITVAL.VALUE_TYPE is 'Specifies how to evaluate the FIELD_VALUE: ''SQL'' - sql statement; ''VALUE'' - direct value';
COMMENT ON COLUMN UI_DC_FIELD_INITVAL.APPLY_TO_USER is 'If set , this default value applies only for this user';

prompt Comments on table UI_DC_ROLE_PERMISSION...
COMMENT ON TABLE UI_DC_ROLE_PERMISSION is 'Specifies what basic actions is allowed to perform on a data-control a certain role. Any user with that role granted has the same permissions. Covers basic actions, i.e. fetch, insert, update, delete (Code: UIDCROLEPRMS) ';

prompt Comments on table UI_DICTIONARY...
COMMENT ON TABLE UI_DICTIONARY is 'Dictionary for ui elements translations (Code: UIDICT)';
COMMENT ON COLUMN UI_DICTIONARY.DEFAULT_VALUE is 'Default translation coming from development system. ';

prompt Comments on table UI_DICTIONARY_TRL...
COMMENT ON TABLE UI_DICTIONARY_TRL is 'Translation of the dictionary entries (Code: UIDICTTRL)';

prompt Comments on table UI_GUI...
COMMENT ON TABLE UI_GUI is 'User interfaces (Code: UIGUI)';
COMMENT ON COLUMN UI_GUI.CODE is 'Unique code of component. Components created by user should use a different component naming in order to avoid conflicts during future upgrades.  ';
COMMENT ON COLUMN UI_GUI.NAME is 'Component name ';
COMMENT ON COLUMN UI_GUI.NBS_STANDARD is 'If Y this is a standard component, otherwise is custom built by a service provider if USER_BUILD=''N'' or by user if USER_BUILD=''Y''';
COMMENT ON COLUMN UI_GUI.USER_BUILD is 'If Y- this is a custom component created and maintained by user. ';
COMMENT ON COLUMN UI_GUI.DEPRECATED is 'Specifies if this component is removed from the release. It is not deleted as it is used in menu or menu-shortcuts.';
COMMENT ON COLUMN UI_GUI.DESCRIPTION is 'Functional description of the component';

prompt Comments on table UI_LOV...
COMMENT ON TABLE UI_LOV is 'UI lists of values (Code: UILOV)';
COMMENT ON COLUMN UI_LOV.CODE is 'Unique code of component. Components created by user should use a different component naming in order to avoid conflicts during future upgrades.  ';
COMMENT ON COLUMN UI_LOV.NAME is 'Component name ';
COMMENT ON COLUMN UI_LOV.DESCRIPTION is 'Functional description of the component';
COMMENT ON COLUMN UI_LOV.NBS_STANDARD is 'If Y this is a standard component, otherwise is custom built by a service provider if USER_BUILD=''N'' or by user if USER_BUILD=''Y''';
COMMENT ON COLUMN UI_LOV.USER_BUILD is 'If Y- this is a custom component created and maintained by user. ';
COMMENT ON COLUMN UI_LOV.DEPRECATED is 'Specifies if this component is removed from the release. It is not deleted as it might be used in user built components';

prompt Comments on table UOM...
COMMENT ON TABLE UOM is 'Units of measure (Code: UOM)';

prompt Comments on table UOM_CONVERSION...
COMMENT ON TABLE UOM_CONVERSION is 'Conversion table between measuring units (Code: UOMCONV)';

prompt Comments on table UOM_TYPE...
COMMENT ON TABLE UOM_TYPE is 'Measuring units types (Code: UOMTYPE)';
COMMENT ON COLUMN UOM_TYPE.IS_PERIOD is 'Is this a period based uom type? [ hour,day, month,minute,etc ]';
COMMENT ON COLUMN UOM_TYPE.IS_VOLUME is 'Is this a volume based unit ? [ liter, gallon,etc]';
COMMENT ON COLUMN UOM_TYPE.IS_WEIGHT is 'Is this a weight unit ? [ kg,tone, etc] ';

prompt Comments on table USR_DC_LAST_FILTER...
COMMENT ON TABLE USR_DC_LAST_FILTER is 'Last filter set by user on a data-control. When reloading a page the filter specified here is applied automatically then called executeQuery  (Code: USRDCLSTFLTR)';

prompt Comments on table USR_LOGIN...
COMMENT ON TABLE USR_LOGIN is 'User acces to application. Is recorded when the user autenthicates (Code: USRLOG)';

prompt Comments on table X_IMP_PARCEL...
COMMENT ON TABLE X_IMP_PARCEL is 'Import parcels (Code: XIMPPARCEL)';

prompt Comments on table X_IMP_UI_DC...
COMMENT ON TABLE X_IMP_UI_DC is 'Import UI datacontrol definitions into UI_DC table (Code: XIMPUIDC)';

prompt Comments on table X_IMP_UI_GUI...
COMMENT ON TABLE X_IMP_UI_GUI is 'Import UI definitions into UI_GUI table (Code: XIMPUIGUI)';

