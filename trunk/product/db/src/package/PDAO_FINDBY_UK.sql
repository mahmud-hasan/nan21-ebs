create or replace package PDAO_FINDBY_UK as

/**
 * Nan21 eBusiness Suite.
 * DAO package with record lookup procedures.
 *  For each unique key on table there is a procedure which receives as parameters the unique key values and returns the record in rowtype variable.
 *  Param p_raise: ( 'Y', 'N' ). If record with specified unique key value is not found raise an error.
 * Generated content.
 */

  procedure ac_accschema_t(p_name in ac_accschema.name%type, p_record in out ac_accschema%rowtype, p_raise in char default 'N');
  procedure ac_accschema_acct_t(p_accschema_id in ac_accschema_acct.accschema_id%type, p_account in ac_accschema_acct.account%type, p_record in out ac_accschema_acct%rowtype, p_raise in char default 'N');
  procedure ac_accschema_param_t(p_name in ac_accschema_param.name%type, p_record in out ac_accschema_param%rowtype, p_raise in char default 'N');
  procedure ac_acct_t(p_client_id in ac_acct.client_id%type, p_accschema_id in ac_acct.accschema_id%type, p_account in ac_acct.account%type, p_record in out ac_acct%rowtype, p_raise in char default 'N');
  procedure ac_acct_t(p_client_id in ac_acct.client_id%type, p_accschema_id in ac_acct.accschema_id%type, p_id in ac_acct.id%type, p_record in out ac_acct%rowtype, p_raise in char default 'N');
  procedure ac_acct_grp_t(p_accschema_id in ac_acct_grp.accschema_id%type, p_code in ac_acct_grp.code%type, p_record in out ac_acct_grp%rowtype, p_raise in char default 'N');
  procedure ac_acc_journal_t(p_client_id in ac_acc_journal.client_id%type, p_accschema_id in ac_acc_journal.accschema_id%type, p_name in ac_acc_journal.name%type, p_record in out ac_acc_journal%rowtype, p_raise in char default 'N');
  procedure ac_acc_period_t(p_client_id in ac_acc_period.client_id%type, p_accyear_code in ac_acc_period.accyear_code%type, p_code in ac_acc_period.code%type, p_record in out ac_acc_period%rowtype, p_raise in char default 'N');
  procedure ac_acc_period_t(p_client_id in ac_acc_period.client_id%type, p_name in ac_acc_period.name%type, p_record in out ac_acc_period%rowtype, p_raise in char default 'N');
  procedure ac_acc_year_t(p_client_id in ac_acc_year.client_id%type, p_code in ac_acc_year.code%type, p_record in out ac_acc_year%rowtype, p_raise in char default 'N');
  procedure ac_cliaccschema_paramacct_t(p_client_id in ac_cliaccschema_paramacct.client_id%type, p_accschema_id in ac_cliaccschema_paramacct.accschema_id%type, p_accschemaparam_id in ac_cliaccschema_paramacct.accschemaparam_id%type, p_record in out ac_cliaccschema_paramacct%rowtype, p_raise in char default 'N');
  procedure ac_cliaccschema_paramval_t(p_client_id in ac_cliaccschema_paramval.client_id%type, p_accschema_id in ac_cliaccschema_paramval.accschema_id%type, p_accschemaparam_id in ac_cliaccschema_paramval.accschemaparam_id%type, p_record in out ac_cliaccschema_paramval%rowtype, p_raise in char default 'N');
  procedure ac_client_accschema_t(p_client_id in ac_client_accschema.client_id%type, p_accschema_id in ac_client_accschema.accschema_id%type, p_record in out ac_client_accschema%rowtype, p_raise in char default 'N');
  procedure bank_t(p_code in bank.code%type, p_record in out bank%rowtype, p_raise in char default 'N');
  procedure bank_agency_t(p_bank_code in bank_agency.bank_code%type, p_code in bank_agency.code%type, p_record in out bank_agency%rowtype, p_raise in char default 'N');
  procedure bp_account_t(p_client_id in bp_account.client_id%type, p_bpartner_id in bp_account.bpartner_id%type, p_accschema_id in bp_account.accschema_id%type, p_record in out bp_account%rowtype, p_raise in char default 'N');
  procedure bp_client_t(p_bpartner_id in bp_client.bpartner_id%type, p_client_id in bp_client.client_id%type, p_record in out bp_client%rowtype, p_raise in char default 'N');
  procedure city_t(p_country_code in city.country_code%type, p_region_code in city.region_code%type, p_code in city.code%type, p_record in out city%rowtype, p_raise in char default 'N');
  procedure client_t(p_code in client.code%type, p_record in out client%rowtype, p_raise in char default 'N');
  procedure communic_type_t(p_code in communic_type.code%type, p_record in out communic_type%rowtype, p_raise in char default 'N');
  procedure costing_method_t(p_code in costing_method.code%type, p_record in out costing_method%rowtype, p_raise in char default 'N');
  procedure cost_center_t(p_client_id in cost_center.client_id%type, p_code in cost_center.code%type, p_record in out cost_center%rowtype, p_raise in char default 'N');
  procedure country_t(p_code in country.code%type, p_record in out country%rowtype, p_raise in char default 'N');
  procedure currency_t(p_code in currency.code%type, p_record in out currency%rowtype, p_raise in char default 'N');
  procedure delivery_agent_t(p_code in delivery_agent.code%type, p_record in out delivery_agent%rowtype, p_raise in char default 'N');
  procedure document_serial_t(p_client_id in document_serial.client_id%type, p_document_type in document_serial.document_type%type, p_serial in document_serial.serial%type, p_record in out document_serial%rowtype, p_raise in char default 'N');
  procedure iinv_doc_type_t(p_code in iinv_doc_type.code%type, p_record in out iinv_doc_type%rowtype, p_raise in char default 'N');
  procedure impex_map_t(p_code in impex_map.code%type, p_record in out impex_map%rowtype, p_raise in char default 'N');
  procedure impex_map_item_t(p_impexmap_code in impex_map_item.impexmap_code%type, p_item_name in impex_map_item.item_name%type, p_record in out impex_map_item%rowtype, p_raise in char default 'N');
  procedure languages_t(p_code in languages.code%type, p_record in out languages%rowtype, p_raise in char default 'N');
  procedure menubar_t(p_code in menubar.code%type, p_record in out menubar%rowtype, p_raise in char default 'N');
  procedure menuitem_role_t(p_menuitem_id in menuitem_role.menuitem_id%type, p_role_name in menuitem_role.role_name%type, p_record in out menuitem_role%rowtype, p_raise in char default 'N');
  procedure menuitem_trl_t(p_menuitem_id in menuitem_trl.menuitem_id%type, p_lang in menuitem_trl.lang%type, p_record in out menuitem_trl%rowtype, p_raise in char default 'N');
  procedure mm_org_inv_t(p_org_id in mm_org_inv.org_id%type, p_code in mm_org_inv.code%type, p_record in out mm_org_inv%rowtype, p_raise in char default 'N');
  procedure mm_org_inv_type_t(p_code in mm_org_inv_type.code%type, p_record in out mm_org_inv_type%rowtype, p_raise in char default 'N');
  procedure mm_product_account_t(p_client_id in mm_product_account.client_id%type, p_accschema_id in mm_product_account.accschema_id%type, p_product_id in mm_product_account.product_id%type, p_record in out mm_product_account%rowtype, p_raise in char default 'N');
  procedure mm_product_client_t(p_product_id in mm_product_client.product_id%type, p_client_id in mm_product_client.client_id%type, p_record in out mm_product_client%rowtype, p_raise in char default 'N');
  procedure mm_stock_loc_type_t(p_code in mm_stock_loc_type.code%type, p_record in out mm_stock_loc_type%rowtype, p_raise in char default 'N');
  procedure org_type_t(p_code in org_type.code%type, p_record in out org_type%rowtype, p_raise in char default 'N');
  procedure project_cmp_type_t(p_project_id in project_cmp_type.project_id%type, p_code in project_cmp_type.code%type, p_record in out project_cmp_type%rowtype, p_raise in char default 'N');
  procedure project_issue_priority_t(p_code in project_issue_priority.code%type, p_record in out project_issue_priority%rowtype, p_raise in char default 'N');
  procedure project_issue_severity_t(p_code in project_issue_severity.code%type, p_record in out project_issue_severity%rowtype, p_raise in char default 'N');
  procedure project_issue_status_t(p_code in project_issue_status.code%type, p_record in out project_issue_status%rowtype, p_raise in char default 'N');
  procedure project_issue_type_t(p_code in project_issue_type.code%type, p_record in out project_issue_type%rowtype, p_raise in char default 'N');
  procedure project_status_t(p_code in project_status.code%type, p_record in out project_status%rowtype, p_raise in char default 'N');
  procedure project_type_t(p_code in project_type.code%type, p_record in out project_type%rowtype, p_raise in char default 'N');
  procedure region_t(p_country_code in region.country_code%type, p_code in region.code%type, p_record in out region%rowtype, p_raise in char default 'N');
  procedure rinv_doc_type_t(p_code in rinv_doc_type.code%type, p_record in out rinv_doc_type%rowtype, p_raise in char default 'N');
  procedure server_message_t(p_code in server_message.code%type, p_record in out server_message%rowtype, p_raise in char default 'N');
  procedure server_message_trl_t(p_srvmsg_code in server_message_trl.srvmsg_code%type, p_lang_code in server_message_trl.lang_code%type, p_record in out server_message_trl%rowtype, p_raise in char default 'N');
  procedure sys_param_t(p_code in sys_param.code%type, p_record in out sys_param%rowtype, p_raise in char default 'N');
  procedure sys_param_valid_value_t(p_param_code in sys_param_valid_value.param_code%type, p_value in sys_param_valid_value.value%type, p_record in out sys_param_valid_value%rowtype, p_raise in char default 'N');
  procedure sys_param_value_t(p_client_id in sys_param_value.client_id%type, p_param_code in sys_param_value.param_code%type, p_record in out sys_param_value%rowtype, p_raise in char default 'N');
  procedure sys_role_t(p_name in sys_role.name%type, p_record in out sys_role%rowtype, p_raise in char default 'N');
  procedure sys_user_docserrng_t(p_docserrng_id in sys_user_docserrng.docserrng_id%type, p_granted_to in sys_user_docserrng.granted_to%type, p_record in out sys_user_docserrng%rowtype, p_raise in char default 'N');
  procedure sys_user_role_t(p_user_id in sys_user_role.user_id%type, p_role_name in sys_user_role.role_name%type, p_record in out sys_user_role%rowtype, p_raise in char default 'N');
  procedure tr_parcel_t(p_code in tr_parcel.code%type, p_record in out tr_parcel%rowtype, p_raise in char default 'N');
  procedure tr_transport_status_t(p_code in tr_transport_status.code%type, p_record in out tr_transport_status%rowtype, p_raise in char default 'N');
  procedure tr_transport_type_t(p_code in tr_transport_type.code%type, p_record in out tr_transport_type%rowtype, p_raise in char default 'N');
  procedure tr_vehicle_type_t(p_code in tr_vehicle_type.code%type, p_record in out tr_vehicle_type%rowtype, p_raise in char default 'N');
  procedure ui_dc_t(p_code in ui_dc.code%type, p_record in out ui_dc%rowtype, p_raise in char default 'N');
  procedure ui_dc_field_t(p_uidc_code in ui_dc_field.uidc_code%type, p_field_name in ui_dc_field.field_name%type, p_record in out ui_dc_field%rowtype, p_raise in char default 'N');
  procedure ui_dc_field_initval_t(p_uidc_code in ui_dc_field_initval.uidc_code%type, p_field_name in ui_dc_field_initval.field_name%type, p_record in out ui_dc_field_initval%rowtype, p_raise in char default 'N');
  procedure ui_dc_role_permission_t(p_ui_dc in ui_dc_role_permission.ui_dc%type, p_role_name in ui_dc_role_permission.role_name%type, p_record in out ui_dc_role_permission%rowtype, p_raise in char default 'N');
  procedure ui_gui_t(p_code in ui_gui.code%type, p_record in out ui_gui%rowtype, p_raise in char default 'N');
  procedure ui_lov_t(p_code in ui_lov.code%type, p_record in out ui_lov%rowtype, p_raise in char default 'N');
  procedure uom_t(p_code in uom.code%type, p_record in out uom%rowtype, p_raise in char default 'N');
  procedure uom_conversion_t(p_uom_from in uom_conversion.uom_from%type, p_uom_to in uom_conversion.uom_to%type, p_record in out uom_conversion%rowtype, p_raise in char default 'N');
  procedure uom_type_t(p_code in uom_type.code%type, p_record in out uom_type%rowtype, p_raise in char default 'N');
