---
title: "Texture Groups"
source: "manual.gamemaker.io/monthly/en/Settings/Texture_Groups.htm"
converted: "2025-09-14T04:00:14.709Z"
---

# Texture Groups

![Texture Group Editor](../assets/Images/Settings/Texture_Groups.png)The **Texture Group Manager** is available from [The Tools Menu](../IDE_Navigation/Menus/The_Tools_Menu.md) in the IDE. Here you can add, delete and rename **Texture Groups**.

GameMaker permits you to assign each of the graphics assets in your project (Sprites, Tile Sets, and Fonts) to different texture groups, to optimise the number of texture swaps that the hardware does at any given time in your game.

For that to work, you need to define the necessary texture groups from this window, and then go through the asset list and assign groups to them.

## How Textures Work

Before we dive into creating and editing Texture Groups, let's understand how they're loaded.

A Texture Group is loaded into RAM when the game starts, unless it's a [Dynamic Texture Group](Texture_Information/Dynamic_Textures.md), which is loaded later.

While in RAM memory, the Texture Group stays compressed, as it was on disk.

When an image from a Texture Group is drawn or one of the [pre-fetch](../GameMaker_Language/GML_Reference/Drawing/Textures/texture_prefetch.md) functions is run, all texture pages of the Texture Group are loaded into VRAM. For most texture group formats the texture is first decompressed before being loaded into VRAM. If you're using a **Custom** texture group format, however, the texture is decompressed in real time on the GPU.

NOTE Texture decompression is asynchronous on all platforms except GX.games, which might cause stutters as textures are decompressed in-game. To avoid this, ensure your textures are prefetched during loading screens or other inactive parts of your game.

You can [flush](../GameMaker_Language/GML_Reference/Drawing/Textures/texture_flush.md) a Texture Group to remove it from VRAM (this doesn't remove them from RAM).

## Adding a Texture Group

By default all images in your game will be added to the "Default" texture group, which always exists. You can click on the **Add New** button to create a new texture group, and if you select the name of the group you can change it to something appropriate.

To start with, the group will show "_This group is empty_" for each section of the group (Sprites, Tile Sets and Fonts). Add an asset using the **Add Asset** button at the bottom, or by selecting multiple assets in the list and right-clicking to move those assets into a different group:

![](../assets/Images/Settings/Texture_Groups_MoveTo.png)Alternatively you can add assets to a texture group via the right mouse button ![RMB Icon](../assets/Images/Icons/Icon_RMB.png) menu in [The Asset Browser](../Introduction/The_Asset_Browser.md). You can select one or more Sprite/Tile Set/Font assets and then use the RMB menu to add the assets to any group, as shown below for Tile Sets:

![Asset Browser RMB Menu For Tilesets](../assets/Images/Settings/QS_RMBMenu_Tilesets.png)

Texture groups other than the "Default" one can also be deleted at any time, which will move their contents into the "Default" group.

NOTE If you delete a group by mistake you can use ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) + "Z" to undo the action.

## Editing a Texture Group

Once you have added assets into a Texture Group, you will see them listed on the left of the main Texture Group editor window, and clicking on any of the sprites in this list will show them in the image preview window on the right. This is particularly helpful when working on large projects and you need to be able to see which images have been assigned to which group.

If the images assigned to the group have multiple sub-images (i.e. they are animated), then only the first sub-image is shown in the preview window. You can also right click ![RMB Icon](../assets/Images/Icons/Icon_RMB.png) on an asset to open a small menu giving you the option to move it to another texture group or open the editor for that asset.

Even though the assets are shown in the list as being separate, all sprites, tile sets and fonts will be added to the same texture page, as long as there is room on that texture page. If the texture page is full, GameMaker adds the remaining assets to another texture page (or pages). So by default you cannot get an individual page for each asset type. The only exception to this rule is when you flag a sprite asset as being for a "**Separate Texture Page**", in which case it will be given its own individual texture page (see the section on "Texture Settings" in [The Sprite Editor](../The_Asset_Editors/Sprites.md) for more details).

## Texture Group vs. Texture Page

A single **texture group** can have multiple **texture pages** -- they are not equivalent.

If your game has a lot of unique graphics for each level, then you may define a single texture _group_ for each of the levels, but the group's graphics may require two or more texture _pages_. This depends on whether the selected texture page size (in the [Game Options](Game_Options.md) for your target) is able to fit all the graphics within a texture group.

See: [Texture Pages](Texture_Information/Texture_Pages.md)

## Texture Compression

The textures in a texture group are compressed using the format set under **Texture Group Format**. They can be decompressed before being sent to VRAM or in real time by the GPU.

See: [Texture Compression](Texture_Information/Texture_Compression.md)

## Dynamic Textures

You can set up Dynamic Texture Groups, which can be loaded and unloaded at runtime to save memory.

See: [Dynamic Textures](Texture_Information/Dynamic_Textures.md)

## Group Settings

![](../assets/Images/Settings/Texture_Groups_Settings.png)

The **group settings** in the Texture Group Editor are used to determine exactly how the texture pages for a given group should be created, with the following options available:

