*** Settings ***
Resource    ../../resources/common.resource
Resource    ../../resources/keywords/login.resource
Suite Setup    Open Application ttb smart shop
# Test Teardown    Back To Home
# Suite Teardown    Terminate Application For Platform


*** Keywords ***

Input PIN Flow
    # รวมขั้นตอนการกด PIN ไว้ที่นี่
    Wait Until Element Is Visible    ${PIN_1}    timeout=10s
    Click Element    ${PIN_1}
    Click Element    ${PIN_1}
    Click Element    ${PIN_2}
    Click Element    ${PIN_2}
    Click Element    ${PIN_3}
    Click Element    ${PIN_3}
   

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
        Enter Username    armyoadmin
        Sleep    1s
        # หลังจากกรอก Username เสร็จแล้วค่อยมากด PIN
        Input PIN Flow
    END
   
    Wait Until Element Is Visible    ${RESULT_ELEMENT_SELECT_MERCHANT_PAGE}    timeout=15s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_SELECT_MERCHANT_PAGE}     label
    Should Contain    ${actual_text}    เลือกร้านค้า
    Capture Screenshot  filename=3 Select merchant

Click Shop By Name
    [Arguments]    ${shop_name}
    # ใช้ XPath ผสมกับตัวแปรเพื่อระบุตำแหน่งร้านค้าที่ต้องการ
    Wait Until Element Is Visible    xpath=//*[@label="${shop_name}" or @text="${shop_name}"]    timeout=10s
    Click Element                   xpath=//*[@label="${shop_name}" or @text="${shop_name}"]    

*** Test Cases ***

TS01_TC01 Today's Sales 
    [Documentation]  Today's Sales 
    Login Success    
   
    # คลิกปุ่มตาม "ตามชื่อร้าน"  สามารถเปลี่ยนชื่อร้านได้
    Click Shop By Name   ซีเอ็มยู56
    Wait Until Element Is Visible    ${RESULT_ELEMENT_TODAY_TOTAL_PAGE}    timeout=15s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_TODAY_TOTAL_PAGE}    label
    Should Contain    ${actual_text}    ยอดขายวันนี้รวม (บาท)
    Capture Screenshot

TS01_TC02 View List Product
    [Documentation]  View List Product
    Wait Until Element Is Visible         ${NAVBAR_QRCODE}   timeout=10s
    # ทำการคลิกปุ่ม Navbar QR CODE
    Click Element                    ${NAVBAR_QRCODE}
    Wait Until Element Is Visible     ${RESULT_ELEMENT_SELECT_PRODUCT_PAGE}    timeout=15s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_SELECT_PRODUCT_PAGE}    label
    Should Contain    ${actual_text}    เลือกสินค้า
    Capture Screenshot 
   
TS01_TC03 Category Product
    [Documentation]  Category Product
    Wait Until Element Is Visible         ${NAVBAR_CATEGORA_PRODUCT}  timeout=10s
    # ทำการคลิกปุ่ม Navbar Product
    Click Element                    ${NAVBAR_CATEGORA_PRODUCT} 
    Wait Until Element Is Visible    ${RESULT_ELEMENT_CATEGORA_PRODUCT_PAGE}    timeout=15s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_CATEGORA_PRODUCT_PAGE}    label
    Should Contain    ${actual_text}    จัดการคลังสินค้า
    Capture Screenshot

TS01_TC04-TC05 View Transaction History
    [Documentation]  View Transaction History
    Wait Until Element Is Visible         ${NAVBAR_REPORT}     timeout=10s
    # ทำการคลิกปุ่ม Navbar Report
     Click Element                   ${NAVBAR_REPORT} 

    Wait Until Element Is Visible    ${RESULT_ELEMENT_REPORT_PAGE}    timeout=15s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_REPORT_PAGE}    label
    Should Contain    ${actual_text}    รายการขาย
    Capture Screenshot    filename=TS01_TC04 Press icon " Report " in Home Screen Shortcuts

    #Click menu ประวัติรายการ
    Click Element    ${MENU_TRANSACTION_HISTORY} 
    Wait Until Element Is Visible    ${RESULT_ELEMENT_TRANSACTION_HISTORY_PAGE}    timeout=15s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_TRANSACTION_HISTORY_PAGE}    label
    Should Contain    ${actual_text}    ประวัติรายการ
    Capture Screenshot    filename=TS01_TC05 Press "ประวัติรายการขาย" in Sale items page

    #กดปุ่ม < เพื่อกลับจากหน้า ประวัติรายการ
    Click Element    ${BTN_BACK_TO_TRANSACTION_HISTORY_PAGE}
    Wait Until Element Is Visible    ${RESULT_ELEMENT_REPORT_PAGE}    timeout=15s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_REPORT_PAGE}    label
    Should Contain    ${actual_text}    รายการขาย

