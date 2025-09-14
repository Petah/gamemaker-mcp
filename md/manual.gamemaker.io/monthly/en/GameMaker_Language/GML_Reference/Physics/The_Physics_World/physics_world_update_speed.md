---
title: "physics_world_update_speed"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/The_Physics_World/physics_world_update_speed.htm"
converted: "2025-09-14T04:00:07.065Z"
---

# physics\_world\_update\_speed

GameMaker updates things based on the [game speed](../../../../../../../GameMaker_Language/GML_Reference/General_Game_Control/game_get_speed.md), so that if you [set](../../General_Game_Control/game_set_speed.md) it to ,say, 30, GameMaker will run 30 steps in the course of a second. However, for the physics functions that may not be enough and you may want things to be updated at a slightly faster speed to increase stability or precision. To that end we use the function physics\_world\_update\_speed which sets the update speed for the physics system _independently_ of the game speed. This means that you could have a game speed of 30, but set the physics to 60, effectively doubling the speed at which the physics system updates and performs its calculations compared to the speed at which the step are updated.

NOTE you cannot currently set this to any less than room speed, but future updates may change this.

#### Syntax:

physics\_world\_update\_speed(speed)

| Argument | Type | Description |
| --- | --- | --- |
| speed | Real | The number of times per second that the physics system updates |

#### Returns:

N/A

#### Example:

physics\_world\_update\_speed(game\_get\_speed(gamespeed\_fps) \* 2);

The code above sets the physics system update speed to be twice that of the game speed.