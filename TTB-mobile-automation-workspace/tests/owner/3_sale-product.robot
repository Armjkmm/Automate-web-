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
${ENTER_REF1_TH}    อาร์ม
${ENTER_REF1_EN}    ARM19234



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

Select Product By Name
    [Arguments]    ${product_name}
    # ใช้ contains เพื่อให้หาเจอแม้จะส่งไปแค่ชื่อ "แบดแมน" โดยไม่ต้องใส่ราคา
    ${dynamic_xpath}=    Set Variable    xpath=//*[contains(@name, '${product_name}')]
    
    # รอจนกว่าสินค้าชิ้นนั้นจะปรากฏบนจอ
    Wait Until Element Is Visible    ${dynamic_xpath}    timeout=10s
    
    # คลิกเลือกสินค้า
    Click Element    ${dynamic_xpath}

*** Test Cases ***


TS03_TC73-TC74 Add to cart
    [Documentation]    Add to cart
    Login Success
    # คลิกปุ่มตาม "ตามชื่อร้าน"  สามารถเปลี่ยนชื่อร้านได้
    Click Shop By Name   ${SELECT_NAME_MERCHANT}
    Wait Until Element Is Visible    ${RESULT_ELEMENT_TODAY_TOTAL_PAGE}    timeout=15s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_TODAY_TOTAL_PAGE}    label
    Should Contain    ${actual_text}    ยอดขายวันนี้รวม (บาท)
    Wait Until Element Is Visible         ${NAVBAR_QRCODE}   timeout=10s
    # ทำการคลิกปุ่ม Navbar QR CODE
    Click Element                    ${NAVBAR_QRCODE}
    Wait Until Element Is Visible     ${RESULT_ELEMENT_SELECT_PRODUCT_PAGE}    timeout=15s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_SELECT_PRODUCT_PAGE}    label
    Should Contain    ${actual_text}    เลือกสินค้า
    Capture Screenshot    filename=TS01_TC73 Press icon " Sale " in Home Screen Shortcuts Go to List Product page
    Click Element    ${SELECT_PRODUCT1}  
    Click Element    ${SELECT_PRODUCT2}
    Capture Screenshot    filename=TS01_TC74-1 Select product then click icon "cart" in List Product page
    Click Element    ${BTN_SHOPPING_CART}
    Capture Screenshot    filename=TS01_TC74-2 Go to Cart in List Product page

TS03_TC73-TC74 Delete from cart
    [Documentation]    Add to cart
    #  Click Element    ${SELECT_PRODUCT1}  
    # Click Element    ${SELECT_PRODUCT2}
    Click Element    ${BTN_DELETE_FROM_CART}

    # Capture Screenshot    filename=TS01_TC74-2 Go to Cart in List Product page    


