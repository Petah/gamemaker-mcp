---
title: "ds_grid_destroy"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Grids/ds_grid_destroy.htm"
converted: "2025-09-14T03:59:46.133Z"
---

# ds\_grid\_destroy

This function will remove the given grid data structure from memory, freeing up the resources it was using and removing all values that it contained. This function should always be used when you are finished using the DS grid to prevent memory leaks that can slow down and crash your game.

NOTE You should always set the variable that held the data structure handle to \-1 after calling this function, as handle indices are recycled and the variable may unintentionally hold an active resource when the held index is eventually reused. See **Usage Notes** under **Handles** on [Data Types](../../../GML_Overview/Data_Types.md) for more information.

#### Syntax:

ds\_grid\_destroy(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | DS Grid | The grid to destroy |

#### Returns:

N/A

#### Example:

if (lives == 0)
{
    ds\_grid\_destroy(Wall\_Grid);
    Wall\_Grid = -1;
    room\_goto(rm\_Menu);
}

The above code will check the value of the built-in global variable [lives](../../../../../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/lives.md) and if it is 0, it destroys the DS grid referenced in the variable Wall\_Grid and then changes rooms.