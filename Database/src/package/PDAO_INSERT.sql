create or replace package PDAO_INSERT as

/**
 * Nan21 eBusiness Suite.
 * DAO package with record insert procedures.
 *  For each table there is a procedure which receives as parameter a record as rowtype variable and insert it into table
 * Generated content.
 */

  procedure ac_accdoc_t(p_record in out ac_accdoc%rowtype);
  procedure ac_accdoc_line_t(p_record in out ac_accdoc_line%rowtype);
  procedure ac_accschema_t(p_record in out ac_accschema%rowtype);
  procedure ac_accschema_acct_t(p_record in out ac_accschema_acct%rowtype);
  procedure ac_accschema_param_t(p_record in out ac_accschema_param%rowtype);
  procedure ac_acct_t(p_record in out ac_acct%rowtype);
  procedure ac_acct_balance_t(p_record in out ac_acct_balance%rowtype);
  procedure ac_acct_grp_t(p_record in out ac_acct_grp%rowtype);
  procedure ac_acct_movement_t(p_record in out ac_acct_movement%rowtype);
  procedure ac_acc_journal_t(p_record in out ac_acc_journal%rowtype);
  procedure ac_acc_period_t(p_record in out ac_acc_period%rowtype);
  procedure ac_acc_year_t(p_record in out ac_acc_year%rowtype);
  procedure ac_cliaccschema_paramacct_t(p_record in out ac_cliaccschema_paramacct%rowtype);
  procedure ac_cliaccschema_paramval_t(p_record in out ac_cliaccschema_paramval%rowtype);
  procedure ac_client_accschema_t(p_record in out ac_client_accschema%rowtype);
  procedure asset_t(p_record in out asset%rowtype);
  procedure bank_t(p_record in out bank%rowtype);
  procedure bank_agency_t(p_record in out bank_agency%rowtype);
  procedure billing_cycle_t(p_record in out billing_cycle%rowtype);
  procedure billing_cycle_class_t(p_record in out billing_cycle_class%rowtype);
  procedure bpartner_t(p_record in out bpartner%rowtype);
  procedure bpcontact_phone_t(p_record in out bpcontact_phone%rowtype);
  procedure bp_account_t(p_record in out bp_account%rowtype);
  procedure bp_adress_t(p_record in out bp_adress%rowtype);
  procedure bp_amount_t(p_record in out bp_amount%rowtype);
  procedure bp_balance_t(p_record in out bp_balance%rowtype);
  procedure bp_bankaccount_t(p_record in out bp_bankaccount%rowtype);
  procedure bp_client_t(p_record in out bp_client%rowtype);
  procedure bp_contact_t(p_record in out bp_contact%rowtype);
  procedure bp_contract_t(p_record in out bp_contract%rowtype);
  procedure bp_phone_t(p_record in out bp_phone%rowtype);
  procedure bp_subscription_t(p_record in out bp_subscription%rowtype);
  procedure budget_t(p_record in out budget%rowtype);
  procedure city_t(p_record in out city%rowtype);
  procedure client_t(p_record in out client%rowtype);
  procedure contract_status_t(p_record in out contract_status%rowtype);
  procedure contract_type_t(p_record in out contract_type%rowtype);
  procedure costing_method_t(p_record in out costing_method%rowtype);
  procedure cost_center_t(p_record in out cost_center%rowtype);
  procedure country_t(p_record in out country%rowtype);
  procedure currency_t(p_record in out currency%rowtype);
  procedure currency_avg_rate_t(p_record in out currency_avg_rate%rowtype);
  procedure currency_xrate_t(p_record in out currency_xrate%rowtype);
  procedure document_serial_t(p_record in out document_serial%rowtype);
  procedure document_serial_no_t(p_record in out document_serial_no%rowtype);
  procedure document_serial_range_t(p_record in out document_serial_range%rowtype);
  procedure employee_t(p_record in out employee%rowtype);
  procedure expensesheet_t(p_record in out expensesheet%rowtype);
  procedure iinvoice_t(p_record in out iinvoice%rowtype);
  procedure iinvoice_item_t(p_record in out iinvoice_item%rowtype);
  procedure iinv_doctyp_attr_t(p_record in out iinv_doctyp_attr%rowtype);
  procedure iinv_doc_type_t(p_record in out iinv_doc_type%rowtype);
  procedure impex_map_t(p_record in out impex_map%rowtype);
  procedure imp_file_t(p_record in out imp_file%rowtype);
  procedure insurance_t(p_record in out insurance%rowtype);
  procedure languages_t(p_record in out languages%rowtype);
  procedure menubar_t(p_record in out menubar%rowtype);
  procedure menuitem_t(p_record in out menuitem%rowtype);
  procedure menuitem_param_t(p_record in out menuitem_param%rowtype);
  procedure menuitem_role_t(p_record in out menuitem_role%rowtype);
  procedure menuitem_trl_t(p_record in out menuitem_trl%rowtype);
  procedure menu_shortcut_t(p_record in out menu_shortcut%rowtype);
  procedure mm_movement_in_doc_t(p_record in out mm_movement_in_doc%rowtype);
  procedure mm_movement_in_line_t(p_record in out mm_movement_in_line%rowtype);
  procedure mm_movement_out_doc_t(p_record in out mm_movement_out_doc%rowtype);
  procedure mm_mvmntin_doctype_t(p_record in out mm_mvmntin_doctype%rowtype);
  procedure mm_org_inv_t(p_record in out mm_org_inv%rowtype);
  procedure mm_org_inv_type_t(p_record in out mm_org_inv_type%rowtype);
  procedure mm_price_level_t(p_record in out mm_price_level%rowtype);
  procedure mm_price_list_t(p_record in out mm_price_list%rowtype);
  procedure mm_product_t(p_record in out mm_product%rowtype);
  procedure mm_product_account_t(p_record in out mm_product_account%rowtype);
  procedure mm_product_category_t(p_record in out mm_product_category%rowtype);
  procedure mm_product_category_account_t(p_record in out mm_product_category_account%rowtype);
  procedure mm_product_client_t(p_record in out mm_product_client%rowtype);
  procedure mm_product_price_t(p_record in out mm_product_price%rowtype);
  procedure mm_prod_attr_t(p_record in out mm_prod_attr%rowtype);
  procedure mm_prod_attr_grp_t(p_record in out mm_prod_attr_grp%rowtype);
  procedure mm_prod_attr_val_t(p_record in out mm_prod_attr_val%rowtype);
  procedure mm_prod_stock_t(p_record in out mm_prod_stock%rowtype);
  procedure mm_prod_stock_balance_t(p_record in out mm_prod_stock_balance%rowtype);
  procedure mm_prod_stock_cmp_t(p_record in out mm_prod_stock_cmp%rowtype);
  procedure mm_prod_stock_cmp_balance_t(p_record in out mm_prod_stock_cmp_balance%rowtype);
  procedure mm_prod_stock_mvmnt_t(p_record in out mm_prod_stock_mvmnt%rowtype);
  procedure mm_stock_loc_t(p_record in out mm_stock_loc%rowtype);
  procedure mm_stock_loc_type_t(p_record in out mm_stock_loc_type%rowtype);
  procedure organization_t(p_record in out organization%rowtype);
  procedure org_attr_t(p_record in out org_attr%rowtype);
  procedure org_attr_val_t(p_record in out org_attr_val%rowtype);
  procedure org_type_t(p_record in out org_type%rowtype);
  procedure payment_t(p_record in out payment%rowtype);
  procedure payment_doctype_attr_t(p_record in out payment_doctype_attr%rowtype);
  procedure payment_doc_type_t(p_record in out payment_doc_type%rowtype);
  procedure payment_item_t(p_record in out payment_item%rowtype);
  procedure payment_method_t(p_record in out payment_method%rowtype);
  procedure person_t(p_record in out person%rowtype);
  procedure project_t(p_record in out project%rowtype);
  procedure project_cmp_type_t(p_record in out project_cmp_type%rowtype);
  procedure project_issue_t(p_record in out project_issue%rowtype);
  procedure project_issue_attachment_t(p_record in out project_issue_attachment%rowtype);
  procedure project_issue_cmp_assoc_t(p_record in out project_issue_cmp_assoc%rowtype);
  procedure project_issue_note_t(p_record in out project_issue_note%rowtype);
  procedure project_issue_priority_t(p_record in out project_issue_priority%rowtype);
  procedure project_issue_severity_t(p_record in out project_issue_severity%rowtype);
  procedure project_issue_status_t(p_record in out project_issue_status%rowtype);
  procedure project_issue_type_t(p_record in out project_issue_type%rowtype);
  procedure project_status_t(p_record in out project_status%rowtype);
  procedure project_type_t(p_record in out project_type%rowtype);
  procedure purchase_need_t(p_record in out purchase_need%rowtype);
  procedure purchase_need_line_t(p_record in out purchase_need_line%rowtype);
  procedure purchase_order_t(p_record in out purchase_order%rowtype);
  procedure purchase_order_line_t(p_record in out purchase_order_line%rowtype);
  procedure region_t(p_record in out region%rowtype);
  procedure reporting_period_t(p_record in out reporting_period%rowtype);
  procedure rinvoice_t(p_record in out rinvoice%rowtype);
  procedure rinvoice_item_t(p_record in out rinvoice_item%rowtype);
  procedure rinv_doctyp_attr_t(p_record in out rinv_doctyp_attr%rowtype);
  procedure rinv_doc_type_t(p_record in out rinv_doc_type%rowtype);
  procedure sales_order_t(p_record in out sales_order%rowtype);
  procedure sales_order_line_t(p_record in out sales_order_line%rowtype);
  procedure server_message_t(p_record in out server_message%rowtype);
  procedure server_message_trl_t(p_record in out server_message_trl%rowtype);
  procedure street_t(p_record in out street%rowtype);
  procedure subscription_t(p_record in out subscription%rowtype);
  procedure sys_param_t(p_record in out sys_param%rowtype);
  procedure sys_param_group_t(p_record in out sys_param_group%rowtype);
  procedure sys_param_valid_value_t(p_record in out sys_param_valid_value%rowtype);
  procedure sys_param_value_t(p_record in out sys_param_value%rowtype);
  procedure sys_role_t(p_record in out sys_role%rowtype);
  procedure sys_user_t(p_record in out sys_user%rowtype);
  procedure sys_user_docserrng_t(p_record in out sys_user_docserrng%rowtype);
  procedure sys_user_role_t(p_record in out sys_user_role%rowtype);
  procedure tasks_t(p_record in out tasks%rowtype);
  procedure tax_t(p_record in out tax%rowtype);
  procedure tax_type_t(p_record in out tax_type%rowtype);
  procedure test_t(p_record in out test%rowtype);
  procedure timesheet_t(p_record in out timesheet%rowtype);
  procedure tr_parcel_t(p_record in out tr_parcel%rowtype);
  procedure tr_parcel_event_t(p_record in out tr_parcel_event%rowtype);
  procedure tr_parcel_event_type_t(p_record in out tr_parcel_event_type%rowtype);
  procedure tr_parcel_event_type_grp_t(p_record in out tr_parcel_event_type_grp%rowtype);
  procedure tr_parcel_reject_reason_t(p_record in out tr_parcel_reject_reason%rowtype);
  procedure tr_transport_t(p_record in out tr_transport%rowtype);
  procedure tr_transport_status_t(p_record in out tr_transport_status%rowtype);
  procedure tr_transport_type_t(p_record in out tr_transport_type%rowtype);
  procedure tr_vehicle_t(p_record in out tr_vehicle%rowtype);
  procedure tr_vehicle_type_t(p_record in out tr_vehicle_type%rowtype);
  procedure ui_dc_t(p_record in out ui_dc%rowtype);
  procedure ui_dc_field_t(p_record in out ui_dc_field%rowtype);
  procedure ui_dc_field_initval_t(p_record in out ui_dc_field_initval%rowtype);
  procedure ui_dc_role_permission_t(p_record in out ui_dc_role_permission%rowtype);
  procedure ui_dictionary_t(p_record in out ui_dictionary%rowtype);
  procedure ui_dictionary_trl_t(p_record in out ui_dictionary_trl%rowtype);
  procedure ui_gui_t(p_record in out ui_gui%rowtype);
  procedure ui_lov_t(p_record in out ui_lov%rowtype);
  procedure uom_t(p_record in out uom%rowtype);
  procedure uom_conversion_t(p_record in out uom_conversion%rowtype);
  procedure uom_type_t(p_record in out uom_type%rowtype);
  procedure usr_dc_last_filter_t(p_record in out usr_dc_last_filter%rowtype);
  procedure usr_login_t(p_record in out usr_login%rowtype);
  procedure x_imp_parcel_t(p_record in out x_imp_parcel%rowtype);
