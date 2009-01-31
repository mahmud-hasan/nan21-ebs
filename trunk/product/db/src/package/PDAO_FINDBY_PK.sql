create or replace package PDAO_FINDBY_PK as

/**
 * Nan21 eBusiness Suite.
 * DAO package with record lookup procedures.
 *  For each table there is a procedure which receives as parameters the primary key values and returns the record in rowtype variable.
 *  Param p_raise: ( 'Y', 'N' ). If record with specified primary key value is not found raise an error.  
 * Generated content.
 */

  procedure ac_accdoc_t(p_id in ac_accdoc.id%type, p_record in out ac_accdoc%rowtype, p_raise in char default 'N');
  procedure ac_accdoc_line_t(p_id in ac_accdoc_line.id%type, p_record in out ac_accdoc_line%rowtype, p_raise in char default 'N');
  procedure ac_accschema_t(p_id in ac_accschema.id%type, p_record in out ac_accschema%rowtype, p_raise in char default 'N');
  procedure ac_accschema_acct_t(p_id in ac_accschema_acct.id%type, p_record in out ac_accschema_acct%rowtype, p_raise in char default 'N');
  procedure ac_accschema_param_t(p_id in ac_accschema_param.id%type, p_record in out ac_accschema_param%rowtype, p_raise in char default 'N');
  procedure ac_acct_t(p_id in ac_acct.id%type, p_record in out ac_acct%rowtype, p_raise in char default 'N');
  procedure ac_acct_balance_t(p_id in ac_acct_balance.id%type, p_record in out ac_acct_balance%rowtype, p_raise in char default 'N');
  procedure ac_acct_grp_t(p_id in ac_acct_grp.id%type, p_record in out ac_acct_grp%rowtype, p_raise in char default 'N');
  procedure ac_acct_movement_t(p_id in ac_acct_movement.id%type, p_record in out ac_acct_movement%rowtype, p_raise in char default 'N');
  procedure ac_acc_journal_t(p_id in ac_acc_journal.id%type, p_record in out ac_acc_journal%rowtype, p_raise in char default 'N');
  procedure ac_acc_period_t(p_id in ac_acc_period.id%type, p_record in out ac_acc_period%rowtype, p_raise in char default 'N');
  procedure ac_acc_year_t(p_id in ac_acc_year.id%type, p_record in out ac_acc_year%rowtype, p_raise in char default 'N');
  procedure ac_cliaccschema_paramacct_t(p_id in ac_cliaccschema_paramacct.id%type, p_record in out ac_cliaccschema_paramacct%rowtype, p_raise in char default 'N');
  procedure ac_cliaccschema_paramval_t(p_id in ac_cliaccschema_paramval.id%type, p_record in out ac_cliaccschema_paramval%rowtype, p_raise in char default 'N');
  procedure ac_client_accschema_t(p_id in ac_client_accschema.id%type, p_record in out ac_client_accschema%rowtype, p_raise in char default 'N');
  procedure asset_t(p_id in asset.id%type, p_record in out asset%rowtype, p_raise in char default 'N');
  procedure bank_t(p_id in bank.id%type, p_record in out bank%rowtype, p_raise in char default 'N');
  procedure bank_agency_t(p_id in bank_agency.id%type, p_record in out bank_agency%rowtype, p_raise in char default 'N');
  procedure billing_cycle_t(p_id in billing_cycle.id%type, p_record in out billing_cycle%rowtype, p_raise in char default 'N');
  procedure billing_cycle_class_t(p_code in billing_cycle_class.code%type, p_record in out billing_cycle_class%rowtype, p_raise in char default 'N');
  procedure bpartner_t(p_id in bpartner.id%type, p_record in out bpartner%rowtype, p_raise in char default 'N');
  procedure bpcontact_phone_t(p_id in bpcontact_phone.id%type, p_record in out bpcontact_phone%rowtype, p_raise in char default 'N');
  procedure bp_account_t(p_id in bp_account.id%type, p_record in out bp_account%rowtype, p_raise in char default 'N');
  procedure bp_adress_t(p_id in bp_adress.id%type, p_record in out bp_adress%rowtype, p_raise in char default 'N');
  procedure bp_amount_t(p_id in bp_amount.id%type, p_record in out bp_amount%rowtype, p_raise in char default 'N');
  procedure bp_balance_t(p_id in bp_balance.id%type, p_record in out bp_balance%rowtype, p_raise in char default 'N');
  procedure bp_bankaccount_t(p_id in bp_bankaccount.id%type, p_record in out bp_bankaccount%rowtype, p_raise in char default 'N');
  procedure bp_client_t(p_id in bp_client.id%type, p_record in out bp_client%rowtype, p_raise in char default 'N');
  procedure bp_contact_t(p_id in bp_contact.id%type, p_record in out bp_contact%rowtype, p_raise in char default 'N');
  procedure bp_contract_t(p_id in bp_contract.id%type, p_record in out bp_contract%rowtype, p_raise in char default 'N');
  procedure bp_phone_t(p_id in bp_phone.id%type, p_record in out bp_phone%rowtype, p_raise in char default 'N');
  procedure bp_subscription_t(p_id in bp_subscription.id%type, p_record in out bp_subscription%rowtype, p_raise in char default 'N');
  procedure budget_t(p_id in budget.id%type, p_record in out budget%rowtype, p_raise in char default 'N');
  procedure city_t(p_id in city.id%type, p_record in out city%rowtype, p_raise in char default 'N');
  procedure client_t(p_id in client.id%type, p_record in out client%rowtype, p_raise in char default 'N');
  procedure contract_status_t(p_code in contract_status.code%type, p_record in out contract_status%rowtype, p_raise in char default 'N');
  procedure contract_type_t(p_code in contract_type.code%type, p_record in out contract_type%rowtype, p_raise in char default 'N');
  procedure costing_method_t(p_id in costing_method.id%type, p_record in out costing_method%rowtype, p_raise in char default 'N');
  procedure cost_center_t(p_id in cost_center.id%type, p_record in out cost_center%rowtype, p_raise in char default 'N');
  procedure country_t(p_id in country.id%type, p_record in out country%rowtype, p_raise in char default 'N');
  procedure currency_t(p_id in currency.id%type, p_record in out currency%rowtype, p_raise in char default 'N');
  procedure currency_avg_rate_t(p_id in currency_avg_rate.id%type, p_record in out currency_avg_rate%rowtype, p_raise in char default 'N');
  procedure currency_xrate_t(p_id in currency_xrate.id%type, p_record in out currency_xrate%rowtype, p_raise in char default 'N');
  procedure delivery_agent_t(p_id in delivery_agent.id%type, p_record in out delivery_agent%rowtype, p_raise in char default 'N');
  procedure document_serial_t(p_id in document_serial.id%type, p_record in out document_serial%rowtype, p_raise in char default 'N');
  procedure document_serial_no_t(p_id in document_serial_no.id%type, p_record in out document_serial_no%rowtype, p_raise in char default 'N');
  procedure document_serial_range_t(p_id in document_serial_range.id%type, p_record in out document_serial_range%rowtype, p_raise in char default 'N');
  procedure employee_t(p_id in employee.id%type, p_record in out employee%rowtype, p_raise in char default 'N');
  procedure expensesheet_t(p_id in expensesheet.id%type, p_record in out expensesheet%rowtype, p_raise in char default 'N');
  procedure iinvoice_t(p_id in iinvoice.id%type, p_record in out iinvoice%rowtype, p_raise in char default 'N');
  procedure iinvoice_item_t(p_id in iinvoice_item.id%type, p_record in out iinvoice_item%rowtype, p_raise in char default 'N');
  procedure iinv_doctyp_attr_t(p_id in iinv_doctyp_attr.id%type, p_record in out iinv_doctyp_attr%rowtype, p_raise in char default 'N');
  procedure iinv_doc_type_t(p_id in iinv_doc_type.id%type, p_record in out iinv_doc_type%rowtype, p_raise in char default 'N');
  procedure impex_map_t(p_id in impex_map.id%type, p_record in out impex_map%rowtype, p_raise in char default 'N');
  procedure insurance_t(p_id in insurance.id%type, p_record in out insurance%rowtype, p_raise in char default 'N');
  procedure languages_t(p_id in languages.id%type, p_record in out languages%rowtype, p_raise in char default 'N');
  procedure menubar_t(p_id in menubar.id%type, p_record in out menubar%rowtype, p_raise in char default 'N');
  procedure menuitem_t(p_id in menuitem.id%type, p_record in out menuitem%rowtype, p_raise in char default 'N');
  procedure menuitem_param_t(p_id in menuitem_param.id%type, p_record in out menuitem_param%rowtype, p_raise in char default 'N');
  procedure menuitem_role_t(p_id in menuitem_role.id%type, p_record in out menuitem_role%rowtype, p_raise in char default 'N');
  procedure menuitem_trl_t(p_id in menuitem_trl.id%type, p_record in out menuitem_trl%rowtype, p_raise in char default 'N');
  procedure menu_shortcut_t(p_id in menu_shortcut.id%type, p_record in out menu_shortcut%rowtype, p_raise in char default 'N');
  procedure mm_movement_in_doc_t(p_id in mm_movement_in_doc.id%type, p_record in out mm_movement_in_doc%rowtype, p_raise in char default 'N');
  procedure mm_movement_in_line_t(p_id in mm_movement_in_line.id%type, p_record in out mm_movement_in_line%rowtype, p_raise in char default 'N');
  procedure mm_movement_out_doc_t(p_id in mm_movement_out_doc.id%type, p_record in out mm_movement_out_doc%rowtype, p_raise in char default 'N');
  procedure mm_mvmntin_doctype_t(p_id in mm_mvmntin_doctype.id%type, p_record in out mm_mvmntin_doctype%rowtype, p_raise in char default 'N');
  procedure mm_org_inv_t(p_id in mm_org_inv.id%type, p_record in out mm_org_inv%rowtype, p_raise in char default 'N');
  procedure mm_org_inv_type_t(p_id in mm_org_inv_type.id%type, p_record in out mm_org_inv_type%rowtype, p_raise in char default 'N');
  procedure mm_price_level_t(p_id in mm_price_level.id%type, p_record in out mm_price_level%rowtype, p_raise in char default 'N');
  procedure mm_price_list_t(p_id in mm_price_list.id%type, p_record in out mm_price_list%rowtype, p_raise in char default 'N');
  procedure mm_product_t(p_id in mm_product.id%type, p_record in out mm_product%rowtype, p_raise in char default 'N');
  procedure mm_product_account_t(p_id in mm_product_account.id%type, p_record in out mm_product_account%rowtype, p_raise in char default 'N');
  procedure mm_product_category_t(p_id in mm_product_category.id%type, p_record in out mm_product_category%rowtype, p_raise in char default 'N');
  procedure mm_product_category_account_t(p_id in mm_product_category_account.id%type, p_record in out mm_product_category_account%rowtype, p_raise in char default 'N');
  procedure mm_product_client_t(p_id in mm_product_client.id%type, p_record in out mm_product_client%rowtype, p_raise in char default 'N');
  procedure mm_product_price_t(p_id in mm_product_price.id%type, p_record in out mm_product_price%rowtype, p_raise in char default 'N');
  procedure mm_prod_attr_t(p_id in mm_prod_attr.id%type, p_record in out mm_prod_attr%rowtype, p_raise in char default 'N');
  procedure mm_prod_attr_grp_t(p_id in mm_prod_attr_grp.id%type, p_record in out mm_prod_attr_grp%rowtype, p_raise in char default 'N');
  procedure mm_prod_attr_val_t(p_id in mm_prod_attr_val.id%type, p_record in out mm_prod_attr_val%rowtype, p_raise in char default 'N');
  procedure mm_prod_stock_t(p_id in mm_prod_stock.id%type, p_record in out mm_prod_stock%rowtype, p_raise in char default 'N');
  procedure mm_prod_stock_balance_t(p_id in mm_prod_stock_balance.id%type, p_record in out mm_prod_stock_balance%rowtype, p_raise in char default 'N');
  procedure mm_prod_stock_cmp_t(p_id in mm_prod_stock_cmp.id%type, p_record in out mm_prod_stock_cmp%rowtype, p_raise in char default 'N');
  procedure mm_prod_stock_cmp_balance_t(p_id in mm_prod_stock_cmp_balance.id%type, p_record in out mm_prod_stock_cmp_balance%rowtype, p_raise in char default 'N');
  procedure mm_prod_stock_mvmnt_t(p_id in mm_prod_stock_mvmnt.id%type, p_record in out mm_prod_stock_mvmnt%rowtype, p_raise in char default 'N');
  procedure mm_stock_loc_t(p_id in mm_stock_loc.id%type, p_record in out mm_stock_loc%rowtype, p_raise in char default 'N');
  procedure mm_stock_loc_type_t(p_id in mm_stock_loc_type.id%type, p_record in out mm_stock_loc_type%rowtype, p_raise in char default 'N');
  procedure organization_t(p_id in organization.id%type, p_record in out organization%rowtype, p_raise in char default 'N');
  procedure org_type_t(p_id in org_type.id%type, p_record in out org_type%rowtype, p_raise in char default 'N');
  procedure payment_t(p_id in payment.id%type, p_record in out payment%rowtype, p_raise in char default 'N');
  procedure payment_doctype_attr_t(p_id in payment_doctype_attr.id%type, p_record in out payment_doctype_attr%rowtype, p_raise in char default 'N');
  procedure payment_doc_type_t(p_id in payment_doc_type.id%type, p_record in out payment_doc_type%rowtype, p_raise in char default 'N');
  procedure payment_item_t(p_id in payment_item.id%type, p_record in out payment_item%rowtype, p_raise in char default 'N');
  procedure payment_method_t(p_code in payment_method.code%type, p_record in out payment_method%rowtype, p_raise in char default 'N');
  procedure person_t(p_id in person.id%type, p_record in out person%rowtype, p_raise in char default 'N');
  procedure project_t(p_id in project.id%type, p_record in out project%rowtype, p_raise in char default 'N');
  procedure project_cmp_type_t(p_id in project_cmp_type.id%type, p_record in out project_cmp_type%rowtype, p_raise in char default 'N');
  procedure project_issue_t(p_id in project_issue.id%type, p_record in out project_issue%rowtype, p_raise in char default 'N');
  procedure project_issue_attachment_t(p_id in project_issue_attachment.id%type, p_record in out project_issue_attachment%rowtype, p_raise in char default 'N');
  procedure project_issue_cmp_assoc_t(p_id in project_issue_cmp_assoc.id%type, p_record in out project_issue_cmp_assoc%rowtype, p_raise in char default 'N');
  procedure project_issue_note_t(p_id in project_issue_note.id%type, p_record in out project_issue_note%rowtype, p_raise in char default 'N');
  procedure project_issue_priority_t(p_id in project_issue_priority.id%type, p_record in out project_issue_priority%rowtype, p_raise in char default 'N');
  procedure project_issue_severity_t(p_id in project_issue_severity.id%type, p_record in out project_issue_severity%rowtype, p_raise in char default 'N');
  procedure project_issue_status_t(p_id in project_issue_status.id%type, p_record in out project_issue_status%rowtype, p_raise in char default 'N');
  procedure project_issue_type_t(p_id in project_issue_type.id%type, p_record in out project_issue_type%rowtype, p_raise in char default 'N');
  procedure project_status_t(p_id in project_status.id%type, p_record in out project_status%rowtype, p_raise in char default 'N');
  procedure project_type_t(p_id in project_type.id%type, p_record in out project_type%rowtype, p_raise in char default 'N');
  procedure purchase_need_t(p_id in purchase_need.id%type, p_record in out purchase_need%rowtype, p_raise in char default 'N');
  procedure purchase_need_line_t(p_id in purchase_need_line.id%type, p_record in out purchase_need_line%rowtype, p_raise in char default 'N');
  procedure purchase_order_t(p_id in purchase_order.id%type, p_record in out purchase_order%rowtype, p_raise in char default 'N');
  procedure purchase_order_line_t(p_id in purchase_order_line.id%type, p_record in out purchase_order_line%rowtype, p_raise in char default 'N');
  procedure region_t(p_id in region.id%type, p_record in out region%rowtype, p_raise in char default 'N');
  procedure reporting_period_t(p_id in reporting_period.id%type, p_record in out reporting_period%rowtype, p_raise in char default 'N');
  procedure rinvoice_t(p_id in rinvoice.id%type, p_record in out rinvoice%rowtype, p_raise in char default 'N');
  procedure rinvoice_item_t(p_id in rinvoice_item.id%type, p_record in out rinvoice_item%rowtype, p_raise in char default 'N');
  procedure rinv_doctyp_attr_t(p_id in rinv_doctyp_attr.id%type, p_record in out rinv_doctyp_attr%rowtype, p_raise in char default 'N');
  procedure rinv_doc_type_t(p_id in rinv_doc_type.id%type, p_record in out rinv_doc_type%rowtype, p_raise in char default 'N');
  procedure sales_order_t(p_id in sales_order.id%type, p_record in out sales_order%rowtype, p_raise in char default 'N');
  procedure sales_order_line_t(p_id in sales_order_line.id%type, p_record in out sales_order_line%rowtype, p_raise in char default 'N');
  procedure server_message_t(p_id in server_message.id%type, p_record in out server_message%rowtype, p_raise in char default 'N');
  procedure server_message_trl_t(p_id in server_message_trl.id%type, p_record in out server_message_trl%rowtype, p_raise in char default 'N');
  procedure street_t(p_id in street.id%type, p_record in out street%rowtype, p_raise in char default 'N');
  procedure subscription_t(p_id in subscription.id%type, p_record in out subscription%rowtype, p_raise in char default 'N');
  procedure sys_param_t(p_id in sys_param.id%type, p_record in out sys_param%rowtype, p_raise in char default 'N');
  procedure sys_param_group_t(p_code in sys_param_group.code%type, p_record in out sys_param_group%rowtype, p_raise in char default 'N');
  procedure sys_param_valid_value_t(p_id in sys_param_valid_value.id%type, p_record in out sys_param_valid_value%rowtype, p_raise in char default 'N');
  procedure sys_param_value_t(p_id in sys_param_value.id%type, p_record in out sys_param_value%rowtype, p_raise in char default 'N');
  procedure sys_role_t(p_id in sys_role.id%type, p_record in out sys_role%rowtype, p_raise in char default 'N');
  procedure sys_user_t(p_id in sys_user.id%type, p_record in out sys_user%rowtype, p_raise in char default 'N');
  procedure sys_user_docserrng_t(p_id in sys_user_docserrng.id%type, p_record in out sys_user_docserrng%rowtype, p_raise in char default 'N');
  procedure sys_user_role_t(p_id in sys_user_role.id%type, p_record in out sys_user_role%rowtype, p_raise in char default 'N');
  procedure tasks_t(p_id in tasks.id%type, p_record in out tasks%rowtype, p_raise in char default 'N');
  procedure tax_t(p_id in tax.id%type, p_record in out tax%rowtype, p_raise in char default 'N');
  procedure tax_type_t(p_code in tax_type.code%type, p_record in out tax_type%rowtype, p_raise in char default 'N');
  procedure test_t(p_id in test.id%type, p_record in out test%rowtype, p_raise in char default 'N');
  procedure timesheet_t(p_id in timesheet.id%type, p_record in out timesheet%rowtype, p_raise in char default 'N');
  procedure tr_parcel_t(p_id in tr_parcel.id%type, p_record in out tr_parcel%rowtype, p_raise in char default 'N');
  procedure tr_transport_t(p_id in tr_transport.id%type, p_record in out tr_transport%rowtype, p_raise in char default 'N');
  procedure tr_transport_status_t(p_id in tr_transport_status.id%type, p_record in out tr_transport_status%rowtype, p_raise in char default 'N');
  procedure tr_transport_type_t(p_id in tr_transport_type.id%type, p_record in out tr_transport_type%rowtype, p_raise in char default 'N');
  procedure tr_vehicle_t(p_id in tr_vehicle.id%type, p_record in out tr_vehicle%rowtype, p_raise in char default 'N');
  procedure tr_vehicle_type_t(p_id in tr_vehicle_type.id%type, p_record in out tr_vehicle_type%rowtype, p_raise in char default 'N');
  procedure ui_dc_t(p_id in ui_dc.id%type, p_record in out ui_dc%rowtype, p_raise in char default 'N');
  procedure ui_dc_field_t(p_id in ui_dc_field.id%type, p_record in out ui_dc_field%rowtype, p_raise in char default 'N');
  procedure ui_dc_field_initval_t(p_id in ui_dc_field_initval.id%type, p_record in out ui_dc_field_initval%rowtype, p_raise in char default 'N');
  procedure ui_dc_role_permission_t(p_id in ui_dc_role_permission.id%type, p_record in out ui_dc_role_permission%rowtype, p_raise in char default 'N');
  procedure ui_dictionary_t(p_id in ui_dictionary.id%type, p_record in out ui_dictionary%rowtype, p_raise in char default 'N');
  procedure ui_dictionary_trl_t(p_id in ui_dictionary_trl.id%type, p_record in out ui_dictionary_trl%rowtype, p_raise in char default 'N');
  procedure ui_gui_t(p_id in ui_gui.id%type, p_record in out ui_gui%rowtype, p_raise in char default 'N');
  procedure ui_lov_t(p_id in ui_lov.id%type, p_record in out ui_lov%rowtype, p_raise in char default 'N');
  procedure uom_t(p_id in uom.id%type, p_record in out uom%rowtype, p_raise in char default 'N');
  procedure uom_conversion_t(p_id in uom_conversion.id%type, p_record in out uom_conversion%rowtype, p_raise in char default 'N');
  procedure uom_type_t(p_id in uom_type.id%type, p_record in out uom_type%rowtype, p_raise in char default 'N');
  procedure usr_dc_last_filter_t(p_id in usr_dc_last_filter.id%type, p_record in out usr_dc_last_filter%rowtype, p_raise in char default 'N');
  procedure usr_login_t(p_id in usr_login.id%type, p_record in out usr_login%rowtype, p_raise in char default 'N');
  procedure x_imp_parcel_t(p_id in x_imp_parcel.id%type, p_record in out x_imp_parcel%rowtype, p_raise in char default 'N');