-   **Allow Scaling** - Unflagging this will force GameMaker to not scale the texture group under any circumstances. This can be useful, especially when dealing with universal apps, as it allows you to put specific resources like fonts in a group of its own to be used when the app is run on a specific device. For example, fonts can look great on a retina display, but when they are scaled down to draw on a normal display they can look terrible so you can assign them to a special non-scaling group - if developing for the iPhone, you may wish to have this checked, as apps have been rejected due to the images being blurred by texture scaling. This is flagged as _on_ by default.
-   **Automatically Crop** - When you add images into GameMaker, if they have any "space" around them (i.e. 100% transparency) this is automatically cropped when it is added into the texture page and **Automatically Crop** is flagged. However, if, for example, you are using the image as a non-repeating texture for primitives or anything similar, this means that the UV coordinates for texture mapping are not going to be correctly represented. In these cases you can un-flag this option and the sprite will be added to the texture page "as is", maintaining any transparencies that it may have around the edges. This is flagged as _on_ by default.
-   **Generate Mipmaps** - Flagging this option (it is off by default) will tell GameMaker that the original texture page is to be scaled and filtered into multiple resolutions within the texture file. This is normally _off_, but if you are using cameras to zoom in or out on large areas of the game room, or you are working with a 3D game, then you may want to enable this and then use the [Mipmapping Functions](../GameMaker_Language/GML_Reference/Drawing/Mipmapping/Mipmapping.md) to adjust how the game deals with the different mipmap levels. When you flag this checkbox the **Border Size** value will be forced to 8. This is because, when using mipmaps, you need larger borders between images on the texture pages otherwise they start bleeding together at higher mip levels. The default value of 8 will allow the image to be reduced to about a sixteenth of its original size before the sub-images start bleeding together.

    See [Mipmapping](../GameMaker_Language/GML_Reference/Drawing/Mipmapping/Mipmapping.md) for more information on how this option and the border size option are used when it is enabled.
-   **Border Size** - The border size will change the overlap (or "pixel doubling") amount around the edges of all assets on the pages generated for the texture group so that when the images are scaled, there are no gaps (or seams) visible between them. The default is 2 pixels, but in extreme cases where you are zooming the view in or out a great deal then you may need to increase this value. Note that [The Tile Set Editor](../The_Asset_Editors/Tile_Sets.md) has an option to set the output border for tiles (and also provides an explanation of why this is necessary), and this is separate to the border setting here - basically, tiles are generated with an output border for each tile on a temporary texture, and this is then added to the texture page with the border given here around the outside edge.

    This cannot be lower than 0, and enabling Mipmaps will force the border size for the texture page to 8 to help prevent "bleeding" between textures at higher mip levels.
-   **Parent Texture Group** - Here you can choose any of the existing groups to be the "parent" group for the currently selected one. Sprites, fonts and tilesets assigned to "child" groups are placed on a texture page of the parent texture group, if the parent group is included on a target platform. When the parent texture group isn't included on a platform, the child texture group's items are placed on a separate texture page.
-   **Texture Group Format** - Here you can choose the format for the texture page(s) in this texture group. The texture format determines how the texture pages in the texture group are stored on disk and in RAM. It also determines the type of compression used and when the texture is decompressed.

    The **BZ2 + QOI**, **QOI** and **PNG** formats compress all texture images to the given format. You can choose **QOI** if the BZ2 option affects speed on a target platform (e.g. Android), or **PNG** if you wish for the exported PNGs to be modified or use the ["PNGCrush" pragma](../../../../GameMaker_Language/GML_Reference/OS_And_Compiler/gml_pragma.md). For basic use it is recommended to stick with the default option, **BZ2 + QOI**, as it offers the best compression while retaining quality.

    Setting this to **Custom** allows you to use specific texture formats that are optimised for decompression in real time on the GPU. The tool and settings to generate the textures have to be set under **Custom Options**. See [Texture Compression](Texture_Information/Texture_Compression.md) for detailed info.

    NOTE Child texture groups are stored in the same texture group format as their parent, since the assets they contain are added to a texture page of the parent group.

    NOTE On HTML5, only **PNG** textures are supported.

-   **Texture Group Type** - Here you can set whether this is a regular Texture Group or a [Dynamic Texture Group](Texture_Information/Dynamic_Textures.md).
-   **Dynamic Group Path** - Here you can set the path within the final game package where the texture group will be stored. This only works if the group is Dynamic. If this is empty, exported textures are placed at the root of the game package.
-   **Custom Options** - Here you enter the tool and the settings it should use to generate the custom textures. For example, entering BCN -u2 here generates textures encoded as BC7 (BCN) of medium quality (\-u2).
    ![Group settings with a custom texture group format set](../assets/Images/Settings/Texture_Groups_Settings_Custom_Format.png)

## Use Group On...

![](../assets/Images/Settings/Texture_Groups_Exports.png)Other than those settings you can also choose whether to export any given texture group to any given platform by simply checking or unchecking the appropriate boxes from the **Use Group On...** section of the window. Note though that the <Default> texture group is _always exported to every platform_, and you can't check/uncheck any of them (only custom texture groups permit this).

Texture Groups are also linked to the [Configurations](Configurations.md) settings. What this means is that you can define texture groups for each individual configuration of your game, and then set the sprite, tile set or font resource assignments to these different groups and it will be "remembered" when you change to a different configuration. The same will happen to any export options that you have chosen in the Texture Group window, so you can set the texture groups to export to specific platforms on a per-configuration basis.

One use for this is, for example, that you could make an iPad configuration and for that create 2048x2048px texture pages (setting this up via the [Game Options](Game_Options.md)). You would then assign all the graphics assets to the appropriate texture group, and when finished, you would then change to a different configuration (for HTML5, for example) and from the Texture Group window, create new texture groups that are 512x512px, assigning the assets to these new groups.