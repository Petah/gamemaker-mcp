---
title: "surface_set_target_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_set_target_ext.htm"
converted: "2025-09-14T03:59:54.628Z"
---

# surface\_set\_target\_ext

This function is for use with the [Shader Functions](../../Asset_Management/Shaders/Shaders.md) and sets the MRT (0 - 3) for native level shaders (OpenGL ES, OpenGL, DX9, DX11).

NOTE MRT's are not supported on HTML5.

#### Syntax:

surface\_set\_target\_ext(index, surface\_id);

| Argument | Type | Description |
| --- | --- | --- |
| index | Real | The render target index to use (from 0 to 3). |
| surface_id | Surface | The surface to use. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md) Whether the render target was set successfully

#### Example:

surface\_set\_target\_ext(0, surf);

The above code sets the render target 0 to the surface stored in the variable surf.