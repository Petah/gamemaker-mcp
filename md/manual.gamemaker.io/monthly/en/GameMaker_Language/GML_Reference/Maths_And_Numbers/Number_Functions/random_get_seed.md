---
title: "random_get_seed"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/random_get_seed.htm"
converted: "2025-09-14T04:00:02.509Z"
---

# random\_get\_seed

To generate a random number GameMaker starts with a random _seed_ number. With this function you can retrieve that seed, which can then be stored to reproduce a specific series of random events. For example, say you have a procedurally generated game, but want the player to be able to go back to previously discovered areas. Well, at the start of each area, you can store the random seed with this function and so every time you need to go back there, you can use [random\_set\_seed()](random_set_seed.md) to set the seed to what it was previously and so force GameMaker to reproduce the same set of "random" functions that it used previously.

#### Syntax:

random\_get\_seed();

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

ini\_open("Save.ini")
ini\_write\_real("Levels", string(level), random\_get\_seed());
ini\_close();

The above code will get the random seed and store it in an ini file.