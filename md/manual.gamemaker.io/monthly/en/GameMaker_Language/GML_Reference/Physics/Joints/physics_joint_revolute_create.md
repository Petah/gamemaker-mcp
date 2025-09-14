---
title: "physics_joint_revolute_create"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Joints/physics_joint_revolute_create.htm"
converted: "2025-09-14T04:00:05.606Z"
---

# physics\_joint\_revolute\_create

A revolute joint forces two bodies to share a common anchor point (often called a hinge point) and the joint has a single degree of freedom - the relative rotation of the two bodies around this point. To specify a revolute you need to provide two instances and a single anchor point in the room, as you can see in the image provided:

![Revolute joint anchor points illustration](../../../../assets/Images/Scripting_Reference/GML/Reference/Physics/revolute_joint_image_1.png)If you look at the image, you can see that the two instances have been created to over-lap and at the point where they are touching, we have defined a revolute joint. Now, this joint can be limited in its freedom of rotation thanks to the "ang\_min\_limit" and "ang\_max\_limit" values. How does this work? Well, let's look at another image:

![Revolute joint angle limits illustration](../../../../assets/Images/Scripting_Reference/GML/Reference/Physics/revolute_joint_image_2.png)As you can see, angles in the physics world are _not_ the same as the standard GameMaker angles where right is 0 degrees and then it goes anti-clockwise so that up is 90, left is 180, and down is 270. No, when dealing with the revolute joint, the 0 degrees axis runs from the joint position to the origin of the second instance defined by the function and the angles are then calculated in a clockwise direction. If you switch on angle limiting, the limits are defined as being relative to this 0 degree axis and the limit range _should include zero_, otherwise the joint will lurch when the room begins. Finally, you can define the joint as having a motor or not. This means that when uninfluenced by a collision the joint will move in a direction, which is defined by the motor speed with a positive number being clockwise and a negative number being anti-clockwise. The "max\_motor\_torque" argument is for limiting the speed of the rotation so that you don't get a perpetually accelerating motor and to limit the influence that a collision may have on the rotation. In this way you can use a joint motor to simulate joint friction by setting joint speed to zero and maximum torque to some small, but significant value. The motor will try to prevent the joint from rotating, but will yield to a significant load.

As with all the joints, if you set the "col" value to true then the two instances can interact and collide with each other but _only_ if they have collision events, however if it is set to false, they will not collide no matter what.

#### Syntax:

physics\_joint\_revolute\_create(inst1, inst2, w\_anchor\_x, w\_anchor\_y, ang\_min\_limt, ang\_max\_limit, ang\_limit, max\_motor\_torque, motor\_speed, motor, col)

| Argument | Type | Description |
| --- | --- | --- |
| inst1 | Object Instance | The first instance to connect with the joint |
| inst2 | Object Instance | The second instance to connect with the joint |
| w_anchor_x | Real | The x coordinate for the joint, within the game world |
| w_anchor_y | Real | The y coordinate for the joint, within the game world |
| ang_min_limit | Real | The lower permitted limit for the joint angle |
| ang_max_limit | Real | The upper permitted limit for the joint angle |
| ang_limit | Boolean | Whether the to limit the angle of the joint (true) or not (false) |
| max_motor_torque | Real | Sets the maximum motor torque used to achieve the desired motor speed (in Newtons per meter) |
| motor_speed | Real | This is the speed at which the motor should rotate |
| motor | Boolean | Whether the motor should be active (true) or not (false) |
| col | Boolean | Whether the two instances can collide (true) or not (false) |

#### Returns:

[Physics Joint ID](Joints.md)

#### Example:

var mainFixture, o\_id;
mainFixture = physics\_fixture\_create();
physics\_fixture\_set\_circle\_shape(mainFixture, sprite\_get\_width(sprite\_index) / 2);
o\_id=instance\_create\_layer(x+25, y, "Instances", obj\_Door);
physics\_fixture\_bind(mainFixture, id);
physics\_fixture\_bind(mainFixture, o\_id);
physics\_joint\_revolute\_create(id, o\_id, x+25, y, -90, 90, 1, 0, 0, 0, 0);
physics\_fixture\_delete(mainFixture);

The above code creates and defines a new fixture and then creates an instance of "obj\_Door", binding the created fixture to the two new objects. They are then joined by a revolute joint with no motor and the angles limited to a +/- 90 degree swing. Finally the fixture is deleted as it is no longer needed.