---
title: "Basic Forms"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/Basic_Forms.htm"
converted: "2025-09-14T03:59:49.084Z"
---

# Basic Forms

GameMaker has a whole collection of functions available for drawing different forms and shapes. These functions should only ever be used in the draw event of an instance (you _can_ use them elsewhere but you won't see anything!) and create purely graphic effects, which means that they do not generate collision events as those can only be done through the sprite or collision mask that has been assigned to an instance. All these functions are affected by the current draw colour, alpha and blend mode (see the section on [Colour](../Colour_And_Alpha/Colour_And_Alpha.md)).

IMPORTANT Lines, points and forms are always drawn at 1:1 with the **screen resolution**, regardless of the event they are drawn in.

IMPORTANT These functions will break the vertex batching and increase the number of texture swaps in your game, so having multiple calls to any of them in a single draw frame may lead to performance issues.

## Function Reference

NOTE These functions are slow to call and only supplied as basic drawing tools.

-   [draw\_arrow](draw_arrow.md)
-   [draw\_circle](draw_circle.md)
-   [draw\_circle\_colour](draw_circle_colour.md)
-   [draw\_ellipse](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_ellipse.md)
-   [draw\_ellipse\_colour](draw_ellipse_colour.md)
-   [draw\_line](draw_line.md)
-   [draw\_line\_colour](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_line_colour.md)
-   [draw\_line\_width](draw_line_width.md)
-   [draw\_line\_width\_colour](draw_line_width_colour.md)
-   [draw\_point](draw_point.md)
-   [draw\_point\_colour](draw_point_colour.md)
-   [draw\_rectangle](draw_rectangle.md)
-   [draw\_rectangle\_colour](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_rectangle_colour.md)
-   [draw\_roundrect](draw_roundrect.md)
-   [draw\_roundrect\_colour](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_roundrect_colour.md)
-   [draw\_roundrect\_ext](draw_roundrect_ext.md)
-   [draw\_roundrect\_colour\_ext](draw_roundrect_colour_ext.md)
-   [draw\_triangle](draw_triangle.md)
-   [draw\_triangle\_colour](draw_triangle_colour.md)

The following functions are also included in GameMaker to set drawing precision and draw some very specific things:

-   [draw\_set\_circle\_precision](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_set_circle_precision.md)
-   [draw\_button](draw_button.md)
-   [draw\_healthbar](draw_healthbar.md)
-   [draw\_path](draw_path.md)