---
title: "mp_grid_get_cell"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Motion_Planning/mp_grid_get_cell.htm"
converted: "2025-09-14T04:00:03.357Z"
---

# mp\_grid\_get\_cell

With this function you can check any given cell of the mp\_grid to see if it has been flagged as occupied or not, giving the index of the (previously created) mp\_grid and the x and y coordinates of the cell to check.

If it has been occupied or the position being checked is out of the grid's bounds, the function will return -1, otherwise it will return 0.

#### Syntax:

mp\_grid\_get\_cell(id, x , y);

| Argument | Type | Description |
| --- | --- | --- |
| id | MP Grid ID | Index of the mp_grid that is to be used |
| x1 | Real | The x coordinate of the grid to check. |
| y1 | Real | The y coordinate of the grid to check. |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

if (mp\_grid\_get\_cell(grid, mouse\_x div 16, mouse\_y div 16) == -1)
{
    image\_blend = c\_red;
}
else
{
    image\_blend = c\_lime;
}

The above code will check the mp\_grid cell that corresponds to the mouse position and if it is occupied it sets the image\_blend variable to red, and if it is not occupied it sets it to green.