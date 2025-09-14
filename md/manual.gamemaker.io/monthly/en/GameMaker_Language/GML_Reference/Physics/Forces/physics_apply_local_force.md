---
title: "physics_apply_local_force"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Forces/physics_apply_local_force.htm"
converted: "2025-09-14T04:00:05.345Z"
---

# physics\_apply\_local\_force

Another way to use force in the physics world is to apply it _locally_ to an instance. What this means is that the strength and direction of the force are calculated based on the origin (or the position if it has no sprite) of the instance, without taking into consideration the direction or rotation it may have in the game room or physics world. It should be noted that with this function, forces are not applied to the center of mass of the object, but rather at a point relative to the instance and they will not be instantly applied as they are dependent on any other forces that are working on the object (like gravity). This illustration demonstrates how a local force works:

![Apply local physics force illustration](../../../../assets/Images/Scripting_Reference/GML/Reference/Physics/physics_apply_local_force_image.png)As you can see, the xlocal and ylocal coordinates are calculated based on the axis position _always_ being considered as the origin of the instance (0,0), so no matter where in the room the object is, xlocal and ylocal are always going to be the same. You then have to decide where the vector components of the force (xforce and yforce) should be positioned relative to the xlocal/ylocal position. The exact force is defined by the vector we get from the components xforce/yforce in relation to those coordinates - which simply means that the force is calculated as the distance from xlocal/ylocal to xforce/yforce in Newtons, and the direction is the angle that we get from xlocal/ylocal to xforce/yforce. This may seem slightly confusing, but you just have to look at the illustration to see how this works, and it saves you some complicated maths!

**NOTE**: The physics world uses meters for all its calculations, and the ratio of pixels per meter is defined in the room editor or using [physics\_world\_create()](../The_Physics_World/physics_world_create.md).

#### Syntax:

physics\_apply\_local\_force(xlocal, ylocal, xforce, yforce)

| Argument | Type | Description |
| --- | --- | --- |
| xlocal | Real | The x coordinate relative to the origin where the force will be applied |
| ylocal | Real | The y coordinate relative to the origin where the force will be applied |
| xforce | Real | the x component of the force vector |
| yforce | Real | the y component of the force vector |

#### Returns:

N/A

#### Example:

if (keyboard\_check(vk\_right))
{
    physics\_apply\_local\_force(-25, 0, -50, 0);
}

The code above will apply a force to the instance of 50 Newtons from left to right _relative_ to the origin while the right arrow key is pressed.