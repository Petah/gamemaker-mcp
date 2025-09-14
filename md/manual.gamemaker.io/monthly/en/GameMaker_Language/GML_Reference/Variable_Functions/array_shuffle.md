---
title: "array_shuffle"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/array_shuffle.htm"
converted: "2025-09-14T04:00:10.250Z"
---

# array\_shuffle

This function returns a **new** array in which the elements of the original array (or a range of it) are randomly reordered.

When [Offset And Length](Array_Functions.htm#h1) are provided, the returned array will have the same number of elements as are in the range of the original array, given by these values.

NOTE See [array\_shuffle\_ext](array_shuffle_ext.md) for the function that changes the original array in place.

NOTE This function will shuffle the items to the same positions every time the game is run afresh due to the fact that GameMaker generates the same initial random seed every time to make debugging code a far easier task. To avoid this behaviour use [randomise](../Maths_And_Numbers/Number_Functions/randomise.md) at the start of your game. This is only true when testing and debugging the game, as the final executable package will not show this behaviour and will be random every play.

#### Syntax:

array\_shuffle(array, \[offset\], \[length\]);

| Argument | Type | Description |
| --- | --- | --- |
| array | Array | The array to shuffle |
| offset | Real | OPTIONAL The offset, or starting index, in the array to start shuffling. Defaults to 0. Setting a negative value will count from the end of the array. The starting index will then be array_length(array) + offset. See: Offset And Length |
| length | Real | OPTIONAL The number of elements to shuffle. Defaults to (array_length(array) - 1. See: Offset And Length |

#### Returns:

[Array](../../GML_Overview/Arrays.md)

#### Example:

var \_array = \["Everyday", "I", "'m", "shuffling"\];
var \_array\_shuffled = array\_shuffle(\_array);
show\_debug\_message(\_array\_shuffled);

The above code first creates an array \_array with a couple of words in it. It then shuffles the array using array\_shuffle and returns the result as a new array, which is stored in \_array\_shuffled. Finally a debug message shows the contents of the shuffled array.