TS01_TC05-TC07 View Sale Report
    [Documentation]  View Sale Report
    Capture Screenshot    filename=TS01_TC06 Press icon " Report " in Home Screen Shortcuts

    #กด Menu ดูรายงานการขาย
    Click Element    ${MENU_VIEW_SALE_REPORT} 
    Wait Until Element Is Visible    ${RESULT_ELEMENT_VIEW_SALE_REPORT_PAGE}    timeout=15s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_VIEW_SALE_REPORT_PAGE}    label
    Should Contain    ${actual_text}    ดูรายงานการขาย
    Sleep    2s
    Capture Screenshot    filename=TS01_TC07 Press "ดูรายงานการขาย" in Sale items page

    #กดปุ่ม < เพื่อกลับจากหน้า  ดูรายงานการขาย
    Click Element    ${BTN_BACK_TO_VIEW_SALE_REPORT_PAGE}
    Wait Until Element Is Visible    ${RESULT_ELEMENT_REPORT_PAGE}    timeout=15s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_REPORT_PAGE}    label
    Should Contain    ${actual_text}    รายการขาย

# TS01_TC08-TC09 Download Report
#     [Documentation]  Download Report
#     Capture Screenshot    filename=TS01_TC08 Press icon " Report " in Home Screen Shortcuts

#     #กด Menu ขอรายงานการขาย
#     Click Element    ${MENU_DOWNLOAD_REPORT} 
#     Wait Until Element Is Visible    ${RESULT_ELEMENT_DOWNLOAD_REPORT_PAGE}    timeout=15s 
#     ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_DOWNLOAD_REPORT_PAGE}    label
#     Should Contain    ${actual_text}    ขอรายงานการขาย
#     Capture Screenshot    filename=TS01_TC09 Press "ขอรายงานการขาย" in Sale items page  

#     #กดปุ่มส่งรายงาน
#     Click Element    ${BTN_SENT_REPOT}


TS01_TC10-TC11 Request QR Standee
    [Documentation]  Request QR Standee
    #กด Navbar setting 
    Click Element    ${NAVBAR_SETTING}
cc
    Capture Screenshot    filename=TS01_TC11 Press "ขอป้าย QR" in Setting page

    #กด Menu ขอป้าย QR
    Click Element    ${MENU_REQUEST_QR}
    Wait Until Element Is Visible    ${MENU_REQUEST_QR}     timeout=15s 
    ${actual_text}=    Get Element Attribute    ${MENU_REQUEST_QR}       label
    Should Contain    ${actual_text}    ขอป้าย QR
    Click Element    ${BTN_BACK_TO_REQUEST_QR_PAGE} 
    Wait Until Element Is Visible    ${RESULT_ELEMENT_SETTING_PAGE}    timeout=15s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_SETTING_PAGE}      label
    Should Contain    ${actual_text}    ข้อมูลร้านค้า

TS01_TC12-TC13 User Management
    [Documentation]  User Management
    #กดปุ่ม จัดการพนักงาน
    Click Element    ${MENU_USER_MANAGEMENT}
      Wait Until Element Is Visible    ${RESULT_ELEMENT_USER_MANAGEMENT_PAGE}    timeout=15s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_USER_MANAGEMENT_PAGE}      label
    Should Contain    ${actual_text}    จัดการบัญชีผู้ใช้งาน
    Capture Screenshot

    #กดปุ่ม < เพื่อกลับจากหน้า  จัดการพนักงาน
    Click Element    ${BTN_BACK_TO_USER_MANAGEMENT_PAGE}
        Wait Until Element Is Visible    ${RESULT_ELEMENT_SETTING_PAGE}    timeout=15s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_SETTING_PAGE}      label
    Should Contain    ${actual_text}    ข้อมูลร้านค้า


TS01_TC14-TC15 View Shop Profile
    [Documentation]    View Shop Profile
    #กดปุ่ม ข้อมูลร้านค้า
    Click Element    ${MENU_VIEW_SHOP_PROFILE}
    Wait Until Element Is Visible    ${RESULT_ELEMENT_SETTING_PAGE}    timeout=15s 
    ${actual_text}=    Get Element Attribute    ${RESULT_ELEMENT_SETTING_PAGE}      label
    Should Contain    ${actual_text}    ข้อมูลร้านค้า
    Capture Screenshot








   
    
 
