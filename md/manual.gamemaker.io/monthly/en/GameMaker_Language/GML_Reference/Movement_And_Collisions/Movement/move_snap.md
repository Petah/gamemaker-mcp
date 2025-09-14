---
title: "move_snap"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Movement/move_snap.htm"
converted: "2025-09-14T04:00:03.768Z"
---

# move\_snap

This function is used to "snap" the instance to a grid of a given size. It will be snapped to the nearest corresponding position on the "invisible" grid that the hsnap and vsnap values define.

#### Syntax:

move\_snap(hsnap, vsnap);

| Argument | Type | Description |
| --- | --- | --- |
| hsnap | Real | The horizontal snapping (the size in pixels between 'cells'). |
| vsnap | Real | The vertical snapping (the size in pixels between 'cells'). |

#### Returns:

N/A

#### Example:

with (obj\_Pieces)
{
    if (!place\_snapped(32, 32))
    {
        move\_snap(32, 32);
    }
}

The above code checks all instances of "obj\_Pieces" to see if they are snapped to a grid of 32x32 pixels, and if they are not it snaps them to the nearest position in that grid.