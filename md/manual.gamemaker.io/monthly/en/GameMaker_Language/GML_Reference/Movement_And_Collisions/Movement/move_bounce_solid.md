---
title: "move_bounce_solid"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Movement/move_bounce_solid.htm"
converted: "2025-09-14T04:00:03.673Z"
---

# move\_bounce\_solid

With this function you can command an instance to bounce off only those instances marked as **solid** within the room. You can also tell it to use precise collision checking when enabled, but be aware that this requires all instances to have precise masks enabled and will greatly slow down your game when many instances are involved due to the amount of processing that has to be done. This should normally go in the step event of an instance, but can be used selectively in a collision event too.

#### Syntax:

move\_bounce\_solid(adv);

| Argument | Type | Description |
| --- | --- | --- |
| adv | Boolean | Whether to enable advanced bouncing (true) or not (false). |

#### Returns:

N/A

#### Example:

move\_bounce\_solid(false);

This will enable non-precise bouncing off instances flagged as "solid".