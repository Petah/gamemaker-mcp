---
title: "GX.games"
source: "manual.gamemaker.io/monthly/en/Settings/Game_Options/GX_Games.htm"
converted: "2025-09-14T04:00:14.421Z"
---

# GX.games Game Options

The GX.games Game Options allow you to modify the properties for your game and mod. The following sections are provided:

## General

![](../../assets/Images/Settings/Game_Options/Opera_GX_General_Options.png)This section displays the options that are used when you select "**Upload as Game**" when creating an executable for GX.games.

This window shows your GX.games sign-in status. You can click on the ![](../../assets/Images/Icons/Icon_Refresh.png) Refresh icon to log in using your Opera account.

You then have the following options:

-   **Select game**: From this list, you can either select an existing game to update, or choose to upload a new game.
-   **Game Name**: This is your game's name (title) on GX.games.

    IMPORTANT In order for the upload to GX.games to succeed, it's important that you only use allowed characters in the game's name (which, by default, is set to your GameMaker project's name, so make sure to either choose a valid project name or change the game's name manually afterwards).

    If you upload a game with a title that has forbidden characters, you will get this error: Incorrect Data. Check the output

    The allowed characters are:
    -   a-z, A-Z (with a support of local schemas such as å)
    -   0-9
    -   whitespace
    -   : - ! ? . , ' & ( )
-   **Version**: This is the version of the game that was last uploaded. You can only change this field before your game has been uploaded to GX.games.
-   **Next Version:** This is the version number used for your next GX.games upload. You can only change this after your game has been uploaded to GX.games. You do not need to modify this manually for each upload, as GameMaker will automatically increment the last digit of the version number for you.
-   **Register on GX.games**: Click on this button to register a new entry on GX.games. This is only valid when "**Select game**" is set to "**New game**".
-   **Select group**: Before uploading a new game, you can select the studio that the game will belong to.
-   **Edit Game on Opera**: This opens GX.create and takes you to your game's "Game details" page. This is only clickable when you're logged in and your game is uploaded.
-   **Internal Share URL**: This opens the private version of your game, only when it has been enabled on GX.create.
-   **Public Share URL**: This opens the public version of your game, only when it has been enabled on GX.create.

    Both of these URLs can be shared with others to allow them to play your game.

## Graphics

![](../../assets/Images/Settings/Game_Options/Opera_GX_Graphics_Options.png)Here you can change the following details related to how your game will be displayed:

-   **Display cursor**: Controls whether the mouse cursor is visible when your game starts. Useful for games that don't require mouse input or use a [custom mouse sprite](../../GameMaker_Language/GML_Reference/General_Game_Control/cursor_sprite.md).
-   **Interpolate colours between pixels**: Turns on linear interpolation, which basically "smooths" pixels. For crisp pixel graphics, it should be off, but if you have nice alpha blends and smoothed edged graphics it is better left on. This is on by default.
-   **Scaling**: Your game can be configured to scale the draw canvas automatically to **maintain the aspect ratio** within the browser, or you can select to have it run **full scale**. The full scale option will not full screen the game in the browser, but rather stretch what is drawn to fit the canvas size, as defined by the first room of the game. This is set to keep aspect ratio by default.

Finally there is the option to set the size of the texture page. The default (and most compatible) size is 2048x2048, but you can choose from anywhere between 256x256 up to 8192x8192. There is also a button marked ****Preview**** which will generate the texture pages for this platform and then open a window so that you can see how they look. This can be very useful if you wish to see how the texture pages are structured and to prevent having texture pages larger (or smaller) than necessary. For more information on texture pages, please see [here](../Texture_Information/Texture_Pages.md).

## Mod

![](../../assets/Images/Settings/Game_Options/Opera_GX_Mod_Options.png)This section displays the options that are used when you select "**Upload as Live Wallpaper Mod**" when creating an executable for GX.games.

This window also shows your GX.games sign-in status. You can click on the ![](../../assets/Images/Icons/Icon_Refresh.png) Refresh icon to log in using your Opera account.

You then have the following options:

-   **Select Mod**: From this list, you can either select an existing mod to update, or choose to upload a new mod.
-   **Mod Name**: This is your mod's name (title) on GX.games.

    IMPORTANT In order for the upload to GX.games to succeed, it's important that you only use allowed characters in the game's name (which, by default, is set to your GameMaker project's name, so make sure to either choose a valid project name or change the game's name manually afterwards).

    If you upload a game with a title that has forbidden characters, you will get this error: Incorrect Data. Check the output

    The allowed characters are:
    -   a-z, A-Z (with a support of local schemas such as å)
    -   0-9
    -   whitespace
    -   : - ! ? . , ' & ( )
-   **Version**: This is the version of the mod that was last uploaded. You can only change this field before your mod has been uploaded to GX.games.
-   **Next Version:** This is the version number used for your next GX.games upload. You can only change this after your mod has been uploaded to GX.games. You do not need to modify this manually for each upload, as GameMaker will automatically increment the last digit of the version number for you.
-   **Register on GX.games**: Click on this button to register a new entry on GX.games. This is only valid when "**Select Mod**" is set to "**New mod**".
-   **Select group**: Before uploading a new mod, you can select the studio that the mod will belong to.
-   **Edit Mod on Opera**: This opens GX.create and takes you to your mod's details page. This is only clickable when you're logged in and your mod is uploaded.
-   **Internal Share URL**: This opens the private version of your mod, only when it has been enabled on GX.create.
-   **Public Share URL**: This opens the public version of your mod, only when it has been enabled on GX.create.

    Both of these URLs can be shared with others to allow them to get your mod.