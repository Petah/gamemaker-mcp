---
title: "phy_linear_velocity_x"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Physics_Variables/phy_linear_velocity_x.htm"
converted: "2025-09-14T04:00:06.075Z"
---

# phy\_linear\_velocity\_x

This variable can be used to get or change the x component of the instance's linear velocity vector and is defined in pixels per second (for pixels per step, see [phy\_speed\_x](phy_speed_x.md)). Altering this for a static instance (ie: an instance with 0 density) will turn it into a kinematic instance

#### Syntax:

phy\_linear\_velocity\_x;

#### Returns:

[Real](../../../GML_Overview/Data_Types.md) (single precision floating point value, or undefined if the instance is not physics enabled)

#### Example:

if (phy\_linear\_velocity\_x != 0)
{
    phy\_linear\_velocity\_x = 0;
}

The above code will check the x component of the linear velocity vector and if it is anything other than 0 it will set it to 0.