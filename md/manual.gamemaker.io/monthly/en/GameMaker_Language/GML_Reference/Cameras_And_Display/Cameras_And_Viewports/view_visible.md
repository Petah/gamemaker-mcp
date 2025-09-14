---
title: "view_visible"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/view_visible.htm"
converted: "2025-09-14T03:59:44.897Z"
---

# view\_visible

This variable can be used to find out if a particular view port is currently visible or not. You can also set this variable to effectively turn "on" or "off" a view by setting the value to true (visible) or false (invisible). Note that even if you have a view port set to visible, if view ports are not enabled (using the built-in variable [view\_enabled](view_enabled.md) or enabling them in [The Room Editor](../../../../The_Asset_Editors/Rooms.md)) then they will not be drawn to the screen.

NOTE This variable does not hold a real GML array, so you cannot run any [array functions](../../Variable_Functions/Array_Functions.md) on it or serialise it (convert it to a string). The only operation you can run on it is accessing a value at an index, with the view\_visible\[index\] syntax.

#### Syntax:

view\_visible\[0 ... 7\]

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md) (true: enabled, false: disabled)

#### Example:

if !view\_visible\[0\]
{
    view\_visible\[0\] = true;
}

The above code checks to see if view\[0\] is visible or not and if it is not, it then sets it to be visible.