---
title: "Compiling Preferences"
source: "manual.gamemaker.io/monthly/en/Setting_Up_And_Version_Information/IDE_Preferences/General/Compiling.htm"
converted: "2025-09-14T04:00:13.424Z"
---

# Compiling Preferences

![Compiling Preferences](../../../assets/Images/Setup_And_Version/Preferences/General_Compiling_Prefs.png)

The Compiling Preferences deal with certain options related to the output when compiling your game for testing or creating a package, as well as certain areas of the compiling process. The options are:

-   **Automatically open syntax error window on detection**: Enable or disable syntax error notification when compiling. This is off by default.
-   **Show the compile window during compilation**: By default the compile window will be shown when you compile your projects, even if the compile dock is closed (it will open for the compile). Unchecking this will switch this behaviour off and the compile window will only be visible if open.
-   **Show compiler commands in compile output**: This is checked by default and forces the compiler to show all relevant commands in the compile window. Unchecking this will make the output smaller and have less information.
-   **Show verbose compiler output**: Checking this will force the compiler to show extra commands related to the compilation process. In general this is only required when debugging and may be requested by support should you have an issue. It is off by default (and this is the recommended setting).
-   **Show package in explorer on build completion**: Checking this will make GameMaker open the OS explorer window at the location where the final executable package has been created. It is on by default.
-   **Clear output window on compile start**: By default the compiler window will clear all previous messages from the compiler output window at the start of each build, however unchecking this will maintain previous compiler logs. This is on by default and is the recommended configuration since large compiler logs can slow down compile times.
-   **Automatically Stop Running before packaging:** By default, if your game is already running and you try to create an executable, you will be shown an error message and will need to ![](../../../assets/Images/Icons/Icon_StopGame.png) stop the game manually before creating an executable. You can enable this option to always skip this error message and automatically stop the game if it's running when "Create Executable" is selected. This is off by default.
-   **Automatically Stop Running before cleaning**: When this preference is enabled the IDE _won't_ show a warning message when you clean the project with a game already running. The preference is off by default.
-   **Maximum parallel compile jobs**: This value sets the maximum number of CPU cores to dedicate to compiling a project. The default value is 8 and in general you shouldn't have to change this, but if you are on a laptop or a lower end machine you may want to lower this value. The default is set to 8.