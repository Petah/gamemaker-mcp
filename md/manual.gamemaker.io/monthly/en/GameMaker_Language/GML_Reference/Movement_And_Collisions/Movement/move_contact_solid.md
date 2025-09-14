---
title: "move_contact_solid"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Movement/move_contact_solid.htm"
converted: "2025-09-14T04:00:03.711Z"
---

# move\_contact\_solid

This function will move the instance running the code a set number of pixels in the specified direction until it meets an instance with [**solid**](../../Asset_Management/Instances/Instance_Variables/solid.md) flagged as true. You can use -1 or 0 for the maxdist being a default 1000px, ie: GameMaker will move the instance continually up 1000 pixels until it is out of collision.

#### Syntax:

move\_contact\_solid( dir, maxdist );

| Argument | Type | Description |
| --- | --- | --- |
| dir | Real | The direction to move in. |
| maxdist | Real | The maximum distance the object can travel (-1 or 0 a default value of 1000 pixels). |

#### Returns:

N/A

#### Example:

if (!place\_meeting(x, y + 1, obj\_Floor))
{
    move\_contact\_solid(270, -1);
}

The above code will check beneath the instance for a collision with "obj\_Floor", and if there is none, then it will move it down until there is a collision, or 1000 pixels have been covered.