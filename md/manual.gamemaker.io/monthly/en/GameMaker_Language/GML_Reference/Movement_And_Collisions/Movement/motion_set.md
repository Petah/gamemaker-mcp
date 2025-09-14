---
title: "motion_set"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Movement/motion_set.htm"
converted: "2025-09-14T04:00:03.601Z"
---

# motion\_set

This function sets a new direction of movement and a new speed to the instance running the code. Note that this _does not_ add to the instances current speed and direction (for that you would use [motion\_add()](motion_add.md)) but rather forces it to the new settings.

#### Syntax:

motion\_set(dir, speed);

| Argument | Type | Description |
| --- | --- | --- |
| dir | Real | The new direction. |
| speed | Real | The new speed.` |

#### Returns:

N/A

#### Example:

if (irandom(9) = 1)
{
    motion\_set(random(360), 1 + random(3));
}

This above code will make the instance change speed and direction at random intervals.