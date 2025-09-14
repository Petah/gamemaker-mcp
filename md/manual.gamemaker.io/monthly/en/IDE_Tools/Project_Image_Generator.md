---
title: "Project Image Generator"
source: "manual.gamemaker.io/monthly/en/IDE_Tools/Project_Image_Generator.htm"
converted: "2025-09-14T04:00:12.371Z"
---

# Project Image Generator

![Generate Project Images](../assets/Images/IDE%20Tools/Project_Image_Generator.png)The **Project Image Generator** is accessed from the [Tools Menu](../IDE_Navigation/Menus/The_Tools_Menu.md) at the top of the GameMaker IDE. This tool is designed to quickly create all the different splash screens, promo images and icons that are required by all the different target platforms from a single set of images. You supply the base image and the base icon and then click the **Generate** button, and your [Game Options](../Settings/Game_Options.md) for each platform will update with the new images.

For this to work correctly you need to supply a high resolution splash screen and a high resolution icon image. The recommended sizes would be:

-   **Splash Screen**: at least 1920x1080px, or 1080x1920px for portrait, and authored as a 24bit \*.png with no transparencies.
-   **Icons**: at least 1024x1024px (which is the size of the largest icon required), and authored as a 24bit \*.png which can have transparencies

Once you have supplied these images they will be shown in the **Preview Windows** and you can then set the type of "fit" to be used when applying them to the different platforms. You can choose from the following:

-   **Keep Aspect Ratio** - this will scale the image to fit maintaining the aspect ratio and adding in a background colour to fill in the sides if the fit is not 1:1
-   **Stretch To Fit** - this will stretch the images to fit the full size of the image/icon.
-   **Crop To Fit** - this will take the base image and make it fit best along either the horizontal or vertical axis and then crop the remainder. For example, if you have a 640x480 image that has to be used as a splash screen for 480x800, then the image will be scaled _up_ to fit the vertical axis (480 -> 800) and the rest of the image will be cropped away. Likewise if you have a 1080x1920 image that has to fit 800x800 then the image will be scaled down to fit the horizontal axis and the rest cropped away.

You can also set the **background colour** for both icons and images. This colour will be used to "pad" the image when scaled with aspect ratio. The following image shows how this will look once everything has been set up:

![Generate Project Images Example](../assets/Images/IDE%20Tools/Project_Image_Generator_Example.png)Now all you have to do is click on **Generate** and GameMaker will populate all the Game Options **Image** and **Icon** settings with images for each platform.

**NOTE**: The exception to the above statement is [Android Adaptive Icons](../Settings/Game_Options/Android.md). These **will not be generated** using this tool due to the way they are structured.

**IMPORTANT!** While this tool will generate all the images you require, that does not mean it is perfect! It will try to do its best to make the images suit the different sizes and resolutions for each platform but sometimes this may not look how you really want since there really is no "one size fits all" solution. Therefore after running this tool we recommend that you revise all the images in each platforms Game Options and tweak those that may not look exactly how you want manually.