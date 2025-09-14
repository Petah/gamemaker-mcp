---
title: "Room Editor Preferences"
source: "manual.gamemaker.io/monthly/en/Setting_Up_And_Version_Information/IDE_Preferences/Room_Editor_Preferences.htm"
converted: "2025-09-14T04:00:13.800Z"
---

# Room Editor Preferences

![](../../assets/Images/Setup_And_Version/Preferences/Room_Editor_Prefs.png)

The **Room Editor Preferences** are used to define how the [Room Editor](../../The_Asset_Editors/Rooms.md) will look and behave. The general settings are as follows:

-   **Chain fade out start distance (px)**: Sets the distance from the parent window for the chain link to fade out from.
-   **Chain fade out stop distance (px)**: Sets the distance from the parent window for the chain link to end fading out to.
-   **Chain minimum alpha**: Sets the final alpha value after the fade out falloff point for the chain alpha.
-   **Default layer depth spacing**: When you create multiple layers in the room editor they are automatically assigned a depth based on their position within the layer list. This depth is incremented by the amount given here. The default value is 100, so each layer will be previous layer + 100 in depth.
-   **Default room width**: Sets the initial width that will be selected as the default for a new room.
-   **Default room height**: Sets the initial height that will be selected as the default for a new room.
-   **Add default room layers**: When you create any new room resource, GameMaker will generate a couple of "base" layers for you - a background layer and an instance layer. You can switch that behaviour off here so that new rooms will have no pre-made layers. This is on by default.
-   **Show room views**: If you have views active within a room, this is shown by an outline where the view boundaries would be within the room, and the visibility of this area can be toggled using the dedicated button in the editor itself. However you can choose to have view boundaries invisible when you open a room by un-checking this option (the button can still be used to show them again). The default value is on, making view boundaries visible when you open a room.
-   **Default Text for new Text Item**: The text that is shown when you create a new Text Element in an [Asset Layer](../../The_Asset_Editors/Room_Properties/Layer_Properties.md).
-   **Default Instances panel orientation**: Default orientation for the [Element List](../../The_Asset_Editors/Rooms.htm#p) that appears when an Instance Layer or Asset Layer is selected.
-   **Inspector selection colour**: The colour used for highlighting the item selected in the Inspector [Multi-Select](../../IDE_Tools/The_Inspector.htm#h) list.
-   **Other colour options**: These are related to the different colours that are used throughout the room editor interface, and if you double click on any of the swatches you can edit the colour for that setting.
-   **Master-volume setting**: The master volume setting for preview playback in the Room Editor, a value between 0 and 1. Default is 1.

Further options are available for editing from the sub-categories listed below:

[Confirm DialogsConfirm Dialogs](Room_Editor_Preferences.htm#)

![](../../assets/Images/Setup_And_Version/Preferences/Room_Editor_Confirm_Prefs.png)

The **Confirm Dialogs** preferences are used to change the messages that are shown in the room editor when you perform certain actions. The messages you can change are:

-   **Automatic response to updating layer depths**: hen you change layer depths a message is shown to warn you that doing this will also automatically update all the other layer depths. With this option you can choose to have the message show, have it update the layers as if you'd clicked "Ok", or have it not update anything as if you'd clicked "No".
-   **Automatic response to layer locked warning**: If you try to delete a layer in the room and it happens to be locked, you will be shown a message by default. However setting this option to "Ok" will not show the message and just not let you delete the layer.
-   **Automatic response to item locked warning**: If you try to delete an item it happens to be locked, you will be shown a message by default. However setting this option to "Ok" will not show the message and just not let you delete the item.
-   **Automatic response to item owner layer locked warning**: If you try to delete an item on a layer and the layer happens to be locked (even if the item is not), then you will be shown a message by default to inform you that it can't be done. However setting this option to "Ok" will not show the message and just not let you delete the item.
-   **Create new asset layer when dragging sequences/sprites onto unsuitable layers**: If you try to add a sprite (or a sequence) to a layer that is not an asset layer, then you will be shown a message by default to inform you that it can't be done and ask if you want to create a new asset layer for the item being dragged. However setting this option to "Ok" will not show the message and automatically create a new layer for sprites (and sequences).
-   **Automatic response to parent room item deletion**: Here you can choose what happens when you delete an item that is part of a parent room (and so present in all child rooms). The default is to show you a warning message and let you decide what to do, but you can set it to "Delete All" to suppress the message and go ahead with the item delete from the parent room and all its children, or you can select "Keep All" to suppress the message abort the delete.
-   **Automatic response to parent room layer deletion**: Here you can choose what happens when you delete a layer that is part of a parent room (and so present in all child rooms). The default is to show you a warning message and let you decide what to do, but you can set it to "Delete All" to suppress the message and go ahead with the layer delete from the parent room and all its children, or you can select "Keep All" to suppress the message abort the delete.
-   **Automatic response to invalid asset drag error**: If you try to add an asset to a layer that is not designated as being for that asset type (like adding a path to an instance layer), then you will be shown a message by default to inform you that it can't be done. However setting this option to "Ok" will not show the message and just not let you add the asset. Note that this option does not apply to instances, sprites or sequences.
-   **Create new instance layer when dragging objects onto unsuitable layers**: If you try to add an object instance to a layer that is not an instance layer, then you will be shown a message by default to inform you that it can't be done and ask if you want to create a new instance layer for the item being dragged. However setting this option to "Ok" will not show the message and automatically create a new layer for the instance.
-   **Automatic response to invalid layer selection drag error**: Here you can choose what happens when you drag a resource onto the room editor when you have selected multiple layers in the layer editor (or have not selected any layer at all). The default is to show a warning message but you can set this option to "OK" to suppress the message and continue, without adding any resources.
-   **Automatic response to locked or invisible layer drag error**: Here you can choose what happens when you drag a resource onto a layer that has been locked or is flagged as invisible. The default is to show a warning message but you can set this option to "OK" to suppress the message and continue, without adding any resources.

[Grid SettingsGrid Settings](Room_Editor_Preferences.htm#)

![Room Editor Grid Settings Preferences](../../assets/Images/Setup_And_Version/Preferences/Room_Editor_Grid_Prefs.png)

The **Grid Settings** preferences are used to change how the grid overlay works, with the following options available:

-   **Grid horizontal spacing (px)**: This will set the horizontal space for gird cells of the room grid in pixels. Default value is 32px.
-   **Grid vertical spacing (px)**: This will set the vertical space for gird cells of the room grid in pixels. Default value is 32px.
-   **Display grid**: This option will toggle on or off the room grid when you first open a room. It is on by default, but even if it is switched off you can enable it again using the appropriate button in the room editor itself.
-   **Snap to grid**: With this option you can set whether a room will have assets snap to the room grid by default or not when a room is initially opened. It is on by default, but even if it is switched off you can enable it again using the appropriate button in the room editor itself.
-   **Grid line colour**: This option permits you to set the colour (including the alpha component) of the room grid lines. The default value is ( ARGB) #30FFFFFF.




[Smart GuidesSmart Guides](Room_Editor_Preferences.htm#)

![Room Editor Smart Guides Preferences](../../assets/Images/Setup_And_Version/Preferences/Room_Editor_SmartGuides_Prefs.png)

This section details the **Smart Guides Preferences** for the Room Editor. The available options are:

-   **Enable Smart Guides**: This is used to enable/disable the use of smart guides in the Room Editor. Default is enabled.

-   **Enable Rulers**: This option will enable/disable the side rulers in the Room Editor. Default is enabled.

-   **Snap Rulers To Edges**: When enabled, this option will snap guides dragged into the Room Editor from the rulers to any assets placed in the room. Default is enabled.

-   **Snap Distance**: This setting tells the Room Editor at what distance a guide has to be from an asset before it will "snap" to the side of the asset. Default value is 6px.





[UI LayersUI Layers](Room_Editor_Preferences.htm#)

The following preferences are provided for [UI Layers](../../The_Asset_Editors/Room_Properties/UI_Layers.md):

![](../../assets/Images/Setup_And_Version/Preferences/Room_Editor_UIL.png)

-   **Keep Element List open**: After deleting all UI layers, the Element List closes automatically. Enable this option to keep the Element List open even when all UI layers have been deleted.
-   **Auto-create flex panel parent for new instances**: If this is enabled, when you drop an asset into the canvas or Element List, it will be placed inside a new Flex Panel. This is enabled by default.
-   **Set auto-created flex panels to auto size**: If this is enabled, any Flex Panels that the editor automatically creates for new assets (only if the previous preference is enabled) will be created with the width and height set to auto. This is enabled by default.
-   **Set stretch and maintain aspect for new instances in auto-created flex panels**: If this is enabled and the "**Auto create flex panel parent for new instances**" preference is enabled, any assets dropped into the layer will have their "**Stretch**" property set to "**Both**" and "**Maintain Aspect Ratio**" will be enabled.
-   **Snap UI to grid**: Whether to snap UI items to the room grid or not.
-   **Include flex panels with area selections**: When performing an area selection in the room (Shift + Drag), this controls whether Flex Panels are included in the selection. When disabled, only assets are selected.
-   **Keep Viewports heading visible**: When this is enabled, the "Viewports" header is displayed in the Element List even when there are no viewport layers present.
-   **Convert value when changing between pixel / percentage**: When changing the unit of a property from pixels to percentage or vice versa, enabling this ensures that the value is converted between the units so the area covered remains unchanged.
-   **Show node outlines**: Whether the outlines for Flex Panels should be shown or not. This is the same as the option displayed in the [Toolbox](../../The_Asset_Editors/Room_Properties/UI_Layers.htm#h).
-   **Confirm Dialogs**
    -   **Create new UI Layer when dragging items onto Room canvas**: When placing an asset in the canvas outside of any existing UI layers or Flex Panels, you are prompted to create a new layer. You can disable that prompt and choose an automatic option for that behaviour by setting this option to "**Yes**" or "**No**".
    -   **Automatic response to delete a UI Layer**: When deleting a UI layer, you get a confirmation prompt. You can disable that prompt by setting this option to "**OK**".