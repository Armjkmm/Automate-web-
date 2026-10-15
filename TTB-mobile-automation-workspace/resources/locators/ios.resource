*** Variables ***

#Flow login
${Login_Enter_USERNAME}    xpath=//XCUIElementTypeTextField
# ${Login_SUBMIT_USERNAME}    chain=**/XCUIElementTypeOther[`name == \"เข้าสู่ระบบ\"`][2]
${Login_SUBMIT_USERNAME}    chain=**/XCUIElementTypeOther[`name == \"เข้าสู่ระบบ\"`]

#ตัวแปรนี้เก็บค่าชื่อร้านค้า
${MERCHANT_NAME}  accessibility_id=ซีเอ็มยู56

#Element navbar
${NAVBAR_HOME}    xpath=//XCUIElementTypeOther[@index='1']/XCUIElementTypeOther[@index='1']
${NAVBAR_QRCODE}    xpath=//XCUIElementTypeOther[@index='1']/XCUIElementTypeOther[@index='2']
${NAVBAR_CATEGORA_PRODUCT}    xpath=//XCUIElementTypeOther[@index='1']/XCUIElementTypeOther[@index='3']
${NAVBAR_REPORT}    xpath=//XCUIElementTypeOther[@index='1']/XCUIElementTypeOther[@index='4']
${NAVBAR_SETTING}    xpath=//XCUIElementTypeOther[@index='1']/XCUIElementTypeOther[@index='5']

#Verify result element page
${RESULT_ELEMENT_ENTER_USERNAME_INVALID}    chain=**/XCUIElementTypeStaticText[`name == "ชื่อบัญชีผู้ใช้งานไม่ถูกต้อง"`] 
${RESULT_ELEMENT_ENTER_PIN_PAGE}    chain=**/XCUIElementTypeStaticText[`name == "เข้าสู่ระบบ"`]
${RESULT_ELEMENT_PASSWORID_INVALID}    chain=**/XCUIElementTypeStaticText[`name == "รหัสผ่านไม่ถูกต้อง"`][2]
${RESULT_ELEMENT_SELECT_MERCHANT_PAGE}    xpath=//XCUIElementTypeStaticText[@name="เลือกร้านค้า"]
${RESULT_ELEMENT_TODAY_TOTAL_PAGE}    xpath=//XCUIElementTypeStaticText[@name="ยอดขายวันนี้รวม (บาท)"]
${RESULT_ELEMENT_SELECT_PRODUCT_PAGE}   chain=**/XCUIElementTypeOther[`name == "เลือกสินค้า"`][2]
${RESULT_ELEMENT_REPORT_PAGE}   chain=**/XCUIElementTypeOther[`name == "รายการขาย"`][3]
${RESULT_ELEMENT_CATEGORA_PRODUCT_PAGE}   chain=**/XCUIElementTypeStaticText[`name == "จัดการคลังสินค้า"`]
${RESULT_ELEMENT_TRANSACTION_HISTORY_PAGE}    chain=**/XCUIElementTypeStaticText[`name == "ประวัติรายการ"`]
${RESULT_ELEMENT_VIEW_SALE_REPORT_PAGE}    chain=**/XCUIElementTypeOther[`name == "ดูรายงานการขาย"`]
${RESULT_ELEMENT_DOWNLOAD_REPORT_PAGE}    chain=**/XCUIElementTypeStaticText[`name == "ขอรายงานการขาย"`]
${RESULT_ELEMENT_SEND_REPOR_SUCCESS_PAGE}    chain=**/XCUIElementTypeOther[`name == "ขอรายงานการขาย"`][2]
${RESULT_ELEMENT_USER_MANAGEMENT_PAGE}    chain=**/XCUIElementTypeStaticText[`name == "จัดการบัญชีผู้ใช้งาน"`]
${RESULT_ELEMENT_SETTING_PAGE}    chain=**/XCUIElementTypeOther[`name == "ข้อมูลร้านค้า"`][2]
${RESULT_ELEMENT_LOGOUT_IN_SELECT_MERCHANT_PAGE}    chain=**/XCUIElementTypeStaticText[`name == "คุณต้องการออกจากระบบหรือไม่?"`]
${RESULT_ELEMENT_CREATE_MERCHANT_PAGE}    chain=**/XCUIElementTypeStaticText[`name == "ลงทะเบียนร้านค้าของคุณ"`]
${RESULT_ELEMENT_COMFIRM_OTP_PAGE}    chain=**/XCUIElementTypeStaticText[`name == "ใส่รหัสยืนยัน OTP"`]
${RESULT_ELEMENT_CREATE_USERNAME}    chain=**/XCUIElementTypeStaticText[`name == "ข้อมูลผู้ใช้งาน"`]
${RESULT_ELEMENT_SET_PASSWORD_PAGE}    chain=**/XCUIElementTypeStaticText[`name == "ตั้งค่ารหัสผ่านเข้าใช้งาน"`]
${RESULT_ELEMENT_COMFIRM_PASSWORD_PAGE}    chain=**/XCUIElementTypeStaticText[`name == "ยืนยันรหัสผ่านเข้าใช้งาน"`]
${RESULT_ELEMENT_CREATE_DATA_MERCHNAT}    chain=**/XCUIElementTypeStaticText[`name == "สร้างข้อมูลร้านค้า"`]
${RESULT_ELEMENT_INFOMATION_MERCHNAT_PAGE}    chain=**/XCUIElementTypeStaticText[`name == "ข้อมูลร้านค้า"`]
${RESULT_ELEMENT_PAYMENT_SUCCESSFULLY}    chain=**/XCUIElementTypeStaticText[`name == "ทำรายการสำเร็จ"`]
${RESULT_ELEMENT_QR_PROMPTPAY_PAGE}    chain=**/XCUIElementTypeStaticText[`name == "หากไม่ได้รับการแจ้งเตือนเมื่อลูกค้าชำระเงินสำเร็จ"`]


