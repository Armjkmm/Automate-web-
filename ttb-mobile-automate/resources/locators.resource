*** Variables ***
# --- Button Locators ---
${INPUT_USERNAME}          xpath=//android.widget.EditText
${BTN_LOGIN}               accessibility_id=เข้าสู่ระบบ

# --- Title Locators ---
${TITLE_WELCOME}               ยินดีต้อนรับ
${TITLE_PIN}                   กรอกรหัสผ่าน
${TITLE_SELECT_MERCHANT}       เลือกร้านค้า
${TITLE_DASHBOARD}             ยอดขายวันนี้รวม (บาท)

# --- PIN Pad Locators ---
${PIN_1}    xpath=//android.widget.TextView[@text="1"]
${PIN_2}    xpath=//android.widget.TextView[@text="2"]
${PIN_3}    xpath=//android.widget.TextView[@text="3"]
${PIN_4}    xpath=//android.widget.TextView[@text="4"]

${PIN_5}    xpath=//android.widget.TextView[@text="5"]
${PIN_6}    xpath=//android.widget.TextView[@text="6"]
${PIN_7}    xpath=//android.widget.TextView[@text="7"]
${PIN_8}    xpath=//android.widget.TextView[@text="8"]
${PIN_9}    xpath=//android.widget.TextView[@text="9"]
${PIN_0}    xpath=//android.widget.TextView[@text="0"]

# --- Menu Locators ---
${MENU_HOME}        xpath=//android.view.ViewGroup[2]
${MENU_SALE}        xpath=//android.view.ViewGroup[3]
${MENU_PRODUCT}     xpath=//android.view.ViewGroup[4]
${MENU_REPORT}      xpath=//android.view.ViewGroup[5]
${MENU_SETTING}     xpath=//android.view.ViewGroup[6]

# --- Menu Setting Locators ---
${SETTING_MERCHANT}            accessibility_id=ข้อมูลร้านค้า
${SETTING_STAFF}               accessibility_id=จัดการบัญชีพนักงาน
${SETTING_QR_STANDEE}          accessibility_id=ขอป้าย QR
${SETTING_INVITE}              accessibility_id=คำเชิญเข้าร้านค้า
${SETTING_CREATE_MERCHANT}     accessibility_id=เพิ่มร้านค้า
${SETTING_VOID}                accessibility_id=ตั้งค่าผู้ทำรายการและผู้อนุมัติ\nการยกเลิกรายการชำระเงิน (Void)
${SETTING_SETTLEMENT_TYPE}     accessibility_id=การจัดการเข้าเงินในบัญชี
${SETTING_PERMISSION_STAFF}    accessibility_id=การจัดการสิทธิ์การเข้าถึงข้อมูลรายการขาย
${SETTING_USER}                accessibility_id=ข้อมูลผู้ใช้งาน
${SETTING_SECURITY}            accessibility_id=ความปลอดภัย
${SETTING_VOICE}               accessibility_id=การแจ้งเตือนเงินเข้าด้วยระบบเสียง
${SETTING_TERM_CON}            accessibility_id=ข้อกำหนดและเงื่อนไข
${SETTING_CONTACT}             accessibility_id=ติดต่อเรา
${SETTING_LOGOUT}              accessibility_id=ออกจากระบบ