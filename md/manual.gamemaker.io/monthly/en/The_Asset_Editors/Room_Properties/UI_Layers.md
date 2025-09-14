---
title: "UI Layers"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Room_Properties/UI_Layers.htm"
converted: "2025-09-14T04:00:16.405Z"
---

# UI Layers

UI layers let you define [Flex Panels](../../GameMaker_Language/GML_Reference/Flex_Panels/Flex_Panels.md) and place sprites, objects and text within them to create responsive user interfaces that are drawn on top of your game, useful for creating HUDs and menus.

You can add a UI layer in [The Room Editor](../Rooms.md) through the ![](../../assets/Images/Icons/Icon_Add_Layer.png) "**Create Layer**" menu:

![](../../assets/Images/Asset_Editors/Editor_Room_UI_CreateLayer.png)All UI layers are contained in the global "**UI Folder**", which will be created when you add your first UI layer. The UI Folder (and every UI layer inside it) is shared among all rooms in your project, so UI layers are displayed throughout your game regardless of which room is active.

NOTE The UI Folder is not a layer itself despite appearing in the Layers panel. It only exists in the editor to group all UI layers under one menu and cannot be retrieved and operated on as a layer at runtime.

![](../../assets/Images/Asset_Editors/UILayers/UIL_Example.png)Once you add a UI layer, you can choose whether it should appear on the main game display or inside your viewports separately. You can then add Flex Panels inside the layer and place elements inside Flex Panels.

Contents