#Verify result popup element page
${RESULT_ELEMENT_POPUP_CHANGE_MERCHANT}    chain=**/XCUIElementTypeStaticText[`name == "คุณต้องการเปลี่ยนร้านค้าเพื่อเข้าใช้งานหรือไม่ ?"`]
${RESULT_ELEMENT_POPUP_CHANGE_USERNAME}    chain=**/XCUIElementTypeStaticText[`name == "คุณต้องการเปลี่ยนบัญชีผู้ใช้หรือไม่"`]
${RESULT_ELEMENT_POPUP_INVALID_OTP}    chain=**/XCUIElementTypeStaticText[`name == "รหัส OTP ไม่ถูกต้อง"`]
${RESULT_POPUP_USERNAME_DUPLIICATE_DATA}    chain=**/XCUIElementTypeStaticText[`name == "ชื่อบัญชีผู้ใช้งานซ้ำอยู่ในระบบ\\กรุณาระบุใหม่อีกครั้ง"`]
${RESULT_POPUP_COMFIRM_BIOMETRICS}    chain=**/XCUIElementTypeStaticText[`name == "รวดเร็ว ง่ายกว่า และปลอดภัยมากยิ่งขึ้น"`]



#Elememt menu
${MENU_TRANSACTION_HISTORY}  accessibility_id=ประวัติรายการขาย
${MENU_VIEW_SALE_REPORT}  accessibility_id=ดูรายงานการขาย
${MENU_DOWNLOAD_REPORT}    accessibility_id=ขอรายงานการขาย
${MENU_REQUEST_QR}     chain=**/XCUIElementTypeOther[`name == "ขอป้าย QR"`][2]
${MENU_USER_MANAGEMENT}    chain=**/XCUIElementTypeOther[`name == "จัดการบัญชีพนักงาน"`][2]
${MENU_VIEW_SHOP_PROFILE}    chain=**/XCUIElementTypeOther[`name == "ข้อมูลร้านค้า"`][2]
${MENU_JOIN_MERCHNAT}    chain=**/XCUIElementTypeOther[`name == "คำเชิญเข้าร้านค้า"`][2]


