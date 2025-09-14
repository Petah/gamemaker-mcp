---
title: "The Room Editor"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Rooms.htm"
converted: "2025-09-14T04:00:16.456Z"
---

# The Room Editor

![](../assets/Images/Asset_Editors/Editor_Room.png)

The Room Editor is where you create your game **rooms**. Every game requires _at least one room to run_, and in the room you can place instances, sprites, tiles, paths, backgrounds, sequences, text and particle systems. Each of these different assets can be placed on their own unique **layer** which can then be ordered however you wish in the **Layer Editor**. Due to the complexity of the Room Editor, we'll give you first a brief overview of the most important features, and then you can find more in-depth details from the section links listed below.

When you create a room asset, you can right-click ![RMB Icon](../assets/Images/Icons/Icon_RMB.png) on it in [The Asset Browser](../Introduction/The_Asset_Browser.md) to open the context menu, which will permit you to create **child rooms** (see the page on [Room Inheritance](Room_Properties/Room_Inheritance.md) for more information), open up the room for editing, add a new asset group to better organise the rooms, rename the room or delete it. Note that to change the room order and/or inheritance you need to use [The Room Manager](../Settings/The_Room_Manager.md), which you can open using the menu in the top right of the Asset Browser.

![](../assets/Images/Asset_Editors/Editor_Room_RoomManager.png)The Room Editor is itself a [workspace](../Introduction/Workspaces.md) and as such you can click ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) on the tab and drag it off of the main window into a new window of its own - perhaps in another display, for example. You can also place it back into the main window by dragging the tab to the top of the IDE and releasing the mouse button.

The user interface for the Room Editor is simple to navigate and split into various discrete sections. Those parts of the editor that are docked - [The Inspector](../IDE_Tools/The_Inspector.md) that shows the **room or layer properties** and the **Layer Editor** - can also be removed from the dock by simply dragging them out into the workspace, and they can be added back into the docks again by dragging them to the sides or the bottom of the workspace.

Below is a brief overview of each of the Room Editor sections:

