---
title: "physics_joint_get_value"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Joints/physics_joint_get_value.htm"
converted: "2025-09-14T04:00:05.538Z"
---

# physics\_joint\_get\_value

By using a series of predefined constants, you can ask GameMaker to tell you a number of things about the state of any given joint. This is very useful as it gives you the ability to delete joints or change an instances behaviour depending on whatever your needs are at the time. There are a number of constants that can be used in this function and they can be found here: [Physics Joint Constants](Physics_Joint_Constants.md), but be aware that complex calculations are done when you call these, so they should be used with care and only when necessary and note that _many are unique to a specific type of joint_.

If the property does not exist (if, for example, you check a pulley joint for prismatic translation) then 0 will be the return value.

#### Syntax:

physics\_joint\_get\_value(joint, value)

| Argument | Type | Description |
| --- | --- | --- |
| joint | Physics Joint ID | The index of the joint that you wish to test |
| value | Physics Joint Constant | The constant for the joint property that you wish to test |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

if (shipJoint)
{
    var reactionForceX = physics\_joint\_get\_value(shipJoint, phy\_joint\_reaction\_force\_x);
    var reactionForceY = physics\_joint\_get\_value(shipJoint, phy\_joint\_reaction\_force\_y);
    var reactionForce = point\_distance(0, 0, reactionForceX, reactionForceY);
    if (reactionForce > 2)
    {
        physics\_joint\_delete(shipJoint);
        shipJoint = -1;
    }
}

The above code checks to see if the variable "shipJoint" holds a joint index and if it does, it then calculates the force being applied to that joint using the two constants. Finally, if the total force is greater than 2, the joint is deleted.