---
title: "path_duplicate"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Paths/Path_Manipulation/path_duplicate.htm"
converted: "2025-09-14T03:59:34.686Z"
---

# path\_duplicate

This function takes a path and copies it into a new path. The new path is created in the process, and its index is returned to be used in all further calls to use this new path.

#### Syntax:

path\_duplicate(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Path Asset | The index of the existing path to duplicate. |

#### Returns:

[Path Asset](../../../../../The_Asset_Editors/Paths.md)

#### Example:

mypath = path\_duplicate(choose(pth\_1, pth\_2, pth\_3, pth\_4));

The above code chooses one of four path resources and duplicates it, storing the index of the new path in the variable "mypath".