create or replace package PDAO_UPDATE as

/**
 * Nan21 eBusiness Suite.
 * DAO package with record update procedures.
 *  For each table there is a procedure which receives as parameter a record as rowtype variable and updates the corresponding record in table
 * Generated content.
 */

  procedure account_t(p_record in out account%rowtype);
  procedure accounting_doc_t(p_record in out accounting_doc%rowtype);
  procedure accounting_doc_line_t(p_record in out accounting_doc_line%rowtype);
  procedure accounting_journal_t(p_record in out accounting_journal%rowtype);
  procedure accounting_period_t(p_record in out accounting_period%rowtype);
  procedure accounting_year_t(p_record in out accounting_year%rowtype);
  procedure account_balance_t(p_record in out account_balance%rowtype);
  procedure account_group_t(p_record in out account_group%rowtype);
  procedure account_movement_t(p_record in out account_movement%rowtype);
  procedure accrual_t(p_record in out accrual%rowtype);
  procedure acc_schema_t(p_record in out acc_schema%rowtype);
  procedure acc_schema_acct_t(p_record in out acc_schema_acct%rowtype);
  procedure acc_schema_attr_t(p_record in out acc_schema_attr%rowtype);
  procedure acc_schema_attr_def_t(p_record in out acc_schema_attr_def%rowtype);
  procedure acc_schema_attr_type_t(p_record in out acc_schema_attr_type%rowtype);
  procedure asset_t(p_record in out asset%rowtype);
  procedure bank_t(p_record in out bank%rowtype);
  procedure bank_agency_t(p_record in out bank_agency%rowtype);
  procedure billing_cycle_t(p_record in out billing_cycle%rowtype);
  procedure billing_cycle_class_t(p_record in out billing_cycle_class%rowtype);
  procedure bpartner_t(p_record in out bpartner%rowtype);
  procedure bpcontact_phone_t(p_record in out bpcontact_phone%rowtype);
  procedure bp_account_customer_t(p_record in out bp_account_customer%rowtype);
  procedure bp_account_internal_t(p_record in out bp_account_internal%rowtype);
  procedure bp_account_vendor_t(p_record in out bp_account_vendor%rowtype);
  procedure bp_adress_t(p_record in out bp_adress%rowtype);
  procedure bp_balance_t(p_record in out bp_balance%rowtype);
  procedure bp_bankaccount_t(p_record in out bp_bankaccount%rowtype);
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
  procedure delivery_agent_t(p_record in out delivery_agent%rowtype);
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
  procedure org_type_t(p_record in out org_type%rowtype);
  procedure parcel_t(p_record in out parcel%rowtype);
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
show errors package PDAO_UPDATE;

create or replace package body PDAO_UPDATE as

procedure account_t(p_record in out account%rowtype) is
begin
  update account set row = p_record where id = p_record.id;
end;


procedure accounting_doc_t(p_record in out accounting_doc%rowtype) is
begin
  update accounting_doc set row = p_record where id = p_record.id;
end;


procedure accounting_doc_line_t(p_record in out accounting_doc_line%rowtype) is
begin
  update accounting_doc_line set row = p_record where id = p_record.id;
end;


procedure accounting_journal_t(p_record in out accounting_journal%rowtype) is
begin
  update accounting_journal set row = p_record where id = p_record.id;
end;


procedure accounting_period_t(p_record in out accounting_period%rowtype) is
begin
  update accounting_period set row = p_record where id = p_record.id;
end;


procedure accounting_year_t(p_record in out accounting_year%rowtype) is
begin
  update accounting_year set row = p_record where id = p_record.id;
end;


procedure account_balance_t(p_record in out account_balance%rowtype) is
begin
  update account_balance set row = p_record where id = p_record.id;
end;


procedure account_group_t(p_record in out account_group%rowtype) is
begin
  update account_group set row = p_record where id = p_record.id;
end;


procedure account_movement_t(p_record in out account_movement%rowtype) is
begin
  update account_movement set row = p_record where id = p_record.id;
end;


procedure accrual_t(p_record in out accrual%rowtype) is
begin
  update accrual set row = p_record where id = p_record.id;
end;


procedure acc_schema_t(p_record in out acc_schema%rowtype) is
begin
  update acc_schema set row = p_record where id = p_record.id;
