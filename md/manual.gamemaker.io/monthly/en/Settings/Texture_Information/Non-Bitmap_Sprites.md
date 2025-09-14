---
title: "Non-Bitmap Sprites"
source: "manual.gamemaker.io/monthly/en/Settings/Texture_Information/Non-Bitmap_Sprites.htm"
converted: "2025-09-14T04:00:14.750Z"
---

# Non-Bitmap Sprites

GameMaker has support for non-bitmap sprites in the form of vector SVG/SWF and **Spine Skeletal Animation** files. Both these formats have their pros and cons, and the two sections below explain how to import them into [The Sprite Editor](../../The_Asset_Editors/Sprites.md) as well as a bit of information about how they are drawn.

### Note About Exporting SVGs

When exporting SVGs from Adobe Illustrator, please make sure ["Styling" is set](http://helpx.adobe.com/illustrator/using/exporting-artwork.html#svg-export-options) to "Presentation Attributes", otherwise some shape attributes may not be accurately represented upon importing the SVG into GameMaker.

## Skeletal Animation Sprites (Spine)

A sprite made using skeletal animation, is one in which a base "skeleton" has been created and animated using key-frames to move the component parts of the skeleton over time. This skeleton is then skinned from a texture atlas and the resulting animation exported in one of many file types. GameMaker permits you to import this type of sprite as long as it has been exported as a \*.json format file and has the correctly associated texture atlas file (\*.atlas) and image file (as a \*.png) _in the same directory_.

![Spine UI](../../assets/Images/Settings/Spine_Example.png)Currently GameMaker can **only import vector images from JSON format files made by the program [Spine](https://esotericsoftware.com/)**, however the way to import them into the program is almost identical to that for adding a normal bitmap image. To add a skeletal animation, you need to create a new sprite, which will bring up the standard **Load Sprite** dialogue, only here you need to make sure that you have selected \*.json from the file filter at the bottom:

![Import Spine Sprite](../../assets/Images/Settings/Spine_Import.png)

Hitting the "load" button will add the skeletal animation to the [Asset Browser](../../Introduction/The_Asset_Browser.md) as a sprite, with a progress bar being shown as the file is processed. Note that, depending on the complexity of the file, this may take a moment or two. When processing has finished you'll be returned to the sprite properties dialogue, which will now look like this:

![Spine SPrite In The Sprite Editor](../../assets/Images/Settings/Spine_OptionsDisabled.png)Once you have imported the animation, you can set the collision properties, but note that you are limited here to simply using precise collisions or bounding box collisions, and that the collision data for a skeletal animation is explicitly taken from the data provided. GameMaker does not generate any collision mask if the data is missing from imported file, meaning you simply won't get working collisions if the masks are not set correctly in the program used to create the image being imported.

NOTE Due to the complexity of skeletal animations, the preview image shown in the sprite editor is not intended to accurately represent your animation, but rather give you a simple image that represents the animation for visualising in the room editor.

Unlike bitmap sprites, the imported skeletal animation sprite **cannot be modified in the editor** in any way, but there are a number of functions available within the GameMaker Language (GML) which can be used to change skins, set properties, and control other aspects of the animation. You also cannot set any of the texture options for the sprite (except for the texture group), as GameMaker will use the supplied texture atlas that was made by the program that generated the sprite.

There are a number of things that you should be aware of when importing skeleton animation sprites, with the most important being that some of the sprite drawing and sprite management functions are not supported for technical reasons, particularly those draw functions that draw only part of a sprite, or that "skew" the position in some way (see the individual [draw\_sprite\_\*()](../../../../../GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/Sprites_And_Tiles.md) functions for exact details of which). However the basic sprite drawing functions are fully supported as are the built-in sprite variables. Apart from these functions and variables, you can also set and change animation properties using special skeleton\_\* functions, which are listed and explained in the reference section on [Skeletal Animations](../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Skeletal_Animation.md).

## Vector Sprites (SVG/SWF)

Generally all sprites in GameMaker use bitmaps which - while flexible in terms of content - place limitations on both the size and number of frames possible in a sprite before memory usage can become prohibitive. Vector sprites work around these limitations by storing and drawing their contents differently: instead of a grid of pixels, which can become blocky or fuzzy when scaled, they are drawn as triangles using vector maths and these can be scaled up (or down) without losing definition, as illustrated in the image below:

![Vector And Bitmap Sprite Comparison](../../assets/Images/Settings/Vector_Compare.png)To help you visualise how this is done, the image below is of the same vector Fireman sprite only now we can see the polygons that are used to render the image within GameMaker:

![Polygons Of A Vector Sprite](../../assets/Images/Settings/Vector_Polys.png)However, nothing is ever for free when it comes to programming games, and the trade-off here with vector sprites is that they are more CPU expensive to draw than bitmap sprites and this speed difference increases as the complexity of the animation being imported increases. Also, their memory usage is affected by their visual complexity, unlike bitmap sprites. Bearing that in mind, they do make it possible to add large animated graphics in ways that would be impossible using traditional bitmapped sprites.

On the flipside of the performance equation, because vector sprites only draw the pixels absolutely required (unlike bitmap sprites which also "draw" the empty space around the image) they can be cheaper from a GPU perspective. Also, in general vector sprites are much smaller than their bitmap equivalents - for the fireman example above the sizes of the various sprite types are as follows:

Bitmap at 70x68 = 4x70x68 bytes x 12 frames = 223k
Vector = 54k

If you quadruple the resolution of the sprite:

Bitmap at 280x272 = 4x280x272 bytes x 12 frames = 3570k
Vector = 54k

So, as you can see, a lot of memory can potentially be saved by using vector sprites, and we still have a lot of potential for future space savings.

Importing a vector image works the same as any regular image, as you can create a sprite and use "**Import**" to load a vector file. Selecting a file will show a progress bar as the file is processed. Note that, depending on the complexity of the file, this can take a while (up to a minute for more complex animations). When processing has finished you'll be returned to the sprite properties dialogue, which will now look like this:

![Disabled Texture Settings](../../assets/Images/Settings/Vector_Spine_Disabled_Options.png)The sprite editor won't have changed much, but the texture options have been greyed out, except for the texture group. The "**Edit Image**" button is still clickable but opens an external vector editing program if one is set in the [Preferences](../../Setting_Up_And_Version_Information/IDE_Preferences/General/Paths.md).

NOTE In case of a more complex vector file, it may not appear the same as another vector tool, whether that's in-game or in the IDE.

One addition to the Sprite Editor is that you can set the _quality_ of the vector sprite when drawn using the **Precision** slider at the top. This will simply reduce or increase the number of triangles used to generate the sprite - with a value of about 50% being sufficient normally for most games - however you should experiment with this value if you are using extreme scaling, or are having performance issues.

For SVG files, you can toggle the preview between solid, wireframe and both:

![](../../assets/Images/Asset_Editors/Editor_Sprites_VectorWireframe.png)

There are a number of things that you should be aware of when importing vector sprites, with the most important being that some of the general sprite drawing and sprite management functions are not supported for technical reasons, particularly those draw functions that draw only part of a sprite, or that "skew" the position in some way (see the individual [draw\_sprite\_\*()](../../../../../GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/Sprites_And_Tiles.md) functions for exact details of which). However the basic sprite drawing functions are fully supported as are the built-in sprite variables. You can also set different anti-aliasing (AA) values for the vector sprites being drawn using the following functions:

-   For SWFs:
    -   [draw\_enable\_swf\_aa](../../GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_enable_swf_aa.md)
    -   [draw\_set\_swf\_aa\_level](../../GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_set_swf_aa_level.md)
    -   [draw\_get\_swf\_aa\_level](../../GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_get_swf_aa_level.md)

-   For SVGs:
    -   [draw\_enable\_svg\_aa](../../GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_enable_svg_aa.md)
    -   [draw\_set\_svg\_aa\_level](../../GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_set_svg_aa_level.md)
    -   [draw\_get\_svg\_aa\_level](../../GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_get_svg_aa_level.md)

You should also be aware of the following:

-   SVG files do not currently support the following features:
    -   Importing multiple still SVGs as multiple frames
    -   Radial gradients where the focal circle lies outside the end circle
    -   Fill opacity
    -   Shape outlines
    -   Styles defined as CSS properties
    -   More complex features such as text rendering, filters or SVG animation
-   When importing a \*.SWF file, Actionscript is _not_ supported, so if your SWF relies on it to work correctly then it probably won't turn out right. Similarly, any embedded movie clips that have their own timeline will only have their first frame shown throughout the animation - all animation must be on the main timeline.
-   If your vector file has particularly fine detail you may occasionally find that holes or strange triangles will appear in the resulting sprites. This is because at small scales geometry can sometimes collapse together to create shapes that just don't triangulate well. In this case you have two options - you can scale up the contents of the vector file which will give the importer more room to play with, or you can try to reduce the level of detail in the object that is breaking.
-   GameMaker uses the stage size of the vector as the bounds of the resulting sprite. However, if you have anything on the stage outside these bounds it is still drawn. This means that you should either try to avoid putting anything outside your stage bounds if you don't want it to be shown, or use a mask layer to limit drawing to this area.
-   The stage size also affects the size of any collision masks that are generated, therefore if you have a large stage size and a lot of frames in your animation you can potentially eat up a lot of memory. So, only use precise collision masks if you really need it.
-   As a vector file is created from multiple layers, some of which potentially overlap, alpha doesn't work quite the way it does with bitmap sprites - overlapping areas will not look as transparent as other parts of the sprite, as the pixels there are being drawn over multiple times.
-   **For SWFs only**: Bitmap fills _are_ supported, though if you use tiled bitmap fills as part of your vector file you need to make sure the bitmap is a power-of-two in size, otherwise it won't tile properly. Text rendering is also supported, but you need to embed the font in your vector file for it to show up in the resulting sprite. Also, currently only left-aligned single line text is supported. Embedded JPEGs are not supported.