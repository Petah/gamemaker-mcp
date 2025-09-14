---
title: "phy_collision_x"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Physics_Variables/phy_collision_x.htm"
converted: "2025-09-14T04:00:05.936Z"
---

# phy\_collision\_x

This **read-only** array returns the x coordinate of every point detected in a collision between two physics-enabled instances.

NOTE This variable is only available in the collision event of a physics-enabled instance.

NOTE This variable does not hold a real GML array, so you cannot run any [array functions](../../Variable_Functions/Array_Functions.md) on it or serialise it (convert it to a string). The only operation you can run on it is accessing a value at an index, with the phy\_collision\_x\[index\] syntax.

#### Syntax:

phy\_collision\_x\[index\]

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md) (single-precision floating-point value, or undefined if the instance doesn't have physics enabled)

#### Example:

Collision Event

for(var i = 0; i < phy\_collision\_points; i += 1;)
{
    part\_particles\_create(global.Sname, phy\_collision\_x\[i\], phy\_collision\_y\[i\], global.Spark, 5);
}

The above code creates particles at all the defined points of a collision between two physics enabled instances.