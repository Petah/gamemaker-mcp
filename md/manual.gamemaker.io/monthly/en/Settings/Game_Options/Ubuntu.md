---
title: "Ubuntu"
source: "manual.gamemaker.io/monthly/en/Settings/Game_Options/Ubuntu.htm"
converted: "2025-09-14T04:00:14.475Z"
---

# Ubuntu Game Options

This section outlines the different options available to you that control how your Ubuntu (Linux) game projects will be compiled. The different sections are:

## General

![Ubuntu General Options](../../assets/Images/Settings/Ubuntu_General_Options.png)This tab is where you set the name of your game as it is to be displayed while running, and can also supply a contact email and a description (short and long), as well as a URL for the homepage of the game or the developer.

Here you also have the option is for enabling **Steam** in your game. If you enable this option, make sure you have the Steamworks SDK installed (see [here](../../../../../Setting_Up_And_Version_Information/Platform_Preferences/Steam.md)), and that you have added the **Steam app ID** into the [General Options](../Game_Options.md) for the game.

Finally you have the option to **Disable file system sandbox**. Checking this will disable the GameMaker sandboxing for saving and loading files, permitting your games to access files from anywhere on the system running the game. This option is unchecked by default, as we recommend that you maintain the GameMaker sandbox for files on all systems and when checked, some save/load areas may still not be available depending on the OS-level permissions. For more information on the sandbox, please see the pages on the GameMaker [File System](../../Additional_Information/The_File_System.md).

## Graphics

![Ubuntu Graphics Options](../../assets/Images/Settings/Ubuntu_Graphics_Options.png)The graphics options are those that you should configure to determine how your game will use the graphics card of your target Ubuntu machine. The following options are included for you to modify:

-   **Start Fullscreen**: If this is checked, the game is set to start in fullscreen mode otherwise it will start windowed. Note that enabling this does not guarantee that the game will start in fullscreen, as the OS may block fullscreen switching for a variety of reasons. This is off by default.
-   **Allow Fullscreen Switching**: With this ticked the user can switch from fullscreen to windowed and back again using the standard Ubuntu OS shortcuts. This is off by default.
-   **Interpolate colours between pixels**: Turns on linear interpolation, which basically "smooths" pixels. For crisp pixel graphics, it should be off, but if you have nice alpha blends and smoothed edged graphics it is better left on. This is on by default.
-   **Display Cursor**: When this option is enabled, the default OS cursor will be shown in your game. If this is disabled, then while the mouse is over the game window, there will be no visible cursor unless you have created one as part of the game project (this is on by default).
-   **Use synchronization to avoid tearing**: This toggles v-sync on or off. Note, that if you have a game with a room speed of 120 and the player has a monitor with a refresh rate of 60, turning this option on will lock your game speed to 60 too. This is off by default.
-   **Allow window resize**: Checking this permits the user to change the size of the game window. This option is off by default.
-   **Scaling**: Here you can choose to maintain aspect ratio (so a 4:3 room will be "letter boxed" on a 16:9) or to scale fully (stretching the image to fit the full screen).

    WARNING _Switching off the application surface will disable all the scaling options set in the Ubuntu Game Options until it has been switched back on again. See The Application Surface for further details._

Finally there is the option to set the size of the texture page. The default (and most compatible) size is 2048x2048, but you can choose from anywhere between 256x256 up to 8192x8192. There is also a button marked ****Preview**** which will generate the texture pages for this platform and then open a window so that you can see how they look. This can be very useful if you wish to see how the texture pages are structured and to prevent having texture pages larger (or smaller) than necessary. For more information on texture pages, please see [here](../Texture_Information/Texture_Pages.md).

NOTE Be aware that the larger the size of the texture page, the less compatible your game will be on PC's with lower specifications.

## Images

![Ubuntu Images Options](../../assets/Images/Settings/Ubuntu_Images_Options.png)Here you can add a **Splash Screen** for your game, and set the game **Icon** that will be used. The icon must be a 64x64 pixel image in the .png format, and the splash screen should be at least the same size as the first room in your game (or its view port) and be .png format too. The splash screen will be shown while the game loads, and can be enabled or disabled by checking the **Use Splash Screen** option (which is off by default).

It is worth noting that GameMaker has a [Project Image Generator](../../IDE_Tools/Project_Image_Generator.md) tool which can be used to automatically create all the images required for all the different target platforms your game is being compiled to. If you use this tool, you should revise the images created to ensure that they are what you require.