end;


procedure acc_schema_acct_t(p_record in out acc_schema_acct%rowtype) is
begin
  update acc_schema_acct set row = p_record where id = p_record.id;
end;


procedure acc_schema_attr_t(p_record in out acc_schema_attr%rowtype) is
begin
  update acc_schema_attr set row = p_record where id = p_record.id;
end;


procedure acc_schema_attr_def_t(p_record in out acc_schema_attr_def%rowtype) is
begin
  update acc_schema_attr_def set row = p_record where id = p_record.id;
end;


procedure acc_schema_attr_type_t(p_record in out acc_schema_attr_type%rowtype) is
begin
  update acc_schema_attr_type set row = p_record where id = p_record.id;
end;


procedure asset_t(p_record in out asset%rowtype) is
begin
  update asset set row = p_record where id = p_record.id;
end;


procedure bank_t(p_record in out bank%rowtype) is
begin
  update bank set row = p_record where id = p_record.id;
end;


procedure bank_agency_t(p_record in out bank_agency%rowtype) is
begin
  update bank_agency set row = p_record where id = p_record.id;
end;


procedure billing_cycle_t(p_record in out billing_cycle%rowtype) is
begin
  update billing_cycle set row = p_record where id = p_record.id;
end;


procedure billing_cycle_class_t(p_record in out billing_cycle_class%rowtype) is
begin
  update billing_cycle_class set row = p_record where code = p_record.code;
end;


procedure bpartner_t(p_record in out bpartner%rowtype) is
begin
  update bpartner set row = p_record where id = p_record.id;
end;


procedure bpcontact_phone_t(p_record in out bpcontact_phone%rowtype) is
begin
  update bpcontact_phone set row = p_record where id = p_record.id;
end;


procedure bp_account_customer_t(p_record in out bp_account_customer%rowtype) is
begin
  update bp_account_customer set row = p_record where id = p_record.id;
end;


procedure bp_account_internal_t(p_record in out bp_account_internal%rowtype) is
begin
  update bp_account_internal set row = p_record where id = p_record.id;
end;


procedure bp_account_vendor_t(p_record in out bp_account_vendor%rowtype) is
begin
  update bp_account_vendor set row = p_record where id = p_record.id;
end;


procedure bp_adress_t(p_record in out bp_adress%rowtype) is
begin
  update bp_adress set row = p_record where id = p_record.id;
end;


procedure bp_balance_t(p_record in out bp_balance%rowtype) is
begin
  update bp_balance set row = p_record where id = p_record.id;
end;


procedure bp_bankaccount_t(p_record in out bp_bankaccount%rowtype) is
begin
  update bp_bankaccount set row = p_record where id = p_record.id;
end;


procedure bp_contact_t(p_record in out bp_contact%rowtype) is
begin
  update bp_contact set row = p_record where id = p_record.id;
end;


procedure bp_contract_t(p_record in out bp_contract%rowtype) is
begin
  update bp_contract set row = p_record where id = p_record.id;
end;


procedure bp_phone_t(p_record in out bp_phone%rowtype) is
begin
  update bp_phone set row = p_record where id = p_record.id;
end;


procedure bp_subscription_t(p_record in out bp_subscription%rowtype) is
begin
  update bp_subscription set row = p_record where id = p_record.id;
end;


procedure budget_t(p_record in out budget%rowtype) is
begin
  update budget set row = p_record where id = p_record.id;
end;


procedure city_t(p_record in out city%rowtype) is
begin
  update city set row = p_record where id = p_record.id;
end;


procedure client_t(p_record in out client%rowtype) is
begin
  update client set row = p_record where id = p_record.id;
end;


procedure contract_status_t(p_record in out contract_status%rowtype) is
begin
  update contract_status set row = p_record where code = p_record.code;
end;


procedure contract_type_t(p_record in out contract_type%rowtype) is
begin
  update contract_type set row = p_record where code = p_record.code;
end;


procedure costing_method_t(p_record in out costing_method%rowtype) is
begin
  update costing_method set row = p_record where id = p_record.id;
end;


procedure cost_center_t(p_record in out cost_center%rowtype) is
begin
  update cost_center set row = p_record where id = p_record.id;
end;


