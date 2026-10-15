*** Settings ***
Library        AppiumLibrary          # ใช้สำหรับควบคุม Mobile App (Android/iOS)
Library        OperatingSystem        # ใช้สำหรับจัดการระบบไฟล์ เช่น สร้างโฟลเดอร์
Resource       variables.resource     # ดึงไฟล์ที่เก็บค่าตัวแปรกลางมาใช้
Resource       locators.resource      # ดึงไฟล์ที่เก็บตำแหน่งปุ่ม/Element (XPath, ID) มาใช้

*** Variables ***
# ตัวแปรสำหรับนับลำดับรูปภาพ เริ่มต้นที่ 1
${SCREEN_INDEX}    ${1}

*** Keywords ***
Auto Capture
    # ตรวจสอบว่ามีโฟลเดอร์ screenshots ในโฟลเดอร์ผลลัพธ์การรันหรือยัง ถ้าไม่มีให้สร้างใหม่
    # ${OUTPUT_DIR} เป็นตัวแปรอัตโนมัติของ Robot Framework ที่ชี้ไปยังโฟลเดอร์ที่เก็บ Log/Report
    Create Directory    ${OUTPUT_DIR}/screenshots

    # แปลงตัวเลข Index ให้เป็นรูปแบบ 3 หลัก (เช่น 1 กลายเป็น 001, 10 กลายเป็น 010) เพื่อให้ไฟล์เรียงกันสวยงาม
    ${formatted_index}=    Evaluate    "{:03d}".format(${SCREEN_INDEX})
    
    # สั่งถ่ายภาพหน้าจอ และบันทึกไฟล์ลงในโฟลเดอร์ที่เตรียมไว้ตามชื่อลำดับเลข
    Capture Page Screenshot    ${OUTPUT_DIR}/screenshots/${formatted_index}.png
    
    # คำนวณเลขลำดับถัดไป (+1)
    ${next_num}=    Evaluate    ${SCREEN_INDEX} + 1

    # อัปเดตค่าตัวแปร SCREEN_INDEX ให้เป็นค่าใหม่แบบ Global (มีผลทั้งโปรเจกต์) เพื่อให้รูปถัดไปเลขไม่ซ้ำเดิม
    Set Global Variable    ${SCREEN_INDEX}    ${next_num}

Scroll Down To Element
    [Arguments]    ${target_locator}
    # วนลูปเพื่อ Swipe ลงไปเรื่อยๆ จนกว่าจะเจอปุ่มที่ต้องการ (สูงสุด 5 ครั้ง)
    FOR    ${i}    IN RANGE    5
        ${status}=        Run Keyword And Return Status    Page Should Contain Element     ${target_locator}
        Exit For Loop If    ${status}    # ถ้าเจอแล้วให้หยุดลูปทันที
        
        # ถ้ายังไม่เจอ ให้รูดขึ้น (ไถลงข้างล่าง)
        # Swipe By Percent: start_x, start_y, end_x, end_y
        Swipe By Percent    50    80    50    20    duration=1000
    END

Login User
    [Arguments]    ${user}
    # รอจนกว่าคำที่กำหนดและช่องกรอก Username จะปรากฏบนหน้าจอ (ช่วยป้องกันปัญหาหน้าจอโหลดไม่ทัน)
    Wait Until Page Contains    ${TITLE_WELCOME}    timeout=30s
    Wait Until Element Is Visible   ${INPUT_USERNAME}   timeout=30s
   
    Input Text       ${INPUT_USERNAME}    ${user}
    Auto Capture     # เรียกใช้ Keyword ถ่ายรูปเพื่อเก็บหลักฐานการกรอกข้อมูล
    Click Element    ${BTN_LOGIN}

Enter PIN
    [Arguments]    ${pin_code}
    Wait Until Page Contains    ${TITLE_PIN}    timeout=30s
    Auto Capture

    # ดึงค่า pin_code มาทีละตัวอักษรตามลำดับ Index (0 ถึง 5 สำหรับ PIN 6 หลัก)
    # แล้วนำไปใส่ใน XPath เพื่อค้นหาปุ่มตัวเลขบนหน้าจอและกดตามลำดับ
    Click Element    xpath=//android.widget.TextView[@text="${pin_code[0]}"]
    Click Element    xpath=//android.widget.TextView[@text="${pin_code[1]}"]
    Click Element    xpath=//android.widget.TextView[@text="${pin_code[2]}"]
    Click Element    xpath=//android.widget.TextView[@text="${pin_code[3]}"]
    Click Element    xpath=//android.widget.TextView[@text="${pin_code[4]}"]
    Click Element    xpath=//android.widget.TextView[@text="${pin_code[5]}"]

Select Merchant
    [Arguments]    ${merchant}
    Wait Until Page Contains    ${TITLE_SELECT_MERCHANT}    timeout=30s
    Auto Capture
    Click Text    ${merchant}
    
    Wait Until Page Contains    ${TITLE_DASHBOARD}    timeout=30s
    Page Should Contain Text    ${merchant}    # ยืนยัน (Verify) อีกครั้งว่าชื่อร้านค้าที่เลือกแสดงอยู่บนหน้า Dashboard จริงหรือไม่
    Auto Capture