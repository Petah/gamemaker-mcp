---
title: "Compiling"
source: "manual.gamemaker.io/monthly/en/Introduction/Compiling.htm"
converted: "2025-09-14T04:00:12.601Z"
---

# Compiling

Compiling your game can mean one of two things: compiling it for testing, or compiling it to create a final _executable package_ for a specific target platform. This page aims to explain both of those options in detail and also explains compiler optimisations.

Contents

1.  [Compiling for Testing](Compiling.htm#compiling_for_t)
2.  [Target Settings](Compiling.htm#h3)
3.  [Creating A Final Executable Package](Compiling.htm#h2)

1.  [You Should Know](Compiling.htm#you_should_know)
2.  [Compiler Optimisations](Compiling.htm#compiler_optimi)
3.  [How Different Targets Build](Compiling.htm#how_different_t)
4.  [Distributing your Game](Compiling.htm#distributing_your_game)

## Compiling for Testing

Compiling your game for testing can be done by simply pressing the Play button ![Play Icon](../assets/Images/Icons/Icon_PlayGame.png) at the top of the IDE, which will launch the game for testing using the specified target. You can also run the game in **Debug Mode** by testing using the Debug button ![Debug Icon](../assets/Images/Icons/Icon_Debug.png). This will run the game, but also open up the **Debug Window**, where you can monitor how your game performs and see any issues (see the section on [Debugging](Debugging.md) for more information).

## Target Settings

By default GameMaker will run and debug using the built-in Virtual Machine (VM), which is more or less the same as running on the desktop OS being used. However, GameMaker is a **cross-platform engine** and you can test, debug and compile executable packages of your projects on a number of different target platforms (the exact platforms available will depend on the details of your licence). To change the current target platform you can click ![Lmb](../assets/Images/Icons/Icon_LMB.png) on the Targets button ![Target Manager Icon](../assets/Images/Icons/Icon_Targets.png) to open the **Targets Window**, which will look something like this (exact details will vary based on your licence type):

![Target List](../assets/Images/Introduction/QS_TargetList.png)At the top, beside the Targets button, you have the current settings which tells you the platform and the specific settings actually being used, and then the rest of the window is taken up with the details and options for all the available targets which you can select to use instead. Each section of this window is explained below:

[PlatformPlatform](Compiling.htm#)

This section lists all the available target platforms, which depends on the licence you have.

To select a target, simply click ![Lmb](../assets/Images/Icons/Icon_LMB.png) on it; this will then update the rest of the options windows to show different details depending on the platform selected. If you don't have the required module installed in the current runtime then GameMaker will ask you to download and install it when you click ![Lmb](../assets/Images/Icons/Icon_LMB.png) the target:

![](../assets/Images/Setup_And_Version/Preferences/Runtime_Module_Not_Installed.png)

If you select "**No**" here then the target will be reset to the previous target you had selected.

If you select "**Yes**" then the modules for the target will be downloaded and installed.

NOTE See the [Runtime Feeds Preferences](../Setting_Up_And_Version_Information/IDE_Preferences/Runtime_Feed_Preferences.md) page for more info on how to change which modules are included.

Specific details on compiling for each platform are given below in [Creating A Final Executable Package](Compiling.htm#h2).

[OutputOutput](Compiling.htm#)

Each target platform can have one or more output formats, the main ones being:

-   **GMS2 VM**: The VM (Virtual Machine) target uses a generic _runner_ for each platform and then interprets the code for your game. In general this option is used for testing due to its faster build times, but it does not offer the same performance boost that using the YYC option (if available) offers. You can use this to compile executable packages for smaller games or games where performance is not ever going to be an issue.

    Note that "GMS2" in the output names refers to the current runner being from the GameMaker Studio 2 era, as opposed to the new "GameMaker Runtime" (GMRT) that is [currently under development](https://gamemaker.io/en/blog/gmrt-open-beta).
-   **GMS2 YYC**: The YYC ([YoYo Compiler](../Settings/YoYo_Compiler.md)) generates C++ code from your GML code, before using the target's C++ compiler to compile it into native code for the target platform. It strips out unneeded functions and performs a host of other optimisation techniques to create a smaller and performance-enhanced executable package.

    This can increase your game's performance by at least two or three times, especially on logic-heavy games, and is ideal for those larger or CPU-intensive projects. Compile times may take longer and you should always clear the compiler cache before building any final complete asset package for a target platform. Note that the YYC target may require extra tools to be installed for the platform selected, otherwise it will not work - you can find further information about this from the [YoYo Games Help Center](https://help.gamemaker.io/hc/en-us/articles/227860547-GameMaker-Required-SDKs) as well as on the individual [target Preferences](../Setting_Up_And_Version_Information/Platform_Preferences.md) pages detailed in this manual.
-   **JavaScript**: The JavaScript target will only be available for specific targets, like the HTML5 target, and sets the game to be compiled to pure JavaScript. This uses **ECMAScript 2015** (or ES6) for the JS it outputs.

[DeviceDevice](Compiling.htm#)

Certain platforms (like iOS or Android) permit you to associate one or more devices with GameMaker so that games can selectively compile to them. Initially, the device list will be empty and you need to click ![Lmb](../assets/Images/Icons/Icon_LMB.png) on the Pencil icon ![Pencil Icon](../assets/Images/Icons/Icon_Pencil.png)  to open the **Device Editor**:

![The Device Editor](../assets/Images/Introduction/QS_DeviceEditor.png)Here you can add new devices as well as have GameMaker test for a connection to any device(s) that may be connected. The exact contents of this window will depend on the platform specifics (see the section on the [Device Manager](../Setting_Up_And_Version_Information/The_Device_Manager.md) for exact details for any given platform). Once a device has been found or added, it will then be shown in this window, like in this example image for Android:

![Add An Android Device](../assets/Images/Introduction/QS_AddDevice.png)The exact procedure and requirements for setting up devices and troubleshooting issues can be found in the appropriate section of the [GameMaker Knowledge Base](https://help.gamemaker.io/hc/en-us/categories/204246668-GameMaker-Studio-2).

[ConfigConfig](Compiling.htm#)

As explained in the section on [Configurations](../Settings/Configurations.md), you can store certain details for compiling your game as **Configs**. This section of the Targets window permits you to have GameMaker automatically select a specific configuration for a specific target platform.

There are also a number or preferences that can be set to modify and customise the compile workflow, explained on the following page:

-   [Compiling Preferences](../Setting_Up_And_Version_Information/IDE_Preferences/General/Compiling.md)

## Creating A Final Executable Package

You can click the **Create Executable** button ![Compile Icon](../assets/Images/Icons/Icon_Compile.png) in the IDE to start the compiler build or select **Create Executable** from [The Build Menu](../IDE_Navigation/Menus/The_Build_Menu.md). Either process will start the build process which will depend on the target platform selected.

On the GX.games target, it will open a special window allowing you to compile and upload your game to GX.games; on all other targets as well as when you save locally as zip on GX.games, it will open a file explorer window where you can give the final name that you wish to use for your game executable, before clicking _Save_ to start the compile and build process. Once you have done this, the necessary files will be generated so that you can distribute it as you wish.

### You Should Know

Here are some things to keep in mind when creating executables:

-   You will not be able to create an executable if you're not logged in. Use the ![](../assets/Images/Icons/Icon_AccountMenu.png) [Account Menu](../IDE_Navigation/Menus/Version_&_Account_Details.htm#account_menu) menu to log in before creating an executable.
-   For certain platforms, compiling your game project will require that you have set up the correct **build tools** (see [Required SDKs](../Setting_Up_And_Version_Information/Required_SDKs.md)) and also filled in the appropriate [Platform Preferences](../Setting_Up_And_Version_Information/Platform_Preferences.md).
-   Depending on your [licence](https://help.gamemaker.io/hc/en-us/articles/230492887-GameMaker-Free-Licence "Which Licence Is Right For Me?"), you may have the option to build your game via command line, allowing you to set up continuous integration for your project and streamline your building and testing process. See [Building & Testing via Command Line](../Settings/Building_via_Command_Line.md) for more information on command line building.
-   The maximum size of the final game package is 4GB (not including [streamed sounds](../The_Asset_Editors/Sounds.md), [dynamic textures](../Settings/Texture_Information/Dynamic_Textures.md) and [Included Files](../Settings/Included_Files.md)). See [tips for reducing the final game size](https://help.gamemaker.io/hc/en-us/articles/4642066783505-How-to-Reduce-Your-Game-s-Size).
-   Before doing a final build of your project for release, you should **always clear the Asset Compiler cache** (using the "broom" icon ![Clean Cache Icon](../assets/Images/Icons/Icon_Clean.png) at the top of the IDE). GameMaker will cache many of your game files to keep compilation speed to a minimum and these can sometimes get corrupted, so it is safer to clear that cache before doing a release build.

### Compiler Optimisations

The compiler performs optimisations on your game's code. See [Compiler Optimisations](../Settings/Runner_Details/Compiler_Optimisations.md).

By default, any assets that are unused or not referenced directly in your code are stripped from the game's executable. This can be disabled through the [Game Options](../Settings/Game_Options.md) or you can mark tags that should always be preserved through [gml\_pragma](../../../../GameMaker_Language/GML_Reference/OS_And_Compiler/gml_pragma.md)("MarkTagAsUsed", <tags>).

### How Different Targets Build

Each target option saves to a platform-specific format, listed below:

-   **GX.games** - When compiling for the "GX.games" target, you will first be asked the packaging option to use:
    ![](../assets/Images/Introduction/QS_GX.Games_Compile_Options.png)
    Tick the "**Remember Packaging Option?**" checkbox here to use the same setting and not show this window again on subsequent builds.

    Next you'll see the "GX.games Packaging" window:
    ![](../assets/Images/Introduction/Compiling/gx_packaging_1.png)If you chose to **Save locally as a ZIP**, GameMaker will immediately start compiling your game and show any output here. After the game is compiled you're prompted for a save location.

    If you selected any of the **Upload As...** options, GameMaker will attempt to sign you in using [Opera Single Sign-In](../Setting_Up_And_Version_Information/Licencing_Information.md). After you have signed in, GameMaker will start compiling your game and proceed to upload it to GX.games. You can then click on "Edit Game on Opera" to edit it on GX.create and publish it:
    ![](../assets/Images/Introduction/Compiling/gx_game_compiled.png)Please refer to [this page](https://help.gamemaker.io/hc/en-us/articles/4407217145105-How-to-Upload-Your-Games-to-GX-games) to learn more about the GX.games upload process, and [this page](https://help.gamemaker.io/hc/en-us/articles/4625548722193-Setting-Up-For-GX-games) for setting up the various exports, such as [YYC](../Settings/YoYo_Compiler.md) and Mobile.
-   **Windows** - Compiling for Windows will first request that you choose between creating an _Installer_ or a _Zip_ package for x64 Windows (with separate options for building for Arm64 Windows). An installer will be a single executable that will install your game, and the Zip file will be a single \*.zip format compressed file with all your game files stored within (the files will need extracted for the game to run). ![Windows Compile Options](../assets/Images/Introduction/QS_Windows_Compile_Options.png)If you check the box marked **Remember Packaging Option** then GameMaker will remember the choice for all future compiles (this can be reset or changed from the [Windows Preferences](../Setting_Up_And_Version_Information/Platform_Preferences/Windows.md)). You can find out more from the [YoYo Games Help Center](https://help.gamemaker.io/hc/en-us/sections/207157668).

    The Windows target only compiles 64-bit executables.
-   **Ubuntu (Linux)** - Compiling for Ubuntu will ask you to choose between creating an **.AppImage** or a **.zip** file, containing either an x64 or an ARM executable (however AppImage does not support ARM). You can find out more from the [YoYo Games Help Center](https://help.gamemaker.io/hc/en-us/articles/235186168-Setting-Up-For-Ubuntu).
    ![](../assets/Images/Introduction/Ubuntu_Exports.png)**.AppImage** is used for sharing as a package via any distributor except Steam, while **.zip** is used **only** for uploading to Steam (as it uses the Steam Runtime specifically). Because of this, the created .zip cannot be opened as a regular zip file.
-   **HTML5** \- If you have chosen to build HTML5, then an index.html file (this is the default name, but you can give your own name too in the Platform Preferences) along with a folder containing your game files will be created and saved to the specified location. For your game to work you will need both of these to be uploaded to a server. The index.html can also be customised to show your game with a different background colour, at a different position, etc. but a knowledge of HTML is necessary for this, and you can also specify your own custom index file when you build the package (see the [HTML5 Game Options](../Settings/Game_Options/HTML5.md)). You can find out more from the [YoYo Games Help Center](https://help.gamemaker.io/hc/en-us/sections/115000309008).
-   **Android** \- For Android devices, you can choose to build an \*.apk or an \*.aab (Android App Bundle) file from the window that is shown for saving the game:

    ![Andoird APK or AAB File Selector](../assets/Images/Introduction/QS_AndroidFileSelector.png)The type of file you choose will depend on the store that you wish to target, with the \*.aab file being required for Google Play, while the \*.apk file can be used on other stores. You can find out more from the [YoYo Games Help Center](https://help.gamemaker.io/hc/en-us/articles/115001368727-Setting-Up-For-Android).
-   **iOS** \- Compiling to iOS will create an xarchive file which is then used in Xtools to create the final iOS package. Note that **to compile for iOS you will require an Apple Mac computer running OSX or higher as well as the relevant certificates and permissions**. You can find out more from the [YoYo Games Help Center](https://help.gamemaker.io/hc/en-us/articles/115001368747-Setting-Up-For-iOS-Including-iPadOS).
-   **macOS** \- Compiling for the macOS target will first request that you choose between creating a _DMG_ or a _Zip_ file:
    ![](../assets/Images/Introduction/QS_macOS_Compile_Options.png)"Package as DMG" will build a .dmg installer package which can be used to install the game on a Mac computer. Note that during this build process you will see the installer appear on the Mac, which will disappear once the build process is complete.

    "Package as Zip" will build either an \*.app file or a \*.pkg file, depending on whether you want to later upload it to the Mac App Store or not. As with iOS **you will require an Apple Mac computer running OSX or higher as well as the relevant certificates and permissions**. You can find out more from the [YoYo Games Help Center](https://help.gamemaker.io/hc/en-us/articles/235186128-Setting-Up-For-macOS).

### Distributing your Game

Once you have created your executable asset package you can then give the file to other people or place it on your website to download, or upload these files to the different hosting services for individual distribution or even to online stores (like Google Play, Apple App Store or the Microsoft Store) for general distribution and retail.

Note that you are free to distribute the games you create with GameMaker in any way you like, including selling them. Of course, this assumes that the sprites, images, and sounds you used to make it can be distributed or sold as well and that you have the legal rights to all assets, and it also assumes that the game complies with the [YoYo Games EULA for GameMaker](https://gamemaker.io/en/legal/gamemaker-terms-of-service).