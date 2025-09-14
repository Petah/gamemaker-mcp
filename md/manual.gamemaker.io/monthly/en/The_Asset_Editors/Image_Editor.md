---
title: "The Image Editor"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Image_Editor.htm"
converted: "2025-09-14T04:00:15.450Z"
---

# The Image Editor

![The Image Editor](../assets/Images/Asset_Editors/Editor_Images.png)The I**mage Editor** is where you can create your own sprites or edit those you have imported or created previously. If you have used any other image tools then this should be familiar to you but there are a few things to note when using the GameMaker Image Editor which may not be immediately apparent:

-   When you create multiple frames, you can draw to them as they animate! So, if you press the Play button![Play Icon](../assets/Images/Icons/Icon_ImagePlay.png) on the **Frame Control** bar, and then select a brush and start to draw in the editor window, you'll see that the frames will animate in the editor and what you draw will be added to the corresponding frame in that moment. You can experiment with different frame rates until you get something you like, but once you've got the hang of how this works you'll be creating dynamic sprites and effects in no time.
-   You can pull the Image Editor tab off of the main workspace window into its own window. This can be handy when using multiple monitors, for example.
-   When you use the _Copy_ functions to, for example, copy a selection of an image, then the selection copied gets added to your **brush list**. This means that you can select a part of an image and then use it in the rest of the paint tools to draw lines, polygons or just paint freely. The brush can be scaled and blended with a colour too. Note that the _Paste_ functionality is not intended for use internally within the editor as anything you copy is added to the brush list and so can be selected for "pasting" that way. Instead paste is simply for you to capture something from an external program and paste it into the Image Editor.
-   You can have multiple layers for each sprite thanks to the handy **layer editor**. These layers can ordered and even placed in folders to make creating more complex images easier.
-   You can quickly change between sub-images (frames) in the editor by using the "1" and "2" keys on the keyboard.

Those are just some of the more advanced features that the Image Editor offers. To find out the full feature range, please read the items below detailing the functions of every part of the editor:

[Frame ViewFrame View](Image_Editor.htm#)

This part of the window shows the frames in the order that they will be animated in. You can click the ![Add Frame Icon](../assets/Images/Icons/Icon_AddArgument.png) button to the left to add further frames - or use the **Image Menu** - and you can also click and drag any of the frames to change their position along the timeline. In the top left of the Frame View you can switch on **Onion Skinning** ![Onion Skin Icon](../assets/Images/Icons/Icon_OnionSkin.png), which means that in a single frame of any sprite animation, you can choose to see any of the preceding or succeeding frames as a semi-transparent layer under the image frame you are currently editing. The great thing about this is that each frame is drawn slightly lighter than the last so you can see how the animation has been progressing from frame to frame while drawing the next one.

Enabling this will show some extra controls over the frames which you can click ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) and drag to set the number of preceding frames to show as well as the number of following frames.

![Image Editor Onion Skin](../assets/Images/Asset_Editors/Editor_OnionSkin.png)You can set certain properties for onion-skinning from the **View** conext menu, which is explained further down this page.

Beneath the Onion Skin button, you have the **Loop Control** button ![Loop Control Icon](../assets/Images/Icons/Icon_ImageLoop.png) used to set whether the sprite loops (goes back to frame 1 when the last frame is reached) or ping-pongs (goes backwards through the frames when the last frame is reached). The Play button ![Play Icon](../assets/Images/Icons/Icon_ImagePlay.png) at the bottom is for starting/stopping the preview of the animation.

You can click on any frame to select it for editing, and a selected frame will have a Delete button ![Delete Frame Icon](../assets/Images/Icons/Icon_RemoveFrame.png) at the top corner which you can click to remove the frame from the sprite. You can also click ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) + ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) on multiple frames to select them together, in which case clicking the Delete button will delete all the selected frames. Finally, you can use the standard keyboard shortcuts for _Cut_, _Copy_ and _Paste_ to edit selected frames: ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) + "X", ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) + "C", and ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) + "V".

