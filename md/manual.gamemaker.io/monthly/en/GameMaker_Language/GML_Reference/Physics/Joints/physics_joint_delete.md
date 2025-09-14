---
title: "physics_joint_delete"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Joints/physics_joint_delete.htm"
converted: "2025-09-14T04:00:05.449Z"
---

# physics\_joint\_delete

Once two instances with physics representations have been bound by a joint, this can be deleted again at any time. Normally this will happen automatically when one of the two instances is destroyed, or when the room ends, but there are times when you may wish to do this manually. In those cases you would use this function.

It should also be noted that whenever an instance that is part of a [gear joint](physics_joint_gear_create.md) is destroyed, the gear joint should be deleted using this function _before_ any of the instances involved in forming the gear (but the remaining joints will be deleted automatically), for example in the destroy event of the instance.

#### Syntax:

physics\_joint\_delete(joint)

| Argument | Type | Description |
| --- | --- | --- |
| joint | Physics Joint ID | The index of the joint that you wish to delete |

#### Returns:

N/A

#### Example:

var reactionForceX, reactionForceY, reactionForce;
if (shipJoint)
{
    reactionForceX = physics\_joint\_get\_value(shipJoint, phy\_joint\_reaction\_force\_x);
    reactionForceY = physics\_joint\_get\_value(shipJoint, phy\_joint\_reaction\_force\_x);
    reactionForce = sqrt((reactionForceX + reactionForceX) + (reactionForceY + reactionForceY));
    if (reactionForce > 2)
    {
        physics\_joint\_delete(shipJoint);
        shipJoint = -1;
    }
}

The above code checks to see if the variable "shipJoint" holds a joint index and if it does, it then calculates the force being applied to that joint using the two constants. Finally, if the total force is greater than 2, the joint is deleted.