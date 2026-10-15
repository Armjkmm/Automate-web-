*** Settings ***

Library    AppiumLibrary
Resource    ../../resources/common.resource
Resource    ../../resources/keywords/login.resource
Suite Setup    Open Application ttb smart shop
test setup       

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

#Select product
${SELECT_PRODUCT1}    แบดแมน 3.00 บาท
${SELECT_PRODUCT2}    Kaii 2.00 บาท
${DISCOUNT_OVER_PRICS_BAHT}    1000000
${DISCOUNT_PRICS_BAHT}    1
${DISCOUNT_OVER_PRICS_PERCENT}    1000000
${DISCOUNT_PRICS_PERCENT}    1
${ENTER_REF1_EN}    ARM19234
${ENTER_PRICS}    10
${ENTER_GET_AMOUNT}    20




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

Select Product 
    Click Element    ${SELECT_PRODUCT1}  
    Click Element    ${SELECT_PRODUCT2}
    Click Element    ${BTN_SHOPPING_CART}
   

*** Test Cases ***

TS03_TC93-102 Cash
    [Documentation]  Cash
    Login Success
    # คลิกปุ่มตาม "ตามชื่อร้าน"  สามารถเปลี่ยนชื่อร้านได้
    Click Shop By Name   ${SELECT_NAME_MERCHANT}
    Wait Until Element Is Visible    ${RESULT_ELEMENT_TODAY_TOTAL_PAGE}    timeout=15s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_TODAY_TOTAL_PAGE}    label
    Should Contain    ${actual_text}    ยอดขายวันนี้รวม (บาท)
    Wait Until Element Is Visible         ${NAVBAR_QRCODE}   timeout=10s
    Capture Screenshot    filename=TS01_TC93 Press icon " QR Code " in Home Screen Shortcuts Go to List Product page
    Click Element                    ${NAVBAR_QRCODE}
    Wait Until Element Is Visible     ${RESULT_ELEMENT_SELECT_PRODUCT_PAGE}    timeout=15s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_SELECT_PRODUCT_PAGE}    label
    Should Contain    ${actual_text}    เลือกสินค้า
    Capture Screenshot    filename=TS01_TC94-1 Press "ระบุจำนวนเงิน" in Go to List Product page
    Click Element    ${BTN_SPECIFY_THE_AMOUNT}
    Capture Screenshot    filename=TS01_TC94-2 Go to Enter amount page
    Click Element    ${BTN_NEXT}
    Wait Until Element Is Visible        โปรดใส่ราคาสินค้า
    Capture Screenshot    filename=TS01_TC95 Go to Enter amount page
    Input Text    ${TEXT_ENTER_AMOUNT}     ${ENTER_PRICS}
    Click Element    ${PRESS_SCREEN}
    Capture Screenshot    filename=TS01_TC96-1 Pay cash with enter amount and not enter Product code or customer code 
    Click Element    ${BTN_NEXT}
    Wait Until Element Is Visible        เลือกช่องทางการรับเงิน
    Wait Until Element Is Visible        เงินสด (Cash)
    Wait Until Element Is Visible        QR พร้อมเพย์ (QR Promptpay)
    Wait Until Element Is Visible        QR บัตรเครดิต/บัตรเดบิต (QR Credit Card/Debit Card)
    Wait Until Element Is Visible        หมายเหตุ: QR Code ที่ระบุจำนวนเงินจะสามารถชำระเงินได้ภายใน 24 ชม นับจากเวลาที่สร้าง
    Capture Screenshot    filename=TS01_TC96-2 Go to Choose payment page
    Click Element    ${BTN_BACK_TO_SELECT_PAYMENT_CHANELS}
    Wait Until Element Is Visible    กรุณากรอกจำนวนเงิน
    Click Element    ${TEXT_REF1}
    Input Text    ${INPUT_TEXT_BOX_REF1}    ${ENTER_REF1_EN}
    Click Element    ${PRESS_SCREEN}
    Capture Screenshot    filename=TS01_TC97-1 Pay cash with enter Amount and enter Product code or customer code
    Click Element    ${BTN_NEXT}
    Wait Until Element Is Visible        เลือกช่องทางการรับเงิน
    Wait Until Element Is Visible        เงินสด (Cash)
    Wait Until Element Is Visible        QR พร้อมเพย์ (QR Promptpay)
    Wait Until Element Is Visible        QR บัตรเครดิต/บัตรเดบิต (QR Credit Card/Debit Card)
    Wait Until Element Is Visible        หมายเหตุ: QR Code ที่ระบุจำนวนเงินจะสามารถชำระเงินได้ภายใน 24 ชม นับจากเวลาที่สร้าง
    Capture Screenshot    filename=TS01_TC97-2 Go to Choose payment page
    Click Element    ${BTN_CASH}
    Wait Until Element Is Visible    เงินสด
    Wait Until Element Is Visible    ยอดขายสุทธิ (บาท)
    Wait Until Element Is Visible    จำนวนเงินที่ได้รับ (บาท)
    Wait Until Element Is Visible    รับเงินสด
    Capture Screenshot    filename=TS01_TC98 Go to Pay cash page and Not enter field "จำนวนเงินที่ได้รับ (บาท)" and press button "รับเงินสด"and in Pay cash page
    Click Element    ${BTN_GET_CASH}
    Wait Until Element Is Visible    จำนวนเงินไม่เพียงพอ
    Capture Screenshot    filename=TS01_TC99 The system show pop-up alert "จำนวนเงินไม่เพียงพอ"
    Click Element    ${BTN_OK}
    Click Element    ${TEXT_GET_AMOUNT}
    Input Text    ${TEXT_GET_AMOUNT}    ${ENTER_GET_AMOUNT}   
    Click Element    ${PRESS_SCREEN}
    Capture Screenshot    filename=TS01_TC100 Enter field "จำนวนเงินที่ได้รับ (บาท)" and press button "รับเงินสด"and in Pay cash page and The system show pop-up message "ยืนยันการชำระเงิน" 
    Click Element    ${BTN_GET_CASH}
    Wait Until Element Is Visible    ยืนยันการชำระเงิน
    Capture Screenshot    filename=TS01_TC101 Press button "ตกลง" in pop-up message "ยืนยันการชำระเงิน" and Go to ทำรายการสำเร็จ page
    Click Element    ${BTN_OK_01}
    Wait Until Element Is Visible     ${RESULT_ELEMENT_PAYMENT_SUCCESSFULLY}    timeout=15s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_PAYMENT_SUCCESSFULLY}    label
    Should Contain    ${actual_text}    ทำรายการสำเร็จ
    Wait Until Element Is Visible    ทำรายการสำเร็จ
    Wait Until Element Is Visible    คุณได้รับเงินจำนวน (บาท)
    Wait Until Element Is Visible    จำนวนเงินสดที่ได้รับ 
    Wait Until Element Is Visible    จำนวนเงินทอน
    Capture Screenshot    filename=TS01_TC102 Press button "ตกลง" in ทำรายการสำเร็จ page and Go to List Product page
    Click Element    ${BTN_OK}
    Wait Until Element Is Visible     ${RESULT_ELEMENT_SELECT_PRODUCT_PAGE}    timeout=15s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_SELECT_PRODUCT_PAGE}    label
    Should Contain    ${actual_text}    เลือกสินค้า
    
