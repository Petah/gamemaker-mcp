---
title: "view_get_wport"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/view_get_wport.htm"
converted: "2025-09-14T03:59:44.707Z"
---

# view\_get\_wport

This function can be used to retrieve the width of the given view port.

#### Syntax:

view\_get\_wport(view\_port)

| Argument | Type | Description |
| --- | --- | --- |
| view_port | Real | The view port to target (0 - 7) |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

if (view\_get\_wport(0) != (display\_get\_width () / 2))
{
    view\_set\_wport(0, display\_get\_width() / 2);
}

The above code will check the width of the view port\[0\] and if it is not half of the display width it is set to that value.