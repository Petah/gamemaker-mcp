---
title: "The Windows Menu"
source: "manual.gamemaker.io/monthly/en/IDE_Navigation/Menus/The_Windows_Menu.htm"
converted: "2025-09-14T04:00:12.251Z"
---

# The Windows Menu

![The Windows Menu](../../assets/Images/IDE_Input/Window_Menu.png)

This menu is for opening the general docked IDE windows. Since docks can be rearranged and the contents can be removed as stand-alone windows or even closed entirely, this window permits you to re-open them if you find that you need them for anything. The windows that can be opened from here are [The Asset Browser](../../Introduction/The_Asset_Browser.md) window and all the different [Output](../../Introduction/The_Output_Window.md) windows (Output, Search, Source Control, Breakpoints and Compile/Syntax Errors). Note that Feather Messages is shown instead of Syntax Errors if you've [enabled Feather](../../Setting_Up_And_Version_Information/IDE_Preferences/Feather_Settings.htm#enable_feather).

Next you can open [The Inspector](../../IDE_Tools/The_Inspector.md) window. This window is used to inspect the properties of the currently selected IDE element, and these properties can then be edited as required.

After the Inspector option you have the [Recent Windows](../Recent_Windows.md) list, and there is also the option to open the **Environment Variables** window where you can see the different paths that the various environment variables used in the [Preferences](../../Setting_Up_And_Version_Information/IDE_Preferences.md) point to. These variables cannot be edited (neither their name nor their path/setting) but you can select and copy/paste any of them for use elsewhere.

![Environment Variables](../../assets/Images/IDE_Input/Environment_Variables.png)

You also have an option to open the **Project Tool Output** window. This windows shows the output of the [Project Tool](../../IDE_Tools/Project_Tool.md).

Finally, you also have the **Project Health** window which shows information about non-critical errors in your project, or errors that don't prevent the project from loading. For example, if, for one reason or another, a sprite's image file is missing on disk but its YY file still exists you will still be able to open the project fine. The output of the Project Health window looks as follows:

![](../../assets/Images/IDE%20Tools/Project_Health.png)