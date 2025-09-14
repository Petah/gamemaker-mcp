---
title: "tvOS"
source: "manual.gamemaker.io/monthly/en/Settings/Game_Options/tvOS.htm"
converted: "2025-09-14T04:00:14.562Z"
---

# tvOS Game Options

This section outlines the different options available to you that control how your tvOS game projects will be compiled. The different sections are:

## General

![iOS General Options](../../assets/Images/Settings/tvOS_General_Options.png)Here you can fill in the **Product Information** about your game, including its **Display Name**, its **Bundle ID,** **Version** info and **Build Number**. Note that the Bundle ID must be in the correct reverse URL format for the final build of the game to work correctly, e.g. com.\[Company\].\[GameName\]. You can also set the **App Output** location on the build Mac, and you can give the **Team Identifier** that you wish to use for signing the final application that GameMaker creates for you. Setting it here will override the Team ID that you have supplied in the [tvOS Preferences](../../Setting_Up_And_Version_Information/Platform_Preferences/tvOS.md).

"**Min Version**" is the minimum version of tvOS that the game can be played on.

Lastly, you can **Enable broadcast networking**. When enabled, GameMaker will add the multicast entitlement ([com.apple.developer.networking.multicast](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_developer_networking_multicast)) to broadcast or multicast messages that you send in your game.

## Graphics

![tvOS Graphics Options](../../assets/Images/Settings/tvOS_Graphics_Options.png)Here you can change the following details related to how your game will be displayed, with the following options available:

-   **Interpolate colours between pixels**: Turns on linear interpolation, which basically "smooths" pixels. For crisp pixel graphics, it should be off, but if you have nice alpha blends and smoothed edged graphics it is better left on. This is on by default.
-   **Scaling**: Here you can select to scale the draw canvas maintaining the aspect ratio within the device screen - adding "padding" around the edges to fit the screen - or you can select to have the draw canvas stretched to fit the device screen.

Next there is the option to set the size of the texture page. The default (and most compatible) size is 2048x2048, but you can choose from anywhere between 256x256 up to 8192x8192. There is also a button marked **Preview** which will generate the texture pages for this platform and then open a window so that you can see how they look. This can be very useful if you wish to see how the texture pages are structured and to prevent having texture pages larger (or smaller) than necessary. For more information on texture pages, please see [here](../Texture_Information/Texture_Pages.md).

NOTE Be aware that the larger the size of the texture page, the less compatible your game will be with different browsers and devices.

Finally, you choose to **Display a cursor** or not. If checked, the OS will show a cursor whenever the mouse is moved (at the mouse position), and the cursor will fade out and disappear when the mouse is not moved for a period of time. If unchecked, then no cursor will be shown.

## Icons

![tvOS Images Icons Options](../../assets/Images/Settings/tvOS_Icons_Options.png)This section permits you to add the various different **Icons** required by the various devices and the different parts of the App Store. These icons should be authored as 24bit \*.png images at the size specified for each one.

It is worth noting that GameMaker has a [Project Image Generator](../../IDE_Tools/Project_Image_Generator.md) tool which can be used to automatically create all the images required for all the different target platforms your game is being compiled to. If you use this tool, you should revise the images created to ensure that they are what you require, especially for this platform as the icons required are rectangular and not square. This tool will also generate Images (explained below) as well as Icons.

## Images

![tvOS Images Splash Screens Options](../../assets/Images/Settings/tvOS_Images_Options.png)This section permits you to add separate graphics as "Top Shelf" images and splash screens for each of the different tvOS target sizes. These images must be authored as individual 24bit \*.png images with no transparencies and at the correct size. You can also set a minimum time for showing the splash screens from the drop down menu at the bottom (from 0 to 10 seconds).

As mentioned in the section on Icons, you can use the **Project Image Generator** to create these images.