end;
/
show errors package PDAO_INSERT;

create or replace package body PDAO_INSERT as

procedure ac_accdoc_t(p_record in out ac_accdoc%rowtype) is
begin
  insert into  ac_accdoc values p_record;
end;


procedure ac_accdoc_line_t(p_record in out ac_accdoc_line%rowtype) is
begin
  insert into  ac_accdoc_line values p_record;
end;


procedure ac_accschema_t(p_record in out ac_accschema%rowtype) is
begin
  insert into  ac_accschema values p_record;
end;


procedure ac_accschema_acct_t(p_record in out ac_accschema_acct%rowtype) is
begin
  insert into  ac_accschema_acct values p_record;
end;


procedure ac_accschema_param_t(p_record in out ac_accschema_param%rowtype) is
begin
  insert into  ac_accschema_param values p_record;
end;


procedure ac_acct_t(p_record in out ac_acct%rowtype) is
begin
  insert into  ac_acct values p_record;
end;


procedure ac_acct_balance_t(p_record in out ac_acct_balance%rowtype) is
begin
  insert into  ac_acct_balance values p_record;
end;


procedure ac_acct_grp_t(p_record in out ac_acct_grp%rowtype) is
begin
  insert into  ac_acct_grp values p_record;
end;


procedure ac_acct_movement_t(p_record in out ac_acct_movement%rowtype) is
begin
  insert into  ac_acct_movement values p_record;