end;
/
show errors package PDAO_FINDBY_UK; 



create or replace package body PDAO_FINDBY_UK as

procedure ac_accschema_t(p_name in ac_accschema.name%type, p_record in out ac_accschema%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from ac_accschema t where t.name = p_name;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'AC_ACCSCHEMA');
  end if;
  close c;
end;


procedure ac_accschema_acct_t(p_accschema_id in ac_accschema_acct.accschema_id%type, p_account in ac_accschema_acct.account%type, p_record in out ac_accschema_acct%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from ac_accschema_acct t where t.accschema_id = p_accschema_id and t.account = p_account;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'AC_ACCSCHEMA_ACCT');
  end if;
  close c;
end;


procedure ac_accschema_param_t(p_name in ac_accschema_param.name%type, p_record in out ac_accschema_param%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from ac_accschema_param t where t.name = p_name;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'AC_ACCSCHEMA_PARAM');
  end if;
  close c;
end;


procedure ac_acct_t(p_client_id in ac_acct.client_id%type, p_accschema_id in ac_acct.accschema_id%type, p_account in ac_acct.account%type, p_record in out ac_acct%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from ac_acct t where t.client_id = p_client_id and t.accschema_id = p_accschema_id and t.account = p_account;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'AC_ACCT');
  end if;
  close c;
