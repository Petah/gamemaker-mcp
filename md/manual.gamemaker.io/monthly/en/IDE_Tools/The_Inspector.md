---
title: "The Inspector"
source: "manual.gamemaker.io/monthly/en/IDE_Tools/The_Inspector.htm"
converted: "2025-09-14T04:00:12.551Z"
---

# The Inspector

The **Inspector** window shows all the properties associated with the selected elements in the IDE.

You can select one or multiple elements in any editor, and view or change its various properties:

![The Inspector Window](../assets/Images/IDE%20Tools/Inspector.png)

Inspecting Sequence Track

![The Inspector Window](../assets/Images/IDE%20Tools/Inspector_Sound.png)

Inspecting Sound Asset

By default, an Inspector window appears on the left side of the IDE.

You can open more Inspector windows from [The Windows Menu](../IDE_Navigation/Menus/The_Windows_Menu.md) at the top of the GameMaker window:

![](../assets/Images/IDE%20Tools/Inspector_Opening_Windows.png)After opening an Inspector window, you can dock it anywhere in the IDE, or use it as a floating window:

![](../assets/Images/IDE%20Tools/Inspector_Docking.gif)

## Using the Inspector

The Inspector allows you to view and edit assets without having to rely solely on [Workspaces](../Introduction/Workspaces.md).

For example, you may usually edit your event code in fullscreen, and frequently navigate back into a Workspace to edit that object's properties.

With the Inspector, you can view an object's details while remaining in fullscreen view:

![](../assets/Images/IDE%20Tools/Inspector_Object_Editing.png)This makes it possible to modify an object's properties and delete/change events while editing its code in fullscreen, and also set up Parenting, Variable Definitions, and more.

While this particular example only covers objects, the Inspector can do much more and allow you to edit many different kinds of assets (e.g. Sprites, Fonts, Animation Curves, etc.).

## Editor Sections

In addition to assets, you can also inspect sections within an editor, such as layers in a room, elements in a layer, tracks in a Sequence, etc.

For example, inspecting a layer in a room allows you to apply a filter or effect to only that layer:

![](../assets/Images/IDE%20Tools/Inspector_Room_Layers.png)

NOTE When you apply a filter/effect to a non-FX layer using the Inspector, it will always be applied as a "single layer" effect, i.e. its effect will only be applied on that particular layer and not on other layers below it.

## The "Open Editor" Button

If you have an asset selected, you can click on "Open Editor" in the Inspector to open its asset editor.

For example, doing this with an object will open the Object Editor, where you can modify its properties, add events, etc.

However, when editing anything inside a room, such as an instance or a layer, the Inspector will only focus on editors inside the Room Editor.

![](../assets/Images/IDE_Input/Inspector_Edit_Instance.png)

Selecting "Open Editor" for an instance will open the instance editor, instead of the object editor

As shown above, selecting an instance in a room and clicking on "Open Editor" in the inspector will open its instance editor.

Similarly, selecting a Path layer and clicking "Open Editor" will move focus to the Layers panel where you can edit the layer's properties, instead of opening the Path asset editor.

![](../assets/Images/IDE_Input/Inspector_Edit_Path_Layer.png)

Selecting "Open Editor" for a Path Layer will focus on the editor for that layer

Finally, when The Inspector shows an [Included File](../Settings/Included_Files.md), clicking "Open Editor" will execute the action set under **Default option for opening included files**, in the Paths preferences under [External Editors](../Setting_Up_And_Version_Information/IDE_Preferences/General/Paths.htm#external_editors).

## Multi-Select

The Inspector allows you to view and edit properties for multiple assets and elements (such as room layers and sequence tracks) at the same time.

Select your desired assets or elements by holding **CTRL** / **CMD** and clicking with the left mouse button. Your selected items will show in a "multi-select" list in the Inspector:

![](../assets/Images/IDE_Input/Inspector_Multi_Select.png)

Three Sprite tracks selected in a Sequence.

Press the **X** next to an item to remove it from your selection.

### Editing Values

If your selected items share the same value for a property, that shared value will appear in that field.

However if the items have different values for a property, the editor will simply show \- in place of that value.

![](../assets/Images/IDE_Input/Inspector_Shared_Values.png)

Values displayed for multiple tracks in a Sequence.

You can change any of these fields. Changing a value will apply it to all of your selected items.

### Selection Within The List

You can select any one item within your multi-select list to view and edit its properties, without having to reset your selection.

![](../assets/Images/IDE_Input/Inspector_Select_Within_Multi_Select.gif)

View any one item within the multi-select list

Click on the empty area in the list to return to the multi-select view.

Note that you can't select multiple items within this list.

### Selection Highlight

When you have an item selected within the multi-select list, it will appear in the editor with a red outline:

![](../assets/Images/IDE_Input/Inspector_Select_Within_Multi_Select_Outline.png)

The **spr\_player** track, selected in the multi-select list, appears with a red outline in the Sequence editor

You can change the colour of this outline in the [Room Preferences](../Setting_Up_And_Version_Information/IDE_Preferences/Room_Editor_Preferences.md) and [Sequence Preferences](../Setting_Up_And_Version_Information/IDE_Preferences/Sequences_Preferences.md).

## Multiple Inspectors

You can open multiple Inspector windows at any time, and each one can be linked to a specific element in the IDE.

To ensure that each time you click an element all open inspectors don't change to show the new selection, you must first **lock** each inspector window one-by-one.

To do this, you would open an inspector, select an IDE element to inspect, and then click the ![](../assets/Images/Icons/Icon_Padlock.png) lock button on the inspector to lock it on the element (shown in the image below). Once you have locked an inspector, you can open another one and then repeat the process.

![Locking The Inspector Window](../assets/Images/IDE%20Tools/Inspector_Lock.png)Note that a locked inspector window does not lock the editing of any values for the element being inspected. It simply locks the inspector to the selected element and you can continue to edit it at any time, even when the original element is not the main focus of the IDE.

Using the lock feature you can open multiple inspectors at the same time with each one being locked to a specific asset, as shown in the example below:

![](../assets/Images/IDE%20Tools/Inspector_Multiple.png)