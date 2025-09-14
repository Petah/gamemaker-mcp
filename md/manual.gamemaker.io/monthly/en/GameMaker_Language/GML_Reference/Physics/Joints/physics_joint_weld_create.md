---
title: "physics_joint_weld_create"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Joints/physics_joint_weld_create.htm"
converted: "2025-09-14T04:00:05.659Z"
---

# physics\_joint\_weld\_create

The weld joint is designed to attach two fixtures together in a strong, yet flexible bond. The weld joint will permit flexing between the two joined fixtures but without the stretching associated with, for example, a distance joint, and will always try to "spring" back to the reference angle when put under any stress or load. You define the point in the room where the joint should be created, as well as the angle that you wish the joint to try and maintain at all times, as shown in the image below:

![Weld joint illustration](../../../../assets/Images/Scripting_Reference/GML/Reference/Physics/weld_joint_image.png)As you can see, the anchor points are specified as room coordinates so care must be taken when defining them, especially if the instances are being created at the same time as the joints rather than being placed in the room through the room editor. You should also realise that the joints are created independently of the size of the sprite of the instances or the fixtures they have attached. So, if you create a weld joint somewhere other than the origin of the instance, it is still valid and will constrain the two instances relative to the position at which it was created.

Since the weld joint is flexible and will bend and flex when under any stress, you can set the oscillation frequency (in Hz) as well as the damping ratio for the joint to get different effects - you may need to play with these values to fine tune them and it is recommended that you start off with smaller values and increment them until you get the effect that you desire.

If you set the "col" value to true then the two instances can interact and collide with each other but _only_ if they have collision events, however if it is set to false, they will not collide no matter what.

#### Syntax:

physics\_joint\_weld\_create(inst1, inst2, anchor\_x, anchor\_y, ref\_angle, freq\_hz, damping\_ratio, col)

| Argument | Type | Description |
| --- | --- | --- |
| inst1 | Object Instance | The first instance to connect with the joint |
| inst2 | Object Instance | The second instance to connect with the joint |
| anchor_x | Real | The x coordinate for the joint, within the game world |
| anchor_y | Real | The y coordinate for the joint, within the game world |
| ref_angle | Real | The joint angle to maintain |
| freq_hz | Real | This is the oscillation frequency for the joint, in hertz |
| damping_ratio | Real | This damping ratio for the joint |
| col | Boolean | Whether the two instances can collide (true) or not (false) |

#### Returns:

[Physics Joint ID](Joints.md)

#### Example:

var i, fix, o\_id, p\_id;
p\_id = noone;
o\_id = noone;
fix = physics\_fixture\_create();
physics\_fixture\_set\_box\_shape(fix, 64, 32);
for (i = 0; i < 5; i++;)
{
    o\_id = instance\_create\_layer(x + (128 \* i), y, "Instances", obj\_BridgePart);
    physics\_fixture\_bind(fix, o\_id);
    if (i > 0 && i < 4)
    {
        physics\_joint\_weld\_create(p\_id, o\_id, x + (128 \* i) - 64, y, 0, 10, 12, true);
    }
    p\_id = o\_id;
}
physics-fixture\_delete(fix);

The above code will create a fixture, then use a loop to create a number of instances, binding the fixture to each new instance and then joining them all together using a weld joint. Finally the fixture is deleted from memory.