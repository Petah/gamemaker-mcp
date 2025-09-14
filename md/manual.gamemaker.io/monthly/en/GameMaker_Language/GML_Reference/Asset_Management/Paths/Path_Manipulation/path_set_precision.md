---
title: "path_set_precision"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Paths/Path_Manipulation/path_set_precision.htm"
converted: "2025-09-14T03:59:34.861Z"
---

# path\_set\_precision

With this function you can change the "smoothness" of a path. This value must be between 1 and 8, with a low value creating straighter edges with sharper curves between points, while a higher value will round the points and make the path a lot more "curvy". Note that this function will have no visible effect if the path has not been set to smooth in the path editor or using the function [path\_set\_kind()](path_set_kind.md). **This function changes the actual path asset**, and so will permanently affect how the path is used by all instances in the game from the moment the function is used until the end of the game. If this is not what you require, then you should use a function like [path\_duplicate()](path_duplicate.md) to create a copy of the path first, then call this function on the duplicated asset (don't forget to call [path\_delete()](path_delete.md) on the asset when it is no longer required).

![Path Precision differences example](../../../../../assets/Images/Scripting_Reference/GML/Reference/Paths/setprecision.png)

#### Syntax:

path\_set\_precision(index, prec);

| Argument | Type | Description |
| --- | --- | --- |
| index | Path Asset | The index of the path to change. |
| prec | Real | The precision of the path. Must be an integer between 1 and 8. |

#### Returns:

N/A

#### Example:

path\_set\_precision(pth\_Patrol, 2);

This will set the precision of the given path to 2.