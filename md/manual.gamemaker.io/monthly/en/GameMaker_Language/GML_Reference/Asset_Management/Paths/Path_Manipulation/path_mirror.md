---
title: "path_mirror"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Paths/Path_Manipulation/path_mirror.htm"
converted: "2025-09-14T03:59:34.763Z"
---

# path\_mirror

This function takes all the path points and mirrors them along the vertical axis. **This function changes the actual path asset**, and so will permanently affect how the path is used by all instances in the game from the moment the function is used until the end of the game. If this is not what you require, then you should use a function like [path\_duplicate()](path_duplicate.md) to create a copy of the path first, then call this function on the duplicated asset (don't forget to call [path\_delete()](path_delete.md) on the asset when it is no longer required).

![Path mirror example](../../../../../assets/Images/Scripting_Reference/GML/Reference/Paths/pathmirror.png)

#### Syntax:

path\_mirror(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Path Asset | The index of the path to mirror. |

#### Returns:

N/A

#### Example:

path\_mirror(mypath);

This would mirror the path indexed in the variable "mypath" along the vertical axis.