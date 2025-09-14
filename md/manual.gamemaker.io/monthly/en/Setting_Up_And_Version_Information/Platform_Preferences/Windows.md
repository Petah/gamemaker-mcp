---
title: "Windows"
source: "manual.gamemaker.io/monthly/en/Setting_Up_And_Version_Information/Platform_Preferences/Windows.htm"
converted: "2025-09-14T04:00:14.099Z"
---

# Windows Preferences

The Windows preferences have the following options:

![Windows Preferences](../../assets/Images/Setup_And_Version/Platform_Preferences/Windows_Prefs.png)

-   **Visual Studio location:** This option is for pointing GameMaker to the Microsoft Visual Studio installation on the build PC, which is required for [YoYo Compiler](../../Settings/YoYo_Compiler.md) builds.
-   **Default packaging type**: When building a final Windows executable package, you can choose between creating either an installer (using [NSIS](https://sourceforge.net/projects/nsis/)) or a compressed ZIP file that will have the game and any additional files within it, and also choosing between building for x64 or Arm64. By default you will be shown a dialog to choose between these options on compile, but you can set this preference to always use the selected option. Note that when this option is set to _Show Dialog_, in the actual dialog window that pops up on compile, enabling "**Remember Packaging Option**" will set this preference to the option you select.