---
title: "surface_get_target_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_get_target_ext.htm"
converted: "2025-09-14T03:59:54.429Z"
---

# surface\_get\_target\_ext

This function retrieves the surface assigned to one of the 4 render targets available to surfaces.

You supply the index of the render target to check, and the function will return an invalid handle (-1) if no surface is assigned, or an integer value >= 0, representing the surface assigned (as returned by the functions [surface\_create](surface_create.md) / [surface\_create\_ext](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_create_ext.md)).

#### Syntax:

surface\_get\_target\_ext(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Real | The render target index to check (from 0 to 3). |

#### Returns:

[Surface](surface_create.md) or -1 (if no target surface is set)

#### Example:

if (surface\_get\_target\_ext(0) == -1)
{
    surface\_set\_target\_ext(0, global.Surf);
}

The above code first checks if the shader render target 0 has been set to a surface. If not, then one is assigned.