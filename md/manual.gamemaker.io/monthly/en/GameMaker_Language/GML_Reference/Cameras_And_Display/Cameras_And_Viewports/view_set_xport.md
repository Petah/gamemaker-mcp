---
title: "view_set_xport"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/view_set_xport.htm"
converted: "2025-09-14T03:59:44.843Z"
---

# view\_set\_xport

This function can be used to set the x position of the given view port. You give the view port index (from 0 to 7) and the new position to place it at.

#### Syntax:

view\_set\_xport(view\_port, x)

| Argument | Type | Description |
| --- | --- | --- |
| view_port | Real | The view port to target (0 - 7) |
| x | Real | The new x position |

#### Returns:

N/A

#### Example:

if view\_get\_xport(0) != (display\_get\_width() / 2) - (view\_wport\[0\] / 2)
{
    view\_set\_xport(0, (display\_get\_width() / 2) - (view\_wport\[0\] / 2));
}

The above code will check the x position of the view port\[0\] and if it is not where it is required to be it is set to that position.