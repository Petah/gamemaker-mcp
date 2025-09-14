---
title: "path_assign"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Paths/Path_Manipulation/path_assign.htm"
converted: "2025-09-14T03:59:34.605Z"
---

# path\_assign

With this function you can copy the path data from one path to another. The path being copied _to_ will be cleared first (should it have any path points) and be **completely overwritten** by the path being copied from. Neither path is deleted in the process and the result is two paths, with two different indexes, but the exact same form and points. In general you would want to use this function on a path created using [path\_add()](path_add.md), since if you use it on a path asset, **it will permanently affect the path for all instances in the game** from the moment the function is used until the end of the game.

#### Syntax:

path\_assign(index, path);

| Argument | Type | Description |
| --- | --- | --- |
| index | Path Asset | The index of the path to be overwritten. |
| path | Path Asset | The index of the path that will overwrite 'index'. |

#### Returns:

N/A

#### Example:

mypath = path\_add();
path\_assign(mypath, choose(path\_1, path\_2, path\_3));

The above code will create a new, empty path indexed in the variable "mypath" and then copy over the path data from one of the three available path resources.