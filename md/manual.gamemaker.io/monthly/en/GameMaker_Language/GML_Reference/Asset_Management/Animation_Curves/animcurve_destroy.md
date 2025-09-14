---
title: "animcurve_destroy"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Animation_Curves/animcurve_destroy.htm"
converted: "2025-09-14T03:59:29.827Z"
---

# animcurve\_destroy

This function destroy an animation curve previously created with the function [animcurve\_create()](animcurve_create.md).

Calling this function will remove the animation curve from memory and clean up any channels or points that it contains as well (these never need to be cleaned up manually). Note that you **cannot destroy any animation curves created in the asset browser**, only those created at runtime.

#### Syntax:

animcurve\_destroy(curve\_struct);

| Argument | Type | Description |
| --- | --- | --- |
| curve_struct | Animation Curve Struct | The pointer to the curve struct to destroy. |

#### Returns:

N/A

#### Example:

animcurve\_destroy(my\_curve);

The above code will destroy the (previously created) animation curve struct indexed in the variable "my\_curve".