#BTN Back [<] จากหน้าไหน
${BTN_BACK_TO_TRANSACTION_HISTORY_PAGE}    chain=**/XCUIElementTypeOther[`name == "ประวัติรายการ"`][2]/XCUIElementTypeOther[1]/XCUIElementTypeOther
${BTN_BACK_TO_VIEW_SALE_REPORT_PAGE}    chain=**/XCUIElementTypeOther[`name == "ดูรายงานการขาย"`][1]/XCUIElementTypeOther[1]/XCUIElementTypeOther
${BTN_BACK_TO_DOWNLOAD_REPORT_PAGE}    chain=**/XCUIElementTypeOther[`name == "ขอรายงานการขาย"`][1]/XCUIElementTypeOther[1]/XCUIElementTypeOther
${BTN_BACK_TO_USER_MANAGEMENT_PAGE}    chain=**/XCUIElementTypeOther[`name == "จัดการบัญชีผู้ใช้งาน"`][2]/XCUIElementTypeOther[1]
${BTN_BACK_TO_REQUEST_QR_PAGE}    chain=**/XCUIElementTypeOther[`name == "ขอป้าย QR"`][1]/XCUIElementTypeOther[1]/XCUIElementTypeOther
${BTN_CHANGS_MERCHANT}    xpath=(//XCUIElementTypeOther[@name="ซีเอ็มยู56"])[3]/XCUIElementTypeOther[1]/XCUIElementTypeOther
${BTN_BACK_TO_ENTER_PIN_PAGE}    chain=**/XCUIElementTypeOther[`name == "เข้าสู่ระบบ"`][1]/XCUIElementTypeOther[1]/XCUIElementTypeOther
${BTN_BACK_TO_CREATE_MERCHANT_PAGE}    chain=**/XCUIElementTypeOther[`name == "ลงทะเบียนร้านค้าของคุณ"`][1]/XCUIElementTypeOther[1]/XCUIElementTypeOther
${BTN_BACK_TO_T&C_PAGE}    chain=**/XCUIElementTypeOther[`name == "ข้อกำหนดและเงื่อนไข"`][1]/XCUIElementTypeOther[1]
${BTN_BACK_TO_SELECT_PAYMENT_CHANELS}    chain=**/XCUIElementTypeOther[`name == "เลือกช่องทางการรับเงิน"`][1]/XCUIElementTypeOther[1]/XCUIElementTypeOther
${BTN_BACK_TO_QR_PROMPTPAY_PAGE}     xpath=(//XCUIElementTypeOther[@name="QR พร้อมเพย์\n(QR Promptpay)"])[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther


#BTN
${BTN_SENT_REPOT}    chain=**/XCUIElementTypeOther[`name == "ส่งรายงาน"`][2]
${BTN_REQUEST_QR}    chain=**/XCUIElementTypeOther[`name == "ขอป้าย QR"`][4]
${BTN_OK}    accessibility_id=ตกลง
${BTN_LOGOUT_IN_SELECT_MERCHANT_PAGE}    chain=**/XCUIElementTypeOther[`name == "เลือกร้านค้า 2 เลือกร้านค้าที่ต้องการเข้าใช้งาน ศุนย์การค้าแปซิฟิคพาร์คศรีราชา Play 15 Cupcake and Daino สำนักงานใหญ่ สำหรับเทสของอีบีพีพี ซีเอ็มยู36 EBPP TESTING COMPANY, CO LTD Play83 ttb33G(ซีเอ็มยู53) ซีเอ็มยู52 BAPROMPTBIZ BUYER-3 BAPROMPTBIZ SELLER-11 play 47 III_Fee CMU SIA52 0703858_ITQAHP +สร้างร้านค้า Horizontal scroll bar, 1 page"`][2]/XCUIElementTypeOther[3]
${BTN_OK_01}    accessibility_id=ตกลง
${BTN_JOIN_MERCHANT_IN_SELECT_MERCHANT}    xpath=(//XCUIElementTypeOther[@name="2"])[2]
${BTN_CANCEL}    accessibility_id=ยกเลิก
${BTN_CREATE_MERCHANT}    accessibility_id=ลงทะเบียนร้านค้า
${BTN_NEXT}    chain=**/XCUIElementTypeOther[`name == "ถัดไป"`][2]
${BTN_CID}    accessibility_id=เลขบัตรประจำตัวประชาชน
${BTN_DONE}    accessibility_id=Done
${BTN_T&C}    accessibility_id=ข้อตกลงและเงื่อนไข
${BTN_SEND_OTP_again}    chain=**/XCUIElementTypeOther[`name == "ส่ง OTP อีกครั้ง"`][3]
${BTN_OPEN_BIOMETRICS_AFTER}    chain=**/XCUIElementTypeOther[`name == "ภายหลัง"`][1]
${BTN_JOIN_MERCHANT_SELECT_MERCHANT_PAGE}    chain=**/XCUIElementTypeOther[`name == "2"`][1]
${BTN_SHOPPING_CART}    chain=**/XCUIElementTypeOther[`name == "2"`][3]
${BTN_DISCOUNT_BILL}    chain=**/XCUIElementTypeOther[`name == "ส่วนลดท้ายบิล"`]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther
${BTN_INPUT_REF1}    chain=**/XCUIElementTypeOther[`name == "หมายเลขอ้างอิง"`]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther
${BTN_CANCEL_ORDER}    accessibility_id=ยกเลิกรายการ
${BTN_SPECIFY_THE_AMOUNT}    chain=**/XCUIElementTypeOther[`name == "ระบุจำนวน"`][2]
${BTN_CASH}    chain=**/XCUIElementTypeOther[`name == "เงินสด (Cash)"`][3]
${BTN_GET_CASH}    chain=**/XCUIElementTypeOther[`name == "รับเงินสด"`][2]
${BTN_QR_PROMPTPAY}    chain=**/XCUIElementTypeOther[`name == "QR พร้อมเพย์ (QR Promptpay)"`][1]
${BTN_VERIFY_TANSACTION}    accessibility_id=ตรวจสอบรายการ
${BTN_SAVE_QR_DYNAMIC}    accessibility_id=บันทึก QR 
${BTN_DELETE_FROM_CART}    chain=**/XCUIElementTypeOther[`name == "แบดแมน   -   1   +   3.00 Kaii   -   1   +   2.00"`]/XCUIElementTypeOther[6]
#Clear textbox
${CLEAR_TEXT_USERNAME}    chain=**/XCUIElementTypeOther[`name == "ชื่อบัญชีผู้ใช้งาน (Username)"`][2]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeTextField
${CLEAR_TEXT_CID}    chain=**/XCUIElementTypeOther[`name == "เลขบัตรประจำตัวประชาชน เลขบัตรประจำตัวประชาชนไม่ถูกต้อง"`][2]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeTextField
${CLEAR_TEXT_ACCOUNT}    chain=**/XCUIElementTypeOther[`name == "เลขบัญชีธนาคาร ttb เลขที่บัญชีธนาคารไม่ถูกต้อง"`][2]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeTextField
${CLEAR_CREATEUSERNAME}    chain=**/XCUIElementTypeOther[`name == "ตั้งค่าชื่อบัญชีผู้ใช้งาน (Username)"`][2]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeTextField

#Text Box
${INPUT_USERNAME}    xpath=//XCUIElementTypeTextField
${INPUT_TEXT_BOX_CID}    chain=**/XCUIElementTypeOther[`name == "เลขบัตรประจำตัวประชาชน กรุณาระบุเลขบัตรประจำตัวประชาชน"`][2]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeTextField
${INPUT_TEXT_BOX_ACCOUNT}    chain=**/XCUIElementTypeOther[`name == "เลขบัญชีธนาคาร ttb กรุณาระบุเลขที่บัญชีธนาคาร ttb"`][2]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeTextField
${INPUT_TEXT_BOX_REF1}    chain=**/XCUIElementTypeOther[`name == "หมายเลขอ้างอิง (เช่น รหัสสินค้า, รหัสลูกค้า)"`][2]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeTextField



#text
${TEXT_CID}    accessibility_id=เลขบัตรประจำตัวประชาชน
${TEXT_ACCOUNT}    chain=**/XCUIElementTypeStaticText[`name == "เลขบัญชีธนาคาร ttb"`]
${TEXT_USERNAME}    chain=**/XCUIElementTypeOther[`name == "ตั้งค่าชื่อบัญชีผู้ใช้งาน (Username) ตัวอักษรภาษาอังกฤษหรือตัวเลขเท่านั้น"`][2]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeTextField
${TEXT_FULL_NAME}    chain=**/XCUIElementTypeOther[`name == "ชื่อ-นามสกุล กรุณาระบุชื่อ-นามสกุล"`][2]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeTextField
${TEXT_EMAIL}    chain=**/XCUIElementTypeOther[`name == "อีเมล กรุณาระบุอีเมล"`][2]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeTextField
${TEXT_NAME_MERCHANT}    chain=**/XCUIElementTypeOther[`name == "ชื่อร้านค้า กรุณาระบุชื่อร้านค้า"`][2]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeTextField
${TEXT_ZIP_CODE}    chain=**/XCUIElementTypeOther[`name == "รหัสไปรษณีย์ โปรดระบุรหัสไปรษณีย์"`][2]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeTextField 
${TEXT_ADDRESS_MERCHANT}    chain=**/XCUIElementTypeOther[`name == "ที่อยู่ร้านค้า เลขที่ อาคาร ชั้น ซอย แขวง โปรดระบุที่อยู่ร้านค้า"`][2]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeTextField
${TEXT_DISCOUNT_BILL}    chain=**/XCUIElementTypeOther[`name == "ส่วนลดท้ายบิล"`][3]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeTextField
${TEXT_INPUT_REF1}    chain=**/XCUIElementTypeOther[`name == "หมายเลขอ้างอิง (เช่น รหัสคำสั่งชื้อ, รหัสลูกค้า)"`][3]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeTextField
${TEXT_ENTER_AMOUNT}    chain=**/XCUIElementTypeOther[`name == "จำนวนเงิน (บาท) โปรดใส่ราคาสินค้า"`][2]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeTextField
${TEXT_REF1}    chain=**/XCUIElementTypeOther[`name == "หมายเลขอ้างอิง (เช่น รหัสสินค้า, รหัสลูกค้า)"`][2]
${TEXT_GET_AMOUNT}    chain=**/XCUIElementTypeOther[`name == "จำนวนเงินที่ได้รับ (บาท)"`][1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeTextField



#Check box
${CHECK_BOX_T&C}    chain=**/XCUIElementTypeOther[`name == "ฉันได้อ่านและยอมรับ ข้อตกลงและเงื่อนไข"`][1]/XCUIElementTypeOther[1]/XCUIElementTypeOther

#แผ้นพิมพ์ IPhone
${KEYBOARD_NEXT}    accessibility_id=Next:

#คลิกหน้าจอเพื่อปิดแป้นพิมพ์
${PRESS_SCREEN}    xpath=//XCUIElementTypeScrollView/XCUIElementTypeOther[1]

#Drop down bottom
${DROPDWON_TYPE_MERCHNAT}    accessibility_id=ประเภทร้านค้า
${SELECT_TYPE_MERCHNAT}    accessibility_id=อาหารและเครื่องดื่ม
${DEOPDWON_PROVINCE}    chain=**/XCUIElementTypeOther[`name == "จังหวัด"`][3]

#Radio bottom
${RADIO_TYPE_MERCHANT_ONLINE_OR_OFFLINE}    chain=**/XCUIElementTypeOther[`name == "มี"`]/XCUIElementTypeOther
${RADIO_DISCOUNT_TYPE_PERCENT}    chain=**/XCUIElementTypeOther[`name == "เปอร์เซนต์"`][2]



