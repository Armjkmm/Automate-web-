*** Settings ***

Library    AppiumLibrary
Resource    ../../resources/common.resource
Resource    ../../resources/keywords/login.resource
Suite Setup    Open Application ttb smart shop

*** Variables ***


${ENTER_INVALID_CID}    123456789012
${ENTER_INVALID_ACCOUNT_NO}    1182132
${ENTER_VALID_CID}    5213021036049
${ENTER_VALID_ACCOUNT_NO}    1111088132

#กรอกหน้าสร้าง Username
${ENTER_USERNAME_DUPLICATE_DATA}    armyoowner
${ENTER_USERNAME_NEW_DATA}    Papatttttti
${ENTER_FULL_NAME}    ${ENTER_USERNAME_NEW_DATA} ta
${ENTER_EMAIL}    ${ENTER_FULL_NAME}@mail.com
${ENETR_ZIP_CODE}    222222
${ENTER_ADDRESS_MERCHANT}    BBK





*** Keywords ***

Input PIN Flow
    # รวมขั้นตอนการกด PIN ไว้ที่นี่
    Wait Until Element Is Visible    ${PIN_1}    timeout=10s
    Click Element    ${PIN_7}
    Click Element    ${PIN_7}
    Click Element    ${PIN_4}
    Click Element    ${PIN_4}
    Click Element    ${PIN_1}
    Click Element    ${PIN_1}


Login Success    
      ${is_pin_visible}=    Run Keyword And Return Status    Wait Until Element Is Visible    ${PIN_1}    timeout=15s

    IF    ${is_pin_visible}
        # ถ้าเจอหน้า PIN (True) ให้กรอก PIN ทันที
        Input PIN Flow
    ELSE
        # ถ้าไม่เจอหน้า PIN (False) ให้ไปกรอก Username ก่อน
        Log    ไม่เจอหน้า PIN กำลังไปกรอก Username...
        Wait Until Element Is Visible    ${Login_SUBMIT_USERNAME}  timeout=15s 
        ${actual_text}=    Get Element Attribute    ${Login_SUBMIT_USERNAME}   label
        Should Contain    ${actual_text}    เข้าสู่ระบบ
        Enter Username    armyoowner
        Sleep    1s
        # หลังจากกรอก Username เสร็จแล้วค่อยมากด PIN
        Input PIN Flow
    END
   
    Wait Until Element Is Visible    ${RESULT_ELEMENT_SELECT_MERCHANT_PAGE}    timeout=15s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_SELECT_MERCHANT_PAGE}     label
    Should Contain    ${actual_text}    เลือกร้านค้า

Click Shop By Name
    [Arguments]    ${shop_name}
    # ใช้ XPath ผสมกับตัวแปรเพื่อระบุตำแหน่งร้านค้าที่ต้องการ
    Wait Until Element Is Visible    xpath=//*[@label="${shop_name}" or @text="${shop_name}"]    timeout=10s
    Click Element                   xpath=//*[@label="${shop_name}" or @text="${shop_name}"]    

*** Test Cases ***


