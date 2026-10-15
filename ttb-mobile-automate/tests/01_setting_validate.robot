*** Settings ***
Library           AppiumLibrary
Resource          ../resources/variables.resource
Resource          ../resources/common_keywords.resource

*** Test Cases ***
Verify Settings Page
    # เริ่มต้นที่หน้า Home ได้เลย เพราะ __init__ ทำการ Login ไว้ให้แล้ว
    Click Element                  ${MENU_SETTING}
    Wait Until Element Is Visible    ${SETTING_MERCHANT}    timeout=30s
    Page Should Contain Element    ${SETTING_MERCHANT}
    Page Should Contain Element    ${SETTING_STAFF}
    Page Should Contain Element    ${SETTING_QR_STANDEE}
    Page Should Contain Element    ${SETTING_INVITE}
    Page Should Contain Element    ${SETTING_CREATE_MERCHANT}
    Page Should Contain Element    ${SETTING_VOID}
    Page Should Contain Element    ${SETTING_SETTLEMENT_TYPE}
    Page Should Contain Element    ${SETTING_PERMISSION_STAFF}
    Auto Capture
    Scroll Down To Element         ${SETTING_USER}
    Scroll Down To Element         ${SETTING_SECURITY}
    Scroll Down To Element         ${SETTING_VOICE}
    Scroll Down To Element         ${SETTING_TERM_CON}
    Scroll Down To Element         ${SETTING_CONTACT}
    Scroll Down To Element         ${SETTING_LOGOUT}
    Auto Capture