[Rulers / GuidesRulers / Guides](Rooms.htm#)

The rulers along the edge of the canvas show you the position of the things that are placed within it, and are marked from (0, 0) which is the center of the canvas and the origin for the room. You can click and drag on the rulers to pull a horizontal or vertical guide into the room, and this guide can then be used to accurately position the different assets that are being used, as moving an asset close to one will "snap" it to the guide. While positioning assets within the room, smart guides will also be temporarily shown indicating the distance between assets, as well as the distance from the room boundary or center point.

![Guides and Smart Guides in the Sequences Editor](../assets/Images/Asset_Editors/Editor_Sequences_Guides.png)The distance that assets "snap" to guides, as well as other properties, can be set in the [Room Editor Preferences](../Setting_Up_And_Version_Information/IDE_Preferences/Room_Editor_Preferences.md).

[Layer EditorLayer Editor](Rooms.htm#)

The Room Editor places things onto layers within the room. Each layer is at a discrete "depth", where those that appear at the bottom of the list in the layer window will be drawn under those that appear near the top.

IMPORTANT There is a minimum and maximum layer depth of \-16000 to 16000. Anything placed on a layer outside that range will not be drawn although all events will still run as normal for anything on the layer.

In the "Layers" panel, click on ![](../assets/Images/Icons/Icon_Add_Layer.png) to open the "Create Layer" menu, where you can choose the type of layer to add:

![](../assets/Images/Asset_Editors/Editor_Room_CreateLayer.png)

|  | Instances | This layer is for placing instances that will be used in the room. |
| --- | --- | --- |
|  | Tile Maps | This layer is for placing tiles from tile sets as tile maps. |
|  | Paths | This layer is for showing and adding paths in the room. |
|  | Assets | This layer is for visual assets to be added to the room, like sprites, sequences, text and particles. |
|  | Filter/Effect | This type of layer defines a filter/effect that is applied to all layers below it. |
|  | Background | This type of layer defines a background, which is essentially a single colour or sprite image that may be tiled over the whole room. |
|  | UI | This creates a global UI layer that is shared among rooms. |

You can also create a layer folder using the folder button ![Folder Icon](../assets/Images/Icons/Icon_Folder.png) where you can group selected layers together, as well as delete the selected layers with the delete button ![Delete Layer Icon](../assets/Images/Icons/Icon_DeleteLayer.png). Each of these layer types are discussed in more detail on the [Layer Types And Properties](Room_Properties/Layer_Properties.md) page.

NOTE You can toggle [inheritance](Room_Properties/Room_Inheritance.md) for the Layer Editor which will affect layer order and visibility. The visibility itself can be set by clicking the eye icon ![Eye Icon](../assets/Images/Icons/Icon_Eye.png) beside each of the layers, or you can click the one at the very top to enable/disable all layers at once. You also have the possibility to "lock" a layer (or all of them) so that they cannot be changed by clicking the padlock icon ![Padlock Icon](../assets/Images/Icons/Icon_Padlock.png).

NOTE Layers which are flagged as invisible will **not** be shown when the game is run.

[Inspector (Layer Properties)Inspector (Layer Properties)](Rooms.htm#)

The Inspector window will show layer properties depending on the currently selected layer in the Layer Editor.

![Room Layer Properties In Full](../assets/Images/Asset_Editors/Editor_Room_LayerProperties.png) Each window will have the different properties and lists associated with the currently selected layer type, and you will be able to edit fundamental details for how the layer is displayed and what is actually on the layer. Please see the [Layer Types And Properties](Room_Properties/Layer_Properties.md) page for more details.

[Inspector (Room Properties)Inspector (Room Properties)](Rooms.htm#)

When the room asset is selected in the Asset Browser, the Inspector shows all the base properties for the room, like its size, whether it uses physics, or any cameras and viewports it requires. These can be changed here as well. This section is dicussed in more detail on the [Room Properties page](Room_Properties/Room_Properties.md).

[Element ListElement List](Rooms.htm#)

The Element List appears when a valid type of layer (i.e. one that holds elements) is selected. This includes Instance Layers that hold Object Instances, Asset Layers that hold visual assets of various types and the UI Folder that holds all UI Layers.

This list will show you all the elements present on the selected layer. Each entry in the list contains a ![](../assets/Images/Icons/Icon_Tick_Check.png) checkbox that enables/disables that element. It then shows its icon, asset name and the identifier of that element.

Clicking on any element in the list will show you its properties in the Inspector:

![](../assets/Images/Asset_Editors/Editor_Room_ElementEditing.png)Elements in this list can be reordered by clicking ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) and dragging them to the position required. For instances, this is purely for organisational purposes within the Room Editor and if you want to set a specific creation order, use the **Instance** **Creation Order** menu, which can be opened from the [Room Properties](Room_Properties/Room_Properties.md) in the Inspector, or from the [Room context menu](Rooms.md).

When the UI Folder is selected, this list will show all [UI layers](Room_Properties/UI_Layers.md) in the project.

At the top of the list, you can filter the list with a search string. This string is checked against both the instance identifiers and the asset names.

The ![](../assets/Images/Icons/Icon_ChangeOrientationFull.png) menu can be used to detach the list or attach it to any of the four sides of the Room Canvas. You can resize the sidebar by dragging its edge facing the Room Canvas, and clicking on the edge will close the sidebar.

[Layer ToolboxLayer Toolbox](Rooms.htm#)

Certain layer types will have additional tools added to the top of the IDE in the **Layer Toolbox**, for example, tile layers, asset layers (for text) and path layers. The exact tools will change based on the layer type currently being edited, and so are explained on the [Layer Types And Properties](Room_Properties/Layer_Properties.md) page.

[Room ToolboxRoom Toolbox](Rooms.htm#)

At the top of the main Room Editor canvas you have a few controls to deal with how things are displayed. They are:

-   **Toggle Canvas Grid** ![Toggle Canvas Grid Icon](../assets/Images/Icons/Icon_CanvasGrid.png): This will toggle on/off the canvas grid. This is a grid that GameMaker draws over the preview canvas to divide it into sections, and by default is set to 32x32px in size. If you click the Grid Menu icon ![Icon Grid Menu](../assets/Images/Icons/Icon_CanvasOptions.png) you will see the grid options:
    ![](../assets/Images/Asset_Editors/Editor_Sequences_GridControls.png)These options permit you to set the grid colour and alpha, as well as the cell values for the grid along the X and Y axis. You also have an option to enable or disable grid snapping here (disabled by default). You can use the keyboard shortcuts "G" and ![Shift Icon](../assets/Images/Icons/Icon_Shift.png) + "G" to toggle the grid visibility and grid snapping respectively.
-   **Canvas Zoom Controls** ![Canvas Zoom Controls Icons](../assets/Images/Icons/Icon_CanvasZoom.png): These buttons control the current canvas zoom level. You can zoom in or out and clicking the ![Zoom Reset Icon](../assets/Images/Icons/Icon_ZoomReset.png) button will reset the canvas to be 1:1 with the contents being edited. You can also click the Window Fit button ![Canvas Fit Icon](../assets/Images/Icons/Icon_CanvasFit.png) to make the entire canvas fit within the current editor workspace (this will zoom in/out as appropriate to make it fit). Note that you can also zoom in and out using the ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) and the Mouse Wheel ![MMB Icon](../assets/Images/Icons/Icon_MMB.png), and pressing ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) + ![Enter Icon](../assets/Images/Icons/Icon_Enter.png) will set the canvas to be 1:1 with the display.
-    **![Canvas View Icon](../assets/Images/Icons/Icon_CanvasViews.png) Show Views**: Clicking this will enable or disable the view rectangle. When enabled you will see a highlighted area that signifies the different views that are enabled for the room.
-    **![Play Room Icon](../assets/Images/Icons/Icon_PlayRoom.png) Play Animations**: When adding sprites, sequences or animated tiles, you may want to get an idea of how these will look within the room itself without having to compile the whole project, and so you can click this to start all the different animations playing. Clicking it again will stop the animation.
-    **![Canvas Layer Select Icon](../assets/Images/Icons/Icon_CanvasSelect.png) Canvas Select From Any Layer**: By default when you click on an element in the room canvas you will only be able to select those assets that are on the layer currently being edited, however if you enable this option you can then click on any element from any layer and it will be selected, changing the target layer to the one that the element is on. You can use the keyboard shortcut " P" to temporarily enable this (hold "P" to enable and release to disable). NOTE You cannot use this to multi-select UI and room layer assets at the same time.


[Room CanvasRoom Canvas](Rooms.htm#)

The center of the Room Editor window is taken up with the area where all the actual editing takes place. Here is where you'll be placing your instances and assets, drawing your tiles, or positioning your paths. You can zoom in and out using the mouse wheel or the room controls at the top, and you can pan around by holding the middle mouse button ![MMB Icon](../assets/Images/Icons/Icon_MMB.png) down and moving the mouse around or using ![Space Icon](../assets/Images/Icons/Icon_Space.png) + ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) while moving.

When creating asset layers or instance layers, you can place the asset or instance by simply dragging it from [The Asset Browser](../Introduction/The_Asset_Browser.md) and then dropping it where you want it to be positioned. Alternatively you can select an asset or instance from the Asset Browser and then press and hold ![Alt Icon](../assets/Images/Icons/Icon_Alt.png) to preview the resource "in-situ", and if you additionally click the left mouse button ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) you can add the instance and even "paint" it into the room layer by maintaining the button pressed and dragging the mouse. Note that by default instances and sprites that are added to a room in this way will be snapped to the defined room grid settings, but you can hold down ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) to have the instance follow the mouse precisely and not snap (releasing ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) will permit snapping again).

For paths you can create a new path layer and path resource right from within the Room Editor - or create a new path asset and then drag it into the main editor window as you would for an instance - and then edit the path and its connections in the editor window too. For tile sets, you can "paint" them in from the Tile Set Editor.

NOTE You can select and move or delete multiple assets from the same layer by holding down ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) + ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) on the ones you want, and most assets in the Room Editor will permit you to rotate and scale them (singly or as a group) by clicking and holding ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) along the outside edges or corners and dragging the mouse. You can also double click ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) on any single asset (tiles, instances, sprites) to have the editor pan to it and open up the properties window for the selected asset in [The Inspector](../IDE_Tools/The_Inspector.md).