procedure country_t(p_record in out country%rowtype) is
begin
  update country set row = p_record where id = p_record.id;
end;


procedure currency_t(p_record in out currency%rowtype) is
begin
  update currency set row = p_record where id = p_record.id;
end;


procedure currency_avg_rate_t(p_record in out currency_avg_rate%rowtype) is
begin
  update currency_avg_rate set row = p_record where id = p_record.id;
end;


procedure currency_xrate_t(p_record in out currency_xrate%rowtype) is
begin
  update currency_xrate set row = p_record where id = p_record.id;
end;


procedure delivery_agent_t(p_record in out delivery_agent%rowtype) is
begin
  update delivery_agent set row = p_record where id = p_record.id;
end;


procedure document_serial_t(p_record in out document_serial%rowtype) is
begin
  update document_serial set row = p_record where id = p_record.id;
end;


procedure document_serial_no_t(p_record in out document_serial_no%rowtype) is
begin
  update document_serial_no set row = p_record where id = p_record.id;
end;


procedure document_serial_range_t(p_record in out document_serial_range%rowtype) is
begin
  update document_serial_range set row = p_record where id = p_record.id;
end;


procedure employee_t(p_record in out employee%rowtype) is
begin
  update employee set row = p_record where id = p_record.id;
end;


procedure expensesheet_t(p_record in out expensesheet%rowtype) is
begin
  update expensesheet set row = p_record where id = p_record.id;
end;


procedure iinvoice_t(p_record in out iinvoice%rowtype) is
begin
  update iinvoice set row = p_record where id = p_record.id;
end;


procedure iinvoice_item_t(p_record in out iinvoice_item%rowtype) is
begin
  update iinvoice_item set row = p_record where id = p_record.id;
end;


procedure iinv_doctyp_attr_t(p_record in out iinv_doctyp_attr%rowtype) is
begin
  update iinv_doctyp_attr set row = p_record where id = p_record.id;
end;


procedure iinv_doc_type_t(p_record in out iinv_doc_type%rowtype) is
begin
  update iinv_doc_type set row = p_record where id = p_record.id;
end;


procedure impex_map_t(p_record in out impex_map%rowtype) is
begin
  update impex_map set row = p_record where id = p_record.id;
end;


procedure insurance_t(p_record in out insurance%rowtype) is
begin
  update insurance set row = p_record where id = p_record.id;
end;


procedure languages_t(p_record in out languages%rowtype) is
begin
  update languages set row = p_record where id = p_record.id;
end;


procedure menubar_t(p_record in out menubar%rowtype) is
begin
  update menubar set row = p_record where id = p_record.id;
end;


procedure menuitem_t(p_record in out menuitem%rowtype) is
begin
  update menuitem set row = p_record where id = p_record.id;
end;


procedure menuitem_param_t(p_record in out menuitem_param%rowtype) is
begin
  update menuitem_param set row = p_record where id = p_record.id;
end;


procedure menuitem_role_t(p_record in out menuitem_role%rowtype) is
begin
  update menuitem_role set row = p_record where id = p_record.id;
end;


procedure menuitem_trl_t(p_record in out menuitem_trl%rowtype) is
begin
  update menuitem_trl set row = p_record where id = p_record.id;
end;


procedure menu_shortcut_t(p_record in out menu_shortcut%rowtype) is
begin
  update menu_shortcut set row = p_record where id = p_record.id;
end;


procedure mm_movement_in_doc_t(p_record in out mm_movement_in_doc%rowtype) is
begin
  update mm_movement_in_doc set row = p_record where id = p_record.id;
end;


procedure mm_movement_in_line_t(p_record in out mm_movement_in_line%rowtype) is
begin
  update mm_movement_in_line set row = p_record where id = p_record.id;
end;


procedure mm_movement_out_doc_t(p_record in out mm_movement_out_doc%rowtype) is
begin
  update mm_movement_out_doc set row = p_record where id = p_record.id;
end;


procedure mm_mvmntin_doctype_t(p_record in out mm_mvmntin_doctype%rowtype) is
begin
  update mm_mvmntin_doctype set row = p_record where id = p_record.id;
end;


procedure mm_org_inv_t(p_record in out mm_org_inv%rowtype) is
begin
  update mm_org_inv set row = p_record where id = p_record.id;
