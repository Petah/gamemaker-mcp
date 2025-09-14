---
title: "Drawing"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Drawing.htm"
converted: "2025-09-14T03:59:49.833Z"
---

# Drawing

This section contains all functions related to drawing within your game as well as for controlling _how_ things will be drawn (blending, alpha, culling, etc.).

Drawing in GameMaker happens at the end of the frame, after all other events (see [Event Order](../../../The_Asset_Editors/Object_Properties/Event_Order.md)). In this draw cycle GameMaker performs a series of events in a specific order.

Everything that you draw eventually needs to be drawn to the display buffer in order to be visible on screen. By default, GameMaker does not directly draw to the display buffer, however, but rather to a surface: the [Application Surface](Surfaces/Surfaces.htm#application_surface). This is the default draw target when drawing in the regular Draw events (Draw, Draw Begin and Draw End).

NOTE See the [Draw Events](../../../The_Asset_Editors/Object_Properties/Draw_Events.md) page for detailed information on how GameMaker draws everything during a frame.

## Draw Targets

GameMaker always draws to a draw target and changes it automatically at certain points in the draw cycle, resetting it afterwards. The draw target can be one of the following:

-   The display buffer:
    1.  In the Pre-Draw and Post-Draw events (see [Draw Events](../../../The_Asset_Editors/Object_Properties/Draw_Events.md))
    2.  In regular Draw events, if you've disabled the application surface (see [application\_surface\_enable](Surfaces/application_surface_enable.md)) and haven't set a custom surface
-   A surface:
    1.  The [Application Surface](Surfaces/Surfaces.htm#application_surface), if enabled
    2.  A view surface, if set for a view with [view\_surface\_id](../Cameras_And_Display/Cameras_And_Viewports/view_surface_id.md)
    3.  A custom surface created with [surface\_create](Surfaces/surface_create.md) and set as the target with [surface\_set\_target](Surfaces/surface_set_target.md)

GameMaker sets the draw target to the application surface automatically (if enabled) after all instances have executed their Pre-Draw event and resets it to the display buffer before all instances execute their Post-Draw event.

At any point in a Draw event you can set a [custom surface](Surfaces/surface_create.md) as the draw target with [surface\_set\_target](Surfaces/surface_set_target.md), draw to it and reset the target afterwards with [surface\_reset\_target](Surfaces/surface_reset_target.md). See [Surfaces](Surfaces/Surfaces.md) for more information.

### The Application Surface

This is the default draw target that GameMaker draws to in the regular Draw events. You can choose to not draw it automatically with [application\_surface\_draw\_enable](Surfaces/application_surface_draw_enable.md) or disable it entirely with [application\_surface\_enable](Surfaces/application_surface_enable.md). When the application surface is disabled, everything is drawn directly to the display buffer.

## Reference

GameMaker comes with a great number of different functions for drawing. To make it easier to find what you need the functions are split over the following categories:

-   [Colour And Alpha](Colour_And_Alpha/Colour_And_Alpha.md)
-   [GPU Control](GPU_Control/GPU_Control.md)
-   [Mipmapping](Mipmapping/Mipmapping.md)
-   [Basic Forms](Basic_Forms/Basic_Forms.md)
-   [Sprites And Tiles](../../../../../../GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/Sprites_And_Tiles.md)
-   [Text](Text/Text.md)
-   [Primitives And Vertex Formats](Primitives/Primitives_And_Vertex_Formats.md)
-   [Surfaces](Surfaces/Surfaces.md)
-   [Lighting](../../../../../../GameMaker_Language/GML_Reference/Drawing/Lighting/Lighting.md)
-   [Particles](Particles/Particles.md)
-   [Textures](Textures/Textures.md)
-   [Shaders](../Asset_Management/Shaders/Shaders.md)
-   [Video Playback](../../../../../../GameMaker_Language/GML_Reference/Drawing/Videos/Videos.md)
-   [The Depth And Stencil Buffer](Depth_And_Stencil_Buffer/The_Depth_And_Stencil_Buffer.md)

There are two special functions available too, one which is used for enabling or disabling the **Draw Event** for your project, and the other for flushing the entire draw pipeline:

-   [draw\_enable\_drawevent](draw_enable_drawevent.md)
-   [draw\_flush](draw_flush.md)