TS02_TC01-TC08 Login/Logout
    [Documentation]  Login/Logout
    Wait Until Element Is Visible    ${Login_SUBMIT_USERNAME}  timeout=15s 
    ${actual_text}=    Get Element Attribute    ${Login_SUBMIT_USERNAME}   label
    Should Contain    ${actual_text}    เข้าสู่ระบบ

    #ไม่กรอก Username
    Capture Screenshot    filename=TC02-1 Login with not input Username Then press button"เข้าสู่ระบบ"
    Click Element    ${Login_SUBMIT_USERNAME}
    Capture Screenshot    filename=TC02-2 The system show error message "กรุณากรอกชื่อผู้ใช้"
    Click Element    ${BTN_OK}

    #กรอก Username ที่ไม่ถูกต้อง
    Input Text    ${INPUT_USERNAME}    armyoTEsta
    Click Element    ${Login_SUBMIT_USERNAME}
    Capture Screenshot    filename=TC03-1 Login with invalid Username Then press button "เข้าสู่ระบบ"
    Click Element    ${Login_SUBMIT_USERNAME}
    Wait Until Element Is Visible    ${RESULT_ELEMENT_ENTER_USERNAME_INVALID}     timeout=15s 
    ${actual_text}=    Get Element Attribute   ${RESULT_ELEMENT_ENTER_USERNAME_INVALID}     label
    Should Contain    ${actual_text}    ชื่อบัญชีผู้ใช้งานไม่ถูกต้อง
    Click Element    ${BTN_OK}
    Capture Screenshot    filename=TC03-2 The system show error message "ชื่อบัญชีผู้ใช้งานไม่ถูกต้อง"
    Clear Text    ${INPUT_USERNAME}

    #กรอก Username ที่ถูกต้อง
    Input Text    ${INPUT_USERNAME}    armyoowner     #เปลี่ยน Username ตรงนี้ได้
    Click Element    ${Login_SUBMIT_USERNAME}
    Capture Screenshot    filename=TC04-1 Login with invalid Username Then press button "เข้าสู่ระบบ"
    Click Element    ${Login_SUBMIT_USERNAME}
    Wait Until Element Is Visible   ${RESULT_ELEMENT_ENTER_PIN_PAGE}      timeout=15s 
    ${actual_text}=    Get Element Attribute   ${RESULT_ELEMENT_ENTER_PIN_PAGE}     label
    Should Contain    ${actual_text}    เข้าสู่ระบบ
    Capture Screenshot    filename=TC04-2 Go to "กรอกรหัสผ่าน" page
   
    #กรอกรหัสไม่ถูกต้อง
    Click Element    ${PIN_7}
    Click Element    ${PIN_7}
    Click Element    ${PIN_1}
    Click Element    ${PIN_4}
    Click Element    ${PIN_1}
    Capture Screenshot    filename=TC05-1 Input invalid pass
    Click Element    ${PIN_5}
    Wait Until Element Is Visible    ${RESULT_ELEMENT_PASSWORID_INVALID}    timeout=15s 
    ${actual_text}=    Get Element Attribute   ${RESULT_ELEMENT_PASSWORID_INVALID}    label
    Should Contain    ${actual_text}    รหัสผ่านไม่ถูกต้อง
    Capture Screenshot    filename=TC05-2 The system show error message "รหัสผ่านไม่ถูกต้อง"
    Click Element    ${BTN_OK}

    #กรอกรหัสถูกต้อง
    Click Element    ${PIN_7}    #แก้ไข PIN ตำแหน่ง 1
    Click Element    ${PIN_7}    #แก้ไข PIN ตำแหน่ง 2
    Click Element    ${PIN_4}    #แก้ไข PIN ตำแหน่ง 3
    Click Element    ${PIN_4}    #แก้ไข PIN ตำแหน่ง 4
    Click Element    ${PIN_1}    #แก้ไข PIN ตำแหน่ง 5
    Capture Screenshot    filename=TC06-1 Input valid pass
    Click Element    ${PIN_1}    #แก้ไข PIN ตำแหน่ง 6
    Wait Until Element Is Visible    ${RESULT_ELEMENT_SELECT_MERCHANT_PAGE}    timeout=15s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_SELECT_MERCHANT_PAGE}     label
    Should Contain    ${actual_text}    เลือกร้านค้า
    Capture Screenshot    filename=TC06-2 Go to "เลือกร้านค้า" main page

    #กด logout 
    Click Element    ${BTN_LOGOUT_IN_SELECT_MERCHANT_PAGE} 
    Wait Until Element Is Visible   ${RESULT_ELEMENT_LOGOUT_IN_SELECT_MERCHANT_PAGE}     timeout=15s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_LOGOUT_IN_SELECT_MERCHANT_PAGE}    label
    Should Contain    ${actual_text}    คุณต้องการออกจากระบบหรือไม่?
    Capture Screenshot    filename=TC07 The system show pop-up "คุณต้องการออกจากระบบหรือไม่ ?"

    #กด "ตกลง" เพื่อ logout 
    Click Element    ${BTN_OK_01}
    Wait Until Element Is Visible    ${Login_SUBMIT_USERNAME}  timeout=15s 
    ${actual_text}=    Get Element Attribute    ${Login_SUBMIT_USERNAME}   label
    Should Contain    ${actual_text}    เข้าสู่ระบบ
    Capture Screenshot    filename=TC08 Go to "ยินดีต้อนรับ" page
    Sleep    2s
    Terminate Application For Platform