end;


procedure ac_acc_journal_t(p_record in out ac_acc_journal%rowtype) is
begin
  insert into  ac_acc_journal values p_record;
end;


procedure ac_acc_period_t(p_record in out ac_acc_period%rowtype) is
begin
  insert into  ac_acc_period values p_record;
end;


procedure ac_acc_year_t(p_record in out ac_acc_year%rowtype) is
begin
  insert into  ac_acc_year values p_record;
end;


procedure ac_cliaccschema_paramacct_t(p_record in out ac_cliaccschema_paramacct%rowtype) is
begin
  insert into  ac_cliaccschema_paramacct values p_record;
end;


procedure ac_cliaccschema_paramval_t(p_record in out ac_cliaccschema_paramval%rowtype) is
begin
  insert into  ac_cliaccschema_paramval values p_record;
end;


procedure ac_client_accschema_t(p_record in out ac_client_accschema%rowtype) is
begin
  insert into  ac_client_accschema values p_record;
end;


procedure asset_t(p_record in out asset%rowtype) is
begin
  insert into  asset values p_record;
end;


procedure bank_t(p_record in out bank%rowtype) is
begin
  insert into  bank values p_record;
end;


procedure bank_agency_t(p_record in out bank_agency%rowtype) is
begin
  insert into  bank_agency values p_record;
