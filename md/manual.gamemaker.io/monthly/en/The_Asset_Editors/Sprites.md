---
title: "The Sprite Editor"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Sprites.htm"
converted: "2025-09-14T04:00:16.912Z"
---

# The Sprite Editor

![The Sprite Editor](../assets/Images/Asset_Editors/Editor_Sprites.png)The Sprite Editor is where you set the general properties for sprites that you make. You can open this window by creating a new sprite (right-click ![RMB Icon](../assets/Images/Icons/Icon_RMB.png) on [The Asset Browser](../Introduction/The_Asset_Browser.md) and select **Create Sprite**), by double-clicking ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) on an existing sprite or by right-clicking ![RMB Icon](../assets/Images/Icons/Icon_RMB.png) an existing sprite and selecting **Properties**.

The parts that make up the Sprite Editor are as follows:

[Sprite NameSprite Name](Sprites.htm#)

Here you can name the sprite. The sprite name is what will be used throughout your game project to identify the sprite as a resource and can only be alpha-numeric and may only use the underbar symbol \_. While you can use numbers in the sprites name, the name cannot start with a number as that would make it an invalid resource name when using GML Code or GML Visual.

[Image PropertiesImage Properties](Sprites.htm#)

In this section you can set the image size by clicking the **Sprite Size** button ![Sprite Size Icon](../assets/Images/Icons/Icon_SpriteSize.png). This will open the following window:

![Sprite Editor Resize Properties](../assets/Images/Asset_Editors/Editor_Sprites_ResizeProperties.png)Here you can see a preview of the sprite before and after applying the chosen transforms, and the section below is for setting the new sprite properties and is split into two parts:

-   **Scale Image**: With this option you can resize the sprite draw canvas and any images contained on the sprite will be stretched and scaled to fit the new size. You can choose to scale and maintain the aspect ratio of the base image, and you can also choose whether to scale in Pixels or in Percentage. Depending on the type of image you are working with you may also want to enable linear interpolation or not (in general, linear interpolation will "smooth" pixels over an area and so is best left off for pixel art).
-   **Resize Canvas**: This option will resize the draw canvas to the new size without scaling the contents. You can set the "anchor" point for the resize using the directional arrows then set the size value. There is an option to maintain aspect ratio when resizing the canvas and at the bottom you can choose to set the resize values in either pixels or as a percentage.

When you are happy with the new size, you can click _Apply_ to apply the changes and close the Resize properties window. Note that when applying a change in scale or size to a sprite, you can choose to have the change applied to the origin of the sprite too, by checking the **Apply to Origin** checkbox beside the _Apply_ button. When checked - if the origin is not one of the default settings and is not locked in the sprite - then its position will be scaled to match the change to the size of the sprite. When un-checked, no scaling will be applied to the origin. If the origin is not a custom value or is locked, then it will be grayed out and unavailable. You can set this option for all sprites from the [Sprite Editor Preferences](../Setting_Up_And_Version_Information/IDE_Preferences/Sprite_Editor_Preferences.md).

NOTE This option is only available for bitmap sprites and will be greyed out for SVG/SWF or skeleton animation sprites.

In this section you can also click _Edit Image_ to open the sprite for editing in [The Image Editor](Image_Editor.md) if no external editor for the given sprite type is set, or in the external editor for the given sprite type, if it's provided in the [Path Preferences](../Setting_Up_And_Version_Information/IDE_Preferences/General/Paths.md).

You can click on the "_Import_" button to import a previously created sprite. Sprites can be imported from most common bitmap formats (PNG, JPG, GIF, etc.) but GameMaker also supports vector sprites (SVG/SWF) and skeletal animation sprites (Spine). For more information on these formats, please see the section on [Non-Bitmap Sprites](../Settings/Texture_Information/Non-Bitmap_Sprites.md). Note that when importing bitmap sprites you can select multiple image files in the file explorer and each one will be added to the same sprite as separate sub-images (frames).

NOTE On importing an SVG file, a dialog will appear to confirm whether it should be imported as a vector file or not (which will convert it into a bitmap). This option can be changed permanently in the [Sprite Editor Preferences](../Setting_Up_And_Version_Information/IDE_Preferences/Sprite_Editor_Preferences.md).

You can also import GIFs and [Strip Images](Sprite_Properties/Sprite_Strips.md) for animation.

NOTE When you import a GIF with a single frame that has a frame speed defined, the sprite's animation speed will be set to this frame speed.

[Texture SettingsTexture Settings](Sprites.htm#)

![](../assets/Images/Settings/Texture_Page_Options.png)This section of the sprite properties window deals with how GameMaker stores the images that make up your sprite on texture pages for use with devices and browsers. For desktop platforms this may not be too important, but when you start to develop for mobile or web the proper management of your image assets (textures) becomes very important as poorly managed textures can have detrimental effect on your game, causing performance issues.

The **Tile Horizontally** and **Tile Vertically** check boxes are, by default, not normally checked as most times you do not want to tile sprites. However, in certain circumstances you may wish them to tile, meaning that you should check these options, especially if you are going to be scaling the view or room as scaling can introduce artefacts into the graphics of a game if the texture page is not generated properly.

If your sprite is going to be used as a texture map in a 3D game, then you should check the **Separate Texture Page** box and the sprite will be given a texture page all of its own (note that each sub-image will also get its own texture page, so if your sprite has 10 images you will generate 10 texture pages). This will increase the texture memory needs of your game and so great care must be taken when using this option. Also note that in general if your sprite is using this option for 3D, then the textures should be a power of 2 (i.e.: 128x128, 256x256, 512x512, etc.). For more information read [Texture Pages](../Settings/Texture_Information/Texture_Pages.md).

If you mark your sprite as needing a separate texture page, you can set whether that texture page is [dynamic](../Settings/Texture_Information/Dynamic_Textures.md) or not.

The next option is to enable **Pre-Multiplied Alpha** for the sprite images. When enabled, this will pre-multiply the alpha of all sub-images of the sprite. This is normally only necessary drawing sprites to surfaces, or for some specific special effects. For normal sprite use you should not see any noticeable difference between the normal sprite and the pre-multiplied one.

We also have an **Edge Filtering** option. This option is specifically for when you have linear interpolation enabled for your game and you are seeing "halos" of colour around your sprites. This is caused by the hardware interpolating from multiple source texels on the texture page all at once, and can be particularly obvious when you scale games up in resolution. Enabling this will filter the edge pixels to take on the colour of the nearest full alpha sprite pixel and so blend the interpolated pixels without the halo that was present previously.

Finally, you can chose the **texture group** that you wish the sprite resource to belong to. Basically, a texture group (previously defined in the [Texture Group Manager](../Settings/Texture_Groups.md)) is something that you can set up so that all the image resources that you need for specific rooms or levels of your game can be stored together. So, for example, you can have all your level 1 images in one texture group, all your level 2 images in another etc... and GameMaker will try to place all those grouped resources on the same texture page to reduce texture page swapping while your game is running on the chosen target platform.

NOTE This may not always be necessary and the performance increase from this method will depend on whether the target device is CPU bound or GPU bound.

You can find out more about texture pages [here](../Settings/Texture_Information/Texture_Pages.md).

[Collision MaskCollision Mask](Sprites.htm#)

All sprites have a **collision mask** which corresponds to the area of the sprite that will be used to detect collisions when the sprite is assigned to an instance. You can first set the **Mode** for the collision mask, which can be one of the following:

-   **Automatic**: GameMaker will calculate the collision mask automatically based on the sprite alpha values (this will depend on the Tolerance setting explained below).
-   **Full Image**: The mask will be calculated with its bounds being the same as the left, right, top and bottom bounds of the sprite.
-   **Manual**: Selecting this means that you wish to set the bounds of the collision mask using the input values for left, right, top and bottom.

Apart from the collision mask Mode, there are also various **types** of collision mask which you can choose from the drop down menu:

-   **Rectangle**: A simple rectangular collision mask. This is the fastest to resolve when used in your project.
-   **Rotated Rectangle**: This is a simple rectangular collision mask which will rotate along with the image\_angle value of the instance with the sprite assigned. This is slower to resolve than the regular rectangular collision mask, but faster than a precise collision mask.
-   **Ellipse**: Creates an elliptical collision mask. This is slower to resolve than the rectangular mask.
-   **Diamond**: Creates a "diamond" collision mask. This is slower to resolve and generates more CPU overhead than both the rectangular and ellipitical masks.
-   **Precise**: This creates a precise collision mask based on the outline of the sprite. If the sprite has multiple sub-images, then this will be a _composite_ of the edges of _all_ the sub-images placed over each other. Note that the precise mask will be clipped to the bounding box if the Mode is set to Manual and you change the default values. This is very slow and generates a lot of CPU overhead.
-   **Precise (per frame)**: This creates a precise collision mask on a per-frame basis (i.e.: the mask will change to conform to the outline of each different frame). Note that the precise mask will be clipped to the bounding box if the Mode is set to Manual and you change the default values. This is by far the slowest type of collision mask to resolve and should be avoided except in very, very specific and infrequent cases.
-   **Spine Collision Mesh**: Apart from Rectangle, this is the only selectable option for Spine sprites. It enables more precise collision checking against the mesh in the sprite.

The following image illustrates the different mask options:

![Collisions](../assets/Images/Asset_Editors/bbox_image.png)The collision checking options are very important ones for your game, as they will directly influence how your objects interact and how your game runs, with the wrong settings even having a negative impact on the over all performance. Why is that? Well, whenever two instances meet, and both instances have a valid mask, a collision event is generated by checking the overlap of the bounding box _and_ the mask, which can either be precise or not, and adapted to the image index or not. Below is an image to illustrate this:

![Different collisions and how they are resolved](../assets/Images/Asset_Editors/basic_collisions_image.png)

Beneath the collision mask setting, you have the **alpha tolerance** slider, which indicates the tolerance for creating the mask with respect to the transparency of the sprites pixels - with a higher tolerance pixels that are partially transparent are left outside the mask, while with a lower tolerance the mask will take into account those pixels. This influences both the bounding box (when not set to manual) and the mask for precise collision checking.

Finally you can set the **Bounding Box** limits for the mask. The bounding box is the name given to the rectangular area that the sprite mask fits in. Only pixels inside this bounding box are used for the mask and will be involved in collision checking, and by default this is automatically computed, taking the alpha tolerance into account. When setting it yourself, you can input the values in the boxes for left, right top and bottom. If you go to the Preview window, you can adjust the collision mask using the "handles" found in each corner. Clicking and dragging these will adjust the collision mask just the same as inputing values for the bounding box would.

[Nine SliceNine Slice](Sprites.htm#)

**Nine Slicing** (also known as 9-slicing) is a technique used to scale rectangular images for preserving details, making them retain their original form after scaling. See the page on [Nine Slice](Sprite_Properties/Nine_Slices.md) for more information.

![](../assets/Images/Asset_Editors/Nine_Slice_0_Preview.png)The **Nine Slice** section of the Sprite Editor allows you to enable Nine Slicing on a sprite, and preview it in action inside the **Nine Slice Preview** window on the right. Note that this is not supported for [Non-Bitmap Sprites](../Settings/Texture_Information/Non-Bitmap_Sprites.md).

The **Nine Slice Preview** window allows you to resize the image and shows how the final image will look, after it is scaled using the Nine Slice technique. This preview sprite can also be rotated.

The **Nine Slice** section has the following options:

-   **Activate Nine Slice:** This option controls whether Nine Slice scaling is used when the sprite is scaled. When enabled, Nine Slice scaling will be used for the sprite (and any object instances using that sprite) placed in a Sequence or a Room Layer, and scaled sprites drawn using [draw\_sprite\_ext()](../GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_sprite_ext.md) and other similar functions.

    **NOTE**: Nine Slicing will not work with functions that draw only a part of the sprite or distort it, such as [draw\_sprite\_part()](../GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_sprite_part.md) or [draw\_sprite\_pos()](../GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_sprite_pos.md).
-   **Guides:** This section displays the offset of each guide on its axis, and can be used to change those offsets. These guides can also be moved inside the **Sprite Preview** window by simply dragging them with the mouse.

    **NOTE** Any guides on the same axis cannot cross each other, and dragging one over the other will result in the second guide being pushed.

    ![](../assets/Images/Asset_Editors/Nine_Slice_GIF_Guides.gif)
    The offset of each guide is relative to its corresponding edge. For example, the left guide is offset from the left edge, the right edge is offset from the right edge, and so on.

    The color and alpha of each guide can be changed by clicking on the colored button next to the guide’s position.
    ![](../assets/Images/Asset_Editors/Nine_Slice_4_Color.png)
-   **Highlight**: This option affects how a selected slice appears in the Sprite Preview window. **"Inverted"** highlights the sprite with an overlay except for the selected slice, and **"Overlay"** highlights only the selected slice with an overlay.
    ![](../assets/Images/Asset_Editors/Nine_Slice_5_Highlight.png)
    The color and alpha of the overlay can be changed by clicking on the colored button next to the drop-down menu.
-   **Selected Slice:** This option can be used to select a slice, choosing one from the edge slices (left, top, right, bottom) and the centre one. A slice can also be selected by ![](../assets/Images/Icons/Icon_LMB.png) left clicking on it in the **Sprite Preview** window, and clicking on it again will de-select it.
-   **Tile Mode:** This option is used in conjunction with the **Selected Slice** option, to control how the slice appears when the sprite is scaled. You can apply one of the following Tile Modes to each slice:
    ![](../assets/Images/Asset_Editors/Nine_Slice_3_TileModes.png)
    -   **Stretch****:** The slice will be stretched to fill the gap between its connected corners.
    -   **Repeat****:** The slice will be repeated or tiled to preserve detail.
    -   **Mirror****:** The slice will be repeated by mirroring.
    -   **Blank Repeat****:** The slice will only appear once, resulting in a blank area after it.
    -   **Hide****:** The slice will not appear at all.

[Broadcast MessagesBroadcast Messages](Sprites.htm#)

This button will add a **broadcast message** to the sprite timeline, opening a dialog where you can add the message to be broadcast. The message will be added wherever the playhead is in the frame view and consists of a simple string that can be picked up in the [Broadcast Message Event](Sequence_Properties/Broadcast_Messages.md) when it is triggered and then acted on.

![Add broadcast messages to a sprite](../assets/Images/Asset_Editors/Sprite_Broadcast_Message.gif)Once added, the message will be shown in the Frame View, and you can click the right mouse button ![RMB Icon](../assets/Images/Icons/Icon_RMB.png) on it to open a menu where you can delete the message or edit it. See [Broadcast Messages & Moments](Sequence_Properties/Broadcast_Messages.md) for more info.

[Frame SpeedFrame Speed](Sprites.htm#)

In this section you can set the **speed** at which the animation frames should be played back from the input box on the left. The frame speed setting can either be based on "**Frames per second**", or "**Frames per game frame**", where a setting of 30 "Frames per second" will show 30 frames of the animation in one second, while a setting of 30 "Frames per game frame" will try to show all 30 frames in a single game step, so "Frames per game frame" values are usually set to 1 or lower (eg: a frames per game frame speed of 0.5 will show a new frame every two game steps).

It's important to note that the Frame Speed settings will not only affect the playback of the animation in the preview window, but **will also govern how the sprite is animated in your games**. The speed you set here will show the sprite preview as it will run in the game with an image speed multiplier of 1, but this can be set in code using the [image\_speed](../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/image_speed.md) variable meaning the sprite can run faster or slower depending on what is programmed. So, for example, if you set the sprite to use 10 "frames per second" and then set the image\_speed to 0.5, the game will draw the sprite at half speed - 5 frames per second. Conversely, if we set the image\_speed for the same sprite to 2, in the game it will be drawn animated twice as fast - 20 frames per second. Note that the frame speed can also be set in [The Image Editor](Image_Editor.md).

[Sprite OriginSprite Origin](Sprites.htm#)

The top bar of the sprite editor contains the **sprite origin** properties. This is the point on the sprite that corresponds to its position within the room, ie: when you create an instance at a particular x/y position, the origin of the sprite is placed there.

By default the origin is the _top left_ corner of the sprite but it is often more convenient to use the _middle centre_ or you may wish to have some other position used (like for a platform game character you might want _bottom centre_), so you can click ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) on the origin drop-down menu and select one of the default values. You can also set the origin manually by clicking ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) in the sprite preview image which will move the origin marker cross to the point you clicked, or by inputting different values for x and y in the corresponding boxes. Note that you can even set an origin outside the area of sprite by using negative numbers (for left and up) or positive numbers larger than the sprite width and height (for right and down), which can be very useful when dealing with objects that need to draw composite sprites.

[Zoom ControlsZoom Controls](Sprites.htm#)

This section contains the following:

-   **Canvas Zoom Controls** ![Canvas Zoom Controls Icons](../assets/Images/Icons/Icon_CanvasZoom.png): These buttons control the current canvas zoom level. You can zoom in or out and clicking the ![Zoom Reset Icon](../assets/Images/Icons/Icon_ZoomReset.png) button will reset the canvas to be 1:1 with the contents being edited. You can also click the Window Fit button ![Canvas Fit Icon](../assets/Images/Icons/Icon_CanvasFit.png) to make the entire canvas fit within the current editor workspace (this will zoom in/out as appropriate to make it fit). Note that you can also zoom in and out using the ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) and the Mouse Wheel ![MMB Icon](../assets/Images/Icons/Icon_MMB.png), and pressing ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) + ![Enter Icon](../assets/Images/Icons/Icon_Enter.png) will set the canvas to be 1:1 with the display.

[PreviewPreview](Sprites.htm#)

The sprite **preview** window shows the sprite as it will look in the game, and can be zoomed in or out by using the mouse wheel ![MMB Icon](../assets/Images/Icons/Icon_MMB.png), and panned around using the middle mouse button ![MMB Icon](../assets/Images/Icons/Icon_MMB.png) and draggging, or alternatively use the combination ![Space Icon](../assets/Images/Icons/Icon_Space.png) + ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) and dragging. You can use the Frame controls (explained below) to change how the preview image is displayed too.

This window will also show a "cross" that marks the **origin** of the sprite (see the Sprite Origin section above for more details), and it can also show the **collision mask** if that option is being edited (see the Collision Mask section, above).

[Playback ControlsPlayback Controls](Sprites.htm#)

The **Playback controls** are for playing back in the preview window the animation of the frames, with the play button ![Sprite Play Icon](../assets/Images/Icons/Icon_Sprite_Play.png) starting/stopping the animation and the Loop button ![Sprite Loop Icon](../assets/Images/Icons/Icon_Sprite_Loop.png) used to set whether the sprite loops ![Sprite Loop On Icon](../assets/Images/Icons/Icon_Sprite_LoopOn.png) (goes back to frame 1 when the last frame is reached) or ping-pongs ![Sprite Pingpong Icon](../assets/Images/Icons/Icon_Sprite_PingPong.png) (goes backwards through the frames when the last frame is reached).

Note that the loop/ping-pong option **will not affect how the sprite is displayed in the game**, so setting these options in the sprite will not change the way it is shown when the game is compiled and run. This is also true for loop-points that can be set in the **Frame View** (see below for more information) - these are purely visible in the Sprite Editor and designed to help you test out your animations, but will have no effect on how the sprite animation is displayed in your games.

An additional part of the Frame Controls is the **current frame** display and input a bit further over on the left. The box shows the total number of frames of the sprite animation as well as the current frame being shown. You can change the current frame at any time by clicking on the input box and typing in the frame number you want to view.

IMPORTANT Frames are shown numbered from 1 to _maxframe number_, however in your game code, frames will be numbered from 0 to _maxframe number - 1_.

[FramesFrames](Sprites.htm#)

This part of the sprite editor shows each of the different **frames** that make up a single sprite set along a sequence timeline. You can click ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) on any frame and drag it left or right to change the order in which they will be animated, and you can also double click ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) on any frame to launch [The Image Editor](Image_Editor.md) and edit them. You can cut, copy and paste frames using the standard keyboard shortcuts or by using the right-mouse button ![RMB Icon](../assets/Images/Icons/Icon_RMB.png) menu options, and you can also select multiple frames to operate on using ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) + ![LMB Icon](../assets/Images/Icons/Icon_LMB.png).

The right mouse button menu has the following options:

![RMB Frame View Menu](../assets/Images/Asset_Editors/Sprite_RMB_Frame_menu.png)

-   **Add Frame** - Add a new frame to the animation at the end.
-   **Insert Frame** - Insert a new frame in the animation after the currently selected frame.
-   **Cut** / **Copy** / **Paste** \- Cut, copy and paste one or more frames.
-   **Delete Selected Frames** - Delete the currently selected frame or frames.

Apart from the option given above to stretch a frame, you can also position the mouse on the edge of a frame and then when the cursor changes to a double arrow, simply click ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) and drag to resize the frame so it takes more time:

![Stretch a frame using the mouse](../assets/Images/Asset_Editors/Sprite_Stretch_Frame.gif)A stretched frame will take more time to be shown, just as if you'd duplicated the same frame multiple times.

Finally, you can also zoom in on the frame timeline using the "handles" on either side of the frame view as shown in the image below:

![Sprite frame view zoom controls](../assets/Images/Asset_Editors/Sprite_Loop_Markers.gif)