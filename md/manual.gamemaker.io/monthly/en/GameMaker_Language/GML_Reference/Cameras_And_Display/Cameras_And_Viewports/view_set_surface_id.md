---
title: "view_set_surface_id"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/view_set_surface_id.htm"
converted: "2025-09-14T03:59:44.796Z"
---

# view\_set\_surface\_id

With this variable you can set the contents of a view port to draw to a surface. When working with surfaces, it is often required to capture the _whole_ visible region of the screen on the surface, and so you would assign it to a view port using this function. This means that everything that is shown in the chosen view port will now be drawn to the assigned surface and the contents of that view port will no longer be displayed, meaning that you will need to either:

-   Enable a new view and draw the surface only in that view (using [view\_current](view_current.md) to check which view is being drawn)
-   Draw the surface in the Draw GUI or Post Draw event of an instance, since these events are independent of views.

When using this function you give the view port index (from 0 to 7) and a surface (either the [application\_surface](../../Drawing/Surfaces/application_surface.md) or the handle returned by the function [surface\_create](../../Drawing/Surfaces/surface_create.md)) or, if a surface has previously been assigned and you want to remove it, a value of \-1. For more examples on setting the view port to a surface see the variable [view\_surface\_id](view_surface_id.md).

IMPORTANT Care must be taken when drawing surfaces or textures to a view with a surface assigned to it, because if you try to draw the view's assigned surface (or its texture) inside that same view, you will get an error as you are essentially trying to draw a texture onto itself.

#### Syntax:

view\_set\_surface\_id(view\_port, surf)

| Argument | Type | Description |
| --- | --- | --- |
| view_port | Real | The view port to target (0 - 7) |
| surf | Surface | The surface to apply to the view |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

if (view\_get\_surface\_id(0) == -1)
{
    view\_set\_surface\_id(0, global.vSurf);
}

The above code will check to see if a surface has been assigned to the view port\[0\] and if it has not then one is assigned.