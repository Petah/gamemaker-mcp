---
title: "Layer Types And Properties"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Room_Properties/Layer_Properties.htm"
converted: "2025-09-14T04:00:16.275Z"
---

# Layer Types And Properties

Everything that goes into the room you create in [The Room Editor](../Rooms.md) is placed on a **layer**. Layers can be added, removed, and sorted from the Layer Editor, and come in a variety of different types, each with their own set of options and way of working.

You aren't limited to the number of each type of layer, and can have multiple tile layers, or path layers, or instance layers, etc. Each type of layer has its own **properties** where you can set different things depending on the layer type.

You can also toggle the layer's visibility, with invisible layers _not_ being processed at runtime (but you can make them visible again at any time using the function [layer\_set\_visible](../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/General_Layer_Functions/layer_set_visible.md)).

![Room Layers](../../assets/Images/Asset_Editors/Editor_Room_Layers.png)The image above shows the Layer Editor, with the current layers listed at the top, and a button for adding new layers on the bottom-left.

You can rename any layer from this editor by doing a slow double click on the name (note that you cannot use anything except letters numbers and the underbar \_ character for names) and you can also switch its visibility on or off by clicking the eye icon ![Eye Icon](../../assets/Images/Icons/Icon_Eye.png) (click the eye icon at the top of the list to toggle visibility for all layers).

If the room has inherited layers from a parent room, you can toggle the inheritance from the button at the bottom, but note that this will affect all layers (see [Room Inheritance](Room_Inheritance.md) for more information on inheritance). You can also use ![Shift Icon](../../assets/Images/Icons/Icon_Shift.png) or ![Control Icon](../../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../../assets/Images/Icons/Icon_Cmd.png) and left click ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) on multiple layers to select them for duplication or deletion (these options are also available from the right mouse ![RMB Icon](../../assets/Images/Icons/Icon_RMB.png) menu).

To help with ordering your layers and keeping them tidy, you can create groups of layers in a layer folder by clicking the folder icon ![Folder Icon](../../assets/Images/Icons/Icon_Folder.png). You can also delete one or more selected layers by clicking the delete button ![Delete Layer Icon](../../assets/Images/Icons/Icon_DeleteLayer.png). All layers will have a **depth** value, which defines where in the draw order that layer will be placed when its contents are rendered in the room. Layers are drawn from the _highest_ depth to the _lowest_, so a layer at a depth of -100 will be drawn _over_ a layer with a depth of 200.

IMPORTANT There is a minimum and maximum layer depth of \-16000 to 16000. Anything placed on a layer outside that range will not be drawn although all events will still run as normal for anything on the layer.

If you right-click ![RMB Icon](../../assets/Images/Icons/Icon_RMB.png) on any layer you get the layer menu:

![Room Layer Menu](../../assets/Images/Asset_Editors/Editor_Room_LayerSubMenu.png)Here you can open the layer properties for the selected layer, rename, delete and duplicate the layer, and add a new layer or **sub layer**. If you choose to add a sub layer, the new layer will be created under it, tabbed to the right. A sub layer will inherit its visibility and lock state from its parent layer.

The next two options are only usable for layers inherited from a [parent room](Room_Inheritance.md). You can choose whether the sub layers for the layer are inherited and whether its visibility is inherited from its counterpart in the parent room.

Note that you can drag layers up or down in the window to re-order them, and you can select and move multiple layers too using either ![Shift Icon](../../assets/Images/Icons/Icon_Shift.png) + ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) to select from one layer to another (including all those in between) or ![Control Icon](../../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../../assets/Images/Icons/Icon_Cmd.png) + ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) to select layers one at a time. If you place the layers on top of a layer folder, they will be moved and set as sub-layers of the folder you dropped them on to. You can also lock layers so that they cannot be edited by mistake using the lock button ![Padlock Icon](../../assets/Images/Icons/Icon_Padlock.png).

NOTE In the room canvas where you place the different assets on their layers, you can hold down "P" + click anywhere to instantly select an asset and skip to the layer that it has been placed on.

