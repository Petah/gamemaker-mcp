---
title: "physics_apply_local_impulse"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Forces/physics_apply_local_impulse.htm"
converted: "2025-09-14T04:00:05.369Z"
---

# physics\_apply\_local\_impulse

Not only can you apply force and gravity to an object with the physics in GameMaker but you can also apply an impulse. This is slightly different to a force in that when it is applied it will _immediately_ affect the speed, and, potentially the torque (or "spin") of the object, particularly if the point chosen to apply the impulse has a vector that is not aligned with the centre of mass (note: the center of mass is _not necessarily_ the same as the origin!). This function applies an impulse _locally_ to an instance. What this means is that the strength and direction of the impulse are calculated based on the origin (or the position if it has no sprite) of the instance, without taking into consideration the direction or rotation it may have in the game room or physics world. Here is an illustration:

![Apply local physics impulse illustration](../../../../assets/Images/Scripting_Reference/GML/Reference/Physics/physics_apply_local_impulse_image.png)As you can see, the frog in the image gets an impulse from below to make it "jump". The exact impulse is defined by the vector we get from the components ximpulse/yimpulse in relation to the xpos/ypos coordinates - which simply means that the impulse is calculated as the distance from xpos/ypos to ximpulse/yimpulse in Newtons, and the direction is the angle that we get from xpos/ypos to ximpulse/yimpulse.

**NOTE**: The physics world uses meters for all its calculations, and the ratio of pixels per meter is defined in the room editor or using [physics\_world\_create()](../The_Physics_World/physics_world_create.md).

#### Syntax:

physics\_apply\_local\_impulse(xpos, ypos, ximpulse, yimpulse)

| Argument | Type | Description |
| --- | --- | --- |
| xpos | Real | The x coordinate relative to the origin where the impulse will be applied |
| ypos | Real | The y coordinate relative to the origin where the impulse will be applied |
| ximpulse | Real | the x component of the impulse vector (relative to the xpos coordinate) |
| yimpulse | Real | the y component of the impulse vector (relative to the ypos coordinate) |

#### Returns:

N/A

#### Example:

if (jump)
{
    physics\_apply\_local\_impulse(0, 20, 0, 50);
}

The code above will apply an impulse with force of 30 Newtons and a direction going from bottom to top _relative_ to the instance origin if the variable "jump" is true.