end;


procedure ac_acct_t(p_client_id in ac_acct.client_id%type, p_accschema_id in ac_acct.accschema_id%type, p_id in ac_acct.id%type, p_record in out ac_acct%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from ac_acct t where t.client_id = p_client_id and t.accschema_id = p_accschema_id and t.id = p_id;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'AC_ACCT');
  end if;
  close c;
end;


procedure ac_acct_grp_t(p_accschema_id in ac_acct_grp.accschema_id%type, p_code in ac_acct_grp.code%type, p_record in out ac_acct_grp%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from ac_acct_grp t where t.accschema_id = p_accschema_id and t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'AC_ACCT_GRP');
  end if;
  close c;
end;


procedure ac_acc_journal_t(p_client_id in ac_acc_journal.client_id%type, p_accschema_id in ac_acc_journal.accschema_id%type, p_name in ac_acc_journal.name%type, p_record in out ac_acc_journal%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from ac_acc_journal t where t.client_id = p_client_id and t.accschema_id = p_accschema_id and t.name = p_name;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'AC_ACC_JOURNAL');
  end if;
  close c;
end;


procedure ac_acc_period_t(p_client_id in ac_acc_period.client_id%type, p_accyear_code in ac_acc_period.accyear_code%type, p_code in ac_acc_period.code%type, p_record in out ac_acc_period%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from ac_acc_period t where t.client_id = p_client_id and t.accyear_code = p_accyear_code and t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'AC_ACC_PERIOD');
  end if;
  close c;
