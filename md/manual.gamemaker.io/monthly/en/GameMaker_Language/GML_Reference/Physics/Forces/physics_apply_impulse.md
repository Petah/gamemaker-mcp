---
title: "physics_apply_impulse"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Forces/physics_apply_impulse.htm"
converted: "2025-09-14T04:00:05.329Z"
---

# physics\_apply\_impulse

Not only can you apply force and gravity to an object with the physics in GameMaker but you can also apply an impulse. This is slightly different to a force in that when it is applied it will _immediately_ affect the speed, and, potentially the torque (or "spin") of the object, particularly if the point chosen to apply the impulse is not aligned with the center of mass (note: the center of mass is _not necessarily_ the same as the origin!). Here is an illustration:

![Apply physics impulse illustration](../../../../assets/Images/Scripting_Reference/GML/Reference/Physics/physics_apply_impulse_image.png)As you can see, the player has clicked on the ball and this has given it an impulse to move to the upper right, spinning as it goes. The exact impulse is defined by the vector we get from the components ximpulse/yimpulse in relation to the xpos/ypos coordinates - which simply means that the impulse is calculated as the distance from xpos/ypos to ximpulse/yimpulse in Newtons, and the direction is the angle that we get from xpos/ypos to ximpulse/yimpulse.

**NOTE**: The physics world uses meters for all its calculations, and the ratio of pixels per meter is defined in the room editor or using [physics\_world\_create()](../The_Physics_World/physics_world_create.md).

#### Syntax:

physics\_apply\_impulse(xpos, ypos, ximpulse, yimpulse)

| Argument | Type | Description |
| --- | --- | --- |
| xpos | Real | The x coordinate in the room where the impulse will be applied |
| ypos | Real | The y coordinate in the room where the impulse will be applied |
| ximpulse | Real | the x component of the impulse vector |
| yimpulse | Real | the y component of the impulse vector |

#### Returns:

N/A

#### Example:

if (mouse\_check\_button\_pressed(mb\_left))
{
    with (place\_meeting(mouse\_x, mouse\_y, all))
    {
        physics\_apply\_impulse(mouse\_x, mouse\_y, -10 + irandom(20), -10 + irandom(20));
    }
}

The code above will apply an impulse with a random vector to an instance that is at the mouse position when the left button is pressed.