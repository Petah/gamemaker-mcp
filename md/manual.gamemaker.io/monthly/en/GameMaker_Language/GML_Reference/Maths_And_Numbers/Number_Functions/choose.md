---
title: "choose"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/choose.htm"
converted: "2025-09-14T04:00:02.204Z"
---

# choose

Sometimes you want to specify something other than numbers for a random selection, or the numbers you want are not in any real order or within any set range. In these cases you would use choose() to generate a random result. For example, say you want to create an object with a random sprite at the start, then you could use this function to set the sprite index to one of a set of given sprites. Note that you can have as many as you require (note that more arguments will mean that the function will be slower to parse).

NOTE This function will return the same value every time the game is run afresh due to the fact that GameMaker generates the same initial random seed every time to make debugging code a far easier task. To avoid this behaviour use [randomise](randomise.md) at the start of your game.

#### Syntax:

choose(val0, val1, val2... max\_val);

| Argument | Type | Description |
| --- | --- | --- |
| val0... max_val | Any | Any type of value(s). |

#### Returns:

[Any](../../../GML_Overview/Data_Types.htm#variable) (One of the given arguments)

#### Example:

sprite\_index = choose(spr\_Cactus, spr\_Flower, spr\_Tree, spr\_Shrub);
hp = choose(5, 8, 15, 32, 40);
name = choose("John", "Steven", "Graham", "Jack", "Emily", "Tina", "Jill", "Helen");

The above code uses choose to set a number of properties for the instance.