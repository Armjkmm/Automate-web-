*** Settings ***
Library  AppiumLibrary
Library    OperatingSystem
Library    DateTime 
Resource   capability-configs/ios.resource
Resource   capability-configs/android.resource
Library    String
Library    FakerLibrary    locale=en_US  # หรือ th_TH สำหรับชื่อไทย

*** Variables ***
${PLATFORM}    %{PLATFORM=ios}

*** Keywords ***
# Keywords 
Open Application ttb smart shop
    [Documentation]   Opens application based on the PLATFORM variable.
    Log   Opening application for platform: ${PLATFORM}

    IF    '${PLATFORM}' == 'ios'
        Open Application    ${APPIUM_SERVER}
        ...    &{IOS_CAPS}
    ELSE IF    '${PLATFORM}' == 'android'
        Open Application    ${APPIUM_SERVER}
        ...    &{ANDROID_CAPS}
    ELSE
        Fail    Unsupported PLATFORM: ${PLATFORM}
    END


Terminate Application For Platform
    [Documentation]   Closes application based on the PLATFORM variable.
    Log    Closing application for platform: ${PLATFORM}

    IF    '${PLATFORM}' == 'ios'
        Terminate Application    ${IOS_CAPS}[bundleId]
    ELSE IF    '${PLATFORM}' == 'android'
        Terminate Application    ${ANDROID_CAPS}[appPackage]
    ELSE
        Fail    Unsupported PLATFORM: ${PLATFORM}
    END

Capture Screenshot
    [Documentation]    Takes screenshot with automatic or given {filename} name.
    [Arguments]    ${filename}=AUTO

    ${timestamp}    Get Current Date    result_format=%Y-%m-%d
    ${dir}    Set Variable    ${OUTPUT DIR}/screenshots/
    Create Directory    ${dir}

    # Set file name    
    IF    $filename == 'AUTO'
    ${filename}    Set Variable    ${TEST_NAME}    
    # IF   '${filename}' == 'AUTO'    
    #     ${filename}    Set Variable        ${TEST_NAME}  
     END

    ${output_path}    Set Variable    ${dir}/${filename}.png
    Log To Console    Saving screenshot to: '${output_path}'
    Capture Page Screenshot   ${output_path}
    File Should Exist  ${dir}/${filename}.png

# วิธีที่ 2: ใช้คำสั่งลับของ iOS
Go To Home Screen On iOS
    Execute Script    mobile: pressButton    name=homeล

Random Realistic Name
    ${first_name}=    FakerLibrary.First Name
    ${last_name}=     FakerLibrary.Last Name
    ${full_name}=     Set Variable    ${first_name} ${last_name}
    Input Text        chain=**/XCUIElementTypeOther[`name == "ชื่อ-นามสกุล กรุณาระบุชื่อ-นามสกุล"`][2]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeTextField    ${full_name}
    Log To Console    Random Person: ${full_name}    

Random Email Using Faker
    ${email}=    FakerLibrary.Email
    Input Text    chain=**/XCUIElementTypeOther[`name == "อีเมล กรุณาระบุอีเมล"`][2]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeTextField    ${email}
    Log To Console    Generated Email: ${email} 

Random Natural Username
    ${user}=    FakerLibrary.User Name
    Input Text    chain=**/XCUIElementTypeOther[`name == "ตั้งค่าชื่อบัญชีผู้ใช้งาน (Username)"`][2]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeTextField    ${user}
    Log To Console    Generated Username: ${user}  

Random Shop Name
    ${random_word}=    FakerLibrary.Word    
    # นำคำที่สุ่มได้มาต่อกับคำว่า shop (เช่น "coffee shop" หรือ "apple shop")
    ${shop_name}=      Set Variable    ${random_word} shop
    Input Text       chain=**/XCUIElementTypeOther[`name == "ชื่อร้านค้า กรุณาระบุชื่อร้านค้า"`][2]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeTextField    ${shop_name}
    Log To Console   Shop Name: ${shop_name}  
    
       