Below you can find an overview of each of the available layer types as well as the editable properties for that layer:

![Background Layer Icon](../../assets/Images/Icons/Icon_Layer_Background.png)[BackgroundsBackgrounds](Layer_Properties.htm#)

![Room Layer Background properties](../../assets/Images/Asset_Editors/Editor_Room_BackgroundProperties.png)

When you create a new background layer it does not have a sprite set by default and so GameMaker fills the layer with a solid colour instead (you can click the preview box to open the colour picker and change the colour used). When using a simple colour, none of the other layer settings are used in-game.

If you choose a sprite instead, then you can tile that image horizontally or vertically, choose whether to stretch the image so it fills the whole room, and offset the image as you wish. Additionally, if you want to have the background scroll in a direction, you can set the horizontal and/or vertical speed too (each game step it will move along the given axis by the number of pixels that you set here), and you can also re-position the background image by setting the x and y offset values. You can also set the animation speed for the background if the sprite resource that you have selected has multiple sub-images, although this is locked by default to the value that you set in [The Sprite Editor](../Sprites.md) for the image used. Finally you can set the depth for the layer explicitly, although again by default this is locked and you can simply drag and reorder the layer order in the Layer Editor to change this value.

NOTE You can toggle the inheritance for a background from this window too by clicking the button at the very top.

![Instance Layer Icon](../../assets/Images/Icons/Icon_Layer_Instance.png)[InstancesInstances](Layer_Properties.htm#)

Adding an Instance layer will open the [Element List](../Rooms.htm#p) on the side and display layer properties in [The Inspector](../../IDE_Tools/The_Inspector.md):

![Room Layer Instance properties](../../assets/Images/Asset_Editors/Editor_Room_InstanceLayer.png)The sidebar shows a list of all the instances that are currently on the layer. See: [Element List](../Rooms.htm#p)

You can add more instances to a layer by opening up [The Asset Browser](../../Introduction/The_Asset_Browser.md) and then dragging objects from there into the room, or alternatively you can select an instance from the Asset Browser and then press and hold ![Alt Icon](../../assets/Images/Icons/Icon_Alt.png) to preview the resource "in-situ", and if you additionally click the left mouse button ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) you can add the instance and even "paint" it into the room layer by maintaining the button pressed and moving the mouse.

Double-clicking ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) on any instance - either in the Room Editor itself or in the properties list - will open a new window to let you modify aspects of that single unique instance:

![Room Instance properties](../../assets/Images/Asset_Editors/Editor_Room_InstanceProperties.png)You can also edit an instance by selecting it and modifying its properties in [The Inspector](../../IDE_Tools/The_Inspector.md).

By default the instance will have a name like inst\_38B0BFF, but this can be changed to anything you want as long as the name uses only alpha-numeric characters and the under-bar \_ (and no spaces). However it's worth noting that the name given here (whether it's one you give, or the default one that the IDE gives) is considered a constant and so **must be _unique_ to the instance**. This also means that it can be used in code in your game to identify the instance, but only if you are in the same room as the instance.

NOTE In-game, this name is a handle to the instance. See [Data Types](../../GameMaker_Language/GML_Overview/Data_Types.md) for more info.

Below the instance name you have buttons to set whether the instance is to inherit from the parent room, change the object that you want it to be an instance of or even open up [The Object Editor](../Objects.md), should you wish to change anything there. There is a button to check and edit variables through the [Object Variables](../Object_Properties/Object_Variables.md) window and you can change the initial characteristics of this instance too, setting a colour to blend it with (white by default), or rotating and flipping it. You can also scale the instance along either or both the axis, and set its position within the room, as well as the image speed and initial frame for the sprite to use.

Finally you can give the instance some creation code which will run directly after the object creation event code, and is unique to this instance (so you can, say, set a variable in the object which all instance will have then modify it in the creation code so that it's a unique value for one instance). Clicking this will chain a [script window](../Scripts.md) to the instance where you can add any functions or modify any variables and this code will be run directly after the instance has been created and the instance [Create Event](../Object_Properties/Event_Order.md) has been run. Note that you can toggle inheritance of creation code on or off _independently_ of the instance inheritance.

It is worth noting that each instance on a layer is automatically flagged for exporting when the game is made. However, especially when working with inheritance, it may be that you don't _want_ specific instances to be added to the room in the final game (or you may have a debug instance in every room and simply want to exclude it from the final game). If that is the case, then simply un-checking the ![](../../assets/Images/Icons/Icon_Tick_Check.png) checkbox to the left of the instance in the Element List will prevent it from being exported as part of the executable. It is important to note, however, that if you have any code that references the instance, **then the game will not run correctly**, so use this feature with care.

![Tile map Layer Icon](../../assets/Images/Icons/Icon_Layer_Tile.png)[TilesTiles](Layer_Properties.htm#)

Adding a Tile layer displays the **Tile Layer Properties** in the Inspector and opens the **Tile Editing** window:

![Room Layer Tile properties](../../assets/Images/Asset_Editors/Editor_Room_TileEditor.png)In the **Tile Layer Properties** you can toggle the inheritance for the layer, change the tile set that is being used and set the x or y offset for the layer if you want the layer grid to not align exactly with the (0, 0) position of the room. You can also set the depth that the layer should be rendered at (which has its own unique inheritance button) and you can "lock" this depth too, which will prevent any further editing after it has been created.

When the layer properties window opens it will also open the **Tile Editing** window, which shows the tile set being used (if you close this window by mistake, you can open it again from the **Room** \> [Tile Editing](../Rooms.md) menu at the top of the IDE). You can click ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) on any tile to select it as the current **brush** and then draw them to the layer in the Room Editor by clicking ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) on the room canvas, or, if you want to draw multiple tiles together you can select them as a group by clicking the left mouse ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) and dragging to select them from the tileset before drawing. If the range of tiles that you want to draw together is not in a block, then you can hold down ![Control Icon](../../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../../assets/Images/Icons/Icon_Cmd.png) and then select individual tiles using the left mouse button ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) and create a custom brush that way (you can also remove tiles from a custom brush using ![Alt Icon](../../assets/Images/Icons/Icon_Alt.png) + ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png)). Note that creating custom brushes this way is temporary and designed for one-off uses, however you can use the **Editing Mode** in the [Brushes](../Tile_Set_Editors/Brush_Builder.md) tab to create permanent brushes that will be stored in the tile set asset:

![](../../assets/Images/Asset_Editors/Editor_Room_Brush_Editing.png)

Note that the Tile Editing window permits you to zoom in and out on the tile with the mouse wheel or the buttons at the top, and you can pan using the ![MMB Icon](../../assets/Images/Icons/Icon_MMB.png) middle mouse button or ![Space Icon](../../assets/Images/Icons/Icon_Space.png) + ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png). Note that there is a grid option too which can be toggled on or off to delimit the tiles in the window, and you can set the colour of the grid as well, although tiles will _always_ be snapped to the grid whether it is visible or not.

The Tile Editing window also permits you to select **Brushes**, **Animated Tiles** and **Auto Tiles** from the Libraries tab, all of which are covered in the section on the [Tile Set Editor](../Tile_Sets.md).

At the top of the Room Editor, when you have a tile layer selected, you will see a set of tools that are specific to tiles:

|  | Pencil | This is the pencil tool. It uses the selected tile to paint in the Room Editor with the left mouse button  and you can erase with the right mouse button . Note that the index value for the tile is shown at the bottom in the Room Status Bar in the Room Editor, and if you have multiple tiles selected for painting (i.e.: a brush) then a list of all the tile indices used will be shown. |
| --- | --- | --- |
|  | Eraser | With the eraser tool you can use the left mouse button  to erase a given tile in the Room Editor. Essentially, all this does is set the tile index to 0, which is the reserved "empty" tile. |
|  | Fill | The fill tool permits you to fill an entire tilemap layer or a selection of tiles with the current tile brush. The brush you use can be a single tile or a composite brush made up of multiple tiles, or even a tile from the animation library and clicking  on a layer will then fill in the tiles using the chosen brush. If you have not used the Selection Tool then the fill will work on all consecutive empty tiles, or all consecutive tiles of the same index. If you have a selection within the layer, then fill will be constrained to within that selection. |
|  | Line | When you select the Line Tool, clicking  then dragging and releasing will create a line of tiles between where you clicked and where you released. If you have an area of the tile map layer selected using the Selection Tool, then the line will only be added within the selection bounds. Lines can be drawn using a single tile brush, a composite brush of various tiles, or an animated tile from the library. |
|  | Rectangle | When you select the Rectangle Tool, clicking  then dragging and releasing will create a filled rectangle of tiles with the top left corner being where you click and the bottom right corner being where you release. If you have an area of the tilemap layer selected using the Section Tool, then the rectangle will only be added within the selection bounds. Rectangles can be drawn using a single tile brush, a composite brush of various tiles, or an animated tile from the library. |
|  | Selection | This is the selection tool, which can be used to define an area of the tile layer for working on. You can click the left mouse button  and then drag the mouse to create a rectangular area, or you can press  /  +  to add multiple selections and  +  to clear a part of the selection. To clear the whole selection you can press . When you have an area of a tile layer selected, the rest of the tools (Pencil, Flip, Rotate, etc.) will only work within the selected area. Note that you can also copy ( / + "C"), cut ( /  + "X") and paste ( /  + " V") selected tiles within the Room Editor which will then switch the tool to the Pencil and permit you to paint the room layer with the selected tiles. |
|  | AutoTile | Clicking this tool enables the Auto tiling paint style. When this is active you can select any tile from the Autotile Libraries tab, and then paint it into the room layer and GameMaker will automatically change it to match the surrounding tiles, as long as you have correctly set up the Auto Tile Tab. Note that selecting a tile from the tile set that is not part of the autotile libraries will reset the drawing tool to the standard Pencil tool. |
|  | Flip | Clicking the Flip tool with the left mouse button  (or using the keyboard shortcut "X" ) will flip the tile currently selected for drawing along the horizontal axis, without changing drawing tool (if you have a custom brush selected for drawing, the whole brush will flip). If you have no tile selected for drawing, but do have a group of tiles selected on a layer, then the flip tool will Flip the selected tiles. |
|  | Mirror | Clicking the Mirror tool with the left mouse button  (or using the keyboard shortcut " Y" ) will mirror the tile currently selected for drawing along the vertical axis, without changing drawing tool (if you have a custom brush selected for drawing, the whole brush will mirror). If you have no tile selected for drawing, but do have a group of tiles selected on a layer, then the Mirror tool will mirror the selected tiles. |
|  | Rotate | Clicking the Rotate tool with the left mouse button  (or using the keyboard shortcut " Z" ) will rotate the tile currently selected for drawing 90° clockwise, without changing drawing tool (if you have a custom brush selected for drawing, the whole brush will rotate). If you have no tile selected for drawing, but do have a group of tiles selected on a layer, then the Rotate tool will rotate the selected tiles. |