end;
/
show errors package PDAO_FINDBY_PK;

create or replace package body PDAO_FINDBY_PK as

procedure ac_accdoc_t(p_id in ac_accdoc.id%type, p_record in out ac_accdoc%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from ac_accdoc t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'AC_ACCDOC');
  end if;
  close c;
end;


procedure ac_accdoc_line_t(p_id in ac_accdoc_line.id%type, p_record in out ac_accdoc_line%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from ac_accdoc_line t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'AC_ACCDOC_LINE');
  end if;
  close c;
end;


procedure ac_accschema_t(p_id in ac_accschema.id%type, p_record in out ac_accschema%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from ac_accschema t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'AC_ACCSCHEMA');
  end if;
  close c;
end;


procedure ac_accschema_acct_t(p_id in ac_accschema_acct.id%type, p_record in out ac_accschema_acct%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from ac_accschema_acct t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'AC_ACCSCHEMA_ACCT');
  end if;
  close c;
end;


procedure ac_accschema_param_t(p_id in ac_accschema_param.id%type, p_record in out ac_accschema_param%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from ac_accschema_param t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'AC_ACCSCHEMA_PARAM');
  end if;
  close c;
end;


procedure ac_acct_t(p_id in ac_acct.id%type, p_record in out ac_acct%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from ac_acct t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'AC_ACCT');
  end if;
  close c;
