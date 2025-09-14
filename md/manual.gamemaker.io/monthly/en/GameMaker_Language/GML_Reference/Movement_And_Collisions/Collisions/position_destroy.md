---
title: "position_destroy"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Collisions/position_destroy.htm"
converted: "2025-09-14T04:00:03.027Z"
---

# position\_destroy

This function simply destroys all instances that are found to be in collision with the specified position. Collisions are based on the mask of the instances, and if any part of the mask over-laps with the target point it then the function will destroy that instance. Instances destroyed in this way will trigger their **Destroy** and **Clean Up** events.

#### Syntax:

position\_destroy(x, y);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x coordinate of where to destroy colliding instances. |
| y | Real | The y coordinate of where to destroy colliding instances. |

#### Returns:

N/A

#### Example:

if (mouse\_check\_button\_pressed(mb\_left))
{
    position\_destroy(mouse\_x, mouse\_y);
}

This will destroy all instances that collide with the position of the mouse cursor when the left mouse button is pressed.