---
title: "move_outside_all"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Movement/move_outside_all.htm"
converted: "2025-09-14T04:00:03.723Z"
---

# move\_outside\_all

With this function you can tell an instance to move out of a collision in any direction and any number of pixels each step, with a value of -1 or 0 for the maxdist being a default 1000px, ie: GameMaker will move the instance continually up 1000 pixels until it is out of collision.

#### Syntax:

move\_outside\_all(dir, maxdist);

| Argument | Type | Description |
| --- | --- | --- |
| dir | Real | The direction to move in. |
| maxdist | Real | The maximum distance the object can travel (-1 or 0 a default value of 1000 pixels). |

#### Returns:

N/A

#### Example:

if (place\_meeting(x, y, all))
{
    move\_outside\_all(90, 1);
}

The above code will move the instance up 1 pixel each step that it is in collision with any other instance.