end;


procedure billing_cycle_t(p_record in out billing_cycle%rowtype) is
begin
  insert into  billing_cycle values p_record;
end;


procedure billing_cycle_class_t(p_record in out billing_cycle_class%rowtype) is
begin
  insert into  billing_cycle_class values p_record;
end;


procedure bpartner_t(p_record in out bpartner%rowtype) is
begin
  insert into  bpartner values p_record;
end;


procedure bpcontact_phone_t(p_record in out bpcontact_phone%rowtype) is
begin
  insert into  bpcontact_phone values p_record;
end;


procedure bp_account_t(p_record in out bp_account%rowtype) is
begin
  insert into  bp_account values p_record;
end;


procedure bp_adress_t(p_record in out bp_adress%rowtype) is
begin
  insert into  bp_adress values p_record;
end;


procedure bp_amount_t(p_record in out bp_amount%rowtype) is
begin
  insert into  bp_amount values p_record;
end;


procedure bp_balance_t(p_record in out bp_balance%rowtype) is
begin
  insert into  bp_balance values p_record;
end;


procedure bp_bankaccount_t(p_record in out bp_bankaccount%rowtype) is
begin
  insert into  bp_bankaccount values p_record;
end;


procedure bp_client_t(p_record in out bp_client%rowtype) is
begin
  insert into  bp_client values p_record;
end;


procedure bp_contact_t(p_record in out bp_contact%rowtype) is
begin
  insert into  bp_contact values p_record;
end;


procedure bp_contract_t(p_record in out bp_contract%rowtype) is
begin
  insert into  bp_contract values p_record;
end;


procedure bp_phone_t(p_record in out bp_phone%rowtype) is
begin
  insert into  bp_phone values p_record;
end;


procedure bp_subscription_t(p_record in out bp_subscription%rowtype) is
begin
  insert into  bp_subscription values p_record;
end;