[Frame InformationFrame Information](Image_Editor.htm#)

This bar contains the **Frame Information**. Here you can set the speed at which the animation frames should be played back using the input box on the left. The frame speed can either be based on "_Frames per second_", or "_Frames per game frame_". The total number of frames available are shown to the right along with the current frame that has been selected, and you can collapse this bar (hide it) by clicking on the ![Collapse Icon](../assets/Images/Icons/Icon_Collapse.png) icon to the left. You can set this to always start open or always start closed from the [Image Editor Preferences](../Setting_Up_And_Version_Information/IDE_Preferences/Image_Editor_Preferences.md).

NOTE The value used here for the animation speed will also set the way the sprite is animated when used in a game, either as a sprite asset on a layer or as a sprite assigned to an instance, although you can modify this at runtime using the appropriate [functions](../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprites.md) and [variables](../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/Sprite_Instance_Variables.md).

[Canvas ControlsCanvas Controls](Image_Editor.htm#)

The canvas controls deal with various aspects of how the main draw canvas and its contents are displayed. The options are:

-   **Toggle Canvas Grid** ![Toggle Canvas Grid Icon](../assets/Images/Icons/Icon_CanvasGrid.png): This will toggle on/off the canvas grid. This is a grid that GameMaker draws over the preview canvas to divide it into sections, and by default is set to 32x32px in size. If you click the Grid Menu icon ![Icon Grid Menu](../assets/Images/Icons/Icon_CanvasOptions.png) you will see the grid options:
    ![](../assets/Images/Asset_Editors/Editor_Sequences_GridControls.png)These options permit you to set the grid colour and alpha, as well as the cell values for the grid along the X and Y axis. You also have an option to enable or disable grid snapping here (disabled by default). You can use the keyboard shortcuts "G" and ![Shift Icon](../assets/Images/Icons/Icon_Shift.png) + "G" to toggle the grid visibility and grid snapping respectively.
-   **Canvas Zoom Controls** ![Canvas Zoom Controls Icons](../assets/Images/Icons/Icon_CanvasZoom.png): These buttons control the current canvas zoom level. You can zoom in or out and clicking the ![Zoom Reset Icon](../assets/Images/Icons/Icon_ZoomReset.png) button will reset the canvas to be 1:1 with the contents being edited. You can also click the Window Fit button ![Canvas Fit Icon](../assets/Images/Icons/Icon_CanvasFit.png) to make the entire canvas fit within the current editor workspace (this will zoom in/out as appropriate to make it fit). Note that you can also zoom in and out using the ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) and the Mouse Wheel ![MMB Icon](../assets/Images/Icons/Icon_MMB.png), and pressing ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) + ![Enter Icon](../assets/Images/Icons/Icon_Enter.png) will set the canvas to be 1:1 with the display.
-   **Split Canvas** ![Split Canvas Icons](../assets/Images/Icons/Icon_CanvasSplit.png): Clicking this will cycle between splitting the canvas horizontally, vertically keeping it a single a single canvas. When in split canvas view, each canvas will have its own set of Canvas controls so you can zoom one in and the other out, for example, and you can edit either canvas with the changes being reflected in the other canvas. To change the canvas view toggle, you can click the Split Options ![Grid Options Icon](../assets/Images/Icons/Icon_CanvasOptions.png) button and select the one you wish to use or simply click the Split Canvas button until it cycles to the one you want.

[Draw CanvasDraw Canvas](Image_Editor.htm#)

This is the main editing window for your images. Here you can apply any of the tools on the right to paint on the currently selected layer. You can paint with either the left ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) or the right ![RMB Icon](../assets/Images/Icons/Icon_RMB.png) mouse button (and assign a colour to each from the colour picker) and use any of the brushes defined from the top right of the editor. You can also use ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) and the Mouse Wheel ![MMB Icon](../assets/Images/Icons/Icon_MMB.png) to zoom in or out, and pressing ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) + ![Enter Icon](../assets/Images/Icons/Icon_Enter.png) will set the canvas to be 1:1 with the image (or you can use the Canvas Controls as explained above). Note too that you can pan around the canvas using the middle mouse button ![MMB Icon](../assets/Images/Icons/Icon_MMB.png) or ![Space Icon](../assets/Images/Icons/Icon_Space.png) + ![LMB Icon](../assets/Images/Icons/Icon_LMB.png).