end;


procedure ac_acct_balance_t(p_id in ac_acct_balance.id%type, p_record in out ac_acct_balance%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from ac_acct_balance t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'AC_ACCT_BALANCE');
  end if;
  close c;
end;


procedure ac_acct_grp_t(p_id in ac_acct_grp.id%type, p_record in out ac_acct_grp%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from ac_acct_grp t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'AC_ACCT_GRP');
  end if;
  close c;
end;


procedure ac_acct_movement_t(p_id in ac_acct_movement.id%type, p_record in out ac_acct_movement%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from ac_acct_movement t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'AC_ACCT_MOVEMENT');
  end if;
  close c;
end;


procedure ac_acc_journal_t(p_id in ac_acc_journal.id%type, p_record in out ac_acc_journal%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from ac_acc_journal t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'AC_ACC_JOURNAL');
  end if;
  close c;
end;


procedure ac_acc_period_t(p_id in ac_acc_period.id%type, p_record in out ac_acc_period%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from ac_acc_period t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'AC_ACC_PERIOD');
  end if;
  close c;
end;


procedure ac_acc_year_t(p_id in ac_acc_year.id%type, p_record in out ac_acc_year%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from ac_acc_year t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'AC_ACC_YEAR');
  end if;
  close c;
end;


procedure ac_cliaccschema_paramacct_t(p_id in ac_cliaccschema_paramacct.id%type, p_record in out ac_cliaccschema_paramacct%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from ac_cliaccschema_paramacct t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'AC_CLIACCSCHEMA_PARAMACCT');
  end if;
  close c;
