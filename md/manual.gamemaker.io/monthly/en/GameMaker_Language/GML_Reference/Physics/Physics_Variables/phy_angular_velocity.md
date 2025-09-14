---
title: "phy_angular_velocity"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Physics_Variables/phy_angular_velocity.htm"
converted: "2025-09-14T04:00:05.750Z"
---

# phy\_angular\_velocity

This variable can be used to set the angular velocity of the instance, or it can be used to get the current angular velocity, in degrees per second and the value used can be either positive (for clockwise rotation) or negative (for anticlockwise rotation). If you set this on an instance that was previously static (ie: it has a density of 0) it will become a kinematic object and begin rotating

#### Syntax:

phy\_angular\_velocity;

#### Returns:

[Real](../../../GML_Overview/Data_Types.md) (single precision floating point value, or undefined if the instance is not physics enabled)

#### Example:

if (abs(phy\_angular\_velocity) > 0)
{
    phy\_angular\_velocity -= sign(phy\_angular\_velocity) \* 0.01;
}
else
{
    phy\_angular\_velocity = 0;
}

The above code will check the angular velocity of the instance and if it is not 0 it will then add (or subtract) a small amount every step until the value is 0.