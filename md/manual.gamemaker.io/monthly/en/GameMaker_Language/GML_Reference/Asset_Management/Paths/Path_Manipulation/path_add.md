---
title: "path_add"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Paths/Path_Manipulation/path_add.htm"
converted: "2025-09-14T03:59:34.558Z"
---

# path\_add

With this function you can create a path in GameMaker without using the path editor.

This function will return a reference to the path which should be stored in a variable and used in other path functions.

Please note that the created path is _empty_ i.e.: it has no points defined, so you will then have to use the [other available functions](path_add_point.md) to add points to the path or use [MP grids](../../../Movement_And_Collisions/Motion_Planning/Motion_Planning.md) to generate the path. It will be created as a "closed" path, which you can [change](path_set_closed.md).

Once you have finished using the path, or wish to create a new one and store its reference in the same variable, you should first delete the old path with [path\_delete](path_delete.md) to prevent memory leaks which can eventually crash your game.

#### Syntax:

path\_add();

#### Returns:

[Path Asset](../../../../../The_Asset_Editors/Paths.md)

#### Example:

global.newpath = path\_add();

This will create a new path and assign its index to global.newpath.