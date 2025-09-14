---
title: "draw_light_define_ambient"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Lighting/draw_light_define_ambient.htm"
converted: "2025-09-14T03:59:50.973Z"
---

# draw\_light\_define\_ambient

This function is used to control the ambient light of a scene, which is the light that you have in a scene even without having defined any point or directional light sources. It is effectively the overall colour and brightness (or darkness) of a scene. The default colour is c\_black.

#### Syntax:

draw\_light\_define\_ambient(col);

| Argument | Type | Description |
| --- | --- | --- |
| col | Colour | The colour to use (either a constant, a real or a hex value). |

#### Returns:

N/A

#### Example:

draw\_light\_define\_ambient(c\_white);

The above code will define the ambient lighting as being white.