procedure budget_t(p_record in out budget%rowtype) is
begin
  insert into  budget values p_record;
end;


procedure city_t(p_record in out city%rowtype) is
begin
  insert into  city values p_record;
end;


procedure client_t(p_record in out client%rowtype) is
begin
  insert into  client values p_record;
end;


procedure contract_status_t(p_record in out contract_status%rowtype) is
begin
  insert into  contract_status values p_record;
end;


procedure contract_type_t(p_record in out contract_type%rowtype) is
begin
  insert into  contract_type values p_record;
end;


procedure costing_method_t(p_record in out costing_method%rowtype) is
begin
  insert into  costing_method values p_record;
end;


procedure cost_center_t(p_record in out cost_center%rowtype) is
begin
  insert into  cost_center values p_record;
end;


procedure country_t(p_record in out country%rowtype) is
begin
  insert into  country values p_record;
end;


procedure currency_t(p_record in out currency%rowtype) is
begin
  insert into  currency values p_record;
end;


procedure currency_avg_rate_t(p_record in out currency_avg_rate%rowtype) is
begin
  insert into  currency_avg_rate values p_record;
end;


procedure currency_xrate_t(p_record in out currency_xrate%rowtype) is
begin
  insert into  currency_xrate values p_record;
end;


procedure document_serial_t(p_record in out document_serial%rowtype) is
begin
  insert into  document_serial values p_record;
end;


procedure document_serial_no_t(p_record in out document_serial_no%rowtype) is
begin
  insert into  document_serial_no values p_record;
end;


procedure document_serial_range_t(p_record in out document_serial_range%rowtype) is
begin
  insert into  document_serial_range values p_record;
end;


procedure employee_t(p_record in out employee%rowtype) is
begin
  insert into  employee values p_record;
end;


procedure expensesheet_t(p_record in out expensesheet%rowtype) is
begin
  insert into  expensesheet values p_record;
end;


procedure iinvoice_t(p_record in out iinvoice%rowtype) is
begin
  insert into  iinvoice values p_record;
end;


procedure iinvoice_item_t(p_record in out iinvoice_item%rowtype) is
begin
  insert into  iinvoice_item values p_record;
end;


procedure iinv_doctyp_attr_t(p_record in out iinv_doctyp_attr%rowtype) is
begin
  insert into  iinv_doctyp_attr values p_record;
end;


procedure iinv_doc_type_t(p_record in out iinv_doc_type%rowtype) is
begin
  insert into  iinv_doc_type values p_record;
end;


procedure impex_map_t(p_record in out impex_map%rowtype) is
begin
  insert into  impex_map values p_record;
end;


procedure imp_file_t(p_record in out imp_file%rowtype) is
begin
  insert into  imp_file values p_record;
end;


procedure insurance_t(p_record in out insurance%rowtype) is
begin
  insert into  insurance values p_record;
end;


procedure languages_t(p_record in out languages%rowtype) is
begin
  insert into  languages values p_record;
end;


procedure menubar_t(p_record in out menubar%rowtype) is
begin
  insert into  menubar values p_record;
end;


procedure menuitem_t(p_record in out menuitem%rowtype) is
begin
  insert into  menuitem values p_record;
end;


procedure menuitem_param_t(p_record in out menuitem_param%rowtype) is
begin
  insert into  menuitem_param values p_record;
end;


procedure menuitem_role_t(p_record in out menuitem_role%rowtype) is
begin
  insert into  menuitem_role values p_record;
end;


procedure menuitem_trl_t(p_record in out menuitem_trl%rowtype) is
begin
  insert into  menuitem_trl values p_record;
end;


procedure menu_shortcut_t(p_record in out menu_shortcut%rowtype) is
begin
  insert into  menu_shortcut values p_record;
end;


procedure mm_movement_in_doc_t(p_record in out mm_movement_in_doc%rowtype) is
begin
  insert into  mm_movement_in_doc values p_record;
end;


procedure mm_movement_in_line_t(p_record in out mm_movement_in_line%rowtype) is
begin
  insert into  mm_movement_in_line values p_record;
end;


procedure mm_movement_out_doc_t(p_record in out mm_movement_out_doc%rowtype) is
begin
  insert into  mm_movement_out_doc values p_record;
end;


procedure mm_mvmntin_doctype_t(p_record in out mm_mvmntin_doctype%rowtype) is
begin
  insert into  mm_mvmntin_doctype values p_record;
end;