end;


procedure ac_acc_period_t(p_client_id in ac_acc_period.client_id%type, p_name in ac_acc_period.name%type, p_record in out ac_acc_period%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from ac_acc_period t where t.client_id = p_client_id and t.name = p_name;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'AC_ACC_PERIOD');
  end if;
  close c;
end;


procedure ac_acc_year_t(p_client_id in ac_acc_year.client_id%type, p_code in ac_acc_year.code%type, p_record in out ac_acc_year%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from ac_acc_year t where t.client_id = p_client_id and t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'AC_ACC_YEAR');
  end if;
  close c;
end;


procedure ac_cliaccschema_paramacct_t(p_client_id in ac_cliaccschema_paramacct.client_id%type, p_accschema_id in ac_cliaccschema_paramacct.accschema_id%type, p_accschemaparam_id in ac_cliaccschema_paramacct.accschemaparam_id%type, p_record in out ac_cliaccschema_paramacct%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from ac_cliaccschema_paramacct t where t.client_id = p_client_id and t.accschema_id = p_accschema_id and t.accschemaparam_id = p_accschemaparam_id;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'AC_CLIACCSCHEMA_PARAMACCT');
  end if;
  close c;
end;


procedure ac_cliaccschema_paramval_t(p_client_id in ac_cliaccschema_paramval.client_id%type, p_accschema_id in ac_cliaccschema_paramval.accschema_id%type, p_accschemaparam_id in ac_cliaccschema_paramval.accschemaparam_id%type, p_record in out ac_cliaccschema_paramval%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from ac_cliaccschema_paramval t where t.client_id = p_client_id and t.accschema_id = p_accschema_id and t.accschemaparam_id = p_accschemaparam_id;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'AC_CLIACCSCHEMA_PARAMVAL');
  end if;
  close c;
