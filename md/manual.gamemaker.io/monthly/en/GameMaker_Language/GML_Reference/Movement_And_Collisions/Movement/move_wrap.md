---
title: "move_wrap"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Movement/move_wrap.htm"
converted: "2025-09-14T04:00:03.802Z"
---

# move\_wrap

This function will automatically "wrap" an instance that has left the room on either the horizontal or vertical (or both) axis. You can specify a margin outside the edges of the room for this to occur, and when the instance has travelled outside of that margin GameMaker will automatically wrap it back into the room at the other side. Note that the instance must have a speed for wrapping to work, because the direction of wrapping is based on the direction of the motion.

#### Syntax:

move\_wrap(hor, vert, margin);

| Argument | Type | Description |
| --- | --- | --- |
| hor | Boolean | Whether to wrap horizontally (true) or not (false). |
| vert | Boolean | Whether to wrap vertically (true) or not (false). |
| margin | Real | How far outside the room, in pixels, the object must be to initiate wrapping. |

#### Returns:

N/A

#### Example:

move\_wrap(true, false, sprite\_width);

This will make the instance wrap horizontally but not vertically, when it is over its own sprite width outside of the room.