end;


procedure mm_org_inv_type_t(p_record in out mm_org_inv_type%rowtype) is
begin
  update mm_org_inv_type set row = p_record where id = p_record.id;
end;


procedure mm_price_level_t(p_record in out mm_price_level%rowtype) is
begin
  update mm_price_level set row = p_record where id = p_record.id;
end;


procedure mm_price_list_t(p_record in out mm_price_list%rowtype) is
begin
  update mm_price_list set row = p_record where id = p_record.id;
end;


procedure mm_product_t(p_record in out mm_product%rowtype) is
begin
  update mm_product set row = p_record where id = p_record.id;
end;


procedure mm_product_account_t(p_record in out mm_product_account%rowtype) is
begin
  update mm_product_account set row = p_record where id = p_record.id;
end;


procedure mm_product_category_t(p_record in out mm_product_category%rowtype) is
begin
  update mm_product_category set row = p_record where id = p_record.id;
end;


procedure mm_product_category_account_t(p_record in out mm_product_category_account%rowtype) is
begin
  update mm_product_category_account set row = p_record where id = p_record.id;
end;


procedure mm_product_price_t(p_record in out mm_product_price%rowtype) is
begin
  update mm_product_price set row = p_record where id = p_record.id;
end;


procedure mm_prod_attr_t(p_record in out mm_prod_attr%rowtype) is
begin
  update mm_prod_attr set row = p_record where id = p_record.id;
end;


procedure mm_prod_attr_grp_t(p_record in out mm_prod_attr_grp%rowtype) is
begin
  update mm_prod_attr_grp set row = p_record where id = p_record.id;
end;


procedure mm_prod_attr_val_t(p_record in out mm_prod_attr_val%rowtype) is
begin
  update mm_prod_attr_val set row = p_record where id = p_record.id;
end;


procedure mm_prod_stock_t(p_record in out mm_prod_stock%rowtype) is
begin
  update mm_prod_stock set row = p_record where id = p_record.id;
end;


procedure mm_prod_stock_balance_t(p_record in out mm_prod_stock_balance%rowtype) is
begin
  update mm_prod_stock_balance set row = p_record where id = p_record.id;
end;


procedure mm_prod_stock_cmp_t(p_record in out mm_prod_stock_cmp%rowtype) is
begin
  update mm_prod_stock_cmp set row = p_record where id = p_record.id;
end;


procedure mm_prod_stock_cmp_balance_t(p_record in out mm_prod_stock_cmp_balance%rowtype) is
begin
  update mm_prod_stock_cmp_balance set row = p_record where id = p_record.id;
end;


procedure mm_prod_stock_mvmnt_t(p_record in out mm_prod_stock_mvmnt%rowtype) is
begin
  update mm_prod_stock_mvmnt set row = p_record where id = p_record.id;
end;


procedure mm_stock_loc_t(p_record in out mm_stock_loc%rowtype) is
begin
  update mm_stock_loc set row = p_record where id = p_record.id;
end;


procedure mm_stock_loc_type_t(p_record in out mm_stock_loc_type%rowtype) is
begin
  update mm_stock_loc_type set row = p_record where id = p_record.id;
end;


procedure organization_t(p_record in out organization%rowtype) is
begin
  update organization set row = p_record where id = p_record.id;
end;


procedure org_type_t(p_record in out org_type%rowtype) is
begin
  update org_type set row = p_record where id = p_record.id;
end;


procedure parcel_t(p_record in out parcel%rowtype) is
begin
  update parcel set row = p_record where id = p_record.id;
end;


procedure payment_t(p_record in out payment%rowtype) is
begin
  update payment set row = p_record where id = p_record.id;
end;


procedure payment_doctype_attr_t(p_record in out payment_doctype_attr%rowtype) is
begin
  update payment_doctype_attr set row = p_record where id = p_record.id;
end;


procedure payment_doc_type_t(p_record in out payment_doc_type%rowtype) is
begin
  update payment_doc_type set row = p_record where id = p_record.id;
end;


procedure payment_item_t(p_record in out payment_item%rowtype) is
begin
  update payment_item set row = p_record where id = p_record.id;
end;


procedure payment_method_t(p_record in out payment_method%rowtype) is
begin
  update payment_method set row = p_record where code = p_record.code;
