---
title: "os_version"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/OS_And_Compiler/os_version.htm"
converted: "2025-09-14T04:00:04.733Z"
---

# os\_version

This variable will tell you the version number for the OS that is running your game. For example, if you are running it on Windows 10, os\_version will be equal to 655360.

The following table outlines the values that are returned for the most recent versions of the different OS:

| Operating System | Version Name(version Number) | Return Value (examples) |
| --- | --- | --- |
| Android | Nougat (7.0 - 7.11)Oreo (8.0 - 8.11)Pie (9.0)Android X (10.0) | 24 - 2526 - 272829 |
| iOSThe return value is calculated as:(major_version * 16777216) + (minor_version * 4096) + build_number | iOS 10 (10.3)iOS 11 (11.4)iOS 12 (12.0)iOS 13 (13.0) iPhoneiOS 13 (13.5) iPhone/Ipad | 167784448184565760201326592218103808218124288 |
| macOS XThe return value is calculated as:(major_version * 16777216) + (minor_version * 4096) + build_number | El Capitan (10.11)Sierra (10.12)High Sierra (10.13)Mojave (10.14)Catalina (10.15) | 167817216167821312167825408167829504167833600 |
| Windows(the return value is calculated as:majorVersion * 65536 + minorVersion) | Windows 7 (6.1)Windows 8 (6.2)Windows 8.1 (6.3)Windows 10 (10.0) | 393217393218393219655360 |

**NOTE**: Should you require further information about the Windows OS you can use the [environment\_get\_variable()](../../../../../../GameMaker_Language/GML_Reference/OS_And_Compiler/environment_get_variable.md).

#### Syntax:

os\_version

#### Returns:

[Real](../../GML_Overview/Data_Types.md)

#### Example:

if (os\_type == os\_android) && (os\_version > 10)
{
    global.GFX = 1;
}

The above code checks the os type and version number and they are both correct then the global variable is set to 1.