end;


procedure ac_client_accschema_t(p_client_id in ac_client_accschema.client_id%type, p_accschema_id in ac_client_accschema.accschema_id%type, p_record in out ac_client_accschema%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from ac_client_accschema t where t.client_id = p_client_id and t.accschema_id = p_accschema_id;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'AC_CLIENT_ACCSCHEMA');
  end if;
  close c;
end;


procedure bank_t(p_code in bank.code%type, p_record in out bank%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from bank t where t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'BANK');
  end if;
  close c;
end;


procedure bank_agency_t(p_bank_code in bank_agency.bank_code%type, p_code in bank_agency.code%type, p_record in out bank_agency%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from bank_agency t where t.bank_code = p_bank_code and t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'BANK_AGENCY');
  end if;
  close c;
end;


procedure bp_account_t(p_client_id in bp_account.client_id%type, p_bpartner_id in bp_account.bpartner_id%type, p_accschema_id in bp_account.accschema_id%type, p_record in out bp_account%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from bp_account t where t.client_id = p_client_id and t.bpartner_id = p_bpartner_id and t.accschema_id = p_accschema_id;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'BP_ACCOUNT');
  end if;
  close c;
end;


procedure bp_client_t(p_bpartner_id in bp_client.bpartner_id%type, p_client_id in bp_client.client_id%type, p_record in out bp_client%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from bp_client t where t.bpartner_id = p_bpartner_id and t.client_id = p_client_id;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'BP_CLIENT');
  end if;
  close c;
end;


procedure city_t(p_country_code in city.country_code%type, p_region_code in city.region_code%type, p_code in city.code%type, p_record in out city%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from city t where t.country_code = p_country_code and t.region_code = p_region_code and t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'CITY');
  end if;
  close c;
end;


procedure client_t(p_code in client.code%type, p_record in out client%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from client t where t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'CLIENT');
  end if;
  close c;
end;


procedure communic_type_t(p_code in communic_type.code%type, p_record in out communic_type%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from communic_type t where t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'COMMUNIC_TYPE');
  end if;
  close c;
end;


procedure costing_method_t(p_code in costing_method.code%type, p_record in out costing_method%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from costing_method t where t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'COSTING_METHOD');
  end if;
  close c;
end;


