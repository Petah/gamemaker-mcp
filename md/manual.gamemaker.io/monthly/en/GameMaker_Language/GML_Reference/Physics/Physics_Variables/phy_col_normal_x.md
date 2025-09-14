---
title: "phy_col_normal_x"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Physics_Variables/phy_col_normal_x.htm"
converted: "2025-09-14T04:00:05.780Z"
---

# phy\_col\_normal\_x

This **read-only** array returns the x component of the collision normal corresponding to the [phy\_collision\_x](../../../../../../../GameMaker_Language/GML_Reference/Physics/Physics_Variables/phy_collision_x.md) array value.

For each contact point there is an associated contact normal (which is usually the same normal for all points of contact in the collision). This contact normal is a unit vector that points from one instance in the collision to another, and can be used, for example, to calculate the correct "push" direction to resolve collisions.

NOTE This variable is only available in the collision event of a physics-enabled instance.

NOTE This variable does not hold a real GML array, so you cannot run any [array functions](../../Variable_Functions/Array_Functions.md) on it or serialise it (convert it to a string). The only operation you can run on it is accessing a value at an index, with the phy\_col\_normal\_x\[index\] syntax.

#### Syntax:

phy\_col\_normal\_x\[index\]

#### Returns:

[Real](../../../GML_Overview/Data_Types.md) (or undefined if the instance doesn't have physics enabled)

#### Example:

Collision Event

repeat(5 + irandom(5))
{
    with (instance\_create\_layer(x, y, "Effects", obj\_Debris))
    {
        physics\_apply\_local\_impulse(0, 0, other.phy\_col\_normal\_x\[0\], other.phy\_col\_normal\_y\[0\]);
    }
}

The above code uses the contact normal to set the direction of movement for an instance created in the collision event between two physics-enabled instances.