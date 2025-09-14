---
title: "phy_mass"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Physics_Variables/phy_mass.htm"
converted: "2025-09-14T04:00:06.097Z"
---

# phy\_mass

This **read-only** variable returns the mass of the instance in _kilograms_. This value is calculated automatically based on the surface area of the assigned fixtures and their density values, but it can be changed using the function [physics\_mass\_properties()](../physics_mass_properties.md).

#### Syntax:

phy\_mass;

#### Returns:

[Real](../../../GML_Overview/Data_Types.md) (single precision floating point value, or undefined if the instance is not physics enabled)

#### Example:

if (phy\_mass < other.phy\_mass)
{
    instance\_destroy();
}

The above code is from the collision event of the instance with another and it compares the mass of each instance and destroys that which has less mass.