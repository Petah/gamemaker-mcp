---
title: "physics_world_gravity"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/The_Physics_World/physics_world_gravity.htm"
converted: "2025-09-14T04:00:07.032Z"
---

# physics\_world\_gravity

As with all the physics functions, physics\_world\_gravity will only work on an instance if the room has a physics world defined for it in [The Room Editor](../../../../The_Asset_Editors/Rooms.md) or using [physics\_world\_create](physics_world_create.md). It will then use the 0,0 defining point of the physics world to calculate the direction and strength of gravity based on the vector calculated from the xg and yg inputs. Here are some images to illustrate...

![Physics world gravity illustration](../../../../assets/Images/Scripting_Reference/GML/Reference/Physics/physics_gravity_image.png)As you can see, the xg,yg coordinates are relative to the position of 0,0 as defined for the physics world, and the gravity itself is calculated as a vector of those two components. So, the default values of 0,10 will give you a gravity direction of down (270 degrees) with an acceleration of 10 metres per second squared. Note the _metres per second squared_! Like all the physics functions, gravity is calculated using metres as a base measurement so the pixel to metre scale that you set in [physics\_world\_create](physics_world_create.md) function is important here. Gravity is also _cumulative_ on the object (but the exact amount depends on what you have set for the function [physics\_fixture\_set\_linear\_damping](../Fixtures/physics_fixture_set_linear_damping.md)), meaning that in a game with a [game speed](../../General_Game_Control/game_set_speed.md) set to 60 FPS, with no damping, the instance will accelerate by 10 metres per second, every second - which, if you have a 0.1 pixel to metre scale is the same as saying it will accelerate to a speed of 100 pixels per second in 60 steps.

#### Syntax:

physics\_world\_gravity(xg, yg)

| Argument | Type | Description |
| --- | --- | --- |
| xg | Real | The x component of the gravity vector |
| yg | Real | The y component of the gravity vector |

#### Returns:

N/A

#### Example:

physics\_world\_gravity(-5, 0);

The above code will set gravity to be (assuming the room physics 0,0 is set to top left) to the right - 0 degrees - with an acceleration of 5 metres per second squared.