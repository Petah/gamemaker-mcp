---
title: "path_set_closed"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Paths/Path_Manipulation/path_set_closed.htm"
converted: "2025-09-14T03:59:34.829Z"
---

# path\_set\_closed

This function can be used to flag a given path as being open (false) or closed (true). The default for a newly created path is closed (true).

A closed path has its start point connected to its end point, forming a loop, and an open path has a definitive, unconnected start and finish.

**This function changes the actual path asset**, and so will permanently affect how the path is used by all instances in the game from the moment the function is used until the end of the game.

If this is not what you require, then you should use a function like [path\_duplicate()](path_duplicate.md) to create a copy of the path first, then call this function on the duplicated asset (don't forget to call [path\_delete()](path_delete.md) on the asset when it is no longer required).

#### Syntax:

path\_set\_closed(index, closed);

| Argument | Type | Description |
| --- | --- | --- |
| index | Path Asset | The index of the path to change. |
| closed | Boolean | Whether the path is closed (true) or not (false). |

#### Returns:

N/A

#### Example:

path\_set\_closed(pth\_Patrol, true);

This will set the given path to be a closed path.