---
title: "tvOS"
source: "manual.gamemaker.io/monthly/en/Setting_Up_And_Version_Information/Platform_Preferences/tvOS.htm"
converted: "2025-09-14T04:00:14.138Z"
---

# tvOS Preferences

The tvOS preferences have the following options:

![tvOS Preferences](../../assets/Images/Setup_And_Version/Platform_Preferences/tvOS_Prefs.png)

-   **Automatic response to tvOS persistent storage limitation warning**: tvOS games have limited local storage for files, and when you compile for this target a warning will be shown by default to remind you of this fact. You can change the setting here to suppress that warning by selecting "OK". The default setting is "Show Message".
-   **Suppress build and run**: By default when you create a tvOS project and then build a final executable package, GameMaker will build the package and then attempt to run it on any connected devices. Checking this option will suppress building the app and running it on the device and simply create an XCode project on the host Mac.
-   **macOS Install Path**: The install path for the project files on the build Mac.
-   **Default Team Identifier**: Here you can add your default Team Identifier, [as assigned to you by Apple](https://help.apple.com/xcode/mac/current/#/dev23aab79b4). This Team ID will be used when your game files are sent to Xcode to build the app, and will permit Xcode to generate the required signing certificates. Note that this setting will be applied by default to all games built for tvOS, but it can be over-ridden on a per-project basis from the General tvOS [Game Options](../../Settings/Game_Options/tvOS.md).