NOTE If you use the Selection Tool ![Sekection Tool Icon](../../assets/Images/Icons/Icon_TileSelect.png) to select a group of tiles in the Room Editor canvas and then either cut or copy them, they will temporarily become the current brush for painting.

![Path Layer Icon](../../assets/Images/Icons/Icon_Layer_Path.png)[PathsPaths](Layer_Properties.htm#)

Adding a Path layer will display the Path properties in the Inspector:

![Room Layer Path properties](../../assets/Images/Asset_Editors/Editor_Room_PathProperties.png)Here you can select the path from the Asset Browser to use for the layer and then change the defined connection type (either using smooth interpolation or straight), as well as whether it is closed or not and the precision with which the path should be created. Note too that you can toggle the [inheritance](Room_Inheritance.md) here, and that you can set the path to be a specific colour (default is red) to make seeing them better in the editor. If you have no path resource defined, you can click the **New** button to create one. Path layers also have a depth value associated with them (locked by default) even though nothing is actually rendered in your game when using them.

It is worth noting that you can also add points to the path by clicking the left mouse button ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png), as well as remove points using the right mouse button ![RMB Icon](../../assets/Images/Icons/Icon_RMB.png), or select a point by clicking on it and dragging it around, _all within the actual room editor_, making creating and editing paths very easy (although you can still edit the path in [The Path Editor](../Paths.md) as normal too). If you hold down ![Control Icon](../../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../../assets/Images/Icons/Icon_Cmd.png) + ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) on different path points, then they will all be selected and you can move them together or delete them all from the menu option (explained below).

