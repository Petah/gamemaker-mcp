---
title: "physics_joint_pulley_create"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Joints/physics_joint_pulley_create.htm"
converted: "2025-09-14T04:00:05.583Z"
---

# physics\_joint\_pulley\_create

The pulley joint is used to connect two instances within the physics world in such a way that moving one will directly influence the movement of the other. These joints are first anchored in the world space at two points, each one connected to an instance at its center of mass. This can be changed by setting the local anchor x/y coordinates relative to the origin of the instance, meaning that the actual connection from the instance to the physics world anchor point can be offset somewhere other than its origin. The following image illustrates this:

![Pulley joint illustration](../../../../assets/Images/Scripting_Reference/GML/Reference/Physics/pulley_joint_image.png)If you look at inst2 you can see that its local anchor point has been offset 20 pixels to the "left" of its origin (Remember! The world anchor points are defined using the room coordinates, while the local anchor points are defined relative to the origin of the instance). You can also specify a ratio for the pulley joint, which tells one side or the other to move faster, with a value below 1 making the first instance move faster (E.G. 0.5 will make it move twice as fast) and a value above 1 making the second instance move faster (E.G. 2 will make it move twice as fast).

As with all the joints, if you set the "col" value to true then the two instances can interact and collide with each other but _only_ if they have collision events, however if it is set to false, they will not collide no matter what.

#### Syntax:

physics\_joint\_pulley\_create(inst1, inst2, w\_anchor1\_x, w\_anchor1\_y, w\_anchor2\_x, w\_anchor2\_y, l\_anchor1\_x, l\_anchor1\_y, l\_anchor2\_x, l\_anchor2\_y, ratio, col)

| Argument | Type | Description |
| --- | --- | --- |
| inst1 | Object Instance | The first instance to connect with the joint |
| inst2 | Object Instance | The second instance to connect with the joint |
| w_anchor1_x | Real | The x coordinate where the first part of joint is anchored, within the game world |
| w_anchor1_y | Real | The y coordinate where the first part of the joint is anchored, within the game world |
| w_anchor2_x | Real | The x coordinate where the second part of the joint is anchored, within the game world |
| w_anchor2_y | Real | The y coordinate where the second part of the joint is anchored, within the game world |
| l_anchor1_x | Real | The local x coordinate where joint 1 is anchored to the first instance |
| l_anchor1_y | Real | The local y coordinate where joint 1 is anchored to the first instance |
| l_anchor2_x | Real | The local x coordinate where joint 2 is anchored to the second instance |
| l_anchor2_y | Real | The local y coordinate where joint 2 is anchored to the second instance |
| ratio | Real | Set the velocity ratio between two instances |
| col | Boolean | Whether the two instances can collide (true) or not (false) |

#### Returns:

[Physics Joint ID](Joints.md)

#### Example:

var t\_fix, inst1, inst2;
t\_fix = physics\_fixture\_create();
physics\_fixture\_set\_circle\_shape(t\_fix, 20);
inst1 = instance\_create\_layer(150, room\_height - 90, "Instances", obj\_Block);
inst2 = instance\_create\_layer(300, room\_height - 90, "Instances", obj\_block);
physics\_fixture\_bind(t\_fix, inst1);
physics\_fixture\_bind(t\_fix, inst2);
physics\_joint\_pulley\_create(inst1, inst2, 150, room\_height - 140, 300, room\_height - 140, 0, 0, 0, 0, 2, 0);
physics\_fixture\_delete(t\_fix);

The above code creates and defines a new fixture, creates two instances of "obj\_Block", and then binds this fixture two them. It then goes on to define a pulley joint between these instance, with no offset for the joints, a ratio of 2:1 (meaning that inst2 will move faster). No collisions occur between the two instances in the pulley.