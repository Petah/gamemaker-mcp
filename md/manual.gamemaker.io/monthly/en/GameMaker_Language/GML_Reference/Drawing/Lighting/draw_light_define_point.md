---
title: "draw_light_define_point"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Lighting/draw_light_define_point.htm"
converted: "2025-09-14T03:59:51.007Z"
---

# draw\_light\_define\_point

This function defines a positional light.

You can define the x, y and z position of the light, the light range and its colour (which will also affect the perceived intensity of the light as certain colours appear "darker" than others). You must also give the light an index number which is used in other functions to reference it.

NOTE There are only 8 hardware lights available, so only 8 defined lights can be enabled at any one time (although more can be defined).

#### Syntax:

draw\_light\_define\_point(ind, x, y, z, range, col)

| Argument | Type | Description |
| --- | --- | --- |
| ind | Real | The index number of the light (arbitrary) |
| x | Real | The x component of the light position |
| y | Real | The y component of the light position |
| z | Real | The z component of the light position |
| range | Real | The light range (in pixels) |
| col | Colour | The colour to use for the light (either a constant, a real or a hex value) |

#### Returns:

N/A

#### Example:

draw\_set\_lighting(true);
draw\_light\_define\_point(1, 200, 123, 50, 2000, c\_white);
draw\_light\_enable(1, true);

The above code will enable lighting for the whole scene, then define a white light at a specific point in the room space, and then finally turn that light on.