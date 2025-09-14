---
title: "Physics Variables"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Physics_Variables/Physics_Variables.htm"
converted: "2025-09-14T04:00:05.712Z"
---

# Physics Variables

As with the "traditional" collisions and movement system, the physics system also has a series of [instance variables](../../Asset_Management/Instances/Instance_Variables/Instance_Variables.md) assigned to each instance of an object when it is created. Some of these properties can be defined by the user in GML, but many are read-only and still more are only applicable in the **collision** event.

The following variables exists in _all_ physics-enabled objects and they can be read from and written to (i.e.: changed) using code from instances and script functions:

-   [phy\_active](phy_active.md)
-   [phy\_angular\_velocity](phy_angular_velocity.md)
-   [phy\_angular\_damping](phy_angular_damping.md)
-   [phy\_linear\_velocity\_x](phy_linear_velocity_x.md)
-   [phy\_linear\_velocity\_y](phy_linear_velocity_y.md)
-   [phy\_linear\_damping](phy_linear_damping.md)
-   [phy\_speed\_x](phy_speed_x.md)
-   [phy\_speed\_y](phy_speed_y.md)
-   [phy\_position\_x](phy_position_x.md)
-   [phy\_position\_y](phy_position_y.md)
-   [phy\_position\_xprevious](phy_position_xprevious.md)
-   [phy\_position\_yprevious](phy_position_yprevious.md)
-   [phy\_rotation](phy_rotation.md)
-   [phy\_fixed\_rotation](phy_fixed_rotation.md)
-   [phy\_bullet](phy_bullet.md)

Certain variables are **read-only** variables, which means that the information they contain cannot be changed through instance code or script funcions (but it _can_ be changed internally by GameMaker which is why these are variables and not **constants**). The following list shows the **read-only** variables that exist in _all_ physics enabled objects:

-   [phy\_speed](phy_speed.md)
-   [phy\_com\_x](phy_com_x.md)
-   [phy\_com\_y](phy_com_y.md)
-   [phy\_dynamic](phy_dynamic.md)
-   [phy\_kinematic](phy_kinematic.md)
-   [phy\_inertia](../../../../../../../GameMaker_Language/GML_Reference/Physics/Physics_Variables/phy_inertia.md)
-   [phy\_mass](phy_mass.md)
-   [phy\_sleeping](phy_sleeping.md)

Finally, there are a number of temporary variables that exist in physics-enabled objects and are created _only in the collision event_. These variables are like those listed above and are **read-only**:

-   [phy\_collision\_points](phy_collision_points.md)
-   [phy\_collision\_x](../../../../../../../GameMaker_Language/GML_Reference/Physics/Physics_Variables/phy_collision_x.md)
-   [phy\_collision\_y](phy_collision_y.md)
-   [phy\_col\_normal\_x](phy_col_normal_x.md)
-   [phy\_col\_normal\_y](phy_col_normal_y.md)