---
title: "animcurve_exists"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Animation_Curves/animcurve_exists.htm"
converted: "2025-09-14T03:59:29.844Z"
---

# animcurve\_exists

This function returns if the given [Animation Curve Asset](../../../../The_Asset_Editors/Animation_Curves.md) or [Animation Curve Struct](animcurve_get.md) exists and is a valid Animation Curve.

#### Syntax:

animcurve\_exists(curve\_struct\_or\_id);

| Argument | Type | Description |
| --- | --- | --- |
| curve_struct_or_id | Animation Curve Struct or Animation Curve Asset | The Animation Curve asset or struct that will be checked. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (animcurve\_exists(spring\_curve))
{
    apply\_spring\_animation(sprite\_curve);
}

The above code checks if the Animation Curve stored in the custom spring\_curve variable exists. If it does, it runs a custom method to use that Animation Curve.