procedure mm_org_inv_t(p_record in out mm_org_inv%rowtype) is
begin
  insert into  mm_org_inv values p_record;
end;


procedure mm_org_inv_type_t(p_record in out mm_org_inv_type%rowtype) is
begin
  insert into  mm_org_inv_type values p_record;
end;


procedure mm_price_level_t(p_record in out mm_price_level%rowtype) is
begin
  insert into  mm_price_level values p_record;
end;


procedure mm_price_list_t(p_record in out mm_price_list%rowtype) is
begin
  insert into  mm_price_list values p_record;
end;


procedure mm_product_t(p_record in out mm_product%rowtype) is
begin
  insert into  mm_product values p_record;
end;


procedure mm_product_account_t(p_record in out mm_product_account%rowtype) is
begin
  insert into  mm_product_account values p_record;
end;


procedure mm_product_category_t(p_record in out mm_product_category%rowtype) is
begin
  insert into  mm_product_category values p_record;
end;


procedure mm_product_category_account_t(p_record in out mm_product_category_account%rowtype) is
begin
  insert into  mm_product_category_account values p_record;
end;


procedure mm_product_client_t(p_record in out mm_product_client%rowtype) is
begin
  insert into  mm_product_client values p_record;
end;


procedure mm_product_price_t(p_record in out mm_product_price%rowtype) is
begin
  insert into  mm_product_price values p_record;
end;


procedure mm_prod_attr_t(p_record in out mm_prod_attr%rowtype) is
begin
  insert into  mm_prod_attr values p_record;
end;


procedure mm_prod_attr_grp_t(p_record in out mm_prod_attr_grp%rowtype) is
begin
  insert into  mm_prod_attr_grp values p_record;
end;


procedure mm_prod_attr_val_t(p_record in out mm_prod_attr_val%rowtype) is
begin
  insert into  mm_prod_attr_val values p_record;
end;


procedure mm_prod_stock_t(p_record in out mm_prod_stock%rowtype) is
begin
  insert into  mm_prod_stock values p_record;
end;


procedure mm_prod_stock_balance_t(p_record in out mm_prod_stock_balance%rowtype) is
begin
  insert into  mm_prod_stock_balance values p_record;
end;


procedure mm_prod_stock_cmp_t(p_record in out mm_prod_stock_cmp%rowtype) is
begin
  insert into  mm_prod_stock_cmp values p_record;
end;


procedure mm_prod_stock_cmp_balance_t(p_record in out mm_prod_stock_cmp_balance%rowtype) is
begin
  insert into  mm_prod_stock_cmp_balance values p_record;
end;


procedure mm_prod_stock_mvmnt_t(p_record in out mm_prod_stock_mvmnt%rowtype) is
begin
  insert into  mm_prod_stock_mvmnt values p_record;
end;


procedure mm_stock_loc_t(p_record in out mm_stock_loc%rowtype) is
begin
  insert into  mm_stock_loc values p_record;
end;


procedure mm_stock_loc_type_t(p_record in out mm_stock_loc_type%rowtype) is
begin
  insert into  mm_stock_loc_type values p_record;
end;


procedure organization_t(p_record in out organization%rowtype) is
begin
  insert into  organization values p_record;
end;


procedure org_attr_t(p_record in out org_attr%rowtype) is
begin
  insert into  org_attr values p_record;
end;


procedure org_attr_val_t(p_record in out org_attr_val%rowtype) is
begin
  insert into  org_attr_val values p_record;
end;


procedure org_type_t(p_record in out org_type%rowtype) is
begin
  insert into  org_type values p_record;
end;


procedure payment_t(p_record in out payment%rowtype) is
begin
  insert into  payment values p_record;
end;


procedure payment_doctype_attr_t(p_record in out payment_doctype_attr%rowtype) is
begin
  insert into  payment_doctype_attr values p_record;
end;


procedure payment_doc_type_t(p_record in out payment_doc_type%rowtype) is
begin
  insert into  payment_doc_type values p_record;
end;


procedure payment_item_t(p_record in out payment_item%rowtype) is
begin
  insert into  payment_item values p_record;
end;


procedure payment_method_t(p_record in out payment_method%rowtype) is
begin
  insert into  payment_method values p_record;
end;


procedure person_t(p_record in out person%rowtype) is
begin
  insert into  person values p_record;
end;


procedure project_t(p_record in out project%rowtype) is
begin
  insert into  project values p_record;
