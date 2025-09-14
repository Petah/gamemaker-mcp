---
title: "draw_get_lighting"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Lighting/draw_get_lighting.htm"
converted: "2025-09-14T03:59:50.960Z"
---

# draw\_get\_lighting

This function will return whether lighting is enabled (true) or not (false) for the whole scene.

#### Syntax:

draw\_get\_lighting()

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (!draw\_get\_lighting())
{
    draw\_set\_lighting(true);
}

The above code will check to see if lighting is enabled for the scene, and if not it enables it.