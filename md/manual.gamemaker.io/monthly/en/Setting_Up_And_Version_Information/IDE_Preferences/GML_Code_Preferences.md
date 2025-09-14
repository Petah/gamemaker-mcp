---
title: "GML Code Preferences"
source: "manual.gamemaker.io/monthly/en/Setting_Up_And_Version_Information/IDE_Preferences/GML_Code_Preferences.htm"
converted: "2025-09-14T04:00:13.376Z"
---

# GML Code Preferences

![](../../assets/Images/Setup_And_Version/Preferences/Language_GML_Code_Prefs.png)The **GML Code Preferences** are used to define how some of the language features for coding will be displayed in the IDE of GameMaker. The options for GML Code are as follows:

-   **Display argument types in status bar**: This option relates to when you are using your own custom scripts and have used JSDoc notation to identify the different arguments, etc... (see [here](../../The_Asset_Editors/Code_Editor_Properties/JSDoc_Script_Comments.md) for more information). When this option is checked, and you have specified the argument types in the script, then they will be shown in the status bar at the bottom of the editor, enclosed in {}. This is off by default.
-   **Display argument descriptions in status bar**: If this is checked then any descriptions you have given your custom scripts using the JSDoc notation will be shown in the status bar at the bottom of the editor window. This is off by default.
-   **Show US spelling for system functions**: By default GameMaker uses GB English spelling for functions, for example draw\_text\_colour(), however this may not be exactly what you are used to and so you can switch to US spellings using this option, so that the functions become draw\_text\_color(), for example. This is off by default.
-   **Maximum number of syntax errors to display**: This value sets the maximum number of syntax errors that will be displayed at any one time. If you find the IDE is lagging then you can try reducing this value. This is set to 50 by default.
-   **Enable variable reference warnings**: When enabled, this will flag any potential issues with variables, like when one has been defined somewhere but isn't actually used in the code. When disabled, these warnings will no longer be shown. Default is that this is enabled.
-   **Enable statement folding as regions**: When enabled, brackets in your code are able to be folded like regions. This is enabled by default.