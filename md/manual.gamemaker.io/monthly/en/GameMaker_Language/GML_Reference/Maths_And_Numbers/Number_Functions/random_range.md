---
title: "random_range"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/random_range.htm"
converted: "2025-09-14T04:00:02.524Z"
---

# random\_range

This function returns a random floating-point (decimal) number between the specified lower limit (inclusive) and the specified upper limit (inclusive).

For example, random\_range(20,50) will return a random number from 20.00 to 50.00, but the value may be a real number like 38.65265. Real numbers can also be used as input arguments.

NOTE This function will return the same value every time the game is run afresh due to the fact that GameMaker generates the same initial random seed every time to make debugging code a far easier task. To avoid this behaviour use [randomise](randomise.md) at the start of your game.

#### Syntax:

random\_range(n1, n2);

| Argument | Type | Description |
| --- | --- | --- |
| n1 | Real | The low end of the range from which the random number will be selected. |
| n2 | Real | The high end of the range from which the random number will be selected. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

score += random\_range(500, 600);

This will add anywhere between 500 and 600, to the total score.