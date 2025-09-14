---
title: "view_enabled"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/view_enabled.htm"
converted: "2025-09-14T03:59:44.629Z"
---

# view\_enabled

This variable controls whether any view ports that are visible within the room are enabled or not. If you have view ports set to visible and then disable this option, the whole room will be drawn to the screen scaled to the window size instead of the different cameras being drawn through the view ports.

#### Syntax:

view\_enabled;

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md) (true: enabled, false: disabled)

#### Example:

if (!view\_enabled)
{
    view\_visible\[0\] = true;
    view\_enabled = true;
}

The above code checks to see if views are enabled for the room, and if they are not, it makes sure that view port\[0\] is visible and then enables views for the room.