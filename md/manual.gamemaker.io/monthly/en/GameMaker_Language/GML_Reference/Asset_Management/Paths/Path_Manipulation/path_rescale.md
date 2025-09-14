---
title: "path_rescale"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Paths/Path_Manipulation/path_rescale.htm"
converted: "2025-09-14T03:59:34.778Z"
---

# path\_rescale

This function can be used to re-scale the given path along both (or either) the vertical and horizontal axis, basically moving each of the path points to a new position corresponding to this scale around the centre of the path. **This function changes the actual path asset**, and so will permanently affect how the path is used by all instances in the game from the moment the function is used until the end of the game. If this is not what you require, then you should use a function like [path\_duplicate()](path_duplicate.md) to create a copy of the path first, then call this function on the duplicated asset (don't forget to call [path\_delete()](path_delete.md) on the asset when it is no longer required).

#### Syntax:

path\_rescale(index, xscale, yscale);

| Argument | Type | Description |
| --- | --- | --- |
| index | Path Asset | The index of the path to scale. |
| xscale | Real | What to multiply the current horizontal scale by. Default scale is 1. |
| yscale | Real | What to multiply the current vertical scale by. Default scale is 1. |

#### Returns:

N/A

#### Example:

path\_rescale(pth\_AI, 3, 3);

This would re-scale the given path to three times its original size.