end;


procedure project_cmp_type_t(p_record in out project_cmp_type%rowtype) is
begin
  insert into  project_cmp_type values p_record;
end;


procedure project_issue_t(p_record in out project_issue%rowtype) is
begin
  insert into  project_issue values p_record;
end;


procedure project_issue_attachment_t(p_record in out project_issue_attachment%rowtype) is
begin
  insert into  project_issue_attachment values p_record;
end;


procedure project_issue_cmp_assoc_t(p_record in out project_issue_cmp_assoc%rowtype) is
begin
  insert into  project_issue_cmp_assoc values p_record;
end;


procedure project_issue_note_t(p_record in out project_issue_note%rowtype) is
begin
  insert into  project_issue_note values p_record;
end;


procedure project_issue_priority_t(p_record in out project_issue_priority%rowtype) is
begin
  insert into  project_issue_priority values p_record;
end;


procedure project_issue_severity_t(p_record in out project_issue_severity%rowtype) is
begin
  insert into  project_issue_severity values p_record;
end;


procedure project_issue_status_t(p_record in out project_issue_status%rowtype) is
begin
  insert into  project_issue_status values p_record;
end;


procedure project_issue_type_t(p_record in out project_issue_type%rowtype) is
begin
  insert into  project_issue_type values p_record;
end;


procedure project_status_t(p_record in out project_status%rowtype) is
begin
  insert into  project_status values p_record;
end;


procedure project_type_t(p_record in out project_type%rowtype) is
begin
  insert into  project_type values p_record;
end;


procedure purchase_need_t(p_record in out purchase_need%rowtype) is
begin
  insert into  purchase_need values p_record;
end;


procedure purchase_need_line_t(p_record in out purchase_need_line%rowtype) is
begin
  insert into  purchase_need_line values p_record;
end;


procedure purchase_order_t(p_record in out purchase_order%rowtype) is
begin
  insert into  purchase_order values p_record;
end;


procedure purchase_order_line_t(p_record in out purchase_order_line%rowtype) is
begin
  insert into  purchase_order_line values p_record;
end;


procedure region_t(p_record in out region%rowtype) is
begin
  insert into  region values p_record;
end;


procedure reporting_period_t(p_record in out reporting_period%rowtype) is
begin
  insert into  reporting_period values p_record;
end;


procedure rinvoice_t(p_record in out rinvoice%rowtype) is
begin
  insert into  rinvoice values p_record;
end;


procedure rinvoice_item_t(p_record in out rinvoice_item%rowtype) is
begin
  insert into  rinvoice_item values p_record;
end;


procedure rinv_doctyp_attr_t(p_record in out rinv_doctyp_attr%rowtype) is
begin
  insert into  rinv_doctyp_attr values p_record;
end;


procedure rinv_doc_type_t(p_record in out rinv_doc_type%rowtype) is
begin
  insert into  rinv_doc_type values p_record;
end;


procedure sales_order_t(p_record in out sales_order%rowtype) is
begin
  insert into  sales_order values p_record;
end;


procedure sales_order_line_t(p_record in out sales_order_line%rowtype) is
begin
  insert into  sales_order_line values p_record;
end;


procedure server_message_t(p_record in out server_message%rowtype) is
begin
  insert into  server_message values p_record;
end;


procedure server_message_trl_t(p_record in out server_message_trl%rowtype) is
begin
  insert into  server_message_trl values p_record;
end;


procedure street_t(p_record in out street%rowtype) is
begin
  insert into  street values p_record;
end;


procedure subscription_t(p_record in out subscription%rowtype) is
begin
  insert into  subscription values p_record;
end;


procedure sys_param_t(p_record in out sys_param%rowtype) is
begin
  insert into  sys_param values p_record;
end;


procedure sys_param_group_t(p_record in out sys_param_group%rowtype) is
begin
  insert into  sys_param_group values p_record;
end;


procedure sys_param_valid_value_t(p_record in out sys_param_valid_value%rowtype) is
begin
  insert into  sys_param_valid_value values p_record;
end;


procedure sys_param_value_t(p_record in out sys_param_value%rowtype) is
begin
  insert into  sys_param_value values p_record;
end;


procedure sys_role_t(p_record in out sys_role%rowtype) is
begin
  insert into  sys_role values p_record;
end;


procedure sys_user_t(p_record in out sys_user%rowtype) is
begin
  insert into  sys_user values p_record;
end;


