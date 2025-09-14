---
title: "random_set_seed"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/random_set_seed.htm"
converted: "2025-09-14T04:00:02.542Z"
---

# random\_set\_seed

To generate a random number GameMaker starts with a random seed number. With this function you can set that seed to a known value and so "force" the outcome of all random events afterwards to be the same every time the program is run. For example, this function can be used in conjunction with [random\_get\_seed()](random_get_seed.md) to create procedurally generated content and save the results without having huge savegames (you save the seed only, no need for anything else). Should you need truly random results for everything, you should be using the [randomise()](randomise.md) function.

NOTE While this seed will give consistent results on each target platform, results may vary between platforms due to the different way each target works.

#### Syntax:

random\_set\_seed(val);

| Argument | Type | Description |
| --- | --- | --- |
| val | Real | The seed to set. |

#### Returns:

N/A

#### Example:

if (debug)
{
    random\_set\_seed(1);
}

The above code sets the random seed to 1 only if the variable "debug" is true.