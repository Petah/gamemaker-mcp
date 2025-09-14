---
title: "physics_joint_prismatic_create"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Joints/physics_joint_prismatic_create.htm"
converted: "2025-09-14T04:00:05.563Z"
---

# physics\_joint\_prismatic\_create

Like a revolute joint, the prismatic joint only has one degree of freedom, but with this joint it is directional relative to an axis rather than rotational and actually prevents any form of rotation. Here is an image to help you visualise how this works:

![Prismatic joint anchor points illustration](../../../../assets/Images/Scripting_Reference/GML/Reference/Physics/prismatic_joint_image_1.png)We have two instances joined at the anchor point, with an axis for movement defined from the vector the two w\_axis x/y coordinates relative to the (0,0) coordinates of the physics world (so an x component of 0 and a y component of 1 (0,1) would make the joint a vertical prismatic joint). This joint can then _only_ move relative to this axis, like a spring or a piston. If you set the lower or upper trans limit, you are basically limiting the amount of movement along this axis, where the 0 position is the exact spot that you defined with w\_anchor x/y, so a negative value would go to the "left" of that point along the axis and a positive value to the "right" as shown in the following diagram (realise that "left" and "right" are relative terms!):

![Prismatic joint limits illustration](../../../../assets/Images/Scripting_Reference/GML/Reference/Physics/prismatic_joint_image_2.png)You can also define the joint as having a motor or not. This means that when un-influenced by a collision the joint will move in a direction along the axis. this direction is defined by the motor speed, with a positive number being towards the axis coordinates ("right") and a negative number being towards the anchor point ("left"). The "max\_motor\_force" argument is for limiting the speed of the movement so that you don't get a perpetually accelerating motor and to limit the influence that a collision may have on the movement. In this way you can use a joint motor to simulate joint friction by setting the joint speed to zero and maximum force to some small, but significant value. The motor will try to prevent the joint from moving, but will yield to a significant load.

As with all the joints, if you set the "col" value to true then the two instances can interact and collide with each other but _only_ if they have collision events, however if it is set to false, they will not collide no matter what.

#### Syntax:

physics\_joint\_prismatic\_create(inst1, inst2, w\_anchor\_x, w\_anchor\_y, w\_axis\_x, w\_axis\_x, lower\_trans\_limit, upper\_trans\_limit, limit, max\_motor\_force, motor\_speed, motor, col)

| Argument | Type | Description |
| --- | --- | --- |
| inst1 | Object Instance | The first instance to connect with the joint |
| inst2 | Object Instance | The second instance to connect with the joint |
| w_anchor_x | Real | The x coordinate where the joint is anchored, within the game world |
| w_anchor_y | Real | The y coordinate where the joint is anchored, within the game world |
| w_axis_x | Real | The x component of the axis vector |
| w_axis_y | Real | The y component of the axis vector |
| lower_trans_limit | Real | The lower permitted limit for the joint movement |
| upper_trans_limit | Real | The lower permitted limit for the joint movement |
| limit | Boolean | Whether to limit the movement of the joint (true) or not (false) |
| max_motor_force | Real | Sets the maximum movement speed for the motor |
| motor_speed | Real | This is the speed at which the motor should move |
| motor | Boolean | Whether the motor should be active (true) or not (false) |
| col | Boolean | Whether the two instances can collide (true) or not (false) |

#### Returns:

[Physics Joint ID](Joints.md)

#### Example:

var mainFixture, o\_id;
mainFixture = physics\_fixture\_create();
physics\_fixture\_set\_circle\_shape(mainFixture, sprite\_get\_width(sprite\_index) / 2);
o\_id = instance\_create\_layer(x+25, y, "Instances", obj\_Piston);
physics\_fixture\_bind(mainFixture, id);
physics\_fixture\_bind(mainFixture, o\_id);
physics\_joint\_prismatic\_create(id, o\_id, x, y, 0, 10, 0, 0, 0, 5, 0, 1, 1);
physics\_fixture\_delete(mainFixture);

The above code creates and defines a new fixture and then creates an instance of "obj\_Piston", binding the created fixture to the two new objects. They are then joined by a prismatic joint with the anchor position at the same x/y coordinates of the first instance and an axis formed by the vector of the x/y position and the axis x/y (in this case 0,10, which is "down"). There are no limits placed on the amount of movement along this axis, but we have added a motor with 0 speed and a maximum force of 5 to simulate joint friction.