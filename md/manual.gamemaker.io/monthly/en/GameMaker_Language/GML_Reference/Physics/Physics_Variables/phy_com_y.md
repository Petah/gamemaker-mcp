---
title: "phy_com_y"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Physics_Variables/phy_com_y.htm"
converted: "2025-09-14T04:00:05.996Z"
---

# phy\_com\_y

This **read-only** variable will return the y position of the instance's center of mass. This is calculated automatically based on the density, inertia and mass of the instance as defined by the appropriate functions

#### Syntax:

phy\_com\_y;

#### Returns:

[Real](../../../GML_Overview/Data_Types.md) (single precision floating point value, or undefined if the instance is not physics enabled)

#### Example:

xx = phy\_com\_x;
yy = phy\_com\_y;

The above code sets two variables to the x and y position of the instances center of mass.