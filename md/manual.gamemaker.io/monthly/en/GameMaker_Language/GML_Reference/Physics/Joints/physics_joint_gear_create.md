---
title: "physics_joint_gear_create"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Joints/physics_joint_gear_create.htm"
converted: "2025-09-14T04:00:05.523Z"
---

# physics\_joint\_gear\_create

If you want to create a sophisticated mechanical contraption you might want to use gears. In principle you can create gears in GameMaker by using compounding instances to model gear teeth, but this is not very efficient and might be tedious to author! Thankfully there is a simpler method, and that is to use a _gear joint_. To make one you need to have previously defined your fixtures and created the two basic joints that are going to comprise your gear - these **must** be made up of one [revolute joint](physics_joint_revolute_create.md) and either a [prismatic joint](physics_joint_prismatic_create.md) or another _revolute joint_. The image below shows how a gear would typically be created in a game:

![Gear joint illustration](../../../../assets/Images/Scripting_Reference/GML/Reference/Physics/gear_joint_image.png)So what happens? Well, once the two joints are added into the gear, interaction with one will have an effect on the other, so in the example image above, if you rotate inst2, inst3 will move up and down, or if you move inst3 up and down then inst2 will rotate. You can also change the gear ratio, meaning that you need to move one instance more (or less) to get the desired effect. The code in the example at the bottom shows how something like the image above can be created.

NOTE If you need to delete either of the two instances that are involved in the gear joint (or just delete their joints) then you **must** delete the gear joint first using [physics\_joint\_delete()](physics_joint_delete.md) or else you will get an error!

#### Syntax:

physics\_joint\_gear\_create(inst1, inst2, joint\_1, joint\_2, ratio)

| Argument | Type | Description |
| --- | --- | --- |
| inst1 | Object Instance | The first instance to connect with the joint |
| inst2 | Object Instance | The second instance to connect with the joint |
| joint_1 | Real | A previously defined revolute joint |
| joint_2 | Real | A previously defined revolute or prismatic joint |
| ratio | Real | Set the velocity ratio between the two joints |

#### Returns:

[Physics Joint ID](Joints.md)

#### Example:

var t\_fix, g\_fix, inst1, inst2, inst3, r\_joint, p\_joint;
g\_fix = physics\_fixture\_create();
physics\_fixture\_set\_box\_shape(g\_fix, 40, 10);
t\_fix = physics\_fixture\_create();
physics\_fixture\_set\_circle\_shape(t\_fix, 10);
physics\_fixture\_set\_density(t\_fix, 0.5);
inst1 = instance\_create\_layer(60, room\_height - 30, "Background", obj\_Ground);
inst2 = instance\_create\_layer(40, room\_height - 300, "Instances", obj\_Cog);
inst3 = instance\_create\_layer(150, room\_height - 300, "Instances", obj\_Barrel);
physics\_fixture\_bind(g\_fix, inst1);
physics\_fixture\_bind(t\_fix, inst2);
physics\_fixture\_bind(t\_fix, inst3);
r\_joint = physics\_joint\_revolute\_create(inst1, inst2, 40, room\_height - 300, -80, 80, 1, 10, 0.5, 1, 0);
p\_joint = physics\_joint\_prismatic\_create(inst1, inst3, 150, room\_height - 300, 0, 1, -10, 10, true, 0, 0, 0, 0);
physics\_joint\_gear\_create(inst2, inst3, r\_joint, p\_joint, 0.5);

The above code creates and defines two fixture and then creates three instances, one "obj\_Ground" and two others, "obj\_Cog" and "obj\_Barrel". The fixtures are then bound to these instances and two joints are created. A revolute joint between the ground and the cog, and a prismatic joint between the ground and the barrel. Finally a gear joint is created between the cog and barrel instances using the previously defined revolute and prismatic joints.