TS03_TC93-102 Generate Dynamic QR
    [Documentation]     Generate Dynamic QR
    Login Success
    # คลิกปุ่มตาม "ตามชื่อร้าน"  สามารถเปลี่ยนชื่อร้านได้
    Click Shop By Name   ${SELECT_NAME_MERCHANT}
    Capture Screenshot    filename=TS01_TC103 Press icon " QR Code " in Home Screen Shortcuts and Go to List Product page
    Wait Until Element Is Visible    ${RESULT_ELEMENT_TODAY_TOTAL_PAGE}    timeout=15s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_TODAY_TOTAL_PAGE}    label
    Should Contain    ${actual_text}    ยอดขายวันนี้รวม (บาท)
    Wait Until Element Is Visible         ${NAVBAR_QRCODE}   timeout=10s
    Capture Screenshot    filename=TS01_TC93 Press icon " QR Code " in Home Screen Shortcuts Go to List Product page
    Click Element                    ${NAVBAR_QRCODE}
    Wait Until Element Is Visible     ${RESULT_ELEMENT_SELECT_PRODUCT_PAGE}    timeout=15s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_SELECT_PRODUCT_PAGE}    label
    Should Contain    ${actual_text}    เลือกสินค้า
    Click Element    ${BTN_SPECIFY_THE_AMOUNT}
    Capture Screenshot    filename=TS01_TC104 Press "ระบุจำนวนเงิน" in Go to List Product page and Go to Enter amount page
    Click Element    ${BTN_NEXT}
    Wait Until Element Is Visible        โปรดใส่ราคาสินค้า
    Capture Screenshot    filename=TS01_TC105 Generate Dynamic QR with not enter amount and not enter Product code or customer code and 
    Input Text    ${TEXT_ENTER_AMOUNT}     ${ENTER_PRICS}
    Click Element    ${PRESS_SCREEN}
    Capture Screenshot    filename=TS01_TC106-1 Generate Dynamic QR with enter amount and not enter Product code or customer code
    Click Element    ${BTN_NEXT}
    Wait Until Element Is Visible        เลือกช่องทางการรับเงิน
    Wait Until Element Is Visible        เงินสด (Cash)
    Wait Until Element Is Visible        QR พร้อมเพย์ (QR Promptpay)
    Wait Until Element Is Visible        QR บัตรเครดิต/บัตรเดบิต (QR Credit Card/Debit Card)
    Wait Until Element Is Visible        หมายเหตุ: QR Code ที่ระบุจำนวนเงินจะสามารถชำระเงินได้ภายใน 24 ชม นับจากเวลาที่สร้าง
    Capture Screenshot    filename=TS01_TC106-2 Go to Choose payment page
    Click Element    ${BTN_BACK_TO_SELECT_PAYMENT_CHANELS}
    Wait Until Element Is Visible    กรุณากรอกจำนวนเงิน
    Click Element    ${TEXT_REF1}
    Input Text    ${INPUT_TEXT_BOX_REF1}    ${ENTER_REF1_EN}
    Click Element    ${PRESS_SCREEN}
    Capture Screenshot    filename=TS01_TC107-1 Generate Dynamic QR with enter Amount and enter Product code or customer code
    Click Element    ${BTN_NEXT}
    Wait Until Element Is Visible        เลือกช่องทางการรับเงิน
    Wait Until Element Is Visible        เงินสด (Cash)
    Wait Until Element Is Visible        QR พร้อมเพย์ (QR Promptpay)
    Wait Until Element Is Visible        QR บัตรเครดิต/บัตรเดบิต (QR Credit Card/Debit Card)
    Wait Until Element Is Visible        หมายเหตุ: QR Code ที่ระบุจำนวนเงินจะสามารถชำระเงินได้ภายใน 24 ชม นับจากเวลาที่สร้าง
    Capture Screenshot    filename=TS01_TC107-2 Go to Choose payment page
    Click Element    ${BTN_QR_PROMPTPAY}
    Wait Until Element Is Visible    ${RESULT_ELEMENT_QR_PROMPTPAY_PAGE}     timeout=15s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_QR_PROMPTPAY_PAGE}     label
    Should Contain    ${actual_text}    หากไม่ได้รับการแจ้งเตือนเมื่อลูกค้าชำระเงินสำเร็จ
    Wait Until Element Is Visible    QR พร้อมเพย์\n(QR Promptpay)
    Wait Until Element Is Visible    หากไม่ได้รับการแจ้งเตือนเมื่อลูกค้าชำระเงินสำเร็จ
    Wait Until Element Is Visible    กรุณากดปุ่ม ‘ตรวจสอบรายการ’ เพื่อตรวจสอบสถานะการชำระเงิน 
    Wait Until Element Is Visible    โปรดตรวจสอบชื่อบัญชี และชื่อร้านค้า ให้ถูกต้อง ก่อนทำรายการโอนเงิน     
    Wait Until Element Is Visible    รายการที่รับชำระตั้งแต่เวลา 22:45 ถึง 22:56 น. ของทุกวัน ระบบไม่สามารถทำรายการคืนเงิน (Void) ได้ 
    Wait Until Element Is Visible    ตรวจสอบรายการ 
    Wait Until Element Is Visible    บันทึก QR 
    Wait Until Element Is Visible    ยกเลิกรายการ 
    Capture Screenshot    filename=TS01_TC108 The system Generate Dynamic QR
    Click Element    ${BTN_VERIFY_TANSACTION}
    Wait Until Element Is Visible    ไม่พบรายการชำระเงิน
    Capture Screenshot    filename=TS01_TC109 Press button "ตรวจสอบรายการ" with no scanned to pay and The system show pop-up error message "ไม่พบรายการ"
    Click Element    ${BTN_OK}
    Click Element    ${BTN_SAVE_QR_DYNAMIC}
    Wait Until Element Is Visible    บันทึกรูปเรียบร้อย
    Capture Screenshot    filename=TS01_TC110 Press Button "บักทึก QR" and The System Show Pop-up "บันทึกรูปเรียบร้อย"
    Click Element    ${BTN_OK}
    Capture Screenshot    filename=TS01_TC112 Press "<" in QR Payment page
    Wait Until Element Is Visible    ${BTN_BACK_TO_QR_PROMPTPAY_PAGE}
    Log    ${BTN_BACK_TO_QR_PROMPTPAY_PAGE}
    Click Element    ${BTN_BACK_TO_QR_PROMPTPAY_PAGE}
    














        




    

   


















