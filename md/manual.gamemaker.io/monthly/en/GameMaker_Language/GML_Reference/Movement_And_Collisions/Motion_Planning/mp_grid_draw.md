---
title: "mp_grid_draw"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Motion_Planning/mp_grid_draw.htm"
converted: "2025-09-14T04:00:03.339Z"
---

# mp\_grid\_draw

This function will draw the specified MP grid (as defined by [mp\_grid\_create()](mp_grid_create.md)), marking free cells as green and forbidden cells as red. This function is essential as a debug tool but it should be noted that it is _very_ slow and only works when used in the **draw** event of the instance, and that you can set the draw alpha to change the opacity of the grid, permitting you to draw it as an overlay and see what is actually in the room at the same time.

#### Syntax:

mp\_grid\_draw(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | MP Grid ID | Index of the mp_grid that is to be drawn |

#### Returns:

[Boolean](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

draw\_set\_alpha(0.3);
mp\_grid\_draw(grid);
draw\_set\_alpha(1);

The above code will draw the mp\_grid indexed in the variable "grid" as a semi-transparent overlay (but only if the instance running the code has a depth lower than all the rest).