---
title: "phy_kinematic"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Physics_Variables/phy_kinematic.htm"
converted: "2025-09-14T04:00:06.049Z"
---

# phy\_kinematic

This **read-only** variable will return true if the instance is classed as being a kinematic object, or false if it is not. A kinematic instance is one that has infinite mass (a density of 0) but can move. So, to make an instance kinematic, you would first create a static instance and then set one or more of the instance variables related to movement (ie: [phy\_speed\_x](phy_speed_x.md), [phy\_speed\_y](phy_speed_y.md), or [phy\_angular\_velocity](phy_angular_velocity.md))

#### Syntax:

phy\_kinematic;

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md) (or undefined if the instance is not physics enabled)

#### Example:

if (!phy\_kinematic)
{
    phy\_speed\_x = 5;
}

The above code checks to see if the instance is kinematic and if it is not, it sets the horizontal speed to 5.