procedure sys_user_docserrng_t(p_record in out sys_user_docserrng%rowtype) is
begin
  insert into  sys_user_docserrng values p_record;
end;


procedure sys_user_role_t(p_record in out sys_user_role%rowtype) is
begin
  insert into  sys_user_role values p_record;
end;


procedure tasks_t(p_record in out tasks%rowtype) is
begin
  insert into  tasks values p_record;
end;


procedure tax_t(p_record in out tax%rowtype) is
begin
  insert into  tax values p_record;
end;


procedure tax_type_t(p_record in out tax_type%rowtype) is
begin
  insert into  tax_type values p_record;
end;


procedure test_t(p_record in out test%rowtype) is
begin
  insert into  test values p_record;
end;


procedure timesheet_t(p_record in out timesheet%rowtype) is
begin
  insert into  timesheet values p_record;
end;


procedure tr_parcel_t(p_record in out tr_parcel%rowtype) is
begin
  insert into  tr_parcel values p_record;
end;


procedure tr_parcel_event_t(p_record in out tr_parcel_event%rowtype) is
begin
  insert into  tr_parcel_event values p_record;
end;


procedure tr_parcel_event_type_t(p_record in out tr_parcel_event_type%rowtype) is
begin
  insert into  tr_parcel_event_type values p_record;
end;


procedure tr_parcel_event_type_grp_t(p_record in out tr_parcel_event_type_grp%rowtype) is
begin
  insert into  tr_parcel_event_type_grp values p_record;
end;


procedure tr_parcel_reject_reason_t(p_record in out tr_parcel_reject_reason%rowtype) is
begin
  insert into  tr_parcel_reject_reason values p_record;
end;


procedure tr_transport_t(p_record in out tr_transport%rowtype) is
begin
  insert into  tr_transport values p_record;
end;


procedure tr_transport_status_t(p_record in out tr_transport_status%rowtype) is
begin
  insert into  tr_transport_status values p_record;
end;


procedure tr_transport_type_t(p_record in out tr_transport_type%rowtype) is
begin
  insert into  tr_transport_type values p_record;
end;


procedure tr_vehicle_t(p_record in out tr_vehicle%rowtype) is
begin
  insert into  tr_vehicle values p_record;
end;


procedure tr_vehicle_type_t(p_record in out tr_vehicle_type%rowtype) is
begin
  insert into  tr_vehicle_type values p_record;
end;


procedure ui_dc_t(p_record in out ui_dc%rowtype) is
begin
  insert into  ui_dc values p_record;
end;


procedure ui_dc_field_t(p_record in out ui_dc_field%rowtype) is
begin
  insert into  ui_dc_field values p_record;
end;


procedure ui_dc_field_initval_t(p_record in out ui_dc_field_initval%rowtype) is
begin
  insert into  ui_dc_field_initval values p_record;
end;


procedure ui_dc_role_permission_t(p_record in out ui_dc_role_permission%rowtype) is
begin
  insert into  ui_dc_role_permission values p_record;
end;


procedure ui_dictionary_t(p_record in out ui_dictionary%rowtype) is
begin
  insert into  ui_dictionary values p_record;
end;


procedure ui_dictionary_trl_t(p_record in out ui_dictionary_trl%rowtype) is
begin
  insert into  ui_dictionary_trl values p_record;
end;


procedure ui_gui_t(p_record in out ui_gui%rowtype) is
begin
  insert into  ui_gui values p_record;
end;


procedure ui_lov_t(p_record in out ui_lov%rowtype) is
begin
  insert into  ui_lov values p_record;
end;


procedure uom_t(p_record in out uom%rowtype) is
begin
  insert into  uom values p_record;
end;


procedure uom_conversion_t(p_record in out uom_conversion%rowtype) is
begin
  insert into  uom_conversion values p_record;
end;


procedure uom_type_t(p_record in out uom_type%rowtype) is
begin
  insert into  uom_type values p_record;
end;


procedure usr_dc_last_filter_t(p_record in out usr_dc_last_filter%rowtype) is
begin
  insert into  usr_dc_last_filter values p_record;
end;


procedure usr_login_t(p_record in out usr_login%rowtype) is
begin
  insert into  usr_login values p_record;
end;


procedure x_imp_parcel_t(p_record in out x_imp_parcel%rowtype) is
begin
  insert into  x_imp_parcel values p_record;
end;


end;
/
show errors package body PDAO_INSERT;