procedure cost_center_t(p_client_id in cost_center.client_id%type, p_code in cost_center.code%type, p_record in out cost_center%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from cost_center t where t.client_id = p_client_id and t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'COST_CENTER');
  end if;
  close c;
end;


procedure country_t(p_code in country.code%type, p_record in out country%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from country t where t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'COUNTRY');
  end if;
  close c;
end;


procedure currency_t(p_code in currency.code%type, p_record in out currency%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from currency t where t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'CURRENCY');
  end if;
  close c;
end;


procedure delivery_agent_t(p_code in delivery_agent.code%type, p_record in out delivery_agent%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from delivery_agent t where t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'DELIVERY_AGENT');
  end if;
  close c;
end;


procedure document_serial_t(p_client_id in document_serial.client_id%type, p_document_type in document_serial.document_type%type, p_serial in document_serial.serial%type, p_record in out document_serial%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from document_serial t where t.client_id = p_client_id and t.document_type = p_document_type and t.serial = p_serial;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'DOCUMENT_SERIAL');
  end if;
  close c;
end;


procedure iinv_doc_type_t(p_code in iinv_doc_type.code%type, p_record in out iinv_doc_type%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from iinv_doc_type t where t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'IINV_DOC_TYPE');
  end if;
  close c;
end;


procedure impex_map_t(p_code in impex_map.code%type, p_record in out impex_map%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from impex_map t where t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'IMPEX_MAP');
  end if;
  close c;
end;


procedure impex_map_item_t(p_impexmap_code in impex_map_item.impexmap_code%type, p_item_name in impex_map_item.item_name%type, p_record in out impex_map_item%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from impex_map_item t where t.impexmap_code = p_impexmap_code and t.item_name = p_item_name;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'IMPEX_MAP_ITEM');
  end if;
  close c;
end;


procedure languages_t(p_code in languages.code%type, p_record in out languages%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from languages t where t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'LANGUAGES');
  end if;
  close c;
end;


procedure menubar_t(p_code in menubar.code%type, p_record in out menubar%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from menubar t where t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'MENUBAR');
  end if;
  close c;
end;


procedure menuitem_role_t(p_menuitem_id in menuitem_role.menuitem_id%type, p_role_name in menuitem_role.role_name%type, p_record in out menuitem_role%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from menuitem_role t where t.menuitem_id = p_menuitem_id and t.role_name = p_role_name;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'MENUITEM_ROLE');
  end if;
  close c;
end;


procedure menuitem_trl_t(p_menuitem_id in menuitem_trl.menuitem_id%type, p_lang in menuitem_trl.lang%type, p_record in out menuitem_trl%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from menuitem_trl t where t.menuitem_id = p_menuitem_id and t.lang = p_lang;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'MENUITEM_TRL');
  end if;
  close c;
end;


procedure mm_org_inv_t(p_org_id in mm_org_inv.org_id%type, p_code in mm_org_inv.code%type, p_record in out mm_org_inv%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from mm_org_inv t where t.org_id = p_org_id and t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'MM_ORG_INV');
  end if;
  close c;
end;


procedure mm_org_inv_type_t(p_code in mm_org_inv_type.code%type, p_record in out mm_org_inv_type%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from mm_org_inv_type t where t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'MM_ORG_INV_TYPE');
  end if;
  close c;
end;


procedure mm_product_account_t(p_client_id in mm_product_account.client_id%type, p_accschema_id in mm_product_account.accschema_id%type, p_product_id in mm_product_account.product_id%type, p_record in out mm_product_account%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from mm_product_account t where t.client_id = p_client_id and t.accschema_id = p_accschema_id and t.product_id = p_product_id;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'MM_PRODUCT_ACCOUNT');
  end if;
  close c;
end;


procedure mm_product_client_t(p_product_id in mm_product_client.product_id%type, p_client_id in mm_product_client.client_id%type, p_record in out mm_product_client%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from mm_product_client t where t.product_id = p_product_id and t.client_id = p_client_id;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'MM_PRODUCT_CLIENT');
  end if;
  close c;
end;


