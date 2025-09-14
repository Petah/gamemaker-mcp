---
title: "draw_set_lighting"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Lighting/draw_set_lighting.htm"
converted: "2025-09-14T03:59:51.067Z"
---

# draw\_set\_lighting

This function is used to enable all lighting effects. Default is disabled (false).

#### Syntax:

draw\_set\_lighting(enable);

| Argument | Type | Description |
| --- | --- | --- |
| enable | Boolean | Whether to enable or disable all lighting (true or false) |

#### Returns:

N/A

#### Example:

draw\_set\_lighting(true);
draw\_light\_define\_direction(1, 0, 1, 0, c\_white);
draw\_light\_enable(1, true);

The above code will enable lighting for the whole scene, then define a white directional light in the room space, and then finally turn that light on.