---
title: "phy_inertia"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Physics_Variables/phy_inertia.htm"
converted: "2025-09-14T04:00:06.037Z"
---

# phy\_inertia

Inertia is the measure of how hard it is to make something start or stop moving, so the lower the value for this **read-only** variable and the easier it will be to set the instance in motion, while higher values will require more force to start it moving

#### Syntax:

phy\_inertia;

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md) (single precision floating point value, or undefined if the instance is not physics enabled)

#### Example:

physics\_mass\_properties(70, -10, -10, phy\_inertia);

The above code will change the mass and center of mass of the instance while maintaining the inertia value.