---
title: "iOS"
source: "manual.gamemaker.io/monthly/en/Settings/Game_Options/iOS.htm"
converted: "2025-09-14T04:00:14.518Z"
---

# iOS Game Options

This section outlines the different options available to you that control how your iOS game projects will be compiled. The different sections are:

## General

![iOS General Options](../../assets/Images/Settings/iOS_General_Options.png)The first part of the General section covers the **Product Information** about your game, including its **Display Name**, its **Bundle Name**, **Version** info and **Build Number**. Note that the Bundle Name must be in the correct reverse URL format for the final build of the game to work correctly, e.g. com.\[Company\].\[GameName\]. Here you can also give the **Team Identifier** that you wish to use for signing the final application that GameMaker creates for you. Setting it here will override the Team ID that you have supplied in the [iOS Preferences](../../Setting_Up_And_Version_Information/Platform_Preferences/iOS.md).

"**Min Version**" is the minimum version of iOS that the game can be played on.

The next thing to do is fill in the **Build Settings** for your game. To start with you set the allowed **Orientation**s that your game can be run on for the best user experience. The available options are:

-   Allow portrait orientation
-   Allow flipped portrait orientation
-   Allow landscape orientation
-   Allow flipped landscape orientation

You can then go to the **Device Support** section, with the following options available for the types of device to target:

-   **iPhone or iPod Touch**: iPhone 6 and above or iPod Touch devices
-   **iPad**: iPad devices
-   **Both**: Both iPhone/iPod and iPad

You can check or uncheck the option to **Defer Home Indicator Output**. When this is checked, the home bar will always be shown at a low alpha, and the first swipe wakes the bar and the second swipe takes you home. If the option is unchecked, then the bar is not shown in-game, but the first edge swipe will take you home. Default is unchecked.

Lastly, you can **Enable broadcast networking**. When enabled, GameMaker will add the multicast entitlement ([com.apple.developer.networking.multicast](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_developer_networking_multicast)) to broadcast or multicast messages that you send in your game.

## Graphics

![iOS Graphics Options](../../assets/Images/Settings/iOS_Graphics_Options.png)Here you can change the following details related to how your game will be displayed, with the following options available:

-   **Interpolate colours between pixels**: Turns on linear interpolation, which basically "smooths" pixels. For crisp pixel graphics, it should be off, but if you have nice alpha blends and smoothed edged graphics it is better left on. This is on by default.
-   **Halve iPad 1 texture sizes:** The iPad 1 has much less texture memory than more recent devices so you can enable this option to reduce the size of textures by half if you want to target this device or get maximum compatibility.
-   **Scaling**: Here you can select to scale the draw canvas maintaining the aspect ratio within the device screen - adding "padding" around the edges to fit the screen - or you can select to have the draw canvas stretched to fit the device screen.

Finally there is the option to set the size of the texture page. The default (and most compatible) size is 2048x2048, but you can choose from anywhere between 256x256 up to 8192x8192. There is also a button marked **Preview** which will generate the texture pages for this platform and then open a window so that you can see how they look. This can be very useful if you wish to see how the texture pages are structured and to prevent having texture pages larger (or smaller) than necessary. See [Texture Pages](../Texture_Information/Texture_Pages.md) for more information.

NOTE Be aware that the larger the size of the texture page, the less compatible your game will be with different browsers and devices.

## Icons

![iOS Images Icons Options](../../assets/Images/Settings/iOS_Icons_Options.png)This section permits you to add the various different icons required by the various iPhone and iPad devices and the different parts of the iOS App Store. These icons should be authored either as 24bit \*.png images or 32bit \*.png images with full alpha at the size specified for each one.

It is worth noting that GameMaker has a [Project Image Generator](../../IDE_Tools/Project_Image_Generator.md) tool which can be used to automatically create all the images required for all the different target platforms your game is being compiled to. If you use this tool, you should revise the images created to ensure that they are what you require. The tool will generate Icons as well as Images (see the section below).

NOTE On importing an older project you may be presented with the following warning:![iOS Icon Warning](../../assets/Images/Settings/iOS_Icon_Warning.png)This comes up because the current iOS target version has changed the format of the required icons since the project was previously loaded. You will be required to re-create all the icons, as they will have been replaced with the generic GameMaker icons (you can use the above mentioned Project Image Generator tool to do this quickly).

## Images

![iOS Images Splash Screens Options](../../assets/Images/Settings/iOS_Images_Options.png)This section permits you to add separate graphics as **Launch Screens** (the image that will be shown briefly while your app loads) for each of the device orientations, as well as the **Border Colour** that will be used as the background for launch screens that are not set to fill the full screen. These images must be authored as individual 24bit \*.png images with no transparencies and at an appropriate size. Note that this is _not_ considered a splash screen and Apple have some fairly strict guidelines on how this should be set up and used. See the developer page on [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/launch-screen/) for more information.

You can also set how the launch screen should be displayed from the following options:

-   **Keep Aspect Ratio**: This will maintain the aspect ratio of the image compared to the device screen, adding "padding" around the edges where required.
-   **Crop To Fit**: This will keep the image 1:1 with the device screen and crop (or pad) the edges as required.
-   **Stretch**: This will stretch the image to fill the device screen (and may distort the image shown).