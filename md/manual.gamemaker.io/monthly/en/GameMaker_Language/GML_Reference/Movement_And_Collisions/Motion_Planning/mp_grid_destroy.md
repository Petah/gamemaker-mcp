---
title: "mp_grid_destroy"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Motion_Planning/mp_grid_destroy.htm"
converted: "2025-09-14T04:00:03.326Z"
---

# mp\_grid\_destroy

You can use this function to destroy the indicated mp\_grid (as defined by the function [mp\_grid\_create()](mp_grid_create.md)) and free up the memory allocated it. It is _essential_ that you call this whenever the MP grid is finished with or you could potentially get a memory leak, meaning that your game will slow down over time and eventually crash.

**NOTE**: Using mp\_grid\_\* functions on a grid after it has been destroyed will result in an error.

#### Syntax:

mp\_grid\_destroy(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | MP Grid ID | Index of the mp_grid that is to be destroyed |

#### Returns:

N/A

#### Example:

if (timer = 0)
{
    mp\_grid\_destroy(grid);
    room\_goto(rm\_Menu);
}

The above code will destroy the mp\_grid indexed in the variable "grid" if the variable "timer" is equal to 0, and then goto another room.