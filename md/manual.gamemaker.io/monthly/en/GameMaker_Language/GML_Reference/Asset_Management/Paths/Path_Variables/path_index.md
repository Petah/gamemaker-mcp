---
title: "path_index"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Paths/Path_Variables/path_index.htm"
converted: "2025-09-14T03:59:34.931Z"
---

# path\_index

The variable path\_index is a **read-only** variable that holds the handle for a given path asset that has been assigned to an instance using the [path\_start](../path_start.md) function. If the instance has no path assigned, the variable will be set to an invalid handle (\-1).

#### Syntax:

path\_index

#### Returns:

[Path Asset](../../../../../The_Asset_Editors/Paths.md)

#### Example:

if (path\_index == -1)
{
    path\_start(pth\_enemy3, 4, path\_action\_reverse, 0);
}

The above code checks to see if a path has been assigned to the instance, and if not it starts a new path (assigning it to the path\_index at the same time).