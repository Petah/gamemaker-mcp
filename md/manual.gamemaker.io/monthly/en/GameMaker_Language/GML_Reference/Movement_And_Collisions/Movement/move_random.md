---
title: "move_random"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Movement/move_random.htm"
converted: "2025-09-14T04:00:03.756Z"
---

# move\_random

With this function you can set the instance to a position anywhere in the room, but aligned to an "invisible" grid. So a value of 32 for the hsnap and vsnap will set the instance to a random position that is aligned to a grid of 32x32 squares. you can set these values to 1 to get a position anywhere in the room.

NOTE This function will snap to the same positions every time the game is run afresh due to the fact that GameMaker generates the same initial random seed every time to make debugging code a far easier task. To avoid this behaviour use [randomise](../../Maths_And_Numbers/Number_Functions/randomise.md) at the start of your game. This is only true when testing and debugging the game, as the final executable package will not show this behaviour and will be random every play.

#### Syntax:

move\_random(hsnap, vsnap);

| Argument | Type | Description |
| --- | --- | --- |
| hsnap | Real | The horizontal snapping (the size in pixels between 'cells'). |
| vsnap | Real | The vertical snapping (the size in pixels between 'cells'). |

#### Returns:

N/A

#### Example:

if (keyboard\_check(vk\_space))
{
    move\_random(1, 1);
}

This will move the instance to a random position anywhere in the room when the space key is pressed.