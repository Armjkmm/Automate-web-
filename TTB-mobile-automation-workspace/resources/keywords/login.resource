*** Settings ***
Resource    ../common.resource
Resource    ../locators/${PLATFORM}.resource


*** Variables ***
${PIN_0}    chain=**/XCUIElementTypeOther[`name == "0"`][2]
${PIN_1}    accessibility_id=1    
${PIN_2}    accessibility_id=2
${PIN_3}    accessibility_id=3
${PIN_4}    accessibility_id=4
${PIN_5}    accessibility_id=5
${PIN_6}    accessibility_id=6
${PIN_7}    accessibility_id=7
${PIN_8}    accessibility_id=8
${PIN_9}    accessibility_id=9

${SELECT_NAME_MERCHANT}    ศุนย์การค้าแปซิฟิคพาร์คศรีราชา
${SELECT_NAME_MERCHANT_NEW}    Cupcake and Daino สำนักงานใหญ่





*** Keywords ***
Enter Username
    [Documentation]   Enter {target_text} in ttb smart shop
    [Arguments]    ${target_text}
    
    
    # Input enter keyword and submit
    ${elSearchBox} =    Set Variable     ${Login_Enter_USERNAME}
    Input Text      ${elSearchBox}    ${target_text}
    Sleep    5s
    
    IF    '${PLATFORM}' == 'ios'
        # For iOS, need to tap on search submit button to search
        Click Element    ${Login_SUBMIT_USERNAME}
        Click Element    ${Login_SUBMIT_USERNAME}
        Sleep    5s   
         
    END

    # Verify search result
    ${elText} =    Set Variable    None

    IF    '${PLATFORM}' == 'ios'
        ${elText}=    Get Element Attribute
        ...    ${Login_SUBMIT_USERNAME} 
        ...    label       
    ELSE IF    '${PLATFORM}' == 'android'
        ${elText}=    Get Element Attribute
        ...    ${Login_SUBMIT_USERNAME} 
        ...    text
    END

    # Should Be Equal    ${elText}    ${target_text}



# Back To Home
#     [Documentation]   Navigate back to home page in Google App. (If IOS, close all multi tabs first)

#     IF    '${PLATFORM}' == 'ios'
#         Close All Multi Tabs
#         Sleep    2s
#     END

#     Click Element    ${HOME_BUTTON}
#     Sleep    5s

# Close All Multi Tabs
#     [Documentation]   Closes all multi tabs in Google App.
#     [Tags]    robot:private

#     Click Element    ${MULTI_TAB_BUTTON}
#     Sleep    2s
#     Click Element    ${MULTI_TAB_MORE_BUTTON}
#     Sleep    2s
#     Click Element    ${MULTI_TAB_CLOSE_ALL_BUTTON}
#     Sleep    2s
#     Click Element    ${MULTI_TAB_CLOSE_ALL_CONFIRM}
#     Sleep    2s
#     Click Element    ${DONE_BUTTON}
#     Sleep    2s