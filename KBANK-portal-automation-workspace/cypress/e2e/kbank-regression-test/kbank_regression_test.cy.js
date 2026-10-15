// TODO: All Manual cases should update from manual to Hybrid or Automated

require("./1_login-logout/kbank_login_logout_test.js");

require("./2_administrator/kbank_administrator_test.js");

//#region All Company - Tab
// TODO: There are 6 manual cases: M06-06 - M06-09, M06-14, M06-20
require("./3_all-company-mpos/kbank_all_company_test.js");
require("./3_all-company-mpos/kbank_add_company_test.js");
require("./3_all-company-mpos/kbank_merchant_group_MID_test.js");

require("./4_all-company-kshop/kbank_kshop_company_test.js");

//#endregion

//#region Control Limit - Tab
require("./5_control-limit-edc/kbank_control_limit_test.js");
require("./5_control-limit-edc/kbank_control_limit_merchant_group_MID_test.js");
require("./5_control-limit-edc/kbank_control_limit_add_company_test.js");

// TODO: There is 1 manual case: M13-05
require("./5_control-limit-edc/kbank_control_limit_merchant_summary_test.js");
require("./5_control-limit-edc/kbank_control_limit_register_new_merchant_test.js");

// TODO: There are 3 manual cases: M15-03 - M15-05
require("./5_control-limit-edc/kbank_control_limit_import_a_company_test.js");

//#endregion

//#region Manage Staff - Tab

// TODO: There are 3 manual cases: M16-09 - M16-11
require("./6_manage-staff/kbank_staff_summary_test.js");
require("./6_manage-staff/kbank_add_a_staff_test.js");

// TODO: There are 1 manual case: M18-11
require("./6_manage-staff/kbank_kshop_staff_summary_test.js");

// TODO: There are 1 manual case: M19-09
require("./6_manage-staff/kbank_terminal_summary_test.js");
require("./6_manage-staff/kbank_register_a_set_of_terminals_test.js");

//#endregion

//#region Manage Company User - Tab

// TODO: There are 1 manual case: M21-16
require("./7_manage-company-user/kbank_manage_company_user_test.js");
require("./7_manage-company-user/kbank_add_a_company_user_test.js");
require("./7_manage-company-user/kbank_kshop_company_user_summary_test.js");

//#endregion

//#region Manage Reader - Tab

// TODO: There are 2 manual cases: M24-14, M24-16
require("./8_manage-reader/kbank_reader_summary_test.js");
require("./8_manage-reader/kbank_register_new_reader_test.js");
require("./8_manage-reader/kbank_kshop_reader_summary_test.js");
require("./8_manage-reader/kbank_kshop_register_new_readers_test.js");

//#endregion

//#region Transaction Summary - Tab

// TODO: There is 1 manual case: M30-14
require("./9_manage-transaction/kbank_transaction_summary_test.js");
require("./9_manage-transaction/kbank_edc_transaction_summary_test.js");
require("./9_manage-transaction/kbank_kshop_transaction_summary_test.js");
require("./9_manage-transaction/kbank_edc_unsuccess_transaction_test.js");
require("./9_manage-transaction/kbank_unsuccess_transaction_test.js");

//#endregion

//#region Credit Settlement - Tab

require("./10_credit-settlement/kbank_credit_settlement_summary_test.js");
require("./10_credit-settlement/kbank_schedule_force_settlement_test.js");
require("./10_credit-settlement/kbank_kshop_credit_settlement_summary_test.js");
require("./10_credit-settlement/kbank_kshop_schedule_force_settlement_test.js");

//#endregion

//#region Others

require("./11_export-download-csv/kbank_export_download_csv_test.js");
require("./12_resent-receipt/kbank-resend-receipt.js");

//TODO: There is 4 manual cases: M39-04 - M39-07
require("./13_multi-merchant/kbank_multi_merchant_test.js");

//#endregion
