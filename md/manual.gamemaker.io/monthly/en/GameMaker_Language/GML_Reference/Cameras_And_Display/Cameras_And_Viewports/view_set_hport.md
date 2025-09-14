---
title: "view_set_hport"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/view_set_hport.htm"
converted: "2025-09-14T03:59:44.780Z"
---

# view\_set\_hport

This function can be used to set the height of the given view port. You give the view port index (from 0 to 7) and the new height to use.

#### Syntax:

view\_set\_hport(view\_port, h)

| Argument | Type | Description |
| --- | --- | --- |
| view_port | Real | The view port to target (0 - 7) |
| h | Real | The new height (in pixels) |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

if (view\_get\_hport(0) != (display\_get\_height () / 2))
{
    view\_set\_hport(0, display\_get\_height() / 2);
}

The above code will check the height of the view port\[0\] and if it is not half of the display height it is set to that value.