end;


procedure ac_cliaccschema_paramval_t(p_id in ac_cliaccschema_paramval.id%type, p_record in out ac_cliaccschema_paramval%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from ac_cliaccschema_paramval t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'AC_CLIACCSCHEMA_PARAMVAL');
  end if;
  close c;
end;


procedure ac_client_accschema_t(p_id in ac_client_accschema.id%type, p_record in out ac_client_accschema%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from ac_client_accschema t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'AC_CLIENT_ACCSCHEMA');
  end if;
  close c;
end;


procedure asset_t(p_id in asset.id%type, p_record in out asset%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from asset t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'ASSET');
  end if;
  close c;
end;


procedure bank_t(p_id in bank.id%type, p_record in out bank%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from bank t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'BANK');
  end if;
  close c;
end;


procedure bank_agency_t(p_id in bank_agency.id%type, p_record in out bank_agency%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from bank_agency t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'BANK_AGENCY');
  end if;
  close c;
end;


procedure billing_cycle_t(p_id in billing_cycle.id%type, p_record in out billing_cycle%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from billing_cycle t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'BILLING_CYCLE');
  end if;
  close c;
end;


procedure billing_cycle_class_t(p_code in billing_cycle_class.code%type, p_record in out billing_cycle_class%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from billing_cycle_class t where t.code = p_code; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'BILLING_CYCLE_CLASS');
  end if;
  close c;
