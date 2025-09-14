---
title: "Surfaces"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/Surfaces.htm"
converted: "2025-09-14T03:59:53.949Z"
---

# Surfaces

## Application Surface

In the normal draw events, GameMaker doesn't actually draw directly to the screen, but rather draws to a **surface** called the _application surface_.

This surface is basically a blank "canvas" that can be manipulated before being drawn to the screen when needed, and in most cases GameMaker handles this for you (although you can also manipulate it yourself in code for shaders, scaling and many other things - further details are given below).

## Custom Surfaces

Apart from the application surface, you can also create your own surfaces and use them to create stunning or subtle special effects in your game.

For example, you can use surfaces to "catch" instances, which can then be destroyed, and in this way you can create a decal effect where the sprite for the instance is displayed on the surface as if it still existed, permitting graphical effects like debris, blood, etc. without any real processing overhead.

Another thing you can do with surfaces is use them as textures to be manipulated, or to create sprites "on the fly", or to create complex overlays. In fact, the uses for surfaces are endless!

## Using Surfaces

The basic use of a surface would be as follows:

-   You first create a variable to hold the surface, e.g. in the Create event:

surf = -1;

-   In a Draw event (or any other event) _before_ you want to draw something to the surface, do a check to see if it exists, and if not, create it:

if (!surface\_exists(surf))
{
    surf = surface\_create(960, 540);
}

-   In case the surface is automatically removed from the memory while you need it, this will catch that and recreate the surface.
-   You would then set the drawing target to the surface rather than the display, when you actually want to draw something to it, e.g. in the Draw event:

surface\_set\_target(surf);

-   Next, you would draw the things you wish as well as perform any other manipulations. It is recommended to clear the surface before drawing anything.

draw\_clear\_alpha(c\_black, 0);
draw\_sprite(spr\_icon, 0, 48, 48);

-   Once you are done drawing to the surface, you reset the draw target so that all further drawing happens on the screen again.

surface\_reset\_target();

-   Finally, you would draw the surface (or [use it in a shader](../Textures/texture_set_stage.md), or whatever is required).

draw\_surface(surf, 0, 0);

-   When you no longer need the surface, remove it from memory:

surface\_free(surf);

## Surface Rules

Normal surfaces are quite easy to use, but there are a few basic rules to be followed when you use them:

-   First, you should realise that surfaces (_except_ the application surface) are "volatile". This means that if the device or window loses focus or is minimised (good examples are when you ALT +Tab to different window and back again on Windows, or on an Android device when the app loses focus due to a call) then the surface **may be destroyed**. This is because it is stored _only_ in the texture memory (VRAM) and may be overwritten when the target platform needs that memory for something else which means that you should _**always**_ have some type of fail-safe code in place, usually with the [surface\_exists](surface_exists.md) function.

NOTE This doesn't appear to happen with sprites or other visual assets (but actually does!) as they are also stored in regular memory (RAM) and when they are removed from texture memory (VRAM) they immediately get restored from regular memory when the game regains focus.

-   Second, you should note that surfaces can require large quantities of VRAM to be used, and so you should attempt to keep them as small as possible. Normally you would try and keep them no larger than the size of the view or display window.
-   Third, you should **only create surfaces in the Draw event**. If you create a surface in the Create Event of an instance, you could potentially get the _same_ index as the [application\_surface](application_surface.md). This can then cause lots of problems and confusion as you think you are using your own surface, but you are actually using the current render target. You should also always try to limit _drawing_ to a surface in the Draw event too, since due to the optimised way in which GameMaker draws to the screen, it is recommended that you keep all draw functions _within the Draw event_ - this includes clearing a surface when it is first created, etc. Drawing to a surface outside of the Draw event is possible and may even be necessary for some effects, but it's not how it _should_ be done.
-   Fourth, when drawing to a surface manually, the surface is _always_ at the position of (0, 0). This means that you may need to convert _absolute_ coordinates into _relative_ coordinates for the surface. For example, if you have a camera-sized surface and wish to draw something that is currently visible in the camera to that surface, you should subtract the camera view x and y coordinates from the actual x and y coordinates to get a relative position to the surface (0, 0) position. So, the code would look something like this:

if (view\_current == 0)
{
    surface\_set\_target(surf);
    with (obj\_Effect)
    {
        var \_vx = camera\_get\_view\_x(view\_camera\[1\]);
        var \_vy = camera\_get\_view\_y(view\_camera\[1\]);
        draw\_sprite(sprite\_index, image\_index, x - \_vx, y - \_vy);
    }
    surface\_reset\_target();
}
else
{
    draw\_surface(surf, 0, 0);
}

-   Finally, it is worth noting that drawing to a surface will take into consideration the colour _and_ the alpha component of each pixel, both from the surface itself and also from what is being drawn to it. This may lead to some rather unintuitive results (for example, drawing a sprite with 0.5 alpha to a surface with 0 alpha will give a final alpha of 0.25). The reasons for this are explained on the following page, and we recommend that you read it before working with surfaces: [Guide To Using Blendmodes](../../../../Additional_Information/Guide_To_Using_Blendmodes.md)

NOTE This is not true of the [application surface](application_surface.md), only user-created surfaces.

One thing to note is that should you require drawing the whole display to a surface (including tiles, backgrounds etc.) you can simply access the application surface itself (see below for further details) or you could assign a surface to a view port using the variable [view\_surface\_id\[0..7\]](../../Cameras_And_Display/Cameras_And_Viewports/view_surface_id.md) as with this, all that is visible in that view port will be drawn to the corresponding surface.

