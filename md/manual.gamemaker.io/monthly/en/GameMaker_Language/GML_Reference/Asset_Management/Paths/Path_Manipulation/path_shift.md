---
title: "path_shift"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Paths/Path_Manipulation/path_shift.htm"
converted: "2025-09-14T03:59:34.877Z"
---

# path\_shift

With this function you can shift a path along the horizontal and vertical axis. Please note that this will have no visible effect in-game if the instance following the path being shifted follows it relatively (rather than absolutely) as the path's position is disregarded then. **This function changes the actual path asset**, and so will permanently affect how the path is used by all instances in the game from the moment the function is used until the end of the game. If this is not what you require, then you should use a function like [path\_duplicate()](path_duplicate.md) to create a copy of the path first, then call this function on the duplicated asset (don't forget to call [path\_delete()](path_delete.md) on the asset when it is no longer required).

#### Syntax:

path\_shift(index, xshift, yshift);

| Argument | Type | Description |
| --- | --- | --- |
| index | Path Asset | The index of the path to change. |
| xshift | Real | The number of horizontal pixels to shift the path. Negative=left, positive=right. |
| yshift | Real | The number of vertical pixels to shift the path. Negative=up, positive=down. |

#### Returns:

N/A

#### Example:

my\_path = path\_duplicate(pth\_AI);
path\_shift(my\_path, 50, 50);
path\_start(my\_path, 4, path\_action\_reverse, true);

The above code duplicates a path asset and stores its handle in a variable. This variable is then used to shift the duplicated path position and then the instance starts the path.