TS03_TC79-86 Discount bill
    [Documentation]    Discount bill
    Capture Screenshot    filename=TS01_TC79-1 Press "+" at "ส่วนลดท้ายบิล" Go to "ส่วนลดท้ายบิล" page
    Click Element    ${BTN_DISCOUNT_BILL}
    Capture Screenshot    filename=TS01_TC80 Slect Radio Button "บาท" in "ส่วนลดท้ายบิล" page The system can be selected
    Click Element    ${TEXT_DISCOUNT_BILL}
    Input Text    ${TEXT_DISCOUNT_BILL}    ${DISCOUNT_OVER_PRICS_BAHT} 
    Click Element    ${BTN_OK}
    Capture Screenshot    filename=TS01_TC81-1 Input "จำนวนเงินมากกว่าเกินราคาขาย" then Press "ตกลง" 
    Click Element    ${BTN_OK}
    Wait Until Page Contains    ไม่สามารถระบุส่วนลดเกินราคาขายได้
    Capture Screenshot    filename=TS01_TC81-2 The system show pop-up alert "ไม่สามารถระบุส่วนลดเกินราคาขายได้"
    Click Element    ${BTN_OK}
    Clear Text    ${TEXT_DISCOUNT_BILL}
    Input Text    ${TEXT_DISCOUNT_BILL}    ${DISCOUNT_PRICS_BAHT}
    Click Element    ${BTN_OK}
    Capture Screenshot    filename=TS01_TC82-1 Input "จำนวนเงินน้อยกว่าเกินราคาขาย" then Press "ตกลง" 
    Click Element    ${BTN_OK}
    Wait Until Page Contains    ส่วนลดท้ายบิล -1.00
    Capture Screenshot    filename=TS01_TC82-2 The system show "จำนวนเงินส่วนลดท้ายบิล"
    Click Text    -1.00
    Capture Screenshot    filename=TS01_TC83 Press "+" at "ส่วนลดท้ายบิล" Go to "ส่วนลดท้ายบิล" page
    Click Element    ${RADIO_DISCOUNT_TYPE_PERCENT}
    Capture Screenshot    filename=TS01_TC84 Slect Radio Button "เปอร์เซนต์" in "ส่วนลดท้ายบิล" page The system can be selected
    Clear Text    ${TEXT_DISCOUNT_BILL}
    Input Text    ${TEXT_DISCOUNT_BILL}    ${DISCOUNT_OVER_PRICS_PERCENT} 
    Click Element    ${BTN_OK}
    Capture Screenshot    filename=TS01_TC85-1 Input "เปอร์เซนต์ > 100%" then Press "ตกลง"
    Click Element    ${BTN_OK}
    Wait Until Page Contains    ไม่สามารถระบุส่วนลดเกิน 100 เปอร์เซ็นได้
    Capture Screenshot    filename=TS01_TC85-2 The system show pop-up alert "ไม่สามารถระบุส่วนลดเกิน 100 เปอร์เซนต์ได้"
    Click Element    ${BTN_OK}
    Clear Text    ${TEXT_DISCOUNT_BILL}
    Input Text    ${TEXT_DISCOUNT_BILL}    ${DISCOUNT_PRICS_PERCENT} 
    Click Element    ${BTN_OK}
    Capture Screenshot    filename=TS01_TC86-1 Input "เปอร์เซนต์ <= 100%" then Press "ตกลง" 
    Click Element    ${BTN_OK}
    Capture Screenshot    filename=TS01_TC86-2 The system show "เปอร์เซนต์ส่วนลดท้ายบิล"

TS03_TC87-89 Discount bill
    [Documentation]   Input Ref.1
    Capture Screenshot    filename=TS01_TC87-1 Press "+" at "หมายเลขอ้างอิง"
    Click Element    ${BTN_INPUT_REF1}
    Wait Until Page Contains    เพิ่มหมายเลขอ้างอิง
    Click Element    ${TEXT_INPUT_REF1}
    Capture Screenshot    filename=TS01_TC87-2 Go to "เพิ่มหมายเลขอ้างอิง" page
    Input Text    ${TEXT_INPUT_REF1}    ${ENTER_REF1_TH}
    Click Element    ${BTN_OK}
    Capture Screenshot    filename=TS01_TC88-1 Input "ภาษาไทย" then Press "ตกลง" 
    Click Element    ${BTN_OK}
    Wait Until Page Contains    กรุณาระบุเป็นตัวเลขหรือภาษาอังกฤษเท่านั้น
    Capture Screenshot    filename=TS01_TC88-2 The system show pop-up alert "กรุณาระบุเป็นตัวเลขหรือภาษาอังกฤษเท่านั้น"
    Click Element    ${BTN_OK}
    Clear Text    ${TEXT_INPUT_REF1}
    Input Text    ${TEXT_INPUT_REF1}    ${ENTER_REF1_EN}
    Click Element    ${BTN_OK}
    Capture Screenshot    filename=TS01_TC89-1 Input "เลข" or "ภาษาอังกฤษ" then Press "ตกลง" 
    Click Element    ${BTN_OK}
    Capture Screenshot    filename=TS01_TC89-2 The system show "หมายเลขอ้างอิง"
    Wait Until Page Contains    ${ENTER_REF1_EN}

TS03_TC90-92 Cancel Order
    [Documentation]   Cancel Order
    Capture Screenshot    filename=TS01_TC90-1 Press button "ยกเลิกรายการ" in Sales list page
    Click Element    ${BTN_CANCEL_ORDER}
    Wait Until Page Contains    คุณต้องการยกเลิกรายการนี้หรือไม่?
    Capture Screenshot    filename=TS01_TC90-2 The system show pop-up message "คุณต้องการยกเลิกรายการนี้หรือไม่ ?"
    Click Element    ${BTN_CANCEL}
    Capture Screenshot    filename=TS01_TC91 The system show pop-up message "ยกเลิกรายการสำเร็จ"
    Wait Until Page Contains    ยกเลิกรายการขายสำเร็จ
    Click Element    ${BTN_OK}
    Capture Screenshot    filename=TS01_TC92 Go to List Product page
    Terminate Application For Platform
















    








    

      
    