procedure mm_stock_loc_type_t(p_code in mm_stock_loc_type.code%type, p_record in out mm_stock_loc_type%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from mm_stock_loc_type t where t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'MM_STOCK_LOC_TYPE');
  end if;
  close c;
end;


procedure org_type_t(p_code in org_type.code%type, p_record in out org_type%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from org_type t where t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'ORG_TYPE');
  end if;
  close c;
end;


procedure project_cmp_type_t(p_project_id in project_cmp_type.project_id%type, p_code in project_cmp_type.code%type, p_record in out project_cmp_type%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from project_cmp_type t where t.project_id = p_project_id and t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'PROJECT_CMP_TYPE');
  end if;
  close c;
end;


procedure project_issue_priority_t(p_code in project_issue_priority.code%type, p_record in out project_issue_priority%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from project_issue_priority t where t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'PROJECT_ISSUE_PRIORITY');
  end if;
  close c;
end;


procedure project_issue_severity_t(p_code in project_issue_severity.code%type, p_record in out project_issue_severity%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from project_issue_severity t where t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'PROJECT_ISSUE_SEVERITY');
  end if;
  close c;
end;


procedure project_issue_status_t(p_code in project_issue_status.code%type, p_record in out project_issue_status%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from project_issue_status t where t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'PROJECT_ISSUE_STATUS');
  end if;
  close c;
end;


procedure project_issue_type_t(p_code in project_issue_type.code%type, p_record in out project_issue_type%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from project_issue_type t where t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'PROJECT_ISSUE_TYPE');
  end if;
  close c;
end;


procedure project_status_t(p_code in project_status.code%type, p_record in out project_status%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from project_status t where t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'PROJECT_STATUS');
  end if;
  close c;
end;


procedure project_type_t(p_code in project_type.code%type, p_record in out project_type%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from project_type t where t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'PROJECT_TYPE');
  end if;
  close c;
end;


procedure region_t(p_country_code in region.country_code%type, p_code in region.code%type, p_record in out region%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from region t where t.country_code = p_country_code and t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'REGION');
  end if;
  close c;
end;


procedure rinv_doc_type_t(p_code in rinv_doc_type.code%type, p_record in out rinv_doc_type%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from rinv_doc_type t where t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'RINV_DOC_TYPE');
  end if;
  close c;
end;


procedure server_message_t(p_code in server_message.code%type, p_record in out server_message%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from server_message t where t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'SERVER_MESSAGE');
  end if;
  close c;
end;


procedure server_message_trl_t(p_srvmsg_code in server_message_trl.srvmsg_code%type, p_lang_code in server_message_trl.lang_code%type, p_record in out server_message_trl%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from server_message_trl t where t.srvmsg_code = p_srvmsg_code and t.lang_code = p_lang_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'SERVER_MESSAGE_TRL');
  end if;
  close c;
end;


procedure sys_param_t(p_code in sys_param.code%type, p_record in out sys_param%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from sys_param t where t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'SYS_PARAM');
  end if;
  close c;
end;


procedure sys_param_valid_value_t(p_param_code in sys_param_valid_value.param_code%type, p_value in sys_param_valid_value.value%type, p_record in out sys_param_valid_value%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from sys_param_valid_value t where t.param_code = p_param_code and t.value = p_value;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'SYS_PARAM_VALID_VALUE');
  end if;
  close c;
end;


procedure sys_param_value_t(p_client_id in sys_param_value.client_id%type, p_param_code in sys_param_value.param_code%type, p_record in out sys_param_value%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from sys_param_value t where t.client_id = p_client_id and t.param_code = p_param_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'SYS_PARAM_VALUE');
  end if;
  close c;
end;


procedure sys_role_t(p_name in sys_role.name%type, p_record in out sys_role%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from sys_role t where t.name = p_name;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'SYS_ROLE');
  end if;
  close c;
end;


