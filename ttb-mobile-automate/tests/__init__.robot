*** Settings ***
Library           AppiumLibrary
Resource          ../resources/capabilities.resource
Resource          ../resources/variables.resource
Resource          ../resources/common_keywords.resource

# สั่งให้ Login ครั้งเดียวตั้งแต่เริ่มรันโฟลเดอร์ tests
Suite Setup       Run Keywords
...               Open Target Application    AND
...               Handle Initial Screen

# สั่งให้ปิดแอปครั้งเดียวเมื่อรันทุกไฟล์ในโฟลเดอร์จบหมดแล้ว
Suite Teardown    Safe Close Application
*** Variables ***
${DEVICE}    ANDROID_EMU    # ถ้าไม่ระบุตอนรัน ให้รันบน Android Emulator เป็นค่าเริ่มต้น

# วิธีการรันใน Teminal: 
# 1. กรณี รันทั้งหมด robot -d results tests/
# 2. กรณี รันแค่บางไฟล์ robot -d results tests/01_setting_validate.robot
# 3. กรณี รันแบบเจาะจงเครื่อง robot -d results -v DEVICE:IOS_REAL tests/
*** Keywords ***
Open Target Application
    # ตรวจสอบค่าที่ส่งมาจากคำสั่ง -v DEVICE:...
    IF    '${DEVICE}' == 'ANDROID_EMU'
        Open Application    ${REMOTE_URL}    &{ANDROID_EMU}
    
    ELSE IF    '${DEVICE}' == 'IOS_SIMU'
        Open Application    ${REMOTE_URL}    &{IOS_SIMU}
        
    ELSE IF    '${DEVICE}' == 'ANDROID_REAL'
        Open Application    ${REMOTE_URL}    &{ANDROID_REAL}
        
    ELSE IF    '${DEVICE}' == 'IOS_REAL'
        Open Application    ${REMOTE_URL}    &{IOS_REAL}
        
    ELSE
        Fatal Error    กรุณาระบุค่า DEVICE ให้ถูกต้อง (เช่น -v DEVICE:ANDROID_EMU)
    END

Handle Initial Screen
    # 1.ใช้ 'Run Keyword And Return Status' เพื่อให้ค่ากลับมาเป็น True (ถ้าเจอ) หรือ False (ถ้าไม่เจอ) แทนที่จะ Error จนหยุดรัน
    ${is_welcome}=    Run Keyword And Return Status    Wait Until Page Contains    ${TITLE_WELCOME}    timeout=30s
    
    # 2.กรณีเจอหน้า Welcome (แอปอาจจะเพิ่งเปิดครั้งแรก หรือ Session หลุด)
    IF    ${is_welcome}
        Login User    ${USER_01_NAME}    # เรียกใช้ Keyword ล็อกอินด้วยชื่อผู้ใช้
        Enter PIN     ${USER_01_PIN}     # หลังจากล็อกอินเสร็จ ให้ใส่ PIN ต่อทันที
    
    # 3.กรณีไม่เจอหน้า Welcome (แอปอาจจะข้ามมาหน้า PIN เลย หรือยังล็อกอินค้างอยู่)
    ELSE
        # 3.1.ลองเช็กอีกครั้งว่าตอนนี้อยู่ที่หน้าใส่ PIN หรือไม่
        ${is_pin}=    Run Keyword And Return Status    Wait Until Page Contains    ${TITLE_PIN}       timeout=30s
        
        # 3.2.ถ้าเจอหน้า PIN ให้ใส่รหัสผ่านได้เลย โดยไม่ต้องทำขั้นตอน Login User อีกรอบ
        IF    ${is_pin}
            Enter PIN    ${USER_01_PIN}
        END
    END

    # 4.ไม่ว่าจะเข้าด้วยวิธีไหน (Login ใหม่ หรือ ใส่ PIN อย่างเดียว) สุดท้ายต้องมาจบที่การเลือก Merchant (ร้านค้า)
    Select Merchant    ${MERCHANT_NAME}

Safe Close Application
    # ใช้ Run Keyword And Ignore Error เพื่อให้มันพยายามปิดแม้จะเกิด Error อื่นๆ
    Run Keyword And Ignore Error    Terminate Application    th.co.Tmb.Merchant
    Run Keyword And Ignore Error    Close Application