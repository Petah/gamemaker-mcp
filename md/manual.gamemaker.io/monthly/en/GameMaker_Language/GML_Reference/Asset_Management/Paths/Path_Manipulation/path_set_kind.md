---
title: "path_set_kind"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Paths/Path_Manipulation/path_set_kind.htm"
converted: "2025-09-14T03:59:34.844Z"
---

# path\_set\_kind

This function can be used to set the kind of path that you wish the specified resource to be. This can be either a straight line path (set to 0) or a smoothed path (set to 1) in which case the path precision has to be taken into account too (the precision can be set too using [path\_set\_precision()](path_set_precision.md)). This function changes the actual path resource, and so will permanently affect how the path is used by all instances in the game from the moment the function is used until the end of the game.If this is not what you require, then you should use a function like [path\_duplicate()](path_duplicate.md) to create a copy of the path first, then call this function on the duplicated asset (don't forget to call [path\_delete()](path_delete.md) on the asset when it is no longer required).

![Path kind example](../../../../../assets/Images/Scripting_Reference/GML/Reference/Paths/setkind.png)

#### Syntax:

path\_set\_kind(index, val);

| Argument | Type | Description |
| --- | --- | --- |
| index | Path Asset | The index of the path to change. |
| val | Real | The kind of the path, 0 for straight or 1 for smooth. |

#### Returns:

N/A

#### Example:

path\_set\_kind(pth\_Patrol, true);

This will set the given path to be a "smooth" path.