end;


procedure bpartner_t(p_id in bpartner.id%type, p_record in out bpartner%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from bpartner t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'BPARTNER');
  end if;
  close c;
end;


procedure bpcontact_phone_t(p_id in bpcontact_phone.id%type, p_record in out bpcontact_phone%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from bpcontact_phone t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'BPCONTACT_PHONE');
  end if;
  close c;
end;


procedure bp_account_t(p_id in bp_account.id%type, p_record in out bp_account%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from bp_account t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'BP_ACCOUNT');
  end if;
  close c;
end;


procedure bp_adress_t(p_id in bp_adress.id%type, p_record in out bp_adress%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from bp_adress t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'BP_ADRESS');
  end if;
  close c;
end;


procedure bp_amount_t(p_id in bp_amount.id%type, p_record in out bp_amount%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from bp_amount t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'BP_AMOUNT');
  end if;
  close c;
end;


procedure bp_balance_t(p_id in bp_balance.id%type, p_record in out bp_balance%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from bp_balance t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'BP_BALANCE');
  end if;
  close c;
end;


procedure bp_bankaccount_t(p_id in bp_bankaccount.id%type, p_record in out bp_bankaccount%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from bp_bankaccount t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'BP_BANKACCOUNT');
  end if;
  close c;
end;


procedure bp_client_t(p_id in bp_client.id%type, p_record in out bp_client%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from bp_client t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'BP_CLIENT');
  end if;
  close c;
end;


procedure bp_contact_t(p_id in bp_contact.id%type, p_record in out bp_contact%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from bp_contact t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'BP_CONTACT');
  end if;
  close c;
end;


procedure bp_contract_t(p_id in bp_contract.id%type, p_record in out bp_contract%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from bp_contract t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'BP_CONTRACT');
  end if;
  close c;
end;


procedure bp_phone_t(p_id in bp_phone.id%type, p_record in out bp_phone%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from bp_phone t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'BP_PHONE');
  end if;
  close c;
end;


procedure bp_subscription_t(p_id in bp_subscription.id%type, p_record in out bp_subscription%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from bp_subscription t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'BP_SUBSCRIPTION');
  end if;
  close c;
end;


procedure budget_t(p_id in budget.id%type, p_record in out budget%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from budget t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'BUDGET');
  end if;
  close c;
end;


procedure city_t(p_id in city.id%type, p_record in out city%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from city t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'CITY');
  end if;
  close c;
end;


procedure client_t(p_id in client.id%type, p_record in out client%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from client t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'CLIENT');
  end if;
  close c;
end;


procedure contract_status_t(p_code in contract_status.code%type, p_record in out contract_status%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from contract_status t where t.code = p_code; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'CONTRACT_STATUS');
  end if;
  close c;
end;


procedure contract_type_t(p_code in contract_type.code%type, p_record in out contract_type%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from contract_type t where t.code = p_code; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'CONTRACT_TYPE');
  end if;
  close c;
end;


procedure costing_method_t(p_id in costing_method.id%type, p_record in out costing_method%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from costing_method t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'COSTING_METHOD');
  end if;
  close c;
end;


procedure cost_center_t(p_id in cost_center.id%type, p_record in out cost_center%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from cost_center t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'COST_CENTER');
  end if;
  close c;
end;


procedure country_t(p_id in country.id%type, p_record in out country%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from country t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'COUNTRY');
  end if;
  close c;
end;


procedure currency_t(p_id in currency.id%type, p_record in out currency%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from currency t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'CURRENCY');
  end if;
  close c;
end;


procedure currency_avg_rate_t(p_id in currency_avg_rate.id%type, p_record in out currency_avg_rate%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from currency_avg_rate t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'CURRENCY_AVG_RATE');
  end if;
  close c;
end;


procedure currency_xrate_t(p_id in currency_xrate.id%type, p_record in out currency_xrate%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from currency_xrate t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'CURRENCY_XRATE');
  end if;
  close c;
end;


procedure delivery_agent_t(p_id in delivery_agent.id%type, p_record in out delivery_agent%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from delivery_agent t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'DELIVERY_AGENT');
  end if;
  close c;
end;


procedure document_serial_t(p_id in document_serial.id%type, p_record in out document_serial%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from document_serial t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'DOCUMENT_SERIAL');
  end if;
  close c;
end;


procedure document_serial_no_t(p_id in document_serial_no.id%type, p_record in out document_serial_no%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from document_serial_no t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'DOCUMENT_SERIAL_NO');
  end if;
  close c;
end;


procedure document_serial_range_t(p_id in document_serial_range.id%type, p_record in out document_serial_range%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from document_serial_range t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'DOCUMENT_SERIAL_RANGE');
  end if;
  close c;
end;


procedure employee_t(p_id in employee.id%type, p_record in out employee%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from employee t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'EMPLOYEE');
  end if;
  close c;
end;


procedure expensesheet_t(p_id in expensesheet.id%type, p_record in out expensesheet%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from expensesheet t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'EXPENSESHEET');
  end if;
  close c;
end;


procedure iinvoice_t(p_id in iinvoice.id%type, p_record in out iinvoice%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from iinvoice t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'IINVOICE');
  end if;
  close c;
end;


procedure iinvoice_item_t(p_id in iinvoice_item.id%type, p_record in out iinvoice_item%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from iinvoice_item t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'IINVOICE_ITEM');
  end if;
  close c;
end;


procedure iinv_doctyp_attr_t(p_id in iinv_doctyp_attr.id%type, p_record in out iinv_doctyp_attr%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from iinv_doctyp_attr t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'IINV_DOCTYP_ATTR');
  end if;
  close c;
end;


procedure iinv_doc_type_t(p_id in iinv_doc_type.id%type, p_record in out iinv_doc_type%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from iinv_doc_type t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'IINV_DOC_TYPE');
  end if;
  close c;
end;


procedure impex_map_t(p_id in impex_map.id%type, p_record in out impex_map%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from impex_map t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'IMPEX_MAP');
  end if;
  close c;
end;