[Status BarStatus Bar](Rooms.htm#)

The status bar is used to show you context specific information. The status bar will always show you where in the room the mouse cursor is, but it will also show additional information based on the layer being edited, the tool being used and the state of that tool.

You can get more information about some of the above mentioned sections from the following pages:

-   [Layer Types And Properties](Room_Properties/Layer_Properties.md)
-   [Room Properties](Room_Properties/Room_Properties.md)
-   [Room Inheritance](Room_Properties/Room_Inheritance.md)
-   [Filters and Effects](Room_Properties/Filters_and_Effects.md)
-   [UI Layers](Room_Properties/UI_Layers.md)
-   [The Room Manager](../Settings/The_Room_Manager.md)

## Room Menu

Apart from the in-editor tools, you will also see a drop down menu at the top of the IDE.

![Room Editor Menus](../assets/Images/Asset_Editors/Editor_RoomContextMenu.png)These menus are explained below:

-   **Layer View**: This will re-open the Layer Editor window should you have closed it at any time.
-   **Instance Creation Order**: This will open the **Instance Creation Order Window** (which can also be opened by using the button in the [Room Properties](Room_Properties/Room_Properties.md) window):
    ![Room Creation Order Window](../assets/Images/Asset_Editors/Editor_Room_CreationOrder.png)This window lists all the instances in the room in the order that they will be created (from top to bottom of the list). By default, this corresponds to the order in which you add the instances to the room in the Room Editor, as new instances are added to the end of this list. Should you require a specific instance to be created before any other, you can simply click ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) and drag it to the position you require.

    IMPORTANT Instance creation order doesn't guarantee execution order within the same event. For example, if one instance is created before another one it may not mean it runs its Step event, Draw event, etc., before the other instance as well.
