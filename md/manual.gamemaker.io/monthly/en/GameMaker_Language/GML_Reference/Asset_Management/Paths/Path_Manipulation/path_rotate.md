---
title: "path_rotate"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Paths/Path_Manipulation/path_rotate.htm"
converted: "2025-09-14T03:59:34.814Z"
---

# path\_rotate

You can use this function to rotate a given path around its center. Remember that in GameMaker (unless you are using physics) the angles are calculated counter-clockwise, so rotating the path by 90 degrees would rotate the path to the _left_. **This function changes the actual path resource**, and so will permanently affect how the path is used by all instances in the game from the moment the function is used until the end of the game. If this is not what you require, then you should use a function like [path\_duplicate()](path_duplicate.md) to create a copy of the path first, then call this function on the duplicated asset (don't forget to call [path\_delete()](path_delete.md) on the asset when it is no longer required).

![Rotate path example](../../../../../assets/Images/Scripting_Reference/GML/Reference/Paths/pathrotated.png)

NOTE Once a path has been assigned to an instance using the [path\_start()](../path_start.md) function, you can use the [path\_orientation](../Path_Variables/path_orientation.md) variable to change the path rotation too.

#### Syntax:

path\_rotate(index, angle);

| Argument | Type | Description |
| --- | --- | --- |
| index | Path Asset | The index of the path to flip. |
| angle | Real | The angle of rotation degrees. |

#### Returns:

N/A

#### Example:

path\_rotate(pth\_Patrol, 90);

This would rotate the given 90 degrees counterclockwise.