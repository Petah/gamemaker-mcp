---
title: "draw_light_define_direction"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Lighting/draw_light_define_direction.htm"
converted: "2025-09-14T03:59:50.989Z"
---

# draw\_light\_define\_direction

This function defines a directional light.

The direction is set by the values input for x, y and z. The direction vector is stored normalised and is negated before being sent to the shader.

The lights can also be given a colour, which will also affect the perceived intensity of the light as certain colours appear "darker" than others. You must also give the light an index number which is used in other functions to reference it.

NOTE There are only 8 hardware lights available, so only 8 defined lights can be enabled at any one time (although more can be defined).

#### Syntax:

draw\_light\_define\_direction(ind, x, y, z, col)

| Argument | Type | Description |
| --- | --- | --- |
| ind | Real | The index number of the light (arbitrary) |
| x | Real | The x component of the light vector |
| y | Real | The y component of the light vector |
| z | Real | The z component of the light vector |
| col | Colour | The colour to use for the light (either a constant, a real or a hex value) |

#### Returns:

N/A

#### Example:

draw\_set\_lighting(true);
draw\_light\_define\_direction(1, 0, 1, 0, c\_white);
draw\_light\_enable(1, true);

The above code will enable lighting for the whole scene, then define a white directional light in the room space, and then finally turn that light on.