procedure insurance_t(p_id in insurance.id%type, p_record in out insurance%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from insurance t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'INSURANCE');
  end if;
  close c;
end;


procedure languages_t(p_id in languages.id%type, p_record in out languages%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from languages t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'LANGUAGES');
  end if;
  close c;
end;


procedure menubar_t(p_id in menubar.id%type, p_record in out menubar%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from menubar t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'MENUBAR');
  end if;
  close c;
end;


procedure menuitem_t(p_id in menuitem.id%type, p_record in out menuitem%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from menuitem t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'MENUITEM');
  end if;
  close c;
end;


procedure menuitem_param_t(p_id in menuitem_param.id%type, p_record in out menuitem_param%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from menuitem_param t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'MENUITEM_PARAM');
  end if;
  close c;
end;


procedure menuitem_role_t(p_id in menuitem_role.id%type, p_record in out menuitem_role%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from menuitem_role t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'MENUITEM_ROLE');
  end if;
  close c;
end;


procedure menuitem_trl_t(p_id in menuitem_trl.id%type, p_record in out menuitem_trl%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from menuitem_trl t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'MENUITEM_TRL');
  end if;
  close c;
end;


procedure menu_shortcut_t(p_id in menu_shortcut.id%type, p_record in out menu_shortcut%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from menu_shortcut t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'MENU_SHORTCUT');
  end if;
  close c;
end;


procedure mm_movement_in_doc_t(p_id in mm_movement_in_doc.id%type, p_record in out mm_movement_in_doc%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from mm_movement_in_doc t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'MM_MOVEMENT_IN_DOC');
  end if;
  close c;
end;


procedure mm_movement_in_line_t(p_id in mm_movement_in_line.id%type, p_record in out mm_movement_in_line%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from mm_movement_in_line t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'MM_MOVEMENT_IN_LINE');
  end if;
  close c;
end;


procedure mm_movement_out_doc_t(p_id in mm_movement_out_doc.id%type, p_record in out mm_movement_out_doc%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from mm_movement_out_doc t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'MM_MOVEMENT_OUT_DOC');
  end if;
  close c;
end;


procedure mm_mvmntin_doctype_t(p_id in mm_mvmntin_doctype.id%type, p_record in out mm_mvmntin_doctype%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from mm_mvmntin_doctype t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'MM_MVMNTIN_DOCTYPE');
  end if;
  close c;
end;


procedure mm_org_inv_t(p_id in mm_org_inv.id%type, p_record in out mm_org_inv%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from mm_org_inv t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'MM_ORG_INV');
  end if;
  close c;
end;


procedure mm_org_inv_type_t(p_id in mm_org_inv_type.id%type, p_record in out mm_org_inv_type%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from mm_org_inv_type t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'MM_ORG_INV_TYPE');
  end if;
  close c;
end;


procedure mm_price_level_t(p_id in mm_price_level.id%type, p_record in out mm_price_level%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from mm_price_level t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'MM_PRICE_LEVEL');
  end if;
  close c;
end;


procedure mm_price_list_t(p_id in mm_price_list.id%type, p_record in out mm_price_list%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from mm_price_list t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'MM_PRICE_LIST');
  end if;
  close c;
end;


procedure mm_product_t(p_id in mm_product.id%type, p_record in out mm_product%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from mm_product t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'MM_PRODUCT');
  end if;
  close c;
end;


procedure mm_product_account_t(p_id in mm_product_account.id%type, p_record in out mm_product_account%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from mm_product_account t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'MM_PRODUCT_ACCOUNT');
  end if;
  close c;
end;


procedure mm_product_category_t(p_id in mm_product_category.id%type, p_record in out mm_product_category%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from mm_product_category t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'MM_PRODUCT_CATEGORY');
  end if;
  close c;
end;


procedure mm_product_category_account_t(p_id in mm_product_category_account.id%type, p_record in out mm_product_category_account%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from mm_product_category_account t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'MM_PRODUCT_CATEGORY_ACCOUNT');
  end if;
  close c;
end;


procedure mm_product_client_t(p_id in mm_product_client.id%type, p_record in out mm_product_client%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from mm_product_client t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'MM_PRODUCT_CLIENT');
  end if;
  close c;
end;


procedure mm_product_price_t(p_id in mm_product_price.id%type, p_record in out mm_product_price%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from mm_product_price t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'MM_PRODUCT_PRICE');
  end if;
  close c;
end;


procedure mm_prod_attr_t(p_id in mm_prod_attr.id%type, p_record in out mm_prod_attr%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from mm_prod_attr t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'MM_PROD_ATTR');
  end if;
  close c;
end;


procedure mm_prod_attr_grp_t(p_id in mm_prod_attr_grp.id%type, p_record in out mm_prod_attr_grp%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from mm_prod_attr_grp t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'MM_PROD_ATTR_GRP');
  end if;
  close c;
end;


procedure mm_prod_attr_val_t(p_id in mm_prod_attr_val.id%type, p_record in out mm_prod_attr_val%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from mm_prod_attr_val t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'MM_PROD_ATTR_VAL');
  end if;
  close c;
end;


procedure mm_prod_stock_t(p_id in mm_prod_stock.id%type, p_record in out mm_prod_stock%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from mm_prod_stock t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'MM_PROD_STOCK');
  end if;
  close c;
end;


procedure mm_prod_stock_balance_t(p_id in mm_prod_stock_balance.id%type, p_record in out mm_prod_stock_balance%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from mm_prod_stock_balance t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'MM_PROD_STOCK_BALANCE');
  end if;
  close c;
end;


procedure mm_prod_stock_cmp_t(p_id in mm_prod_stock_cmp.id%type, p_record in out mm_prod_stock_cmp%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from mm_prod_stock_cmp t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'MM_PROD_STOCK_CMP');
  end if;
  close c;
end;


procedure mm_prod_stock_cmp_balance_t(p_id in mm_prod_stock_cmp_balance.id%type, p_record in out mm_prod_stock_cmp_balance%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from mm_prod_stock_cmp_balance t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'MM_PROD_STOCK_CMP_BALANCE');
  end if;
  close c;
end;


procedure mm_prod_stock_mvmnt_t(p_id in mm_prod_stock_mvmnt.id%type, p_record in out mm_prod_stock_mvmnt%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from mm_prod_stock_mvmnt t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'MM_PROD_STOCK_MVMNT');
  end if;
  close c;
end;


procedure mm_stock_loc_t(p_id in mm_stock_loc.id%type, p_record in out mm_stock_loc%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from mm_stock_loc t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'MM_STOCK_LOC');
  end if;
  close c;
end;


