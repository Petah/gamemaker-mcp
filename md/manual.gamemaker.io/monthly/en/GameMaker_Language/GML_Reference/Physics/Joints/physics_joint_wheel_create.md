---
title: "physics_joint_wheel_create"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Joints/physics_joint_wheel_create.htm"
converted: "2025-09-14T04:00:05.680Z"
---

# physics\_joint\_wheel\_create

A wheel joint simply combines a piston and a revolute joint, like a wheel mounted on the shock absorber of a car. You specify the anchor point for the joint well as the two physics enabled instances to joint, and the first instance will act as the "body" for the joint, while the second will be the "wheel", and be permitted to move freely around the joint axis. You can also set an axis vector, which is the imaginary line along which the joint will act as a "spring" permitting the wheel to bounce up and down along it as it encounters obstacles (much like the piston joint). The following image illustrates this:

![Wheel joint illustration](../../../../assets/Images/Scripting_Reference/GML/Reference/Physics/wheel_joint_image.png)If you choose to enable a motor, then the second instance will rotate around the anchor position, and you can set the maximum motor torque used to achieve the desired motor speed (N/m) as well as the speed at which the motor should turn. Since the wheel joint also has an axis along which it may move, you can set the oscillation frequency (in Hz) as well as the damping ratio for the joint - you may need to play with these values to fine tune them and it is recommended that you start off with smaller values and increment them until you get the effect that you desire.

As with all the joints, if you set the "col" value to true then the two instances can interact and collide with each other but _only_ if they have collision events, however if it is set to false, they will not collide no matter what.

#### Syntax:

physics\_joint\_wheel\_create(inst1, inst2, anchor\_x, anchor\_y, axis\_x, axis\_y, enableMotor, max\_motor\_torque, motor\_speed, freq\_hz, damping\_ratio, col)

| Argument | Type | Description |
| --- | --- | --- |
| inst1 | Object Instance | The first instance to connect with the joint |
| inst2 | Object Instance | The second instance to connect with the joint |
| anchor_x | Real | The x coordinate where the joint is anchored, within the game world |
| anchor_y | Real | The y coordinate where the joint is anchored, within the game world |
| axis_x | Real | The x component of the wheel axis vector |
| axis_y | Real | The y component of the wheel axis vector |
| enableMotor | Boolean | Whether the motor should be active (true) or not (false) |
| max_motor_torque | Real | Sets the maximum motor torque used to achieve the desired motor speed (in Newtons per meter) |
| motor_speed | Real | This is the speed at which the motor should rotate |
| freq_hz | Real | This is the oscillation frequency for the joint, in hertz |
| damping_ratio | Real | This damping ratio for the joint |
| col | Colour | Whether the two instances can collide (true) or not (false) |

#### Returns:

[Physics Joint ID](Joints.md)

#### Example:

var mainFixture = physics\_fixture\_create();
physics\_fixture\_set\_box\_shape(mainFixture, 128, 32);
var wheelFixture = physics\_fixture\_create();
physics\_fixture\_set\_circle\_shape(wheelFixture, 32);
var o\_id = instance\_create\_layer(x+25, y + 100, "Instances", obj\_Wheel);
physics\_fixture\_bind(mainFixture, id);
physics\_fixture\_bind(wheelFixture, o\_id);
physics\_joint\_wheel\_create(id, o\_id, o\_id.x, o\_id.y, 0, 1, true, 10, 1, 15, 6, false);
physics\_fixture\_delete(mainFixture);
physics\_fixture\_delete(wheelFixture);

The above code creates and defines two new fixtures. These are then bound to the calling instance and a new instance that is created before having a wheel joint applied to connect them, after which the fixtures are deleted from memory.