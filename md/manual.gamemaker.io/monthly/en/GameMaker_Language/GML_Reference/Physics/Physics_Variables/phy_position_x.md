---
title: "phy_position_x"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Physics_Variables/phy_position_x.htm"
converted: "2025-09-14T04:00:06.113Z"
---

# phy\_position\_x

This variable can be used to get (or to set) the x position of the instance within the game room physics world. Please note that the physics world may present errors when instances are moved by directly setting this variable as it will interrupt the continuous simulation. This variable is the physics equivalent of the instance variable [x](../../Asset_Management/Instances/Instance_Variables/x.md).

#### Syntax:

phy\_position\_x;

#### Returns:

[Real](../../../GML_Overview/Data_Types.md) (single precision floating point value, or undefined if the instance is not physics enabled)

#### Example:

xx = phy\_position\_x;
yy = phy\_position\_y;

The above code stores the instance x and y position in two variables.