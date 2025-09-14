---
title: "surface_get_height"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_get_height.htm"
converted: "2025-09-14T03:59:54.389Z"
---

# surface\_get\_height

This function simply returns the height, in pixels, of the given surface.

It should be noted that if you call this to check the [application\_surface](application_surface.md) immediately after having changed its size using [surface\_resize](surface_resize.md), it will not return the new value as the change needs a step or two to be fully processed. After waiting a step it should return the new size correctly.

NOTE When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should **ALWAYS** check that a surface exists using [surface\_exists](surface_exists.md) before referencing them directly.

#### Syntax:

surface\_get\_height(surface\_id);

| Argument | Type | Description |
| --- | --- | --- |
| surface_id | Surface | The surface to get the height of. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

sh = surface\_get\_height(surf);

The above code will store the height of the surface indexed in the variable surf in the variable sh.