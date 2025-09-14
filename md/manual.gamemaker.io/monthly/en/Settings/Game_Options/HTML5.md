---
title: "HTML5"
source: "manual.gamemaker.io/monthly/en/Settings/Game_Options/HTML5.htm"
converted: "2025-09-14T04:00:14.447Z"
---

# HTML5 Game Options

This section outlines the different options available to you that control how your HTML5 game projects will be compiled. The different sections are:

## General

![HTML5 General Options](../../assets/Images/Settings/HTML5_General_Options.png)In this section you have fields to fill in the following information about your game:

-   **Browser Title**: Here you can give text to be used for the title bar of the tab for your game in the browser.
-   **Version**: The version number for your game.
-   **Name of folder**: The name for the folder where your HTML5 game files will be stored (default is "html5game").
-   **Output Name**: This is the output HTML file name and can be changed to something other than the default "index.html".

Below the game information fields you have the following options too:

-   **Output Debug To Console**: This will send all debug output to the JS console of your browser. This is off by default.
-   **Display Cursor**: This will disable the mouse cursor when it is over the game canvas. This is on by default.
-   **Display "Running Outside Server" Alert**: If you are testing a game locally (ie: clicking on the index file from your computer rather than a server - not recommended), then you normally get a warning informing you that things won't work as you may expect due to browser security for local files. You can suppress this warning by un-checking this option. It is on by default.

Below the general settings, you have the **Advanced** options, which are:

-   **Included file as index.html**: This is for adding a custom "index.html" file to use instead of the pre-defined one that GameMaker generates by default. This can be very useful if you have a website design implemented or want to include certain features in all your HTML5 builds. The file to use must be included as an [Included File](../Included_Files.md) in the game project.
-   **Loading Bar Extension**: This will change the default loading bar for one that has been added to your GameMaker project as an [Extension](../../The_Asset_Editors/Extensions.md).
-   **Prepend output .js**: Here you can prepend the \*.js output with any extra JavaScript necessary for your game. For example, a Chrome Store app may require that you add window.localStorage = undefined; to the output JS, for which you would use this option.

## Analytics

![HTML5 Analytics Options](../../assets/Images/Settings/HTML5_Analytics_Options.png)This section permits you to add analytics to your game, permitting you to use certain third-party products to track your game and its sales or plays. You can specify whether to use [Flurry Analytics](https://www.flurry.com/) or [Google Analytics](https://marketingplatform.google.com/about/analytics/) to track your game. Due to the nature of these functions, you can only have one active at a time, and once you have flagged the **Enable Flurry Analytics** or **Enable Google Analytics** you should also add the unique ID that you have been assigned into the appropriate area.

For information on the functions that you can use to send analytics data, please see [here](../../GameMaker_Language/GML_Reference/Web_And_HTML5/Web_And_HTML5.md).

## Graphics

![HTML5 Graphics Options](../../assets/Images/Settings/HTML5_Graphics_Options.png)Here you can change the following details related to how your game will be displayed (note that not all browsers will display your game in the same way, so test these options on as many browsers as possible to make sure that they have the desired effect):

-   **Allow switching to fullscreen**: Checking this will allow the user to toggle the game from windowed to fullscreen mode using  ![Control Icon](../../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../../assets/Images/Icons/Icon_Cmd.png) + "F" on Mac and F10 on Windows. This is on by default.
-   **Interpolate colours between pixels**: Turns on linear interpolation, which basically "smooths" pixels. For crisp pixel graphics, it should be off, but if you have nice alpha blends and smoothed edged graphics it is better left on. This is on by default.
-   **Center the game in the browser**: Checking this will automatically center the game screen within the browser running the game. This is off by default.
-   **Use Built-In Particles**: This option will export the sprites required for the built-in particle system along with your game. These sprites are stored in individual texture pages, meaning that they are not the most efficient method of generating particles for this platform, therefore it is recommended that (unless using WebGL) you un-check this option and use your own particle sprites which will be stored on the main texture pages all together for your game. This is on by default.
-   **Use Built-In Font**: This option will export the GameMaker built-in font along with the rest of the game files. This will slightly increase the size of the texture pages and require a small amount of extra memory and storage, so if your game doesn't use the built-in Arial font, this should be disabled. It is on by default.
-   **WebGL**: Choose whether to switch off WebGL support, make it optional (auto-detect), or make it a requirement for your game. Shaders will only be usable when WebGL is allowed and supported on the device running the game. It should be noted that to test performance under all circumstances, you should have this as disabled, then normally set it to auto-detect for publishing. Making it a requirement may reduce considerably the compatibility that your game has with different browser types. This is set to auto-detect by default.
-   **Scaling**: Your game can be configured to scale the draw canvas automatically to **maintain the aspect ratio** within the browser, or you can select to have it run **full scale**. The full scale option will not full screen the game in the browser, but rather stretch what is drawn to fit the canvas size, as defined by the first room of the game. This is set to keep aspect ratio by default.

Finally there is the option to set the size of the texture page. The default (and most compatible) size is 2048x2048, but you can choose from anywhere between 256x256 up to 8192x8192. There is also a button marked ****Preview**** which will generate the texture pages for this platform and then open a window so that you can see how they look. This can be very useful if you wish to see how the texture pages are structured and to prevent having texture pages larger (or smaller) than necessary. For more information on texture pages, please see [Texture Pages](../Texture_Information/Texture_Pages.md).

NOTE Be aware that the larger the size of the texture page, the less compatible your game will be with different browsers and devices.

## Images

![HTML5 Images Options](../../assets/Images/Settings/HTML5_Images_Options.png)This section is where you can define the **Favicon** and the **Splash Screen**. The icon should be authored as an \*.ico file and can be 16x16, 32x32, 48x48, or 64x64 pixels in size, and 8-bit, 24-bit, or 32-bit in colour depth. The splash screen should be the size of the canvas that is going to hold your game and will override any loading bars if you tick the Use Splash Screen option (ie: you can have a loading bar, OR a splash screen, but not both). Smaller or larger images are permitted but will be scaled to fit. The splash screen should be a \*.png image.

It is worth noting that GameMaker has a [Project Image Generator](../../IDE_Tools/Project_Image_Generator.md) tool which can be used to automatically create all the images required for all the different target platforms your game is being compiled to. If you use this tool, you should revise the images created to ensure that they are what you require.

## Social

![HTML5 Social Options](../../assets/Images/Settings/HTML5_Social_Options.png)The social tab is used for setting up **Facebook** communication in your game. If you require the Facebook functions, you need to click the "Use Facebook" checkbox and then supply the **Facebook App ID** and **Facebook App Display Name**. Note that all Facebook functionality is accessed via an extension, and when you first check the **Use Facebook** box you will be prompted to download and install the Facebook extension from [The Marketplace](../../Introduction/The_Marketplace.md) (you may need to log into your [YoYo Account](https://help.gamemaker.io/hc/en-us/articles/216757288-Creating-a-GameMaker-Account) before it can be downloaded).