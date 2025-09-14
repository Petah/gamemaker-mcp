---
title: "surface_reset_target"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_reset_target.htm"
converted: "2025-09-14T03:59:54.544Z"
---

# surface\_reset\_target

This function resets all further drawing from the current surface back to the previous draw target.

The previous target can be another surface (the [application surface](application_surface.md "application_surface"), a [view surface,](../../Cameras_And_Display/Cameras_And_Viewports/view_surface_id.md "view_surface_id") a [custom surface](surface_create.md "surface_create()")) or the display buffer, depending on where the call to the corresponding [surface\_set\_target](surface_set_target.md) was made. See: [Draw Targets](../Drawing.htm#drawing_targets)

Please note that to start drawing to a surface you must first have called the function [surface\_set\_target](surface_set_target.htm#h) and then this one after you have finished, _for each surface target that you have set_ or else nothing will be drawn on the screen as all further drawing (even in other instances) will be done on the surface. You should also realise that nothing will be seen if the surface itself is not drawn on the screen in the Draw event of an instance.

WARNING If you have not previously set a render target with the function [surface\_set\_target](surface_set_target.htm#h), calling this function will throw a fatal error.

#### Syntax:

surface\_reset\_target();

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md) Whether the render target was reset successfully

#### Example:

if (view\_current == 0)
{
    surface\_set\_target(surf);
    with (obj\_effect)
    {
        draw\_self();
    }
    surface\_reset\_target();
}
else
{
    draw\_surface(surf, 0, 0);
}

The above code checks to see which view is currently being drawn, and if it is view\[0\] it sets the draw target to a surface and draws all instances of the object obj\_effect before resetting the draw target again. If the view is not view\[0\] the surface is drawn to the screen.