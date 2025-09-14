---
title: "surface_resize"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_resize.htm"
converted: "2025-09-14T03:59:54.562Z"
---

# surface\_resize

This function resizes a surface to the given dimensions (in pixels).

The "surface\_id" is that of a surface you have created previously, or the [application\_surface](application_surface.md), and the function will resize that surface. Note that this will neither crop nor stretch the contents of the surface, but rather it destroys the current surface and recreates it with the same handle (surface\_id) with the new dimensions, meaning that it will need to be cleared and drawn to again (unless it's the [application\_surface](application_surface.md) in which case GameMaker will do this automatically).

**NOTE** If you are resizing the application surface, these changes will not be registered until the start of the next draw frame, meaning that calling the [surface\_get\_width](surface_get_width.md) or [surface\_get\_height](surface_get_height.md) functions in the same event or step will return the previous values.

#### Syntax:

surface\_resize(surface\_id, w, h);

| Argument | Type | Description |
| --- | --- | --- |
| surface_id | Surface | The surface to resize. |
| w | Real | The new width of the surface. |
| h | Real | The new height of the surface. |

#### Returns:

N/A

#### Example:

if view\_wport\[0\] != surface\_get\_width(application\_surface) || view\_hport\[0\] != surface\_get\_height(application\_surface)
{
    surface\_resize(application\_surface, view\_wport\[0\],view\_hport\[0\]);
}

The above code checks the view port size against that of the [application\_surface](application_surface.md) surface. If it is different, the surface is resized.