procedure mm_stock_loc_type_t(p_id in mm_stock_loc_type.id%type, p_record in out mm_stock_loc_type%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from mm_stock_loc_type t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'MM_STOCK_LOC_TYPE');
  end if;
  close c;
end;


procedure organization_t(p_id in organization.id%type, p_record in out organization%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from organization t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'ORGANIZATION');
  end if;
  close c;
end;


procedure org_type_t(p_id in org_type.id%type, p_record in out org_type%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from org_type t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'ORG_TYPE');
  end if;
  close c;
end;


procedure payment_t(p_id in payment.id%type, p_record in out payment%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from payment t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'PAYMENT');
  end if;
  close c;
end;


procedure payment_doctype_attr_t(p_id in payment_doctype_attr.id%type, p_record in out payment_doctype_attr%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from payment_doctype_attr t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'PAYMENT_DOCTYPE_ATTR');
  end if;
  close c;
end;


procedure payment_doc_type_t(p_id in payment_doc_type.id%type, p_record in out payment_doc_type%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from payment_doc_type t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'PAYMENT_DOC_TYPE');
  end if;
  close c;
end;


procedure payment_item_t(p_id in payment_item.id%type, p_record in out payment_item%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from payment_item t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'PAYMENT_ITEM');
  end if;
  close c;
end;


procedure payment_method_t(p_code in payment_method.code%type, p_record in out payment_method%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from payment_method t where t.code = p_code; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'PAYMENT_METHOD');
  end if;
  close c;
end;


procedure person_t(p_id in person.id%type, p_record in out person%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from person t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'PERSON');
  end if;
  close c;
end;


procedure project_t(p_id in project.id%type, p_record in out project%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from project t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'PROJECT');
  end if;
  close c;
end;


procedure project_cmp_type_t(p_id in project_cmp_type.id%type, p_record in out project_cmp_type%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from project_cmp_type t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'PROJECT_CMP_TYPE');
  end if;
  close c;
end;


procedure project_issue_t(p_id in project_issue.id%type, p_record in out project_issue%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from project_issue t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'PROJECT_ISSUE');
  end if;
  close c;
end;


procedure project_issue_attachment_t(p_id in project_issue_attachment.id%type, p_record in out project_issue_attachment%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from project_issue_attachment t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'PROJECT_ISSUE_ATTACHMENT');
  end if;
  close c;
end;


procedure project_issue_cmp_assoc_t(p_id in project_issue_cmp_assoc.id%type, p_record in out project_issue_cmp_assoc%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from project_issue_cmp_assoc t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'PROJECT_ISSUE_CMP_ASSOC');
  end if;
  close c;
end;


procedure project_issue_note_t(p_id in project_issue_note.id%type, p_record in out project_issue_note%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from project_issue_note t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'PROJECT_ISSUE_NOTE');
  end if;
  close c;
end;


procedure project_issue_priority_t(p_id in project_issue_priority.id%type, p_record in out project_issue_priority%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from project_issue_priority t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'PROJECT_ISSUE_PRIORITY');
  end if;
  close c;
end;


procedure project_issue_severity_t(p_id in project_issue_severity.id%type, p_record in out project_issue_severity%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from project_issue_severity t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'PROJECT_ISSUE_SEVERITY');
  end if;
  close c;
end;


procedure project_issue_status_t(p_id in project_issue_status.id%type, p_record in out project_issue_status%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from project_issue_status t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'PROJECT_ISSUE_STATUS');
  end if;
  close c;
end;


procedure project_issue_type_t(p_id in project_issue_type.id%type, p_record in out project_issue_type%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from project_issue_type t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'PROJECT_ISSUE_TYPE');
  end if;
  close c;
end;


procedure project_status_t(p_id in project_status.id%type, p_record in out project_status%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from project_status t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'PROJECT_STATUS');
  end if;
  close c;
end;


procedure project_type_t(p_id in project_type.id%type, p_record in out project_type%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from project_type t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'PROJECT_TYPE');
  end if;
  close c;
end;


procedure purchase_need_t(p_id in purchase_need.id%type, p_record in out purchase_need%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from purchase_need t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'PURCHASE_NEED');
  end if;
  close c;
end;


procedure purchase_need_line_t(p_id in purchase_need_line.id%type, p_record in out purchase_need_line%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from purchase_need_line t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'PURCHASE_NEED_LINE');
  end if;
  close c;
end;


procedure purchase_order_t(p_id in purchase_order.id%type, p_record in out purchase_order%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from purchase_order t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'PURCHASE_ORDER');
  end if;
  close c;
end;


procedure purchase_order_line_t(p_id in purchase_order_line.id%type, p_record in out purchase_order_line%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from purchase_order_line t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'PURCHASE_ORDER_LINE');
  end if;
  close c;
end;


procedure region_t(p_id in region.id%type, p_record in out region%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from region t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'REGION');
  end if;
  close c;
end;


procedure reporting_period_t(p_id in reporting_period.id%type, p_record in out reporting_period%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from reporting_period t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'REPORTING_PERIOD');
  end if;
  close c;
end;


procedure rinvoice_t(p_id in rinvoice.id%type, p_record in out rinvoice%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from rinvoice t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'RINVOICE');
  end if;
  close c;
end;


procedure rinvoice_item_t(p_id in rinvoice_item.id%type, p_record in out rinvoice_item%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from rinvoice_item t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'RINVOICE_ITEM');
  end if;
  close c;
end;


procedure rinv_doctyp_attr_t(p_id in rinv_doctyp_attr.id%type, p_record in out rinv_doctyp_attr%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from rinv_doctyp_attr t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'RINV_DOCTYP_ATTR');
  end if;
  close c;
end;


procedure rinv_doc_type_t(p_id in rinv_doc_type.id%type, p_record in out rinv_doc_type%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from rinv_doc_type t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'RINV_DOC_TYPE');
  end if;
  close c;
end;


procedure sales_order_t(p_id in sales_order.id%type, p_record in out sales_order%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from sales_order t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'SALES_ORDER');
  end if;
  close c;
end;


procedure sales_order_line_t(p_id in sales_order_line.id%type, p_record in out sales_order_line%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from sales_order_line t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'SALES_ORDER_LINE');
  end if;
  close c;
end;


procedure server_message_t(p_id in server_message.id%type, p_record in out server_message%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from server_message t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'SERVER_MESSAGE');
  end if;
  close c;
end;


procedure server_message_trl_t(p_id in server_message_trl.id%type, p_record in out server_message_trl%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from server_message_trl t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'SERVER_MESSAGE_TRL');
  end if;
  close c;
end;


procedure street_t(p_id in street.id%type, p_record in out street%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from street t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'STREET');
  end if;
  close c;
