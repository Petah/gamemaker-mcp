---
title: "view_set_yport"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/view_set_yport.htm"
converted: "2025-09-14T03:59:44.859Z"
---

# view\_set\_yport

This function can be used to set the y position of the given view port. You give the view port index (from 0 to 7) and the new position to place it at.

#### Syntax:

view\_set\_yport(view\_port, y)

| Argument | Type | Description |
| --- | --- | --- |
| view_port | Real | The view port to target (0 - 7) |
| y | Real | The new y position |

#### Returns:

N/A

#### Example:

if view\_get\_yport(0) != (display\_get\_height() / 2) - (view\_hport\[0\] / 2)
{
    view\_set\_yport(0, (display\_get\_height() / 2) - (view\_hport\[0\] / 2));
}

The above code will check the y position of the view port\[0\] and if it is not where it is required to be it is set to that position.