If you right click ![RMB Icon](../../assets/Images/Icons/Icon_RMB.png) in the Room Editor window while manipulating a path then you'll get the following options:

![Room Layer Path Menu](../../assets/Images/Asset_Editors/Editor_Room_PathRMBMenu.png)Here you can reverse the path direction (this will have little visible effect, but reverses the order in which the path points are counted so the start point becomes the end point and vice versa), as well as flip them horizontally or vertically. You can also delete the selected point from this menu. Note that you can hold down "T", " S" or "R" then click ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) and drag to translate, scale or rotate the entire path.

![Asset Layer Icon](../../assets/Images/Icons/Icon_Layer_Asset.png)[AssetsAssets](Layer_Properties.htm#)

Adding an Asset layer will open the [Element List](../Rooms.htm#p) on the side and display layer properties in [The Inspector](../../IDE_Tools/The_Inspector.md):

![Room Layer Asset properties](../../assets/Images/Asset_Editors/Editor_Room_AssetLayer.png)An asset layer contains graphical assets (sprites, sequences, text and particle systems) that are placed into the room independently of instances, and you can place them by either dragging them in from [The Asset Browser](../../Introduction/The_Asset_Browser.md) or by selecting the one you want in the Asset Browser and then using ![Alt Icon](../../assets/Images/Icons/Icon_Alt.png) + ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) to "paint" them.

While placing assets on the asset layer they will snap to the grid snap values set at the top of the Room Editor for the grid, but if you want to place them freehand, simply switch off the grid or use the keys ![Control Icon](../../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../../assets/Images/Icons/Icon_Cmd.png) and the left mouse button ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png). While those keys are held down, you will be free to place the asset anywhere, without it snapping to the grid resolution.

### Asset Types

Sprite assets are similar to tiles, only they can be fully animated - if the sprite used has sub-images they will be shown - without the restrictions that are in place for tiles, ie: they aren't forced to a grid and animations can be any length and speed.

You can drag [Sequences](../Sequences.md) into an asset layer, which are animated "collections" of sprites, sounds and instances that will play when the room is entered. You can also drag [Particle Systems](../Particle_Systems.md), which contain emitters that "emit" particles according to predefined formulas which results in an animation.

![](../../assets/Images/Asset_Editors/Room_Text/Room_text_element.png)You can place text by dragging a [Font asset](../Fonts.md) into the room, or pressing the ![](../../assets/Images/Icons/Icon_TextButton.png) icon in the [Layer Toolbox](../Rooms.md) at the top and then clicking in the room where you want to place the text. The default text that appears on a new text element can be changed from the [Room Editor Preferences](../../Setting_Up_And_Version_Information/IDE_Preferences/Room_Editor_Preferences.md).

Creating a new text element will create a new Font asset if the project doesn't have any, or use an existing one.

TIP The image above shows an asset layer with text inside it, and an [Outline filter](FX/All_Filter_Effect_Types.md) applied to it through [The Inspector](../../IDE_Tools/The_Inspector.md). Filters/effects can be used in this way to apply visual effects to any type of layer.

NOTE Text elements can be modified at runtime using [Text Element Functions](../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/Text_Functions/Text_Elements.md).

### Asset Properties

Once you place an asset in the room, you have a certain amount of control over how it looks by double clicking ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) on it to open the asset properties window:

![Room Asset properties](../../assets/Images/Asset_Editors/Editor_Room_AssetProperties.png)You can also edit an asset element by selecting it and modifying its properties in [The Inspector](../../IDE_Tools/The_Inspector.md).

