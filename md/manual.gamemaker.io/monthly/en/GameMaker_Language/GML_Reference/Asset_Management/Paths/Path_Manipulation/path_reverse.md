---
title: "path_reverse"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Paths/Path_Manipulation/path_reverse.htm"
converted: "2025-09-14T03:59:34.796Z"
---

# path\_reverse

With this function you can reverse the order in which the individual path points are numbered, so, for example, if the path has 5 points, point 0 would become point 4, point 1 would be point 3 and point 2 would not be changed. The actual position of the points remains the same, only the order in which they are processed is changed. **This function changes the actual path asset**, and so will permanently affect how the path is used by all instances in the game from the moment the function is used until the end of the game. If this is not what you require, then you should use a function like [path\_duplicate()](path_duplicate.md) to create a copy of the path first, then call this function on the duplicated asset (don't forget to call [path\_delete()](path_delete.md) on the asset when it is no longer required).

#### Syntax:

path\_reverse(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Path Asset | The index of the path to change. |

#### Returns:

N/A

#### Example:

path\_reverse(pth\_AI);

This would reverse the order in which all points on the given path are processed.