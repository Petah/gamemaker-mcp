---
title: "view_get_yport"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/view_get_yport.htm"
converted: "2025-09-14T03:59:44.735Z"
---

# view\_get\_yport

This function can be used to retrieve the y position of the given view port.

#### Syntax:

view\_get\_yport(view\_port)

| Argument | Type | Description |
| --- | --- | --- |
| view_port | Real | The view port to target (0 - 7) |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

if view\_get\_yport(0) != (display\_get\_height() / 2) - (view\_hport\[0\] / 2)
{
    view\_set\_yport(0, (display\_get\_height() / 2) - (view\_hport\[0\] / 2));
}

The above code will check the y position of the view port\[0\] and if it is not where it is required to be it is set to that position.