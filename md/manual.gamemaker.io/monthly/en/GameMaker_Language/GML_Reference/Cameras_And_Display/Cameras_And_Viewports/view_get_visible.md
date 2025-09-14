---
title: "view_get_visible"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/view_get_visible.htm"
converted: "2025-09-14T03:59:44.689Z"
---

# view\_get\_visible

This function can be used to check the visibility of the given view port. The function will return true if it is visible and false if it is not.

#### Syntax:

view\_get\_visible(view\_port)

| Argument | Type | Description |
| --- | --- | --- |
| view_port | Real | The view port to target (0 - 7) |

#### Returns:

[Boolean](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

if (!view\_get\_visible(0))
{
    view\_set\_visible(0, true);
}

The above code will check to see if the view port\[0\] is visible and if it is not it is set to visible.