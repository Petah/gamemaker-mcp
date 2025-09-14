---
title: "surface_get_target_depth"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_get_target_depth.htm"
converted: "2025-09-14T03:59:54.412Z"
---

# surface\_get\_target\_depth

This function returns the surface whose depth buffer is currently used for drawing. A surface different than the current draw target can be set for depth when calling [surface\_set\_target](surface_set_target.md).

#### Syntax:

surface\_get\_target\_depth()

#### Returns:

[Surface](surface_create.md) (or an invalid handle -1 if no depth buffer is used)

#### Example:

var \_surf\_depth = surface\_get\_target\_depth();

The code above gets the surface whose depth buffer is currently used for drawing and stores the result in a temporary variable \_surf\_depth.