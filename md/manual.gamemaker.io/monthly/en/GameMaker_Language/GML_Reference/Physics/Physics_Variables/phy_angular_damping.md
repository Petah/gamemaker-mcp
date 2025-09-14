---
title: "phy_angular_damping"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Physics_Variables/phy_angular_damping.htm"
converted: "2025-09-14T04:00:05.740Z"
---

# phy\_angular\_damping

This variable can be used to set the angular damping of the instance, or it can be used to get the current angular damping. The damping is the amount of "resistance" to angular rotation that the physics enabled instance has, with a lower value permitting the instance to rotate faster after a collision (for example) and a higher value making it require a more forceful push and rotate slower

#### Syntax:

phy\_angular\_damping;

#### Returns:

[Real](../../../GML_Overview/Data_Types.md) (single precision floating point value, or undefined if the instance is not physics enabled)

#### Example:

if (place\_meeting(phy\_position\_x, phy\_position\_y, obj\_Water))
{
    phy\_angular\_damping = 10;
}
else
{
    phy\_angular\_damping = 3;
}

The above code will check for a collision between the calling instance and instances of "obj\_Water" and change the angular damping accordingly.