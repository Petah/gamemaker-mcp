---
title: "random"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/random.htm"
converted: "2025-09-14T04:00:02.498Z"
---

# random

This function returns a random floating-point (decimal) number between 0.0 (inclusive) and the specified upper limit (inclusive).

For example, random(100) will return a value from 0 to 100.00, but that value can be 22.56473! You can also use real numbers and not integers in this function like this - random(0.5), which will return a value between 0 and 0.500.

NOTE This function will return the same value every time the game is run afresh due to the fact that GameMaker generates the same initial random seed every time to make debugging code a far easier task. To avoid this behaviour use [randomise](randomise.md) at the start of your game.

#### Syntax:

random(n);

| Argument | Type | Description |
| --- | --- | --- |
| n | Real | The upper range from which the random number will be selected. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

if (random(10) >= 9)
{
    score += 100;
}

This will produce approximately a one in ten chance of adding 100 to the score.