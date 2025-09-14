---
title: "view_set_visible"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/view_set_visible.htm"
converted: "2025-09-14T03:59:44.815Z"
---

# view\_set\_visible

This function can be used to set the visibility of the given view port. The function takes the view port index (from 0 to 7) and a boolean true if it is visible and false if it is not.

#### Syntax:

view\_set\_visible(view\_port, visible)

| Argument | Type | Description |
| --- | --- | --- |
| view_port | Real | The view port to target (0 - 7) |
| visible | Boolean | Visibility toggle (true is visible and false is invisible) |

#### Returns:

N/A

#### Example:

if (!view\_get\_visible(0))
{
    view\_set\_visible(0, true);
}

The above code will check to see if the view port\[0\] is visible and if it is not it is set to visible.