end;


procedure subscription_t(p_id in subscription.id%type, p_record in out subscription%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from subscription t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'SUBSCRIPTION');
  end if;
  close c;
end;


procedure sys_param_t(p_id in sys_param.id%type, p_record in out sys_param%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from sys_param t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'SYS_PARAM');
  end if;
  close c;
end;


procedure sys_param_group_t(p_code in sys_param_group.code%type, p_record in out sys_param_group%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from sys_param_group t where t.code = p_code; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'SYS_PARAM_GROUP');
  end if;
  close c;
end;


procedure sys_param_valid_value_t(p_id in sys_param_valid_value.id%type, p_record in out sys_param_valid_value%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from sys_param_valid_value t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'SYS_PARAM_VALID_VALUE');
  end if;
  close c;
end;


procedure sys_param_value_t(p_id in sys_param_value.id%type, p_record in out sys_param_value%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from sys_param_value t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'SYS_PARAM_VALUE');
  end if;
  close c;
end;


procedure sys_role_t(p_id in sys_role.id%type, p_record in out sys_role%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from sys_role t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'SYS_ROLE');
  end if;
  close c;
end;


procedure sys_user_t(p_id in sys_user.id%type, p_record in out sys_user%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from sys_user t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'SYS_USER');
  end if;
  close c;
end;


procedure sys_user_docserrng_t(p_id in sys_user_docserrng.id%type, p_record in out sys_user_docserrng%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from sys_user_docserrng t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'SYS_USER_DOCSERRNG');
  end if;
  close c;
end;


procedure sys_user_role_t(p_id in sys_user_role.id%type, p_record in out sys_user_role%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from sys_user_role t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'SYS_USER_ROLE');
  end if;
  close c;
end;


procedure tasks_t(p_id in tasks.id%type, p_record in out tasks%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from tasks t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'TASKS');
  end if;
  close c;
end;


procedure tax_t(p_id in tax.id%type, p_record in out tax%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from tax t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'TAX');
  end if;
  close c;
end;


procedure tax_type_t(p_code in tax_type.code%type, p_record in out tax_type%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from tax_type t where t.code = p_code; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'TAX_TYPE');
  end if;
  close c;
end;


procedure test_t(p_id in test.id%type, p_record in out test%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from test t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'TEST');
  end if;
  close c;
end;


procedure timesheet_t(p_id in timesheet.id%type, p_record in out timesheet%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from timesheet t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'TIMESHEET');
  end if;
  close c;
end;


procedure tr_parcel_t(p_id in tr_parcel.id%type, p_record in out tr_parcel%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from tr_parcel t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'TR_PARCEL');
  end if;
  close c;
end;


procedure tr_transport_t(p_id in tr_transport.id%type, p_record in out tr_transport%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from tr_transport t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'TR_TRANSPORT');
  end if;
  close c;
end;


procedure tr_transport_status_t(p_id in tr_transport_status.id%type, p_record in out tr_transport_status%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from tr_transport_status t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'TR_TRANSPORT_STATUS');
  end if;
  close c;
end;


procedure tr_transport_type_t(p_id in tr_transport_type.id%type, p_record in out tr_transport_type%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from tr_transport_type t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'TR_TRANSPORT_TYPE');
  end if;
  close c;
end;


procedure tr_vehicle_t(p_id in tr_vehicle.id%type, p_record in out tr_vehicle%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from tr_vehicle t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'TR_VEHICLE');
  end if;
  close c;
end;


procedure tr_vehicle_type_t(p_id in tr_vehicle_type.id%type, p_record in out tr_vehicle_type%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from tr_vehicle_type t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'TR_VEHICLE_TYPE');
  end if;
  close c;
end;


procedure ui_dc_t(p_id in ui_dc.id%type, p_record in out ui_dc%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from ui_dc t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'UI_DC');
  end if;
  close c;
end;


procedure ui_dc_field_t(p_id in ui_dc_field.id%type, p_record in out ui_dc_field%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from ui_dc_field t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'UI_DC_FIELD');
  end if;
  close c;
end;


procedure ui_dc_field_initval_t(p_id in ui_dc_field_initval.id%type, p_record in out ui_dc_field_initval%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from ui_dc_field_initval t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'UI_DC_FIELD_INITVAL');
  end if;
  close c;
end;


procedure ui_dc_role_permission_t(p_id in ui_dc_role_permission.id%type, p_record in out ui_dc_role_permission%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from ui_dc_role_permission t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'UI_DC_ROLE_PERMISSION');
  end if;
  close c;
end;


procedure ui_dictionary_t(p_id in ui_dictionary.id%type, p_record in out ui_dictionary%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from ui_dictionary t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'UI_DICTIONARY');
  end if;
  close c;
end;


procedure ui_dictionary_trl_t(p_id in ui_dictionary_trl.id%type, p_record in out ui_dictionary_trl%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from ui_dictionary_trl t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'UI_DICTIONARY_TRL');
  end if;
  close c;
end;


procedure ui_gui_t(p_id in ui_gui.id%type, p_record in out ui_gui%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from ui_gui t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'UI_GUI');
  end if;
  close c;
end;


procedure ui_lov_t(p_id in ui_lov.id%type, p_record in out ui_lov%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from ui_lov t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'UI_LOV');
  end if;
  close c;
end;


procedure uom_t(p_id in uom.id%type, p_record in out uom%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from uom t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'UOM');
  end if;
  close c;
end;


procedure uom_conversion_t(p_id in uom_conversion.id%type, p_record in out uom_conversion%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from uom_conversion t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'UOM_CONVERSION');
  end if;
  close c;
end;


procedure uom_type_t(p_id in uom_type.id%type, p_record in out uom_type%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from uom_type t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'UOM_TYPE');
  end if;
  close c;
end;


procedure usr_dc_last_filter_t(p_id in usr_dc_last_filter.id%type, p_record in out usr_dc_last_filter%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from usr_dc_last_filter t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'USR_DC_LAST_FILTER');
  end if;
  close c;
end;


procedure usr_login_t(p_id in usr_login.id%type, p_record in out usr_login%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from usr_login t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'USR_LOGIN');
  end if;
  close c;
end;


procedure x_imp_parcel_t(p_id in x_imp_parcel.id%type, p_record in out x_imp_parcel%rowtype, p_raise in char default 'N') is
  cursor c is 
    select t.* from x_imp_parcel t where t.id = p_id; 
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then 
    raise_error('DaoRecordByPkNotFound' , 'X_IMP_PARCEL');
  end if;
  close c;
end;


end;
/
show errors package body PDAO_FINDBY_PK;