From here you can give the placed asset ("element") a unique name, however you cannot use this name as an identifier in your game, instead you can pass it into [layer\_sprite\_get\_id](../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sprite_Layers/layer_sprite_get_id.md) for sprites and [layer\_text\_get\_id](../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/Text_Functions/layer_text_get_id.md) for text (however, names for sequences and particle systems cannot be used at runtime). You can also set whether it is to inherit from the parent room and change the sprite, sequence, font or particle system that you want it to display.

For sequences, you can set the animation speed and the initial playhead frame, as well as the colour to blend with it (white by default) and the position in the room. You can change the characteristics of sprite assets too, setting a colour to blend it with (white by default), or rotating and flipping it. You can also scale sprites along either or both the axis, and set their position within the room. If the sprite has sub-images, you can choose the animation speed as well as set the initial frame to be shown.

![](../../assets/Images/Asset_Editors/Room_Text/Room_text_options.png)For text, you can change the multi-line string that appears, its colour, rotation, scale, and position, same as a sequence or sprite graphic. Text-specific options can also be edited, such as the [origin](../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/Text_Functions/layer_text_xorigin.md) (which acts as a negative offset), [frame size](../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/Text_Functions/layer_text_framew.md) (only used when wrapping is enabled), [wrapping](../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/Text_Functions/layer_text_wrap.md), [alignment](../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/Text_Functions/layer_text_halign.md), [character spacing](../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/Text_Functions/layer_text_charspacing.md) and [line spacing](../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/Text_Functions/layer_text_linespacing.md). This text functionality is similar to [Text in Sequences](../Sequence_Properties/Text_in_Sequences.md), refer to that page for more information on text editing behaviour, especially [Resize Behaviour](../Sequence_Properties/Text_in_Sequences.htm#p).

Finally, for particle systems, you can also set the blend colour and the rotation of the entire particle system.

It is worth noting that each asset on the layer is automatically flagged for exporting when the game is made. However, especially when working with [inheritance](Room_Inheritance.md), it may be that you don't want specific assets to be added to the room in the final game. If that is the case, then simply un-checking the ![](../../assets/Images/Icons/Icon_Tick_Check.png) checkbox to the left of the asset in the Element List will prevent it from being exported as part of the executable. It is important to note, however, that if you have any code that references that asset, then the game will not run correctly, so use this feature with care.

![](../../assets/Images/Icons/Icon_Layer_Effects.png)[Filter/EffectFilter/Effect](Layer_Properties.htm#)

![](../../assets/Images/Asset_Editors/Editor_Room_LayerFilterProperties.png)

A Filter/Effect (or FX) layer is used to apply a visual filter or effect to some layers. Adding an FX layer and selecting an effect from the "Effect Type" drop-down menu will apply that effect to all layers that are _below_ the selected FX layer, as demonstrated in this visual:

![](../../assets/Images/Asset_Editors/Editor_Room_LayerFilterEffectOrder.png)This means that all "affected" layers will have the selected filter applied to them (here, "Desaturate") as they are below an FX layer. Any layers above the FX layer will remain unaffected.

You can create Single-Layer FX using [The Inspector](../../IDE_Tools/The_Inspector.md).

To learn more about Filter/Effect layers, read [Filters and Effects](Filters_and_Effects.md).

![Asset Layer Icon](../../assets/Images/Icons/Icon_Layer_UI.png)[UIUI](Layer_Properties.htm#)

When you add your first UI layer, the "UI Folder" will be added to your layers list and the Element List will open on the side displaying your UI layer(s):

![](../../assets/Images/Asset_Editors/Editor_Room_UIFolder.png)Deleting this UI Folder will delete all UI layers you have created.

All UI layers are global, i.e. they are shared among all rooms in your project. For more information, see: [UI Layers](UI_Layers.md)

## Filter/Effects

In the layer properties shown within [The Inspector](../../IDE_Tools/The_Inspector.md), you can apply a filter or effect to the selected layer. This will be applied as a "single layer" effect, i.e. its effect will only be applied to that particular layer and not on other layers below it.

![](../../assets/Images/IDE%20Tools/Inspector_Room_Layers.png)