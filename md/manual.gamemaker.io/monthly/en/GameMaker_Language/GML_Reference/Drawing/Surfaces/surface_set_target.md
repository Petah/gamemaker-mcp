---
title: "surface_set_target"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_set_target.htm"
converted: "2025-09-14T03:59:54.612Z"
---

# surface\_set\_target

This function sets all further drawing to the target surface rather than the screen. In this way you can tell GameMaker to only draw specific things to the specified surface.

By default, the target surface's depth buffer is used (if it has one). If you pass another surface as the optional depth parameter, that surface's depth buffer is used if it has one. No depth buffer is used if the surface passed as the depth parameter has no depth buffer.

### Usage Notes

-   All surfaces that you pass to this function must exist. An error is thrown if any surface passed to the function doesn't exist.
-   If you do not call [surface\_reset\_target](surface_reset_target.htm#h) after you have finished, nothing will be drawn on the screen as all further drawing (even in other instances) will be done on the surface. You should also realise that nothing will be seen if the surface itself is not drawn on the screen in the Draw event of an instance. You can check the return value of this function too as a debug tool to check whether the surface target was set or not, with a return value of 0 being a failure to set the target and any other positive value being a success.
-   Surfaces are _stacked_ so you cannot jump from target to target and then reset to the normal draw target at the end, but rather you must open and close rendering targets. For example, this will **not** work correctly:

    surface\_set\_target(surf1);
    draw\_text(32, 32, "surface1");
    surface\_set\_target(surf2);
    draw\_text(32, 64, "surface2");
    surface\_reset\_target();

    Instead, you must reset the target for each of the surfaces that you set, much like you must use opening and closing brackets { } for code blocks. So the above should be written either like this:

    surface\_set\_target(surf1);
    draw\_text(32, 32, "surface1");
    surface\_reset\_target();
    surface\_set\_target(surf2);
    draw\_text(32, 64, "surface2");
    surface\_reset\_target();

    or like this:

    surface\_set\_target(surf1);
    draw\_text(32, 32, "surface1");
    surface\_set\_target(surf2);
    draw\_text(32, 64, "surface2");
    surface\_reset\_target();
    surface\_reset\_target();


WARNING If you have not previously set a render target with the function [surface\_set\_target](surface_set_target.htm#h), calling this function will throw a fatal error.

#### Syntax:

surface\_set\_target(surface, \[depth\]);

| Argument | Type | Description |
| --- | --- | --- |
| surface | Surface | The surface to set as the drawing target. |
| depth | Surface | OPTIONAL The surface whose depth buffer to use (if this surface has one). |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md) Whether the render target was set successfully

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