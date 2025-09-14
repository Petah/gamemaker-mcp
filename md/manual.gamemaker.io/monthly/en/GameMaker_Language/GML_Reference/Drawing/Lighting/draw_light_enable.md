---
title: "draw_light_enable"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Lighting/draw_light_enable.htm"
converted: "2025-09-14T03:59:51.022Z"
---

# draw\_light\_enable

This function is used to enable a defined light. When you define a positional or a directional light you must assign it an index number which is then used by this function to switch the light on or off. Default is disabled (false).

NOTE There are only 8 hardware lights available, so only 8 defined lights can be enabled at any one time (although more can be defined).

#### Syntax:

draw\_light\_enable(ind, enable);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Real | The index number of the light (from 0 to 7) |
| enable | Boolean | Enable or disable all lighting (true or false) |

#### Returns:

N/A

#### Example:

draw\_set\_lighting(true);
draw\_light\_define\_direction(1, 0, 1, 0, c\_white);
draw\_light\_enable(1, true);

The above code will enable lighting for the whole scene, then define a white directional light in the room space, and then finally turn that light on.