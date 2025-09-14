---
title: "move_bounce_all"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Movement/move_bounce_all.htm"
converted: "2025-09-14T04:00:03.647Z"
---

# move\_bounce\_all

With this function you can command an instance to bounce off **all** instances within the room, with the only exception being those that have no sprite or mask index assigned to them. You can also tell it to use precise collision checking when enabled, but be aware that this requires all instances to have precise masks enabled and will greatly slow down your game when many instances are involved due to the amount of processing that has to be done. This should normally go in the step event of an instance, but can be used selectively in a collision event too, as illustrated by the code example below.

#### Syntax:

move\_bounce\_all( adv );

| Argument | Type | Description |
| --- | --- | --- |
| adv | Boolean | Whether to enable advanced bouncing (true) or not (false). |

#### Returns:

N/A

#### Example:

if (other.visible)
{
    move\_bounce\_all(false);
}

The above code would be placed in a collision event with another object. It first checks to see if the object is visible and if it is it then performs the move\_bounce\_all() action. Note that in this case the bounce is selective and will only be calculated for this collision, rather than for every instance, every step.