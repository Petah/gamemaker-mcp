---
title: "randomise"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/randomise.htm"
converted: "2025-09-14T04:00:02.552Z"
---

# randomise

This function sets the seed to a random value. Should you need to keep a consistent value over a number of runs of a game, you should be using [random\_set\_seed()](random_set_seed.md). Please note, that when using the random number functions in GameMaker the initial seed is always the same, as this makes tracing errors and debugging far easier. Should you wish to test with true random, you should call this function at the start of your game. The function will return the new randomised seed value (an unsigned 32bit integer).

#### Syntax:

randomise();
// or
randomize();

#### Returns:

[Real](../../../GML_Overview/Data_Types.md) (unsigned 32 bit value)

#### Example:

randomise();

The above code will randomise the seed.