*** Variables ***
${APPIUM_SERVER}    http://127.0.0.1:4723

&{IOS_CAPS}
...    platformName=ios
...    automationName=xcuitest
...    platformVersion=26.2.1
...    bundleId=th.co.digio.merchant
# ...    bundleId=com.google.GoogleMobile
...    udid=00008101-001659C20282001E
...    showXcodeLog=true
...    noReset=true
...    newCommandTimeout=3000

#  Appium capabilities config for testing in appium inspector
# {
#   "platformName": "ios",
#   "automationName": "xcuitest",
#   "deviceName": "Q",
#   "platformVersion": "26.2",
#   "udid": "00008110-0014619A2683801E",
#   "showXcodeLog": true,
#   "noReset": true,
#   "newCommandTimeout": 3000
# }
