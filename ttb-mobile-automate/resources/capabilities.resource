*** Variables ***
${REMOTE_URL}    http://127.0.0.1:4723

# --- Android Emulator Device ---
&{ANDROID_EMU}    platformName=Android
...               automationName=UiAutomator2
...               appium:deviceName=Medium Phone API 36.1
...               appPackage=th.co.Tmb.Merchant
...               appActivity=th.co.Tmb.Merchant.MainActivity
...               noReset=${True}
...               fullReset=${False}

# --- IOS Simulator Device ---
&{IOS_SIMU}       platformName=iOS
...               automationName=XCUITest
...               appium:deviceName=iPhone 16e
...               platformVersion=26.2
...               bundleId=com.apple.Preferences
...               noReset=${True}
...               fullReset=${False}
...               usePrebuiltWDA=${True}

# --- Android Real Device ---
&{ANDROID_REAL}    platformName=Android
...                automationName=UiAutomator2
...                udid=เลข_UDID_จาก_adb_devices
...                appPackage=th.co.Tmb.Merchant
...                appActivity=th.co.Tmb.Merchant.MainActivity
...                noReset=${True}
...                fullReset=${False}

# --- iOS Real Device ---
&{IOS_REAL}        platformName=iOS
...                automationName=XCUITest
...                udid=00008101-001318E63E7A001E
...                xcodeOrgId=BQGPVU2EH4
...                xcodeSigningId=Apple Development
...                updatedWDABundleId=com.puckwarin.wda
...                bundleId=th.co.digio.merchant
...                noReset=${True}
...                fullReset=${False}
...                usePrebuiltWDA=${True}