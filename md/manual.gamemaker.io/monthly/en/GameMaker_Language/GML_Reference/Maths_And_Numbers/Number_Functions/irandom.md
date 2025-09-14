---
title: "irandom"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/irandom.htm"
converted: "2025-09-14T04:00:02.276Z"
---

# irandom

This function returns a random value as an integer (whole number). So, for example, to get a random number from 0 to 9 you can use irandom(9) and it will return a number from 0 to 9 _inclusive_.

Floats can also be used but the upper value after the point will be excluded, so irandom(9.7) will return a value from 0 to 9 only. The function has an upper bound of $7fffffffffffffffLL, so care should be taken if using very large numbers.

NOTE This function will return the same value every time the game is run afresh due to the fact that GameMaker generates the same initial random seed every time to make debugging code a far easier task. To avoid this behaviour use [randomise](randomise.md) at the start of your game.

#### Syntax:

irandom(n);

| Argument | Type | Description |
| --- | --- | --- |
| n | Real | The upper range from which the random number will be selected. |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

if (irandom(9) == 1)
{
    score += 100;
}

This will produce a one in ten (since 0 is included) chance of adding 100 to the score.