TS02_TC09-TC15 Join Shop
    [Documentation]    Join Shop
    # Login Success 
    # Click Shop By Name    ${SELECT_NAME_MERCHANT} 
    # Wait Until Element Is Visible    ${RESULT_ELEMENT_TODAY_TOTAL_PAGE}    timeout=15s 
    # ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_TODAY_TOTAL_PAGE}    label
    # Should Contain    ${actual_text}    ยอดขายวันนี้รวม (บาท)
    # Click Element    ${NAVBAR_SETTING}
    # Wait Until Element Is Visible    ${RESULT_ELEMENT_SETTING_PAGE}    timeout=15s 
    # ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_SETTING_PAGE}      label
    # Should Contain    ${actual_text}    ข้อมูลร้านค้า
    Click Element    ${MENU_JOIN_MERCHNAT} 



TS02_TC16-TC19 Change Shop
    [Documentation]    Change Shop
    Login Success 
    Click Shop By Name    ${SELECT_NAME_MERCHANT} 
    Wait Until Element Is Visible    ${RESULT_ELEMENT_TODAY_TOTAL_PAGE}    timeout=15s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_TODAY_TOTAL_PAGE}    label
    Should Contain    ${actual_text}    ยอดขายวันนี้รวม (บาท)
    Capture Screenshot    filename=TS02_TC16-1 Press " < " or button "Back" in Home page

    #กด < จากร้านค้าเก่า
    Click Element    ${BTN_CHANGS_MERCHANT}
    Wait Until Element Is Visible    ${RESULT_ELEMENT_POPUP_CHANGE_MERCHANT}     timeout=15s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_POPUP_CHANGE_MERCHANT}    label
    Should Contain    ${actual_text}    คุณต้องการเปลี่ยนร้านค้าเพื่อเข้าใช้งานหรือไม่ ?
    Capture Screenshot    filename=TS02_TC16-2 The system show pop-up message "คุณต้องการเปลี่ยนร้านค้าเพื่อเข้าใช้งานหรือไม่ ?"

    #กดปุ่ม "ยกเลิก" ใน popup คุณต้องการเปลี่ยนร้านค้าเพื่อเข้าใช้งานหรือไม่ ?
    Click Element    ${BTN_CANCEL}
    Wait Until Element Is Visible    ${RESULT_ELEMENT_TODAY_TOTAL_PAGE}    timeout=15s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_TODAY_TOTAL_PAGE}    label
    Should Contain    ${actual_text}    ยอดขายวันนี้รวม (บาท)
    Capture Screenshot    filename=TS02_TC17 Press button "ยกเลิก" และ The system close pop-up "คุณต้องการเปลี่ยนร้านค้าเพื่อเข้าใช้งานหรือไม่ ?"

    #กดปุ่ม "ตกลง" ใน popup คุณต้องการเปลี่ยนร้านค้าเพื่อเข้าใช้งานหรือไม่ ?
    Click Element    ${BTN_CHANGS_MERCHANT}
    Wait Until Element Is Visible    ${RESULT_ELEMENT_POPUP_CHANGE_MERCHANT}     timeout=15s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_POPUP_CHANGE_MERCHANT}    label
    Should Contain    ${actual_text}    คุณต้องการเปลี่ยนร้านค้าเพื่อเข้าใช้งานหรือไม่ ?
    Capture Screenshot    filename=TS02_TC17 Press button "ตกลง" และ Go to Select Shop page
    Click Element    ${BTN_OK_01}
    Wait Until Element Is Visible    ${RESULT_ELEMENT_SELECT_MERCHANT_PAGE}    timeout=15s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_SELECT_MERCHANT_PAGE}     label
    Should Contain    ${actual_text}    เลือกร้านค้า

    #เลือกเข้าร้านใหม่
    Click Shop By Name    ${SELECT_NAME_MERCHANT_NEW} 
    Wait Until Element Is Visible    ${RESULT_ELEMENT_TODAY_TOTAL_PAGE}    timeout=15s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_TODAY_TOTAL_PAGE}    label
    Should Contain    ${actual_text}    ยอดขายวันนี้รวม (บาท)
    Capture Screenshot    filename=TS02_TC16-1 Press " < " or button "Back" in Home page
    Sleep    2s
    Terminate Application For Platform


