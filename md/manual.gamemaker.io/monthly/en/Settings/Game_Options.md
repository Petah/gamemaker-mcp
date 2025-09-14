---
title: "Game Options"
source: "manual.gamemaker.io/monthly/en/Settings/Game_Options.htm"
converted: "2025-09-14T04:00:14.583Z"
---

# Game Options

The Game Options are split into two sections, Main Options and the Platform Settings. The main options start with the **General** options, which is where you can set certain things that will affect the game regardless of the platform that it is being designed to run on.

![General Game Options](../assets/Images/Settings/Game_Options/General_Options.png)The window has the following sections:

-   **Default scripting language**: Choose whether Object events and Scripts in the current project should use GML Code or GML Visual, or whether it should always ask on creating a new script.
-   **Game Frames Per Second**: This value sets the limit on the number of frames per second that GameMaker should try to maintain your games when running. This value represents the number of times that the game loop will run in one second (a single game loop is considered a single "frame") and is set to a default value of 60, although 30 is often used too. There are many arguments about which game speed is the ideal, but the actual answer depends on what type of game you are making, the size of the room, the number of instances and how intensive the code is. For example, if you have a large room and a game speed of 30, the game may appear "choppy" as the larger the area you are looking at, the easier it is for the eye to perceive low game speeds, but if the game is intensive then setting the game speed to 120 may cause the game to "lag" as the FPS drops due to the amount of processing being done. So take care with this value and try to always adjust it to what your game needs.
-   **Default Draw Colour**: The default colour for drawing text or forums (and other things) when no colour has been set using code.
-   **Default Draw Colour Outside the room region**: The default colour that will be used to clear the background of any area outside of the game room.
-   **Generate Project Images**: Clicking this will open the [Project Image Generator](../IDE_Tools/Project_Image_Generator.md) tool.
-   **Project Start Date**: The date that the project was initiated.
-   **Project Use Time**: The length of time that has passed since you initiated the project.
-   **Project GUID**: This is the unique identifier that is created for each project within GameMaker. If you wish to change this you can click the **Create New GUID** button to generate a new one.
-   **Enable Source Control**: If you wish the project to be under SCM (Source Control Management) then you need to check this. It is off by default (see [Source Control](../IDE_Tools/Source_Control.md)).
-   **Author**: The name of the game author (or publisher or studio).
-   **Accept Spine Licence**: Here you can check the box to be shown the Spine Runtime Licence and accept it. This will permit you to use Spine sprites in your game (this licence will also be shown the first time you try to add a Spine sprite to your project and haven't checked the licence here beforehand).
-   **Deprecated Behaviours**: This section contains checkboxes that can be used to enable deprecated behaviours for the current project. All of these are disabled by default and it is recommended to keep them disabled for new projects.
    -   **Collision Compatibility Mode**: This tells GameMaker to use the legacy collision system used before the 2022 versions (which used integer values instead of floats). Read [Collision Compatibility Mode](../GameMaker_Language/GML_Reference/Movement_And_Collisions/Collisions/Collision_Compatibility_Mode.md) for more information.
    -   **Hide Audio Errors**: Clicking this disables audio errors and prints messages to the Output Log instead.
    -   **Legacy JSON parsing**: Checking this enables legacy JSON parsing behaviour, which throws no errors when the JSON input string has extra characters at the end.
    -   **Legacy Number Conversion**: Checking this enables legacy string to number conversion, which throws no errors when the string has extra characters at the end that aren't part of the number.
    -   **Legacy Other Behaviour**: Checking this enables legacy behaviour of [other](../GameMaker_Language/GML_Overview/Instance%20Keywords/other.md). See [Legacy other Behaviour](../GameMaker_Language/GML_Overview/Instance%20Keywords/other.htm#legacy_other_behaviour).
    -   **Enable Copy on Write Behaviour for Arrays**: This enables the deprecated [Copy on Write](../GameMaker_Language/GML_Overview/Arrays.htm#copy_on_write) array behaviour.
-   **Automatically remove unused assets when compiling**: This option enables automatic removal of unused assets when compiling. When enabled, any unused assets that are removed will be logged in the compile output of the project. This setting is enabled by default. You can mark tags as used with [gml\_pragma](../../../../GameMaker_Language/GML_Reference/OS_And_Compiler/gml_pragma.md)("MarkTagAsUsed", <tags>) and any assets with the specified tags will not be stripped when this option is enabled.

The Main Options section also contains a menu for [Template Info](Game_Options/Template_Info.md).

[The Asset Browser](../Introduction/The_Asset_Browser.md) will also have other Game Options available to you depending on the target platforms that are available for the [licence](../Setting_Up_And_Version_Information/GMS2_Version_Information.md) that you have and not all of them may be available or visible.

## Platform Settings

The following platform-specific game options exist:

-   [GX.games](Game_Options/GX_Games.md)
-   [Windows](Game_Options/Windows.md)
-   [macOS](Game_Options/macOS.md)
-   [Ubuntu](Game_Options/Ubuntu.md)
-   [HTML5](Game_Options/HTML5.md)
-   [Android](Game_Options/Android.md)
-   [iOS](Game_Options/iOS.md)
-   [tvOS](Game_Options/tvOS.md)

NOTE The various **Console Game Options** are not listed here due to the various legal restrictions maintained by the different companies. If you have a Console Licence, then you can get this information from the [YoYo Games Helpdesk](https://help.gamemaker.io/hc/en-us/categories/202590248-Console-Support), but you must first contact YoYo Games with your console ID email and request permission to view the different sections.

Some GameMaker projects may also show Game options for the **Amazon Fire** target. These are legacy, read-only options as GameMaker now supports the Fire platform directly using the **Android** game options. If your project still shows Amazon Fire, you can find out information about the options from the following page:

-   [Amazon Fire (Legacy)](Game_Options/Amazon_Fire.md)