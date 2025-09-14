---
title: "physics_joint_set_value"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Joints/physics_joint_set_value.htm"
converted: "2025-09-14T04:00:05.640Z"
---

# physics\_joint\_set\_value

Certain joint properties can be changed and set even after the creation of the joint. There are a number of constants that can be used in this function and they can be found here: [Physics Joint Constants](Physics_Joint_Constants.md).

#### Syntax:

physics\_joint\_set\_value(joint, field, value)

| Argument | Type | Description |
| --- | --- | --- |
| joint | Physics Joint ID | The index of the joint that you wish to change |
| field | Physics Joint Constant | The constant for the joint property that you wish to change |
| value | Real | The new value for the joint property |

#### Returns:

N/A

#### Example:

if (physics\_joint\_get\_value(revJoint, phy\_joint\_max\_motor\_torque) < 2)
{
    physics\_joint\_set\_value(revJoint, phy\_joint\_max\_motor\_torque, 2);
}

The above code checks to see if the joints maximum motor torque is set to less than 2 and if it is it then sets it to 2.