TS02_TC20-TC40 Create Merchant
    [Documentation]    Create Merchant

    ${is_username_page}=    Run Keyword And Return Status    Wait Until Element Is Visible    ${PIN_1}    timeout=15s
    
     IF    ${is_username_page}
        # ถ้าเจอหน้า PIN (True) ให้กลับมาที่หน้ากรอก Username เพื่อกดลงทะเบียนร้านค้า
        Wait Until Element Is Visible   ${RESULT_ELEMENT_ENTER_PIN_PAGE}      timeout=15s 
        ${actual_text}=    Get Element Attribute   ${RESULT_ELEMENT_ENTER_PIN_PAGE}     label
        Should Contain    ${actual_text}    เข้าสู่ระบบ
        Click Element    ${BTN_BACK_TO_ENTER_PIN_PAGE}
        Wait Until Element Is Visible   ${RESULT_ELEMENT_POPUP_CHANGE_USERNAME}      timeout=15s 
        ${actual_text}=    Get Element Attribute   ${RESULT_ELEMENT_POPUP_CHANGE_USERNAME}     label
        Should Contain    ${actual_text}    คุณต้องการเปลี่ยนบัญชีผู้ใช้หรือไม่
        Click Element    ${BTN_OK_01}
        Wait Until Element Is Visible    ${Login_SUBMIT_USERNAME}  timeout=15s 
        ${actual_text}=    Get Element Attribute    ${Login_SUBMIT_USERNAME}   label
        Should Contain    ${actual_text}    เข้าสู่ระบบ
        Capture Screenshot    filename=TS02_TC21 Press "ลงทะเบียนร้านค้า" in Setting page
        Click Element    ${BTN_CREATE_MERCHANT}
        Wait Until Element Is Visible   ${RESULT_ELEMENT_CREATE_MERCHANT_PAGE}  timeout=15s 
        ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_CREATE_MERCHANT_PAGE}  label
        Should Contain    ${actual_text}    ลงทะเบียนร้านค้าของคุณ
        Capture Screenshot    filename=TS02_TC22-1 Register with not input data for register merchant Then press button "ถัดไป"
        Click Element    ${BTN_NEXT}
    ELSE
        Wait Until Element Is Visible    ${Login_SUBMIT_USERNAME}  timeout=15s 
        ${actual_text}=    Get Element Attribute    ${Login_SUBMIT_USERNAME}   label
        Should Contain    ${actual_text}    เข้าสู่ระบบ
        Capture Screenshot    filename=TS02_TC21 Press "ลงทะเบียนร้านค้า" in Setting page
        #คลิก "ลงทะเบียนร้านค้า"
        Click Element    ${BTN_CREATE_MERCHANT}
        Wait Until Element Is Visible   ${RESULT_ELEMENT_CREATE_MERCHANT_PAGE}  timeout=15s 
        ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_CREATE_MERCHANT_PAGE}  label
        Should Contain    ${actual_text}    ลงทะเบียนร้านค้าของคุณ
        Capture Screenshot    filename=TS02_TC22-1 Register with not input data for register merchant Then press button "ถัดไป"
        Click Element    ${BTN_NEXT}

    END
    # ตรวจ message error
    Wait Until Page Contains    กรุณาระบุเลขบัตรประจำตัวประชาชน
    Wait Until Page Contains    Horizontal scroll bar, 1 page
    Capture Screenshot    filename=TS02_TC22-2 The system show error message

    # กรอก CID และ AC no.ที่ไม่ถูกต้อง
    Input Text    ${INPUT_TEXT_BOX_CID}     ${ENTER_INVALID_CID} 
    Input Text    ${INPUT_TEXT_BOX_ACCOUNT}    ${ENTER_INVALID_ACCOUNT_NO}
    Wait Until Page Contains    เลขบัตรประจำตัวประชาชนไม่ถูกต้อง
     Click Element   ${BTN_DONE} 
    Wait Until Page Contains    เลขที่บัญชีธนาคารไม่ถูกต้อง
    Capture Screenshot    filename=TS02_TC23 Register with in put invalid CID and account no.
    Sleep    2s

    #กรอก CID ถูกต้องและ AC ที่ไม่ถูกต้อง
    Click Element    ${TEXT_CID} 
    Clear Text    ${CLEAR_TEXT_CID}  
    Input Text    ${CLEAR_TEXT_CID}     ${ENTER_VALID_CID}   
    Click Element   ${BTN_DONE} 
    Click Element    ${TEXT_ACCOUNT} 
    Clear Text    ${CLEAR_TEXT_ACCOUNT} 
    Input Text    ${CLEAR_TEXT_ACCOUNT}      ${ENTER_INVALID_ACCOUNT_NO}
    Click Element   ${BTN_DONE}  
    Capture Screenshot    filename=TS02_TC24 Register with in put valid CID and invalid account no.

    # #กรอก CID และ AC ที่ถูกต้อง
    Click Element    ${TEXT_ACCOUNT} 
    Clear Text    ${CLEAR_TEXT_ACCOUNT} 
    Input Text    ${CLEAR_TEXT_ACCOUNT}      ${ENTER_VALID_ACCOUNT_NO}
    Click Element   ${BTN_DONE}  
    Capture Screenshot    filename=TS02_TC25-1 Register with not prees checkProduct "ฉันได้อ่านและยินยอมรับข้อตกลงและเงื่อนไข" Then press bottom "ถัดไป"
    Click Element    ${BTN_NEXT}
    Wait Until Page Contains    กรุณาอ่านและยอมรับข้อกำหนดและเงื่อนไข
    Capture Screenshot    filename=TS02_TC25-2 The system show pop-up alert "กรุณาอ่านและยอมรับข้อกำนหนดและเงื่อนไข"
    # Click Element    ${BTN_OK} 

    # #คลิก ข้อตกลงและเงื่อนไข
    Capture Screenshot    filename=TS02_TC26-1 Press link "ข้อตกลงและเงื่อนไข" in "ลงทะเบียนร้านค้าของคุณ" page
    Click Element    ${BTN_T&C}
    Sleep     2s
    Wait Until Page Contains    ข้อกำหนดและเงื่อนไข
    Capture Screenshot    filename=TS02_TC26-2 Go to "ข้อกำหนดและเงื่อนไข" page
    Click Element    ${BTN_OK} 

    #คลิก Check box ข้อตกลงและเงื่อนไข
    Click Element    ${CHECK_BOX_T&C}
    Capture Screenshot    filename=TS02_TC27-1 Register with prees checkbox "ฉันได้อ่านและยินยอมรับข้อตกลงและเงื่อนไข" Then press bottom "ถัดไป"
    Click Element    ${BTN_NEXT}
    Wait Until Element Is Visible    ${RESULT_ELEMENT_COMFIRM_OTP_PAGE}   timeout=15s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_COMFIRM_OTP_PAGE}    label
    Should Contain    ${actual_text}    ใส่รหัสยืนยัน OTP
    Wait Until Page Contains    ใส่รหัสยืนยัน OTP
    Click Element    ${PIN_5}
    Click Element    ${PIN_7}
    Click Element    ${PIN_4}
    Click Element    ${PIN_1}
    Click Element    ${PIN_8}
    Capture Screenshot    filename=TS02_TC28-1 Input invalid OTP
    Click Element    ${PIN_9}
    Wait Until Element Is Visible    ${RESULT_ELEMENT_POPUP_INVALID_OTP}   timeout=15s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_POPUP_INVALID_OTP}    label
    Should Contain    ${actual_text}    รหัส OTP ไม่ถูกต้อง
    Capture Screenshot    filename=TS02_TC28-2 The system show pop-up alert "รหัส OTP ไม่ถูกต้อง"
    Click Element    ${BTN_OK} 
    Click Element    ${BTN_SEND_OTP_again}

    # ขั้นตอนนี้ Monitor เพื่อใส่ OTP เอง
    Wait Until Element Is Visible    ${RESULT_ELEMENT_CREATE_USERNAME}    timeout=30s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_CREATE_USERNAME}     label
    Should Contain    ${actual_text}    ข้อมูลผู้ใช้งาน
    Capture Screenshot    filename=TS02_TC29-Enter valid OTP and Go to ข้อมูลผู้ใช้งาน page
    Click Element    ${BTN_NEXT}
    Wait Until Page Contains    ตัวอักษรภาษาอังกฤษหรือตัวเลขเท่านั้น
    Wait Until Page Contains    กรุณาระบุชื่อ-นามสกุล
    Wait Until Page Contains    กรุณาระบุอีเมล
    Capture Screenshot    filename=TS02_TC30-Not input "ข้อมูลใช้งาน" then press "ถัดไป" and The system show error message
    Input Text    ${TEXT_USERNAME}    ${ENTER_USERNAME_DUPLICATE_DATA}
    Click Element    ${TEXT_FULL_NAME}
    Random Realistic Name
    Click Element    ${TEXT_EMAIL}
    Random Email Using Faker
    Capture Screenshot    filename=TS02_TC31-1 Input Duplicate "Username" then press "ถัดไป"
    Click Element    ${KEYBOARD_NEXT} 
    Click Element    ${BTN_NEXT}
    Sleep    1s
    Wait Until Page Contains    ชื่อบัญชีผู้ใช้งานซ้ำอยู่ในระบบ
    Wait Until Page Contains    กรุณาระบุใหม่อีกครั้ง
    Capture Screenshot    filename=TS02_TC31-2 The system show pop-up alert "ชื่อบัญชีผู้ใช้งานซ้ำอยู่ในระบบกรุณาระบุใหม่อีกครั้ง"
    Click Element    ${BTN_OK}
    Click Element    ${CLEAR_CREATEUSERNAME}
    Clear Text    ${CLEAR_CREATEUSERNAME}
    Random Natural Username
    Click Element    ${KEYBOARD_NEXT}
    Click Element    ${KEYBOARD_NEXT}
    Click Element    ${KEYBOARD_NEXT}
    Capture Screenshot    filename=TS02_TC32 Input "ข้อมูลเจ้าของร้าน" then press "ถัดไป" and Go to "ตั้งค่ารหัสผ่านเข้าใช้งาน" page
    Click Element    ${BTN_NEXT}
    Wait Until Element Is Visible    ${RESULT_ELEMENT_SET_PASSWORD_PAGE}    timeout=30s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_SET_PASSWORD_PAGE}     label
    Should Contain    ${actual_text}    ตั้งค่ารหัสผ่านเข้าใช้งาน
    Click Element    ${PIN_7}    #แก้ไข PIN ตำแหน่ง 1
    Click Element    ${PIN_7}    #แก้ไข PIN ตำแหน่ง 2
    Click Element    ${PIN_4}    #แก้ไข PIN ตำแหน่ง 3
    Click Element    ${PIN_4}    #แก้ไข PIN ตำแหน่ง 4
    Click Element    ${PIN_1}    #แก้ไข PIN ตำแหน่ง 5
    Capture Screenshot    filename=TC33-1 Input " Password "
    Click Element    ${PIN_1}    #แก้ไข PIN ตำแหน่ง 6
    Capture Screenshot    filename=TC33-2 Go to "ยืนยันรหัสผ่านเข้าใช้งาน" page
    Wait Until Element Is Visible    ${RESULT_ELEMENT_COMFIRM_PASSWORD_PAGE}     timeout=30s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_COMFIRM_PASSWORD_PAGE}      label
    Should Contain    ${actual_text}    ยืนยันรหัสผ่านเข้าใช้งาน
    Click Element    ${PIN_7}    #แก้ไข PIN ตำแหน่ง 1
    Click Element    ${PIN_4}    #แก้ไข PIN ตำแหน่ง 2
    Click Element    ${PIN_4}    #แก้ไข PIN ตำแหน่ง 3
    Click Element    ${PIN_4}    #แก้ไข PIN ตำแหน่ง 4
    Click Element    ${PIN_4}    #แก้ไข PIN ตำแหน่ง 5
    Capture Screenshot    filename=TC34-1 Input " Password "
    Click Element    ${PIN_1}    #แก้ไข PIN ตำแหน่ง 6
    Wait Until Page Contains    รหัสผ่านไม่ถูกต้อง
    Capture Screenshot    filename=TC34-2 The system show pop-up alert "รหัสผ่านไม่ถูกต้อง"
    Click Element    ${BTN_OK}
    Wait Until Element Is Visible    ${RESULT_ELEMENT_COMFIRM_PASSWORD_PAGE}     timeout=30s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_COMFIRM_PASSWORD_PAGE}      label
    Should Contain    ${actual_text}    ยืนยันรหัสผ่านเข้าใช้งาน
    Click Element    ${PIN_7}    #แก้ไข PIN ตำแหน่ง 1
    Click Element    ${PIN_7}    #แก้ไข PIN ตำแหน่ง 2
    Click Element    ${PIN_4}    #แก้ไข PIN ตำแหน่ง 3
    Click Element    ${PIN_4}    #แก้ไข PIN ตำแหน่ง 4
    Click Element    ${PIN_1}    #แก้ไข PIN ตำแหน่ง 5
    Capture Screenshot    filename=TC35-1 Input valid " Password "
    Click Element    ${PIN_1}    #แก้ไข PIN ตำแหน่ง 6
    Capture Screenshot    filename=TC35-2 The system show popup "ยืนยันใบหน้า"
    Wait Until Element Is Visible    ${RESULT_POPUP_COMFIRM_BIOMETRICS}     timeout=30s 
    ${actual_text}=    Get Element Attribute    ${RESULT_POPUP_COMFIRM_BIOMETRICS}      label
    Should Contain    ${actual_text}    รวดเร็ว ง่ายกว่า และปลอดภัยมากยิ่งขึ้น
    Capture Screenshot    filename=TC36-1 Press "ภายหลัง"
    Click Element    ${BTN_OPEN_BIOMETRICS_AFTER}
    Wait Until Element Is Visible   ${RESULT_ELEMENT_CREATE_DATA_MERCHNAT}     timeout=30s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_CREATE_DATA_MERCHNAT}       label
    Should Contain    ${actual_text}    สร้างข้อมูลร้านค้า
    Capture Screenshot    filename=TC36-2 Go to "ข้อมูลร้านค้า" page
    Click Element    ${BTN_NEXT} 
    Click Element    ${PRESS_SCREEN}
    Wait Until Page Contains    กรุณาระบุชื่อร้านค้า
    Wait Until Page Contains    โปรดระบุรหัสไปรษณีย์
    Wait Until Page Contains    โปรดระบุที่อยู่ร้านค้า
    Capture Screenshot    filename=TS02_TC37 Not input " ข้อมูลร้านค้า " then press"ถัดไป" The system show error message
    Click Element    ${DROPDWON_TYPE_MERCHNAT}
    Sleep    1s
    Click Element    ${SELECT_TYPE_MERCHNAT}
    Click Element    ${TEXT_NAME_MERCHANT}
    Random Shop Name
    Click Element    ${PRESS_SCREEN}
    Click Element    ${TEXT_ZIP_CODE}
    Input Text    ${TEXT_ZIP_CODE}    ${ENETR_ZIP_CODE}
    Click Element    ${PRESS_SCREEN}
    Click Element    ${TEXT_ADDRESS_MERCHANT}
    Input Text    ${TEXT_ADDRESS_MERCHANT}    ${ENTER_ADDRESS_MERCHANT}
    Click Element    ${PRESS_SCREEN}
    Click Element    ${RADIO_TYPE_MERCHANT_ONLINE_OR_OFFLINE} 
    Capture Screenshot    filename=TS02_TC38-1 Input " ข้อมูลร้านค้า " and not "add images" then press"ถัดไป"
    # Monitor เลื่อกจังหวัดเอง
    Sleep    10s
    Click Element    ${BTN_NEXT}
    Capture Screenshot    filename=TS02_TC38-2 The system show pop-up alert "คุณยังไม่ได้เพิ่มรูปร้านค้า"
    Wait Until Page Contains    คุณยังไม่ได้เพิ่มรูปภาพร้านค้า
    Click Element    ${BTN_OK}
    Sleep    10s
    Click Element    ${BTN_NEXT}
    Wait Until Element Is Visible   ${RESULT_ELEMENT_INFOMATION_MERCHNAT_PAGE}      timeout=30s 
    ${actual_text}=    Get Element Attribute   ${RESULT_ELEMENT_INFOMATION_MERCHNAT_PAGE}       label
    Should Contain    ${actual_text}    ข้อมูลร้านค้า
    Click Element    ${BTN_NEXT} 
    Wait Until Element Is Visible   ${RESULT_ELEMENT_INFOMATION_MERCHNAT_PAGE}      timeout=30s 
    ${actual_text}=    Get Element Attribute   ${RESULT_ELEMENT_INFOMATION_MERCHNAT_PAGE}       label
    Should Contain    ${actual_text}    ข้อมูลร้านค้า
    Wait Until Page Contains    คำขอสร้างร้านค้า
    Wait Until Page Contains    อยู่ระหว่างรอการพิจารณาจากธนาคาร

