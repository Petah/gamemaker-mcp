---
title: "os_device"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/OS_And_Compiler/os_device.htm"
converted: "2025-09-14T04:00:04.420Z"
---

# os\_device

This **read-only** variable holds one of various constant values listed below to tell you which device you are currently running the game on. Note this variable is deprecated in favour of the function [os\_get\_info()](os_get_info.md) which returns more accurate information on the device running the game.

#### Syntax:

os\_device

#### Returns:

[Device Type Constant](os_device.md)

| Device Type Constant |
| --- |
| Constant | Description |
| device_ios_ipad | iPad |
| device_ios_ipad_retina | Newer iPad with Retina display size of 2048 x 1536 |
| device_ios_iphone6 | iPhone6 with display size 1334 x 750 |
| device_ios_iphone6plus | Larger iPhone 6 with display 1920 x 1080 |
| device_ios_iphone5 | iPhone5 with display size 640 x 1136) |
| device_ios_iphone | Older iPhone/iPod Touch (480 x 320 screen) or Android phone |
| device_ios_iphone_retina | Newer iPhone/iPod Touch with Retina display of 960 x 640 |
| device_emulator | The device is actually an emulator (Windows Phone or Android) |
| device_tablet | Android tablet |
| device_ios_unknown | Unknown or not iOS |

#### Example:

if (os\_browser = browser\_not\_a\_browser)
{
    switch (os\_device)
    {
        case device\_ios\_ipad: global.Config = 2; break;
        case device\_ios\_iphone: global.Config = 3; break;
        case device\_ios\_iphone\_retina: global.Config = 4; break;
        case device\_ios\_unknown: global.Config = 5; break;
    }
}
else
{
    global.Config = 1;
}

The above code checks to see if the game is running in a browser or not and sets a global variable to a value depending on the result of the check.