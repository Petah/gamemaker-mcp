---
title: "YoYo Compiler"
source: "manual.gamemaker.io/monthly/en/Settings/YoYo_Compiler.htm"
converted: "2025-09-14T04:00:14.816Z"
---

# YoYo Compiler

The YoYo Compiler (YYC) is a special compiler for creating executable packages that use machine code instead of interpreted code and a runner (which is what the GameMaker VM compile uses). Compiled code is faster to run, but takes more time to compile the executable.

## Setting Up The SDK

In order for the YoYo Compiler to be able to compile for the target platform, you will need to have the correct SDKs installed.

For a general overview on this, see the following Help Center page: [GameMaker Required SDKs](https://help.gamemaker.io/hc/en-us/articles/227860547-GameMaker-Required-SDKs).

Information on the SDKs required per platform can be found in the Help Center as well:

-   [GX.games](https://help.gamemaker.io/hc/en-us/articles/4625548722193-Setting-Up-For-GX-games)
-   [Windows](https://help.gamemaker.io/hc/en-us/articles/235186048-Setting-Up-For-Windows)
-   [macOS](https://help.gamemaker.io/hc/en-us/articles/235186128-Setting-Up-For-macOS)
-   [Ubuntu](https://help.gamemaker.io/hc/en-us/articles/235186168-Setting-Up-For-Ubuntu)
-   [Android](https://help.gamemaker.io/hc/en-us/articles/115001368727-Setting-Up-For-Android)
-   [iOS (Including iPadOS)](https://help.gamemaker.io/hc/en-us/articles/115001368747-Setting-Up-For-iOS-Including-iPadOS)
-   [tvOS](https://help.gamemaker.io/hc/en-us/articles/360025349592-Setting-Up-For-tvOS)

## Building a project with YYC

Once you have the SDKs set up correctly you can change the Output option for the selected platform to YYC:

![](../assets/Images/Introduction/QS_TargetYYC.png)

In case the current runtime doesn't include the YYC module for the platform you want to build for you will be asked to install it first:

![](../assets/Images/Setup_And_Version/Preferences/Runtime_Module_Not_Installed_YYC.png)

After that you can create the executable from [The Build Menu](../IDE_Navigation/Menus/The_Build_Menu.md) as with the VM output.

If the path to the SDK wasn't configured correctly you may get an error like the following (the image shows the message on the Windows platform):

![](../assets/Images/Introduction/QS_Debug_CompileError_VSPath.png)

GameMaker needs to know the location of the files needed to build an executable on the selected platform. In case this hasn't been set up correctly, a compile error is shown.

To verify that the paths have been set correctly for the selected platform, you can check the [Platform Preferences](../Setting_Up_And_Version_Information/Platform_Preferences.md).