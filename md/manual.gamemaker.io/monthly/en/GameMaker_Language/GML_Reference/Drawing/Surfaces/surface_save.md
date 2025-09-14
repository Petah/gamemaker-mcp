---
title: "surface_save"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_save.htm"
converted: "2025-09-14T03:59:54.575Z"
---

# surface\_save

This function will save a surface to disc using the given filename.

The surface _must_ be saved as a \*.png format file.

NOTE This function will only work with surfaces that use the [surface\_rgba8unorm](surface_create.md) (default) surface format.

#### Syntax:

surface\_save(surface\_id, fname);

| Argument | Type | Description |
| --- | --- | --- |
| surface_id | Surface | The surface to set as the drawing target. |
| fname | String | The name of the saved image file. |

#### Returns:

N/A

#### Example:

if (keyboard\_check\_pressed(ord("S")))
{
    surface\_save(surf, "test.png");
}

The above code will check to see if the user presses the "S" key on the keyboard and if they do it will save the surface indexed in the variable surf to disc.