[Canvas ValuesCanvas Values](Image_Editor.htm#)

This small bar at the bottom shows the different values for the mouse position, the width and height of the selection tools in the editor and the current frame and total number of frames.

[BrushesBrushes](Image_Editor.htm#)

Here you can select the **brush** to paint with. By default you have a selection of different sized square and round brushes to use, but you can easily create your own brush by painting on the image layer, and then selecting the part you wish to use for the new brush and using ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) + "C" to copy it. The copied section will then be added to your brushes and you can paint with it as you would any other brush, and this includes using the different paint tools available like drawing a line.

If you want to remove a brush from the list, simply click on it and press the ![Delete Key Icon](../assets/Images/Icons/Icon_Delete.png) key and it will be removed.

NOTE The default blending colour for the new brush will be white, but if you change the colour with the colour picker and paint using the brush, it will be _blended_ with this new colour.

You can also paste externally from your clipboard (![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) + "V") to create a new brush, which can be changed in the [Image Editor Preferences](../Setting_Up_And_Version_Information/IDE_Preferences/Image_Editor_Preferences.md).

To create a new brush from the selection regardless of the setting of **Image Selection Copy/Paste,** use ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) + "B". This shortcut will also work if you have the preference set to _Paste as Layer_.

NOTE Brushes are not retained between sessions, closing your project will remove any brushes that you have created.

[Colour PickerColour Picker](Image_Editor.htm#)

The top of this section has a number or predefined colour swatches that you can choose from, and they can be assigned to the left ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) and right ![RMB Icon](../assets/Images/Icons/Icon_RMB.png) mouse buttons respectively by clicking on them with either button (you can also swap the colours between each button by clicking the arrow icon in beside the swatches). The colours selected will be shown below as swatches beside the image of the mouse, and you can then click these to open the **Colour Picker** window:

![Image Editor Colour Picker](../assets/Images/Asset_Editors/Editor_ColourPicker.png)From this window you can define the colour using any of the available sliders and gadgets, or you can input values directly for the ARGB values or HSV values.

If you hold CTRL/CMD and click ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) on any of the default colour swatches, it will bring up the colour picker tool and allow you to edit the default palette for the sprite. Clicking "OK" in the colour picker in this case will set the palette to the new colour and save it along with the sprite asset being edited.

These colour palettes can then be swapped and applied to different sprites using the colour palette **Options** menu:

![Image Editor Colour Picker Options](../assets/Images/Asset_Editors/Editor_ColourPicker_Options.png)

The single line of colours below the palette shows your colour history, with your most recently selected colour being on the very left. This section is _not_ copied when using the "Import colours" or "Copy colours" option, as that only applies to the main palette above.

So, you can create a custom colour palette in a sprite image and then use that to set the palette for any other sprite in the Asset Browser, or you can open a sprite image and import the colour palette from any other sprite in the Asset Browser. This sprite palette feature is covered in more detail in the following tech blog:

-   [GameMaker Features You Might Not Know About](https://gamemaker.io/en/blog/gms2-features-you-might-not-know-about)

[ToolsTools](Image_Editor.htm#)

Below we list the tools that are available by default with GameMaker - note that all tools can be used with the left ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) and right ![RMB Icon](../assets/Images/Icons/Icon_RMB.png) mouse button, and most of them have keyboard shortcuts associated with them (the important ones are listed here along with the tool, but for a full list please see the page on [Keyboard Shortcuts](../IDE_Navigation/Keyboard_Shortcuts.md)). Most tools will also have extra options that will be visible at the top of the image editor as shown below:

![Image Editor Top Bar](../assets/Images/Asset_Editors/Editor_Image_TopBar.gif)

|  | Pencil | This is the pencil tool. It uses the selected brush to paint in the selected colour for the mouse button, and you can set the size from the top bar of the image editor as well as enable/disable smoothing (interpolation). Note that you can also resize and scale any brush by holding down  + "Z" then clicking  and dragging the mouse to change the proportions of the brush, or alternatively select one of the predefined brushes from the top right. |
| --- | --- | --- |
|  | Eraser | This is the eraser tool. It uses the selected brush to erase an area on click from either mouse button. Selecting this will also add extra tools to the top bar of the editor to permit you to scale the brush or enable/disable smoothing (linear interpolation). |
|  | Paint / Fill | This is the paint bucket (or fill) tool. This will fill in an area of the image based on the chosen alpha tolerance setting, which you can change using the slider shown in the top bar of the editor. |
|  | Colour Remove | This is the colour remove tool. When you select it, you can then click  or  on any pixel in the image and all pixels that are of the same colour will be removed (they are technically replaced with the colour black at an alpha of 0). The top bar has a tolerance slider where you can set the pixel colour tolerance - the lower this value the more exact a colour has to match the one that was clicked, while a higher value will expand this to include those colours that are similar to the one clicked. If you have previously made a selection using any of the selection tools, then only clicking on pixels within the selection will have an effect, and only the pixels within the selection will be removed. |
|  | Colour Replace | This is the colour replace tool. When you select it, you can then click  or  on any pixel in the image and all pixels that are of the same colour will be replaced by the colour assigned to the mouse button used. The top bar has a tolerance slider where you can set the pixel colour tolerance - the lower this value the more exact a colour has to match the one that was clicked, while a higher value will expand this to include those colours that are similar to the one clicked. If you have previously made a selection using any of the selection tools, then only clicking on pixels within the selection will have an effect, and only the pixels within the selection will be affected by the colour change. |
|  | Line | This tool will draw a line between two points. Click once with either button to create the first point and then click again elsewhere to create another point and join them. The line will be drawn using the selected brush to create the outline, and you can edit some of the brush properties using the top bar of the editor (size, linear interpolation, etc.). |
|  | Rectangle | This tool will draw either a filled or an outlined rectangle. If you click in the top left of the icon, it will be outlined, while clicking the bottom right will be filled and if you require both then you can select that option from the top bar of the image editor (or use  +  to select one then the other on the toolbox icon), as well as set the size and smoothing of the brush being used. The rectangle will then be drawn using the selected brush. Note that while drawing you can hold down  and click to draw from the centre of the mouse position. |
|  | Ellipse | This tool will draw either a filled or an outlined ellipse. If you click in the top left of the icon, it will be outlined, while clicking the bottom right it will be filled and if you require both then you can select that option from the top bar of the image editor (or use  +  to select one then the other on the toolbox icon), as well as set the size and smoothing of the brush being used. The ellipse will be drawn using the selected brush to create the outline. Note that while drawing you can hold down  and click to draw from the centre of the mouse position. |
|  | Polygon | This tool will draw either a filled or an outlined polygon. If you click in the top left of the icon, it will be outlined, while clicking the bottom right will be filled and if you require both then you can select that option from the top bar of the image editor (or use  +  to select one then the other on the toolbox icon), as well as set the size and smoothing of the brush being used. You click  or  to add points to the polygon using the selected brush and when you are happy with the results you should select a different tool to commit the changes and generate the image. The polygon will be drawn using the selected brush. You can press  at any time to cancel the polygon definition. |
|  | Spline | This is the spline tool. It uses the selected brush to create a spline. You click and hold either mouse button to set a point and then drag the mouse to generate the spline, releasing the mouse and repeating to add further points and curves. The spline will be drawn using the selected brush, which can be edited using the top bar of the editor to set size and smoothing. The top bar also has a setting for Iterations which will define how smooth the resulting spline is (lower values will be rougher, higher smoother, and the default value is 10). |
|  | Text | This is the text input tool. It creates a new text layer where you can type anything you need. You can set the font to use as well as the formatting from the top bar of the image editor. |
|  | Eye Dropper | The eye-dropper tool permits you to sample a colour from the image currently being edited. |
|  | Rectangle Selection | With this tool you can generate a rectangular selection. You can cancel a selection from the Image menu or pressing . |
|  | Paint Selection | With this tool you can "paint" a selected area using any of the brushes, including custom brushes. All the same keyboard shortcuts apply as for the Pencil tool. You can cancel a selection from the Image menu or pressing |
|  | Magic Wand | The magic wand selection tool will select areas of the same colour based on the tolerance value set from the top bar of the editor. If you tick "Colour only" then alpha value will not be taken into consideration. You can cancel a selection from the Image menu or pressing . |
|  | Rotate | This is the rotate tool. If you have an area selected using one of the Selection tools, then clicking this will permit you to rotate the selected area by an arbitrary amount from 0° to 360°. If you do not have an area of the image selected then this will permit you to rotate the current brush. To rotate, simply hold down the left mouse button  and drag left or right or set the value directly in the top bar. To accept the changes you can press either  or select another tool. Note that accepting the change will not change the source material, but rather create a new Brush resource for you to use with the selected image or a brush rotated by the amount you set. Also note that the keyboard shortcut "Z" can be used to rotate any selection or brush by 90° and that this option does not create a new brush and will only affect how the current brush is drawn. |
|  | Mirror | This is the mirror tool. Selecting this will mirror the current brush along the vertical axis. This option does not create a new brush and will only affect how the current brush is drawn. |
|  | Flip | This is the flip tool. Selecting this will mirror the current brush along the horizontal axis. This option does not create a new brush and will only affect how the current brush is drawn. |
|  | Pan | This is the pan tool. When you select this, you can then click  and drag the mouse to pan the layer contents around within the layer. Note that any pixels outside of the draw canvas will not be visible and the image will be cropped to the draw canvas size when you change tool again. Note too that if you have made a selection then the selected pixels will be moved rather than the contents of the layer. |

[Layer EditorLayer Editor](Image_Editor.htm#)

You can create **layers** in the Image Editor for different parts of your image, and these layers can be manipulated and drawn to using the various brushes and tools. To create a new layer, simply click the ![Add Layer Icon](../assets/Images/Icons/Icon_Image_Add.png) icon, and to remove it again the ![Remove Layer Icon](../assets/Images/Icons/Icon_Image_Remove.png) icon. Layers can also be ordered by clicking ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) on a layer and then dragging the layer up or down to the position you require, and you can further organise the layers by creating folders using the ![Add Layer Folder Icon](../assets/Images/Icons/Icon_Image_Folder.png) button and then dragging layers into them.

If you double-click ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) on a layer (or use ![RMB Icon](../assets/Images/Icons/Icon_RMB.png) and select **Edit Layer Properties**) you'll get access to the Layer Properties window:

![Image Editor Layer Properties](../assets/Images/Asset_Editors/Editor_LayerProperties.png)Here you can name the layer as well as set the blend mode (the way that it should be "mixed" with the layers beneath), choosing from _normal_, _additive_, _subtractive_ or _multiply_ blends. Finally you can set the opacity (transparency) of the layer with a slider, but note that this is cumulative with the actual alpha value of individual pixels - for example, if you have pixels that are 50% opaque and set the layer opacity to 50%, the final pixels will be drawn at 25% opacity.

You can also paste from your clipboard (![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) + "V") to create a new layer, which can be enabled/disabled in the [Image Editor Preferences](../Setting_Up_And_Version_Information/IDE_Preferences/Image_Editor_Preferences.md) (see "**Image Selection Copy/Paste**").

Apart from those tools within the Image Editor itself, there are also a number of extra tools available to you from the Menu Bar at the top of the IDE:

![Image Editor Menus](../assets/Images/Asset_Editors/Editor_Image_Menus.png)These menus are explained in the sections below:

[ImageImage](Image_Editor.htm#)

![Image Editor Image Menu](../assets/Images/Asset_Editors/Editor_MenuImages.png)The Image menu has the following options (some of which may or may not be available depending on the currrent editor focus):

-   **Cut Frame** / **Selection** \- Cut the frame or selection from the image, depending on Editor focus. If cutting a selection, this will add it to the brushes.
-   **Copy Frame** / **Selection** \- Copy the frame or the selection from the image, depending on Editor focus. If copying a selection, this will add it to the brushes.
-   **Paste Frame** / **Selection** \- Paste the frame from the clipboard, or paste the selection from the clipboard to the image, depending on the current focus of the IDE. When pasting into an image, you should note that this option is designed only for use with clipboard data from external programs. When you cut or copy to the clipboard from an image in the Image Editor, this is added to the brushes in the top right of the editor, and you should select a brush to draw with the cut/copied selection rather than try to paste it into the image. Also note that a number of programs will have issues pasting transparencies from the clipboard into GameMaker image editor due to the format used by the clipboard.
-   **Select All** \- Select the full image.
-   **Cancel Selection** - Clear any selection from the image.
-   **Invert Selection** - Invert the current selection.
-   **Add Frame** - Add a new frame to the sprite.
-   **Insert Frame** - Insert a new frame after the one currently showing.
-   **Delete Selected Fames** - Remove the selected frame from the sprite (you can use ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) + ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) and/or ![Shift Icon](../assets/Images/Icons/Icon_Shift.png) + ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) to select multiple frames).
-   **Import Image(s)** - Load an image to be used as a frame from disk. Note that you can load multiple frames at once by selecting multiple individual files to import in the explorer window. Once you have selected your file or files you will be shown the following Import window:
    ![Image Editor Import Window](../assets/Images/Asset_Editors/Editor_Image_Import.png)Here you can choose how the imported image should be added to the current sprite, permitting you to resize the entire draw canvas, crop or pad it, and also set the "anchor" position for placing the new image(s).
-   **Convert to Frames** - This option will convert a single image into a number of separate frames. You must first have created a single frame with all the parts of the animation in it (or imported a single strip image) like the one shown below:
    ![Image Editor Animation Strip](../assets/Images/Asset_Editors/Editor_Image_Strip.png)Since this is a single image and we want to convert it into individual frames, we can use this option which will then open the following window:
    ![Image Editor Convert to Animation Frames](../assets/Images/Asset_Editors/Editor_Image_ConvertStrip.png)Here you can set how the single image should be split to create the frames, setting the number of frames, the width and height of the frames and any including any offset values.
