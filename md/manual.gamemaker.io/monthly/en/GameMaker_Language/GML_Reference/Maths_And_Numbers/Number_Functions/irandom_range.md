---
title: "irandom_range"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/irandom_range.htm"
converted: "2025-09-14T04:00:02.293Z"
---

# irandom\_range

This function is similar to [random\_range()](random_range.md) only with integer values as the input. You supply the low value for the range as well as the high value, and the function will return a random integer value within (and including) the given range. For example, irandom\_range(10, 35) will return an integer between 10 and 35 _inclusive_.

As with the [irandom()](../../../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/irandom.md) function, real numbers can be used, in which case they will be rounded down to the nearest integer EG: irandom\_range(6.2,9.9) will give a value between 6 and 9.

NOTE This function will return the same value every time the game is run afresh due to the fact that GameMaker generates the same initial random seed every time to make debugging code a far easier task. To avoid this behaviour use [randomise](randomise.md) at the start of your game.

#### Syntax:

irandom\_range(n1, n2);

| Argument | Type | Description |
| --- | --- | --- |
| n1 | Real | The low end of the range from which the random number will be selected. |
| n2 | Real | The high end of the range from which the random number will be selected. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

score += irandom\_range(500, 600);

This will add an integer value anywhere between 500 and 600 (inclusive) to the total score.