*** Variables ***
${APPIUM_SERVER}    http://127.0.0.1:4723

&{ANDROID_CAPS}
...    platformName=Android
...    automationName=UiAutomator2
...    deviceName=863d00583048313238510542b073ab
...    udid=863d00583048313238510542b073ab
...    appPackage=com.google.android.apps.searchlite
...    noReset=true
...    newCommandTimeout=3000

#  Appium capabilities config for testing in appium inspector
# {
#   "platformName": "Android",
#   "automationName": "UiAutomator2",
#   "deviceName": "863d00583048313238510542b073ab",
#   "udid": "863d00583048313238510542b073ab",
#   "noReset": true,
#   "newCommandTimeout": 3000
# }