-   **Import Strip Image** - This option will open a file explorer and prompt you to look for a single strip image file to be used to create frames from. Once selected an image the Import strip window will open, exactly the same as for the **Convert To Frames** option shown above.
-   **Export to PNG** - Selecting this option will export the sprite as a single PNG image. If the sprite has more than a single image, then a "strip" sprite will be created with all the images, one after another, and the save file name will automatically be appended with "\_stripX", where "X" is the number of frames exported. For example, a five frame sprite will be exported as "sprite\_name\_strip5.png".
-   **Resize All Frames** - When you select this option it will open the following window where you can set the way that you want to resize all the animation frames that comprise the sprite:
    ![Image Editor Resize Frames](../assets/Images/Asset_Editors/Editor_Image_ResizeFrames.png)You can choose to either **Scale** the image, or to **Resize** the canvas. If you choose to scale the image then you simply select the new width and/or height for each frame, whether to scale using the same aspect ratio, and also whether to scale in pixels or percent. Note that when scaling you can enable linear interpolation on or off, where having it on will cause the pixels to blur or "smear" as the image is scaled (in general, for hi resolution art you want this _on_, but for pixel art you want this _off_).

    The option to resize the canvas will not alter the pixels within the image but instead increase or decrease the size of the canvas that the images are being drawn on. You can set where the "anchor" for the resize should be using the arrow icons, then set the new size (in pixels or as a percentage) as well as set whether to maintain the aspect ratio of the original frames. Note that making the frame smaller than the original sprite images will crop the pixels.
-   **Crop All Frames To Selection** - This option will only be available when you have an area of the image selected in the main draw canvas. When you then choose this option, the image being edited (and all other frames in the animation) will be cropped to the boundaries of the selection.
-   **Auto Trim All Frames** - This option permits you to trim all the zero-alpha pixels from around the edges of a sprite. This will take into consideration all image frames within the sprite, so each side will crop to the edge of whichever frame has the furthest non-zero alpha pixel.
    ![Image Editor Trim Frames](../assets/Images/Asset_Editors/Editor_Image_Trim.png)
-   **Reverse Frames** - Selecting this will simply reverse the frame order for the sprite.
-   **Mirror** \- This option permits you to mirror either the current frame all all the frames that comprise the sprite along the vertical axis.
-   **Flip** \- This option permits you to flip either the current frame all all the frames that comprise the sprite along the horizontal axis.
-   **Rotate all Frames (clockwise 90°)** - This option will rotate all the frames of the animation 90° clockwise.
-   **Rotate all Frames (anti-clockwise 90°)** - This option will rotate all the frames of the animation 90° anti-clockwise.

[ViewView](Image_Editor.htm#)

![Image Editor Views Menu](../assets/Images/Asset_Editors/Editor_MenuView.png)The View menu has the following options:

-   **1:1** - Scale the image to be 1:1 with the resolution (i.e.: actual size) and center it in the image edit window.
-   **Fit Screen** - Scale the image to fill the image edit window.
-   **Show grid** - Toggle the pixel grid. This is the same as the grid button found in the Canvas Controls (explained further up this page).
-   **Onion Skin Settings** - Change the onion skin settings. This will open the following window where you can set the frames shown by the onion skin button, as well as the opacity and colour of the skinned frames.
    ![Image Editor Onion Skin Properties](../assets/Images/Asset_Editors/Editor_Image_OnionSkinProperties.png)

[EffectsEffects](Image_Editor.htm#)

![Image Editor Effects Menu](../assets/Images/Asset_Editors/Editor_MenuEffects.png)The Effects menu is where you can add your own custom effects plugins, and has the following effects by default:

-   **Blur** \- Apply a blur effect to the image. You can set the intensity as well as the type of blur to use (box or gaussian) and set whether to only blur along the horizontal or vertical axis, or along both. You can then choose to apply this to only the current layer, visible layers or all layers.
    ![Image Editor Blur Effect](../assets/Images/Asset_Editors/Editor_EffectBlur.png)
-   **Greyscale** \- Desaturate the image by a determined amount. You can choose to apply this to only the current layer, visible layers or all layers.
    ![Image Editor Greyscale Effect](../assets/Images/Asset_Editors/Editor_EffectGrayscale.png)