---
title: "path_delete"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Paths/Path_Manipulation/path_delete.htm"
converted: "2025-09-14T03:59:34.659Z"
---

# path\_delete

You can use this code to remove a path from memory. If this path has been created dynamically using [path\_add()](path_add.md), the variable that holds the path index will no longer be valid for accessing the path as it no longer exists, and if the path was created using the [Path Editor](../../../../../The_Asset_Editors/Paths.md) that path can no longer be accessed in the _whole game_ as you are permanently deleting it.

#### Syntax:

path\_delete(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Path Asset | The index of the path to delete. |

#### Returns:

N/A

#### Example:

var t\_path = path\_add();
if (mp\_grid\_path(grid, t\_path, x, y, obj\_Player.x, obj\_Player.y, 1))
{
    path\_assign(mypath, t\_path);
}
path\_delete(t\_path);

The above code will create a path and store its index in a local variable. This path is then used to store an [mp\_grid\_path()](../../../Movement_And_Collisions/Motion_Planning/mp_grid_path.md) generated path which, if it succeeds in finding its way to the target, is then assigned to the path indexed in "mypath". Finally the "t\_path" is deleted.