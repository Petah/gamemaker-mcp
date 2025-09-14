---
title: "mp_grid_clear_all"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Motion_Planning/mp_grid_clear_all.htm"
converted: "2025-09-14T04:00:03.263Z"
---

# mp\_grid\_clear\_all

With this function you can clear an MP grid of all "forbidden" cells.

#### Syntax:

mp\_grid\_clear\_all(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | MP Grid ID | Index of the mp_grid that is to be used |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (!instance\_exists(obj\_Player))
{
    mp\_grid\_clear\_all(grid);
}

The above code will clear the mp\_grid indexed in the variable "grid", marking all the cells as free, if an instance of the object "obj\_Player" no longer exists in the room.