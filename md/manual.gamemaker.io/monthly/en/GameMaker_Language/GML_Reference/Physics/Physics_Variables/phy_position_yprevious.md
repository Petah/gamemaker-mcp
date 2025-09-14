---
title: "phy_position_yprevious"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Physics_Variables/phy_position_yprevious.htm"
converted: "2025-09-14T04:00:06.147Z"
---

# phy\_position\_yprevious

This **read-only** variable can be used to get the previous y position of the instance within the game room physics world. This is the position of the instance within the physics world in the previous step to the current one.

#### Syntax:

phy\_position\_yprevious;

#### Returns:

[Real](../../../GML_Overview/Data_Types.md) (single precision floating point value) or [undefined](../../../GML_Overview/Data_Types.md) (if the instance is not physics enabled)

#### Example:

xx = phy\_position\_xprevious;
yy = phy\_position\_yprevious;

The above code stores the previous x and y position for the physics enabled instance in two variables.