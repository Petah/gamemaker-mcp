---
title: "phy_dynamic"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Physics_Variables/phy_dynamic.htm"
converted: "2025-09-14T04:00:06.008Z"
---

# phy\_dynamic

A dynamic instance is one that is fully simulated within the physics world and this **read-only** variable will return true if the instance being checked is fully simulated or false if it is not.

#### Syntax:

phy\_dynamic;

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md) (or undefined if the instance is not physics enabled)

#### Example:

if other.phy\_dynamic
{
    with (other)
    {
        var \_dir;
        \_dir = point\_direction(x, y, other.x, other.y);
        physics\_apply\_impulse(x, y, x + lengthdir\_x(100, dir), y + lengthdir\_y(100, dir));
    }
}

The above code checks if the other instance is a dynamic physics instance. If it is, some code is executed in this other instance: the direction between the two instances is calculated using [point\_direction](../../Maths_And_Numbers/Angles_And_Distance/point_direction.md) and an impulse of 100 is applied to the other instance using [physics\_apply\_impulse](../Forces/physics_apply_impulse.md).