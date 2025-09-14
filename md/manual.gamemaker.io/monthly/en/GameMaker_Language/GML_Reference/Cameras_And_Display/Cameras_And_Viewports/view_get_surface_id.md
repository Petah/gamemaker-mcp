---
title: "view_get_surface_id"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/view_get_surface_id.htm"
converted: "2025-09-14T03:59:44.667Z"
---

# view\_get\_surface\_id

This function can be used to retrieve the unique ID value for the surface assigned to the given view port.

It returns an invalid handle (\-1) if no surface has been assigned.

#### Syntax:

view\_get\_surface\_id(view\_port)

| Argument | Type | Description |
| --- | --- | --- |
| view_port | Real | The view port to target (0 - 7) |

#### Returns:

[Surface](../../Drawing/Surfaces/surface_create.md)

#### Example:

if (view\_get\_surface\_id(0) == -1)
{
    view\_set\_surface\_id(0, global.vSurf);
}

The above code will check to see if a surface has been assigned to the view port\[0\] and if it has not then one is assigned.