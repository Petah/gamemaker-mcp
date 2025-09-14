---
title: "position_change"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Collisions/position_change.htm"
converted: "2025-09-14T04:00:03.014Z"
---

# position\_change

This function will check a position for a collision with _any instances_ at the given point, and if there is one, it will change **all** instances in collision to be instances of the chosen object. You can set the "perf" argument to true which will force GameMaker to perform the **Destroy** and **Clean Up** events of the found instance as well as the **Create** event of the new instance, or false to not perform any of these events. Please note, that if you choose not to perform the Destroy, Clean Up and Create events, any instance created that uses a variable normally defined in the create event will crash the game as that variable will no longer exist.

#### Syntax:

position\_change(x, y, obj, perf);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x coordinate of where to change colliding instances. |
| y | Real | The y coordinate of where to change colliding instances. |
| obj | Object Asset | The new object the calling object will change into. |
| perf | Boolean | Whether to perform that new object's Create event (true) or not (false). |

#### Returns:

N/A

#### Example:

position\_change(200, 200, obj\_Bird, true);

This will change all instances colliding at point (200,200) into an instance of "obj\_Bird", performing "obj\_Bird"s Create event for each of them in the process.