procedure sys_user_docserrng_t(p_docserrng_id in sys_user_docserrng.docserrng_id%type, p_granted_to in sys_user_docserrng.granted_to%type, p_record in out sys_user_docserrng%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from sys_user_docserrng t where t.docserrng_id = p_docserrng_id and t.granted_to = p_granted_to;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'SYS_USER_DOCSERRNG');
  end if;
  close c;
end;


procedure sys_user_role_t(p_user_id in sys_user_role.user_id%type, p_role_name in sys_user_role.role_name%type, p_record in out sys_user_role%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from sys_user_role t where t.user_id = p_user_id and t.role_name = p_role_name;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'SYS_USER_ROLE');
  end if;
  close c;
end;


procedure tr_parcel_t(p_code in tr_parcel.code%type, p_record in out tr_parcel%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from tr_parcel t where t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'TR_PARCEL');
  end if;
  close c;
end;


procedure tr_transport_status_t(p_code in tr_transport_status.code%type, p_record in out tr_transport_status%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from tr_transport_status t where t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'TR_TRANSPORT_STATUS');
  end if;
  close c;
end;


procedure tr_transport_type_t(p_code in tr_transport_type.code%type, p_record in out tr_transport_type%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from tr_transport_type t where t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'TR_TRANSPORT_TYPE');
  end if;
  close c;
end;


procedure tr_vehicle_type_t(p_code in tr_vehicle_type.code%type, p_record in out tr_vehicle_type%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from tr_vehicle_type t where t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'TR_VEHICLE_TYPE');
  end if;
  close c;
end;


procedure ui_dc_t(p_code in ui_dc.code%type, p_record in out ui_dc%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from ui_dc t where t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'UI_DC');
  end if;
  close c;
end;


procedure ui_dc_field_t(p_uidc_code in ui_dc_field.uidc_code%type, p_field_name in ui_dc_field.field_name%type, p_record in out ui_dc_field%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from ui_dc_field t where t.uidc_code = p_uidc_code and t.field_name = p_field_name;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'UI_DC_FIELD');
  end if;
  close c;
end;


procedure ui_dc_field_initval_t(p_uidc_code in ui_dc_field_initval.uidc_code%type, p_field_name in ui_dc_field_initval.field_name%type, p_record in out ui_dc_field_initval%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from ui_dc_field_initval t where t.uidc_code = p_uidc_code and t.field_name = p_field_name;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'UI_DC_FIELD_INITVAL');
  end if;
  close c;
end;


procedure ui_dc_role_permission_t(p_ui_dc in ui_dc_role_permission.ui_dc%type, p_role_name in ui_dc_role_permission.role_name%type, p_record in out ui_dc_role_permission%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from ui_dc_role_permission t where t.ui_dc = p_ui_dc and t.role_name = p_role_name;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'UI_DC_ROLE_PERMISSION');
  end if;
  close c;
end;


procedure ui_gui_t(p_code in ui_gui.code%type, p_record in out ui_gui%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from ui_gui t where t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'UI_GUI');
  end if;
  close c;
end;


procedure ui_lov_t(p_code in ui_lov.code%type, p_record in out ui_lov%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from ui_lov t where t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'UI_LOV');
  end if;
  close c;
end;


procedure uom_t(p_code in uom.code%type, p_record in out uom%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from uom t where t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'UOM');
  end if;
  close c;
end;


procedure uom_conversion_t(p_uom_from in uom_conversion.uom_from%type, p_uom_to in uom_conversion.uom_to%type, p_record in out uom_conversion%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from uom_conversion t where t.uom_from = p_uom_from and t.uom_to = p_uom_to;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'UOM_CONVERSION');
  end if;
  close c;
end;


procedure uom_type_t(p_code in uom_type.code%type, p_record in out uom_type%rowtype, p_raise in char default 'N') is
  cursor c is
    select t.* from uom_type t where t.code = p_code;
begin
  open c;
  fetch c into p_record;
  if c%notfound and p_raise = 'Y' then
    raise_error('DaoRecordByUkNotFound' , 'UOM_TYPE');
  end if;
  close c;
end;


end;
/
show errors package body PDAO_FINDBY_UK; 

