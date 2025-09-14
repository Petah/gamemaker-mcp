---
title: "view_get_hport"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/view_get_hport.htm"
converted: "2025-09-14T03:59:44.654Z"
---

# view\_get\_hport

This function can be used to retrieve the height of the given view port.

#### Syntax:

view\_get\_hport(view\_port)

| Argument | Type | Description |
| --- | --- | --- |
| view_port | Real | The view port to target (0 - 7) |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

if (view\_get\_hport(0) != (display\_get\_height () / 2))
{
    view\_set\_hport(0, display\_get\_height() / 2);
}

The above code will check the height of the view port\[0\] and if it is not half of the display height it is set to that value.