end;


procedure person_t(p_record in out person%rowtype) is
begin
  update person set row = p_record where id = p_record.id;
end;


procedure project_t(p_record in out project%rowtype) is
begin
  update project set row = p_record where id = p_record.id;
end;


procedure project_cmp_type_t(p_record in out project_cmp_type%rowtype) is
begin
  update project_cmp_type set row = p_record where id = p_record.id;
end;


procedure project_issue_t(p_record in out project_issue%rowtype) is
begin
  update project_issue set row = p_record where id = p_record.id;
end;


procedure project_issue_attachment_t(p_record in out project_issue_attachment%rowtype) is
begin
  update project_issue_attachment set row = p_record where id = p_record.id;
end;


procedure project_issue_cmp_assoc_t(p_record in out project_issue_cmp_assoc%rowtype) is
begin
  update project_issue_cmp_assoc set row = p_record where id = p_record.id;
end;


procedure project_issue_note_t(p_record in out project_issue_note%rowtype) is
begin
  update project_issue_note set row = p_record where id = p_record.id;
end;


procedure project_issue_priority_t(p_record in out project_issue_priority%rowtype) is
begin
  update project_issue_priority set row = p_record where id = p_record.id;
end;


procedure project_issue_severity_t(p_record in out project_issue_severity%rowtype) is
begin
  update project_issue_severity set row = p_record where id = p_record.id;
end;


procedure project_issue_status_t(p_record in out project_issue_status%rowtype) is
begin
  update project_issue_status set row = p_record where id = p_record.id;
end;


procedure project_issue_type_t(p_record in out project_issue_type%rowtype) is
begin
  update project_issue_type set row = p_record where id = p_record.id;
end;


procedure project_status_t(p_record in out project_status%rowtype) is
begin
  update project_status set row = p_record where id = p_record.id;
end;


procedure project_type_t(p_record in out project_type%rowtype) is
begin
  update project_type set row = p_record where id = p_record.id;
end;


procedure purchase_need_t(p_record in out purchase_need%rowtype) is
begin
  update purchase_need set row = p_record where id = p_record.id;
end;


procedure purchase_need_line_t(p_record in out purchase_need_line%rowtype) is
begin
  update purchase_need_line set row = p_record where id = p_record.id;
end;


procedure purchase_order_t(p_record in out purchase_order%rowtype) is
begin
  update purchase_order set row = p_record where id = p_record.id;
end;


procedure purchase_order_line_t(p_record in out purchase_order_line%rowtype) is
begin
  update purchase_order_line set row = p_record where id = p_record.id;
end;


procedure region_t(p_record in out region%rowtype) is
begin
  update region set row = p_record where id = p_record.id;
end;


procedure reporting_period_t(p_record in out reporting_period%rowtype) is
begin
  update reporting_period set row = p_record where id = p_record.id;
end;


procedure rinvoice_t(p_record in out rinvoice%rowtype) is
begin
  update rinvoice set row = p_record where id = p_record.id;
end;


procedure rinvoice_item_t(p_record in out rinvoice_item%rowtype) is
begin
  update rinvoice_item set row = p_record where id = p_record.id;
end;


procedure rinv_doctyp_attr_t(p_record in out rinv_doctyp_attr%rowtype) is
begin
  update rinv_doctyp_attr set row = p_record where id = p_record.id;
end;


procedure rinv_doc_type_t(p_record in out rinv_doc_type%rowtype) is
begin
  update rinv_doc_type set row = p_record where id = p_record.id;
end;


procedure sales_order_t(p_record in out sales_order%rowtype) is
begin
  update sales_order set row = p_record where id = p_record.id;
end;


procedure sales_order_line_t(p_record in out sales_order_line%rowtype) is
begin
  update sales_order_line set row = p_record where id = p_record.id;
end;


procedure server_message_t(p_record in out server_message%rowtype) is
begin
  update server_message set row = p_record where id = p_record.id;
end;


procedure server_message_trl_t(p_record in out server_message_trl%rowtype) is
begin
  update server_message_trl set row = p_record where id = p_record.id;
end;


procedure street_t(p_record in out street%rowtype) is
begin
  update street set row = p_record where id = p_record.id;
end;