1.  [How To Use](UI_Layers.htm#how_to_use)
2.  [Layer Structure](UI_Layers.htm#layer_structure)
3.  [Element List](UI_Layers.htm#element_list)
4.  [Toolbox](UI_Layers.htm#h)
5.  [Runtime Order](UI_Layers.htm#runtime_order)

1.  [Creation](UI_Layers.htm#creation)
2.  [Draw Order](UI_Layers.htm#draw_order)

7.  [Runtime Editing](UI_Layers.htm#runtime_editing)
8.  [Runtime Changes For Object Instances](UI_Layers.htm#runtime_changes)
9.  [Inspector Properties](UI_Layers.htm#inspector_prope)

1.  [UI Layer Properties](UI_Layers.htm#ui_layer_proper)
2.  [Flex Panel Properties](UI_Layers.htm#flex_panel_prop)
3.  [Element Properties](UI_Layers.htm#element_propert)

## How To Use

You can follow the basic steps below to create your UI with UI layers:

1.  Add your first UI layer and add Flex Panels within it to create a structure
2.  Set the properties of your UI layer and Flex Panels from the Inspector, to determine how they are aligned and sized
3.  Place Object Instances in your Flex Panels to enable runtime interaction
4.  Place Sprites or Font assets to set up the visuals of your Flex Panels
5.  Enable or disable a UI layer at runtime using [layer\_set\_visible](../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/General_Layer_Functions/layer_set_visible.md)

At runtime, you can get the root [Flex Panel Node](../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/flexpanel_create_node.md) of a UI layer by calling [layer\_get\_flexpanel\_node](../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/UI_Layers/layer_get_flexpanel_node.md). Any of the [Flex Panel functions](../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/section_index.md) can be called on the returned node.

## Layer Structure

UI layers make use of [Flex Panels](../../GameMaker_Language/GML_Reference/Flex_Panels/Flex_Panels.md) for containing assets. UI layers themselves are limited Flex Panels, which can hold other Flex Panels and each Flex Panel can hold one or more assets.

Flex Panels can hold [Objects](../Objects.md), [Sprites](../Sprites.md), [Sequences](../Sequences.md), [Fonts](../Fonts.md) and other Flex Panels. You can drag such assets into the canvas or into the Element List, any such asset will always be added inside a new Flex Panel with "auto" size unless you are holding CTRL/CMD (this behaviour can be reversed in the [Preferences](../../Setting_Up_And_Version_Information/IDE_Preferences/Room_Editor_Preferences.md)).

When dragging an asset into the Canvas, you can place it inside a particular UI layer or Flex Panel by dropping it inside its area. When placed outside of such areas, you will be prompted to create a new UI layer, which you can set to automatically create or ignore in the [Preferences](../../Setting_Up_And_Version_Information/IDE_Preferences/Room_Editor_Preferences.md).

![](../../assets/Images/Asset_Editors/UILayers/UIL_Example1.png)In the above example, a UI layer holds a Flex Panel which then holds three child Flex Panels. Each child Flex Panel contains a sprite. In the canvas, the sprites are displayed in a row with gaps between them, based on the settings of the parent Flex Panel.

![](../../assets/Images/Asset_Editors/UILayers/UIL_Parents.png)Each element in the canvas will display a label. Clicking on the label will display its parent containers above the label, where you can click on a parent label to select its entry in the Element List.

## Element List

When the UI Folder is selected, the Element List displays all the UI layers in your project. Here you can search for elements and change the orientation of the window.

![](../../assets/Images/Asset_Editors/UILayers/UIL_ElementList.png)

The list first displays any UI Layers that have "**Game View**" set to "**Display**", and those with "**Game View**" set to "**Viewports**" are displayed under the "**Viewports**" header. UI layers can be made invisible by clicking on the ![](../../assets/Images/Icons/Icon_Eye.png) eye icon and locked with the ![](../../assets/Images/Icons/Icon_Padlock.png) button.

You can drag your layers, Flex Panels or assets to place them inside, above or below another item in the list. The order of the elements in this list affects their draw order, e.g. an item above another in the list will also be drawn above it in-game.

Asset elements inside Flex Panels will have a ![](../../assets/Images/Icons/Icon_Tick_Check.png) checkbox next to them to enable/disable the element.

NOTE Disabling an Object Instance will deactivate it so none of its events run. The same applies when the UI layer containing the instance is set to invisible with the ![](../../assets/Images/Icons/Icon_Eye.png) button or the [layer\_set\_visible](../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/General_Layer_Functions/layer_set_visible.md) function.

Right-clicking on any item in this list will show the following menu:

![](../../assets/Images/Asset_Editors/UILayers/UIL_RMB.png)

-   **Add UI Layer**: Adds a new UI Layer. If you right-clicked on a UI layer with "**Game View**" set to "**Viewports**" (or a child of such a layer), the new UI layer will be created as a viewport layer. The name of each UI layer must be unique.
-   **Add Flex Panel**: Adds a new Flex Panel under the selected item.
-   **Add Folder**: Adds a new folder, this is only used for organisational purposes.
-   **General options**: You can rename the item, cut/copy/paste, duplicate and delete it.
-   **Show Instance/Asset names first**: Change whether asset elements should display their asset names or instance names first in the list.
-   **List options**: Here you can expand/collapse all children under the item or all items in the list, and select all items.

## Toolbox

Using UI layers will enable the following extra options in the Room Toolbox:

![](../../assets/Images/Asset_Editors/UILayers/UIL_Toolbox.png)

-   ![](../../assets/Images/Icons/Icon_UIL_Canvas.png) **Toggle UI canvas preview**: This enables a canvas that is used to display your UI layers. Your UI layers will be previewed at the size set in this menu -- you may set a custom size or choose from one of the given presets. You can change the orientation and set an offset. Enable "Clip Contents" to ensure only elements inside the canvas area are drawn. NOTE These options are only provided for preview in the canvas and do not affect how UI layers appear in-game.
-   ![](../../assets/Images/Icons/Icon_UIL_Nodes.png) **Show UI Layer node outlines**: This enables outlines for all UI layers and Flex Panels that display the area taken up by each layer/panel. Each layer/panel in the Element List displays a colour that corresponds to the colour of its outline in the Room Canvas.

In the Layer Toolbox, the ![](../../assets/Images/Icons/Icon_TextButton.png) button will appear allowing you to place text items in the canvas.

## Runtime Order

### Creation

UI Layers are initialised when the first room in the game begins. All elements (including Object Instances) in a UI Layer stay persistent throughout the rest of the game, regardless of the active room changing.

You can modify the order of creation for Object Instances in UI Layers in the [Instance Creation Order](Room_Properties.htm#creation_order) menu of the first room set in [The Room Manager](../../Settings/The_Room_Manager.md).

### Draw Order

When UI layers are present, the runtime draw order is as follows:

-   **Draw Event**: Contents of all layers are drawn including the Draw Begin and Draw events of any Object instances in the room.
-   **Viewport UI Layers**: Any UI layers with "**Game View**" set to "**Viewports**" are rendered for the current viewport. The position and size of the viewport is used as the position and size of each UI layer.
-   **Draw End Event**: The Draw End event is run.

    ---

-   **Draw GUI Begin**: The Draw GUI Begin Event is run.
-   **Display UI Layers**: Any UI layers with "**Game View**" set to "**Display**" are drawn to the screen. The size of the [GUI layer](../../GameMaker_Language/GML_Reference/Cameras_And_Display/display_set_gui_size.md) is used as the size of each UI layer.
-   **Draw GUI, Draw GUI End**: The remaining Draw GUI events are run.

## Runtime Editing

At runtime, you can get the root [Flex Panel Node](../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/flexpanel_create_node.md) of a UI layer by calling [layer\_get\_flexpanel\_node](../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/UI_Layers/layer_get_flexpanel_node.md). Any of the [Flex Panel functions](../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/section_index.md) can be called on the returned node.

For example, you can search for a child Flex Panel recursively under the root node by calling [flexpanel\_node\_get\_child](../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/flexpanel_node_get_child.md) and call [flexpanel\_node\_get\_struct](../../../../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/flexpanel_node_get_struct.md) to get the properties of a [node as a struct](../../GameMaker_Language/GML_Reference/Flex_Panels/Flex_Panels_Styling.md).

Element handles returned from a node struct (from its layerElements array) can be operated on by the relevant [layer element functions](../../../../../The_Asset_Editors/Asset_Management/Rooms/Rooms.md) (e.g. [layer\_text\_text](../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/Text_Functions/layer_text_text.md) to change a text element's string or [layer\_sprite\_change](../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sprite_Layers/layer_sprite_change.md) to change a sprite element's sprite). All elements in a UI layer can collectively be offset by calling [layer\_x](../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/General_Layer_Functions/layer_x.md) and [layer\_y](../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/General_Layer_Functions/layer_y.md).

You can get the type of a layer at runtime with [layer\_get\_type](../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/General_Layer_Functions/layer_get_type.md) and check if an Object Instance is in a UI layer using the [on\_ui\_layer](../../GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/on_ui_layer.md) instance variable.

## Runtime Changes For Object Instances

As Object Instances can be placed in UI Layers, the following behaviours for them are different from regular Instance layers:

-   The [x](../../GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/x.md) and [y](../../GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/y.md) position variables return the position of the instance on the [GUI layer](../Object_Properties/Draw_Events.md) or viewport instead of inside the room area, i.e. they are unaffected by cameras and stick to their positions on the on-screen GUI or viewport area. The same applies to the bbox\_\* variables.
-   All Mouse events for instances on UI layers work with the mouse coordinates in the UI space (GUI layer or viewport), so you can use the Left Pressed, Mouse Enter etc. events to detect mouse interaction with the instance when it is placed on a UI layer.
    -   TIP For instances on "Display" UI layers, you can use the x/y position or bbox\_\* variables to do manual checks against the mouse using the [device\_mouse\_x\_to\_gui](../../GameMaker_Language/GML_Reference/Game_Input/Device_Input/device_mouse_x_to_gui.md) / [device\_mouse\_y\_to\_gui](../../GameMaker_Language/GML_Reference/Game_Input/Device_Input/device_mouse_y_to_gui.md) functions.
-   The Draw event will draw to the same space where the UI instance is present, i.e. either the viewport or the GUI layer, to the same "depth" as defined for the instance in the Element List.
-   Draw GUI events do nothing.
-   Collision checks are limited to the space that the checking instance is placed in, so e.g. an instance on a Display UI layer cannot collide with instances placed on a room layer or a Viewport UI layer. This applies to both the Collision events and [Collision functions](../../GameMaker_Language/GML_Reference/Movement_And_Collisions/Collisions/Collisions.md).

## Inspector Properties

You can select a UI layer, Flex Panel or Asset Element in the Element List and its properties will be shown in the Inspector. Besides being able to change the Element name and associated asset (if any), there are other properties which are described below for each type of Element.

These properties are represented at runtime by the [Flex Panel Struct Members](../../GameMaker_Language/GML_Reference/Flex_Panels/Flex_Panels_Styling.md).

### UI Layer Properties

![](../../assets/Images/Asset_Editors/UILayers/UIL_Properties.png)A UI layer contains the following main properties:

-   **Game View**: You can choose between "**Display**" and "**Viewports**". With "**Display**", the layer contents will be rendered directly to the game screen. With "**Viewports**", the layer contents will be rendered separately for each active viewport in the game. Details about the rendering order are given in the section above for "**Runtime Draw Order**".
    -   NOTE Viewports must be enabled for UI layers to be drawn to viewports and viewport settings must be consistent between rooms for UI layers to behave the same. See: [Cameras And Viewports](Room_Properties.htm#h), [view\_enabled](../../GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/view_enabled.md), [view\_visible](../../GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/view_visible.md)

A UI layer also contains the following flex properties:

-   **Direction**: The flex direction, i.e. in which direction the child items should be laid out. "**Column**" displays them from top-to-bottom, "**Row**" displays them from left-to-right, and there are reverse options.
-   **Align Items**: This controls how the non-absolute children of a container are aligned along its cross axis (i.e. the direction perpendicular to the flex direction). You can stretch the children to fit the size of the cross axis, or align them to the start, end or centre.
-   **Justify Content**: This controls how the non-absolute children of a flex container are aligned along its main axis (i.e. the flex direction). You can align them to the start, end or centre, or align them from start to end with various spacing options.
-   **Layout Direction**: The layout direction of this panel and its children. You can choose to inherit from the parent container or choose between Left to Right and Right to Left.
-   **Wrap**: This controls what happens when children in the container have overflown on the main axis. You can enable wrapping on the cross axis in case of overflow.
-   **Align Content**: If wrapping is enabled, any items overflowing along the main axis will be laid out across new lines on the cross axis. This property controls how those wrapped lines are distributed along the cross axis.
-   **Spacing**: This lets you set the margin and padding for the panel (margin will not be available for UI layers). Clicking on any side in the border preview will allow you to edit its size, allowing you to also set all sides at once using the ![](../../assets/Images/Icons/Icon_Link.png) button. You can also set the horizontal and vertical gap used by the children of the container.

The above flex properties are also present in Flex Panels.

### Flex Panel Properties

![](../../assets/Images/Asset_Editors/UILayers/UIL_FlexProperties.png)A Flex Panel contains the following main properties:

-   **Size**: The width and height of the panel. You can set the units to either pixels, percentage of the [Containing Block](../../GameMaker_Language/GML_Reference/Flex_Panels/Flex_Panels.htm#h) or automatic, which allows the panel to be automatically resized based on its contents (e.g. size of a Sprite placed inside it).
    -   NOTE If the size of a Flex Panel is set to "Auto" and it contains Asset Elements as well as other Flex Panels inside it, the Asset Elements are ignored when the size of the panel is calculated and only the Flex Panels contribute to the size.
-   **Min/Max Size**: Set the minimum and maximum size of the panel in either pixels or a percentage.
-   **Grow/Shrink**: The grow and shrink values determine how a panel is sized in a container in relation to its siblings. A higher grow value will allow it to be larger in relation to other growing/shrinking panels in its container, and a higher shrink value will make it smaller.
-   **Clip Contents**: Enable this to clip drawing any contents under this container that exceed its current size. This is useful for windows that may contain more items that it can display at once.
-   **Position**: Set the position type of the panel.
    -   **Relative (default)**: This panel will participate in the flow of its parent container and will take up space in it. Offsets will be relative to the panel's position within the flow.
    -   **Absolute**: This panel is removed from the flow of its parent and will not take up space. Offsets will be relative to the [Containing Block](../../GameMaker_Language/GML_Reference/Flex_Panels/Flex_Panels.htm#h) which may not be its direct parent.
    -   **Static**: The panel will behave like relative except it will ignore offsets and will not form a [Containing Block](../../GameMaker_Language/GML_Reference/Flex_Panels/Flex_Panels.htm#h) for its children.
-   **Align Self**: This controls how this panel is aligned within its container on its cross-axis. This is a way of overriding the "**Align Items**" property set for the parent but only for this individual panel.
-   **Offset**: Set the offset for this panel from its left, right, top and bottom edges.

A Flex Panel also contains flex and spacing properties, which are the same as described in the previous section for "**UI Layer Properties**".

### Element Properties

![](../../assets/Images/Asset_Editors/UILayers/UIL_ElementProps.png)For elements of all asset types, you can change the alignment, set the anchor for rotation, change the position, scale, rotation, colour, frame and animation speed.

The "**Fill Container**" settings allow the element to be stretched to fit its containing Flex Panel either on one of the axes or both axes. You can choose whether to maintain aspect ratio or not. These settings can be set to stretch and maintain aspect ratio by default through the [Preferences](../../Setting_Up_And_Version_Information/IDE_Preferences/Room_Editor_Preferences.md).

You will see some extra options based on the asset type:

-   **Sprites**: You can choose to tile the sprite horizontally, vertically or in both directions.
-   **Objects**: You can modify the Variable Definitions of the instance and apply Creation Code.
-   **Text (Fonts)**: You can set text properties such as alignment, various spacing values and wrapping.

You can also double-click on an item in the Room Canvas to open its properties window.