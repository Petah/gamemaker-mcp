---
title: "phy_speed"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Physics_Variables/phy_speed.htm"
converted: "2025-09-14T04:00:06.205Z"
---

# phy\_speed

This **read-only** variable returns the current speed of the physics enabled instance, defined in pixels per step. Should you need to change this value, you must do so by changing the x and y vectors using the variables [phy\_speed\_x](phy_speed_x.md) and [phy\_speed\_y](phy_speed_y.md).

#### Syntax:

phy\_speed;

#### Returns:

[Real](../../../GML_Overview/Data_Types.md) (single precision floating point value, or undefined if the instance is not physics enabled)

#### Example:

if (phy\_speed > 10)
{
    phy\_linear\_damping += 0.01;
}
else
{
    phy\_linear\_damping = 2;
}

The above code checks the speed of the physics enabled instance and then changes the linear damping based on the returned value.