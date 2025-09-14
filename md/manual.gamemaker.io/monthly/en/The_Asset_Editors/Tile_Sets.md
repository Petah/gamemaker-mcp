---
title: "The Tile Set Editor"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Tile_Sets.htm"
converted: "2025-09-14T04:00:17.043Z"
---

# The Tile Set Editor

![Tile Set Editor](../assets/Images/Asset_Editors/Editor_Tilesets.png)A **tile set** is a graphic resource for drawing levels and other static components of your game. A tile set is comprised of a single image that is then split into different "cells" (tiles), and each tile can then be placed into the room editor to create a complete image. Below you can see two example sprites that can be used as tile sets:

![Tile Set Example](../assets/Images/Asset_Editors/Editor_Tilesets_Example.png)

Images by [Lost Garden](https://www.lostgarden.com/2006/07/more-free-game-graphics.html)

These are the most common ways that people create tile sets - either all jammed up together or with little spaces separating them out, and GameMaker can handle both types. Essentially all tile sets must be comprised of images that fit within a clearly defined grid, with each cell of the grid being the _exact same size_ (note that while the images shown above are all made up of square tiles, a tile set can be made from rectangular tiles too).

When creating your tile sets, keep in mind that **the top left grid cell must _always_ be empty** as this is the tile that GameMaker will use for "empty" tiles in a room and for erasing existing tiles (and even if you have pixels in that part of the image they will be ignored).

When you first create a tile set resource the Tile Set Editor window will open with the following options:

[NameName](Tile_Sets.htm#)

Here you can give a name to your tile set. Names can only be alpha-numeric and may only use the underbar "\_" symbol, and they cannot start with a number.

[SpriteSprite](Tile_Sets.htm#)

Here you can select the [sprite](../Quick_Start_Guide/Creating_Sprites.md) asset from which to create our tile set. Clicking on the main button will open the Asset Explorer where you can choose the sprite you wish to use for the tile set:

![The Asset Explorer Window](../assets/Images/Asset_Editors/Editor_Tilesets_AssetExplorer.png)

NOTE Assigning a [non-bitmap sprite](../Settings/Texture_Information/Non-Bitmap_Sprites.md) will convert it into a bitmap for use with the Tile Set and may end up looking different.

You can also click on the **New Sprite** button ![New Sprite Icon](../assets/Images/Icons/Icon_NewSprite.png) button to create a new sprite asset (which will open the [Sprite Editor](Sprites.md) for the new asset within the workspace for editing), or you can edit the currently selected sprite using the **Edit Sprite** button ![Edit Sprite Icon](../assets/Images/Icons/Icon_EditSprite.png), or even choose to edit the sprite image itself in the [Image Editor](Image_Editor.md) by pressing the ![Edit Image Icon](../assets/Images/Icons/Icon_EditImage.png) button.

By default when you open a tile set the **Tile Set Properties** window will also be shown (see below), but if you close it then you can click the button here to reopen it again.

[PropertiesProperties](Tile_Sets.htm#)

The **Tile Set Properties** window is for designating the base tile size (default is 16px square), the offset amount and the separation between tiles (these last two options are for use with sprites like the one shown in the example image further up this page where there are gaps between the individual parts of the tiles). You can also set the **Output Border** values for the tile set image, which controls how the image will be stored on disk and add extra pixels around each tile as required.

Due to how tiles are rendered they need to be prepared beforehand with a border around each one to "smear" the edges. The image shown below illustrates how tiles are generally mapped by the device graphic drivers, with the red line around the tile showing where the U,V coordinates are mapped to (The letters "U" and "V" are used to describe the 2D texture mesh because "X", "Y" and "Z" are already used to describe room and object spatial coordinates):

![Single Tile](../assets/Images/Asset_Editors/Editor_Tilesets_Single.png)As you can see it picks the center of the texel to map directly when drawing the image in the room. Now at a scale of 1:1, this is all well and good, but what will happen when we scale this tile down? The issue with scaling down is that when you shrink the image, the UVs also scale down and try to fit into a more compressed space, but this obviously can't happen, so the graphics driver picks which texels to draw based on the available pixel centers.

So, if we are "just" moving into a new screen pixel then, because the graphics drivers use the center of the pixel to decide what to draw with, it'll pick a texel surrounding the tile, not a texel on the tile itself.

![Texel Tile](../assets/Images/Asset_Editors/Editor_Tilesets_Texel.png)

Shown above is a tile being draw scaled down into 6 screen pixels, and this shows that when you overlap a little into the next screen pixel, the graphics driver has to make a choice to either drop that texel, or it try and fill it with what it thinks is a valid texel. Let's just say that in this case it decides to draw the overlapped texel into the screen pixel, and, since it's now clearly outside our tile it gets this pixel from either the next tile, or the little bits of space you provided around the tiles, which means that when it shrinks you'll get cracks between tiles "glitches" in how they are drawn and this is where a lot of confusion arises... Each graphics driver and device actually does this in its own way, meaning that the results can be unpredictable and look terrible... but if you're careful and plan ahead you can work around it.

With high end games if you draw from a single texture (not on a texture page or texture atlas), you have the option of using a texture mode called **clamp** and what this does is repeats the last row of texels infinitely off into the distance, allowing you to scale without problems as it forces the hardware to get the last row of pixels no matter what. This is what the **Output Border** settings here do for you:

![Smear Tile](../assets/Images/Asset_Editors/Editor_Tilesets_Smear.png)Shown above is a "fixed" tile sprite and you can see it now has a repeated section around each tile meaning that when the hardware overruns, it will always pick the last texel from the tile rather than one of the spaces or the tile after that. So, when creating a tile set, keep in mind that if you are going to be zooming the game view in or out or are going to be rendering the tiles scaled, you may need to have a higher Output Border width or height than the default value of 2.

Next, you can chose the **texture group** that you wish the tileset resource to belong to. Basically, a texture group (previously defined in the [Texture Group Manager](../Settings/Texture_Groups.md)) is something that you can set up so that all the image assets that you need for specific rooms or levels of your game can be stored together. So, for example, you can have all your level 1 images in one texture group, all your level 2 images in another etc... and GameMaker will try to place all those grouped assets on the same texture page to reduce texture page swapping while your game is running on the chosen target platform.

**NOTE**: This may not always be necessary and the performance increase from this method will depend on whether the target device is CPU bound or GPU bound.

The final option in the tile set properties is **Disable Source Sprite Export**. This is disabled by default, and if enabled, it flags the source sprite asset to be omitted when the texture page for your project is being generated. This works under the assumption that a sprite used as a tile set will not be getting used for anything else, and so only needs to be exported once.

If you are using the base sprite asset for anything other than tiles, or you are checking for collisions on a tile layer using this tile set, then you would want to keep this disabled so that the base sprite _and_ the tile set are both added into the texture page on compile.

[EditorsEditors](Tile_Sets.htm#)

Each of the buttons in the **Editors** section will open a different editor for specific tile set functionality. You can create tile set _brushes_ based on multiple tiles together, _animated tiles_, using different tiles as individual frames, and you can also create _auto tiles_ that will "join" together based on the tiles that surround them. Each of these editors is explained in detail in the sections linked at the end of this page.

[Preview ToolboxPreview Toolbox](Tile_Sets.htm#)

These are the tools you can use to preview the sprite selected for the tile set. These buttons control the current preview zoom level and you can use them to zoom in or out and clicking the ![Zoom Reset Icon](../assets/Images/Icons/Icon_ZoomReset.png) button will reset the preview to be 1:1 with the tile set sprite being edited. You can also click the **Window Fit** button ![Canvas Fit Icon](../assets/Images/Icons/Icon_CanvasFit.png) to make the entire tile set fit within the current preview window (this will zoom in/out as appropriate to make it fit). Note that you can also zoom in and out using the ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) and the Mouse Wheel ![MMB Icon](../assets/Images/Icons/Icon_MMB.png), and pressing ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) + ![Enter Icon](../assets/Images/Icons/Icon_Enter.png) will set the canvas to be 1:1 with the tile set sprite.

Another feature is that you can switch the grid view on or off by clicking the ![Grid Icon](../assets/Images/Icons/Icon_CanvasGrid.png) button, as well as set the colour for the grid to be used (clicking the ![Preview Options Button](../assets/Images/Icons/Icon_CanvasOptions.png) button). When the grid is active it will show a coloured outline for each of the tiles in the grid, respecting the settings for separation, etc...

[PreviewPreview](Tile_Sets.htm#)

This section is the tile set Preview window. To navigate around the preview, you can use the same basic controls as for general Workspaces, ie: Use the middle mouse button ![MMB Icon](../assets/Images/Icons/Icon_MMB.png) and drag to pan the preview (or alternatively use the ![Space Icon](../assets/Images/Icons/Icon_Space.png) + ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) combination), and you can scroll horizontally with the mouse wheel ![MMB Icon](../assets/Images/Icons/Icon_MMB.png) or zoom in and out using the ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) key and the mouse wheel ![MMB Icon](../assets/Images/Icons/Icon_MMB.png). You can also use the different buttons in the **Preview Toolbox** to change the zoom and enable/disable the grid cell overlay.

As mentioned in the section on **Editors** above, there are are further tools available to edit tile sets and generate special _brushes_ (combinations of tiles that can be painted into a room), _animated_ tiles, and _auto tile_ tiles (which are special tiles that will connect up automatically when placed in a room). Each of these editors is explained in depth from the following pages:

-   [The Brush Builder](Tile_Set_Editors/Brush_Builder.md)
-   [Animated Tiles](Tile_Set_Editors/Animated_Tiles.md)
-   [Auto Tiles](Tile_Set_Editors/Auto_Tiles.md)