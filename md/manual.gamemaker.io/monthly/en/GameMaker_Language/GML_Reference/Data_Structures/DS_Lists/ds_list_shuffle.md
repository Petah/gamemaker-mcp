---
title: "ds_list_shuffle"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Lists/ds_list_shuffle.htm"
converted: "2025-09-14T03:59:46.944Z"
---

# ds\_list\_shuffle

With this function you can shuffle a list, which will re-order all the component values into random positions from those in which they were originally added to the list.

NOTE This function will shuffle the items to the same positions every time the game is run afresh due to the fact that GameMaker generates the same initial random seed every time to make debugging code a far easier task. To avoid this behaviour use [randomise](../../Maths_And_Numbers/Number_Functions/randomise.md) at the start of your game. This is only true when testing and debugging the game, as the final executable package will not show this behaviour and will be random every play.

#### Syntax:

ds\_list\_shuffle(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | DS List | The handle of the list to shuffle. |

#### Returns:

N/A

#### Example:

if (restart)
{
    ds\_list\_shuffle(card\_list);
}

The above code will shuffle the list indexed in the variable "card\_list" if the variable "restart" is flagged as true.