procedure subscription_t(p_record in out subscription%rowtype) is
begin
  update subscription set row = p_record where id = p_record.id;
end;


procedure sys_param_t(p_record in out sys_param%rowtype) is
begin
  update sys_param set row = p_record where id = p_record.id;
end;


procedure sys_param_group_t(p_record in out sys_param_group%rowtype) is
begin
  update sys_param_group set row = p_record where code = p_record.code;
end;


procedure sys_param_valid_value_t(p_record in out sys_param_valid_value%rowtype) is
begin
  update sys_param_valid_value set row = p_record where id = p_record.id;
end;


procedure sys_param_value_t(p_record in out sys_param_value%rowtype) is
begin
  update sys_param_value set row = p_record where id = p_record.id;
end;


procedure sys_role_t(p_record in out sys_role%rowtype) is
begin
  update sys_role set row = p_record where id = p_record.id;
end;


procedure sys_user_t(p_record in out sys_user%rowtype) is
begin
  update sys_user set row = p_record where id = p_record.id;
end;


procedure sys_user_docserrng_t(p_record in out sys_user_docserrng%rowtype) is
begin
  update sys_user_docserrng set row = p_record where id = p_record.id;
end;


procedure sys_user_role_t(p_record in out sys_user_role%rowtype) is
begin
  update sys_user_role set row = p_record where id = p_record.id;
end;


procedure tasks_t(p_record in out tasks%rowtype) is
begin
  update tasks set row = p_record where id = p_record.id;
end;


procedure tax_t(p_record in out tax%rowtype) is
begin
  update tax set row = p_record where id = p_record.id;
end;


procedure tax_type_t(p_record in out tax_type%rowtype) is
begin
  update tax_type set row = p_record where code = p_record.code;
end;


procedure test_t(p_record in out test%rowtype) is
begin
  update test set row = p_record where id = p_record.id;
end;


procedure timesheet_t(p_record in out timesheet%rowtype) is
begin
  update timesheet set row = p_record where id = p_record.id;
end;


procedure ui_dc_t(p_record in out ui_dc%rowtype) is
begin
  update ui_dc set row = p_record where id = p_record.id;
end;


procedure ui_dc_field_t(p_record in out ui_dc_field%rowtype) is
begin
  update ui_dc_field set row = p_record where id = p_record.id;
end;


procedure ui_dc_field_initval_t(p_record in out ui_dc_field_initval%rowtype) is
begin
  update ui_dc_field_initval set row = p_record where id = p_record.id;
end;


procedure ui_dc_role_permission_t(p_record in out ui_dc_role_permission%rowtype) is
begin
  update ui_dc_role_permission set row = p_record where id = p_record.id;
end;


procedure ui_dictionary_t(p_record in out ui_dictionary%rowtype) is
begin
  update ui_dictionary set row = p_record where id = p_record.id;
end;


procedure ui_dictionary_trl_t(p_record in out ui_dictionary_trl%rowtype) is
begin
  update ui_dictionary_trl set row = p_record where id = p_record.id;
end;


procedure ui_gui_t(p_record in out ui_gui%rowtype) is
begin
  update ui_gui set row = p_record where id = p_record.id;
end;


procedure ui_lov_t(p_record in out ui_lov%rowtype) is
begin
  update ui_lov set row = p_record where id = p_record.id;
end;


procedure uom_t(p_record in out uom%rowtype) is
begin
  update uom set row = p_record where id = p_record.id;
end;


procedure uom_conversion_t(p_record in out uom_conversion%rowtype) is
begin
  update uom_conversion set row = p_record where id = p_record.id;
end;


procedure uom_type_t(p_record in out uom_type%rowtype) is
begin
  update uom_type set row = p_record where id = p_record.id;
end;


procedure usr_dc_last_filter_t(p_record in out usr_dc_last_filter%rowtype) is
begin
  update usr_dc_last_filter set row = p_record where id = p_record.id;
end;


procedure usr_login_t(p_record in out usr_login%rowtype) is
begin
  update usr_login set row = p_record where id = p_record.id;
end;


procedure x_imp_parcel_t(p_record in out x_imp_parcel%rowtype) is
begin
  update x_imp_parcel set row = p_record where id = p_record.id;
end;


end;
/
show errors package body PDAO_UPDATE;