TS02_TC41-TC55 Activation    
    [Documentation]    Activation
     ${is_username_page}=    Run Keyword And Return Status    Wait Until Element Is Visible    ${PIN_1}    timeout=15s
    
     IF    ${is_username_page}
        # ถ้าเจอหน้า PIN (True) ให้กลับมาที่หน้ากรอก Username เพื่อกดลงทะเบียนร้านค้า
        Wait Until Element Is Visible   ${RESULT_ELEMENT_ENTER_PIN_PAGE}      timeout=15s 
        ${actual_text}=    Get Element Attribute   ${RESULT_ELEMENT_ENTER_PIN_PAGE}     label
        Should Contain    ${actual_text}    เข้าสู่ระบบ
        Click Element    ${BTN_BACK_TO_ENTER_PIN_PAGE}
        Wait Until Element Is Visible   ${RESULT_ELEMENT_POPUP_CHANGE_USERNAME}      timeout=15s 
        ${actual_text}=    Get Element Attribute   ${RESULT_ELEMENT_POPUP_CHANGE_USERNAME}     label
        Should Contain    ${actual_text}    คุณต้องการเปลี่ยนบัญชีผู้ใช้หรือไม่
        Click Element    ${BTN_OK_01}
        Wait Until Element Is Visible    ${Login_SUBMIT_USERNAME}  timeout=15s 
        ${actual_text}=    Get Element Attribute    ${Login_SUBMIT_USERNAME}   label
        Should Contain    ${actual_text}    เข้าสู่ระบบ
        Capture Screenshot    filename=TS02_TC21 Press "ลงทะเบียนร้านค้า" in Setting page
        Click Element    ${BTN_CREATE_MERCHANT}
        Wait Until Element Is Visible   ${RESULT_ELEMENT_CREATE_MERCHANT_PAGE}  timeout=15s 
        ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_CREATE_MERCHANT_PAGE}  label
        Should Contain    ${actual_text}    ลงทะเบียนร้านค้าของคุณ
        Capture Screenshot    filename=TS02_TC22-1 Register with not input data for register merchant Then press button "ถัดไป"
        Click Element    ${BTN_NEXT}
    ELSE
        Wait Until Element Is Visible    ${Login_SUBMIT_USERNAME}  timeout=15s 
        ${actual_text}=    Get Element Attribute    ${Login_SUBMIT_USERNAME}   label
        Should Contain    ${actual_text}    เข้าสู่ระบบ
        Capture Screenshot    filename=TS02_TC21 Press "ลงทะเบียนร้านค้า" in Setting page
        #คลิก "ลงทะเบียนร้านค้า"
        Click Element    ${BTN_CREATE_MERCHANT}
        Wait Until Element Is Visible   ${RESULT_ELEMENT_CREATE_MERCHANT_PAGE}  timeout=15s 
        ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_CREATE_MERCHANT_PAGE}  label
        Should Contain    ${actual_text}    ลงทะเบียนร้านค้าของคุณ
        Capture Screenshot    filename=TS02_TC22-1 Register with not input data for register merchant Then press button "ถัดไป"
        Click Element    ${BTN_NEXT}

    END






    
    











    

    



    








    

 

    






 














    








    

















    

