---
title: "macOS"
source: "manual.gamemaker.io/monthly/en/Setting_Up_And_Version_Information/Platform_Preferences/macOS.htm"
converted: "2025-09-14T04:00:14.119Z"
---

# macOS Preferences

The macOS preferences have the following options:

![macOS Preferences](../../assets/Images/Setup_And_Version/Platform_Preferences/macOS_Prefs.png)

-   **Default team identifier**: Here you can add your default Team Identifier, [as assigned to you by Apple](https://help.apple.com/xcode/mac/current/#/dev23aab79b4). This Team Id will be used when your game files are sent to Xcode to build the app, and will permit Xcode to generate the required signing certificates. Note that this setting will be applied by default to all games built for macOS, but it can be over-ridden on a per-project basis from the General macOS [Game Options](../../Settings/Game_Options/macOS.md).
-   **Automatic packaging choice**: Here you can set a default preference for creating an executable for the macOS target. The "Show Dialog" option will always show a dialog before creating an executable, asking you to choose between DMG and Zip, but you can set this option to either of those in the Preferences to skip that dialog. Note that enabling "Remember Package Option" on the dialog will also set this option to the selected package type.