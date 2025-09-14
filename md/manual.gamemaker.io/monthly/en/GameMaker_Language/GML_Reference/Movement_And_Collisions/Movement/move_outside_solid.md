---
title: "move_outside_solid"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Movement/move_outside_solid.htm"
converted: "2025-09-14T04:00:03.742Z"
---

# move\_outside\_solid

With this function you can tell an instance to move out of a collision with any instance flagged as [**solid**](../../Asset_Management/Instances/Instance_Variables/solid.md) in any direction and any number of pixels each step, with a value of -1 or 0 for the maxdist being a default 1000px, ie: GameMaker will move the instance continually up 1000 pixels until it is out of collision.

#### Syntax:

move\_outside\_solid(dir, maxdist);

| Argument | Type | Description |
| --- | --- | --- |
| dir | Real | The direction to move in. |
| maxdist | Real | The maximum distance the object can travel (-1 or 0 a default value of 1000 pixels). |

#### Returns:

N/A

#### Example:

if (other.solid)
{
    var pdir;
    pdir = point\_direction(other.x, other.y, x, y);
    move\_outside\_solid(pdir, -1);
}

The above code would go in a collision event and checks to see if the "other" instance in the collision is flagged as "solid". If it is, it will then move the instance out of collision.