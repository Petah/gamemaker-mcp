---
title: "array_shuffle_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/array_shuffle_ext.htm"
converted: "2025-09-14T04:00:10.266Z"
---

# array\_shuffle\_ext

This function shuffles the existing array _in place_, i.e. it modifies (or _mutates_) the existing array.

NOTE This function will shuffle the items to the same positions every time the game is run afresh due to the fact that GameMaker generates the same initial random seed every time to make debugging code a far easier task. To avoid this behaviour use [randomise](../Maths_And_Numbers/Number_Functions/randomise.md) at the start of your game. This is only true when testing and debugging the game, as the final executable package will not show this behaviour and will be random every play.

#### Syntax:

array\_shuffle\_ext(array, \[offset\], \[length\]);

| Argument | Type | Description |
| --- | --- | --- |
| array | Array | The array to shuffle |
| offset | Real | OPTIONAL The offset, or starting index, in the array to start shuffling. Defaults to 0. Setting a negative value will count from the end of the array. The starting index will then be array_length(array) + offset. See: Offset And Length |
| length | Real | OPTIONAL The number of elements to shuffle. Defaults to (array_length(array) - 1. See: Offset And Length |

#### Returns:

N/A

#### Example:

var \_numbers = \[1, 2, 3, 4, 5, 6, 7, 8, 9, 10\];
array\_shuffle\_ext(\_numbers);
show\_debug\_message(\_numbers);

The above code first creates an array \_numbers with the numbers from 1 to 10. It then shuffles the array using array\_shuffle\_ext. This changes the actual values in the array. Finally the shuffled version is shown in a debug message.