## Depth and Stencil Buffer

The most straightforward use for surfaces is to draw sprites, text, particle effects, etc. to it, i.e. visual elements with a colour and possibly a transparency (alpha) value for every pixel. By default, surfaces also have a depth and stencil buffer that can be used to achieve all kinds of advanced graphical effects.

See [The Depth And Stencil Buffer](../Depth_And_Stencil_Buffer/The_Depth_And_Stencil_Buffer.md) for detailed information.

## Function Reference

The following functions exist to deal with surfaces (these functions are specific for creating and manipulating surfaces, but to actually draw them to the screen you should be using the specific draw functions that can be found below):

-   [surface\_exists](surface_exists.md)
-   [surface\_create](surface_create.md)
-   [surface\_create\_ext](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_create_ext.md)
-   [surface\_resize](surface_resize.md)
-   [surface\_set\_target](surface_set_target.md)
-   [surface\_set\_target\_ext](surface_set_target_ext.md)
-   [surface\_get\_target](surface_get_target.md)
-   [surface\_get\_target\_depth](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_get_target_depth.md)
-   [surface\_get\_target\_ext](surface_get_target_ext.md)
-   [surface\_reset\_target](surface_reset_target.md)
-   [surface\_copy](surface_copy.md)
-   [surface\_copy\_part](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_copy_part.md)
-   [surface\_depth\_disable](surface_depth_disable.md)
-   [surface\_get\_height](surface_get_height.md)
-   [surface\_get\_width](surface_get_width.md)
-   [surface\_get\_texture](surface_get_texture.md)
-   [surface\_get\_texture\_depth](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_get_texture_depth.md)
-   [surface\_get\_depth\_disable](surface_get_depth_disable.md)
-   [surface\_has\_depth](surface_has_depth.md)
-   [surface\_getpixel](surface_getpixel.md)
-   [surface\_getpixel\_ext](surface_getpixel_ext.md)
-   [surface\_get\_format](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_get_format.md)
-   [surface\_format\_is\_supported](surface_format_is_supported.md)
-   [surface\_free](surface_free.md)
-   [surface\_save](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_save.md)
-   [surface\_save\_part](surface_save_part.md)

The following functions exist for drawing surfaces:

NOTE When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should **ALWAYS** check that a surface exists using [surface\_exists](surface_exists.md) before referencing them directly.

-   [draw\_surface](draw_surface.md)
-   [draw\_surface\_ext](draw_surface_ext.md)
-   [draw\_surface\_part](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Surfaces/draw_surface_part.md)
-   [draw\_surface\_part\_ext](draw_surface_part_ext.md)
-   [draw\_surface\_stretched](draw_surface_stretched.md)
-   [draw\_surface\_stretched\_ext](draw_surface_stretched_ext.md)
-   [draw\_surface\_tiled](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Surfaces/draw_surface_tiled.md)
-   [draw\_surface\_tiled\_ext](draw_surface_tiled_ext.md)
-   [draw\_surface\_general](draw_surface_general.md)

Finally, you have two functions for storing and retrieving surfaces in [Buffers](../../Buffers/Buffers.md):

-   [buffer\_get\_surface](../../Buffers/buffer_get_surface.md)
-   [buffer\_set\_surface](../../Buffers/buffer_set_surface.md)

## Application Surface Event Order

As mentioned above, GameMaker doesn't actually render most things to the screen directly, but instead it renders them to the **application surface**. This is essentially a surface - just like any that you can make yourself using the surface functions - and as such it can be manipulated, drawn to, sent to shaders, etc. Basically, anything that you would normally do with a surface you created can also be applied to the application surface.

**NOTE** The only thing you **cannot** do with the application surface is free it. It always exists, although the handle to access it may change.

When you run your game, this surface is created the first time that a [draw event](../../../../The_Asset_Editors/Object_Properties/Draw_Events.md) is called in each new room that you enter, which means that nothing is drawn until that point. However, you can still get the application surface position and resize it in the **Create Event** or any other event without getting any errors and the values used will be relevant to the surface when it is created. The actual sequence of events for the creation and drawing of the application surface is as follows:

-   Pre-Draw event
             --- > **the application surface is created (if it doesn't exist) and the render target is set**
-   For each visible view port, or, if no views ports are active, once
    -   Draw Begin event
    -   Draw event
    -   Draw End event
                --- > **the application surface render target is reset here**
-   Post-Draw event
            --- > **the application surface is now drawn to the display buffer by default**                 (although you can switch this off using [application\_surface\_draw\_enable](application_surface_draw_enable.md))
-   Draw GUI Begin event
-   Draw GUI event
-   Draw GUI End event

The use of this surface means that you can easily create incredible transitions using shaders, or take the screen and wrap it around a 3D form, or simply scale a low-res game up to any resolution screen... The possibilities are endless!

To access this surface, you need to use the built-in global variable application\_surface which is explained on the following page:

-   [application\_surface](application_surface.md)

You also have a few functions that are designed _only_ for use with the application surface:

-   [application\_surface\_enable](application_surface_enable.md)
-   [application\_surface\_is\_enabled](application_surface_is_enabled.md)
-   [application\_get\_position](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Surfaces/application_get_position.md)
-   [application\_surface\_draw\_enable](application_surface_draw_enable.md)