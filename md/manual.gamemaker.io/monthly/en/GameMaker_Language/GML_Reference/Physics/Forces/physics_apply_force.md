---
title: "physics_apply_force"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Forces/physics_apply_force.htm"
converted: "2025-09-14T04:00:05.308Z"
---

# physics\_apply\_force

When working with physics you need to apply not only gravity to objects, but forces as well. A force is any influence that causes an object to undergo a change in speed, a change in direction, or a change in shape, and is defined in the GameMaker physics world the same as we define gravity, by getting the vector from the two xforce/yforce components. It should be noted that forces are not applied to the center of mass of the object, but rather at a point in the room and they will change the direction and speed as well as the torque (spin) dependant on any other forces that are working on the object (like gravity). Here is an example image to help illustrate:

![Apply physics force illustration](../../../../assets/Images/Scripting_Reference/GML/Reference/Physics/physics_apply_force_image.png)In the above example the spring object at the bottom has created a force on the ball object getting it to move in a different direction. The exact force is defined by the vector we get from the components xforce/yforce in relation to the xpos/ypos coordinates - which simply means that the force is calculated as the distance from xpos/ypos to xforce/yforce in Newtons (a Newton being defined as the amount of net force required to accelerate a mass of one kilogram at a rate of one meter per second squared)and the direction is the angle that we get from xpos/ypos to xforce/yforce. The code for a collision like the above would go in the collision event of the spring object and would look something like that provided in the example below.

**NOTE**: The physics world uses meters for all its calculations, and the ratio of pixels per meter is defined in the room editor or using [physics\_world\_create()](../The_Physics_World/physics_world_create.md).

#### Syntax:

physics\_apply\_force(xpos, ypos, xforce, yforce)

| Argument | Type | Description |
| --- | --- | --- |
| xpos | Real | The x coordinate in the room where the force will be applied |
| ypos | Real | The y coordinate in the room where the force will be applied |
| xforce | Real | The x component of the force vector |
| yforce | Real | The y component of the force vector |

#### Returns:

N/A

#### Example:

with (other)
{
    physics\_apply\_force(x, y, 0, -30);
}

The code above will apply code to the _other_ object in the collision with a force of 30 Newtons and a direction.