-   **Reset Windows On Current Desktop**: This will reset the Room Editor window layout to its default values for the desktop workspace currently focused.
-   **Disable Filters Preview**: Selecting this will disable the preview of all Filters/Effects in the current Room Editor and change the option to "**Enable Filters Preview**" which enables the FX previews again. This setting is not carried over to other open Room Editors and is reset upon closing the current Editor.
-   **Tile Editing**: When working with a tile layer, this option will be highlighted in the drop down menu. It has the following sub-menu:
    ![Room Tile Menu](../assets/Images/Asset_Editors/Editor_Room_TileMenu.png)When editing the tile layer you can select multiple tiles by clicking, holding down and dragging the left mouse button ![LMB Icon](../assets/Images/Icons/Icon_LMB.png), or you can select and group individual tiles using ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) + ![LMB Icon](../assets/Images/Icons/Icon_LMB.png), or remove individual tiles from the selection using ![Alt Icon](../assets/Images/Icons/Icon_Alt.png) + ![LMB Icon](../assets/Images/Icons/Icon_LMB.png). From this menu you can then clear the selection or invert it as well as cut, copy or paste the selection to another layer (or even the same layer but in another position). The final option will re-open the tile set editor docked window should you have closed it.
-   **Convert Image To Tile Map**: The Convert Image To Tile Map option is a powerful tool that can be used to import a single image and then extract the tiles used from the image and recreate it as a tile map layer in the Room Editor, creating the required tile set and sprite as part of process. When you select this tool, you will be asked to supply an uncompressed image file (PNG, GIF or BMP) which will then be loaded. On load you will be presented with the **Image Import** tool:
    ![Convert Image To Tilemap Tool](../assets/Images/Asset_Editors/Editor_Room_ConvertImage.png)Here you are given options on how to split up the tile when creating the tile set, and you can set the cell width and height as well as any offsets required around the edges. You can also set the approximate width (in pixels) for the final sprite that is created. For example, if the tile set is made up of 64x64 tile cells and you set a width here of 200, the final sprite that is created for use in the tile set will be 192 pixels wide (i.e.: 3 tile cells). If you leave it at the default value of 0, then GameMaker will attempt to make as "square" a sprite as possible with approximately the same number of horizontal and vertical tile cells.

    After setting the way the image is to be split, clicking the swatch beside the **Remove Colour** option will open the colour picker and permit you to select a colour that is to be removed from the final sprite. This is usually a background colour that you want to remove and setting this swatch to anything other than 100% transparent (alpha 0) will remove the selected colour on import.

    Finally, you have the option to name the sprite, tile set and tile map layer that will be created for you by this tool. When you finalise the import, a sprite with all the images laid out in a grid will be created, as well as a tile set from this sprite. In the room, a new tile map layer will be created and the image reproduced using the generated tile set. Note that the tool will _not_ duplicate tiles and will instead recognise when a cell has image data that coincides with another cell (this includes rotated tiles). You can see this in the following image where only one flower tile has been created and one crate tile too, yet there are multiple instances of both, with some instances rotated in the base image:
    ![Convert Image To Tilemap Example Tileset](../assets/Images/Asset_Editors/Editor_Room_TileExample.png)