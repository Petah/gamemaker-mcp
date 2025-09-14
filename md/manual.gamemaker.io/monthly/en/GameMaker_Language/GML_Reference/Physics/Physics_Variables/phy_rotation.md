---
title: "phy_rotation"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Physics_Variables/phy_rotation.htm"
converted: "2025-09-14T04:00:06.177Z"
---

# phy\_rotation

This variable can be used to get (or to set) the angle of the instances fixture in degrees, similar to setting or getting the [image\_angle](../../Asset_Management/Sprites/Sprite_Instance_Variables/image_angle.md). However note that in the physics world rotations are calculated in the _opposite_ way to the normal GameMaker game world, meaning that vector functions like [point\_direction()](../../Maths_And_Numbers/Angles_And_Distance/point_direction.md)should have their return values modified (simply making positive to negative should resolve this).

#### Syntax:

phy\_rotation;

#### Returns:

[Real](../../../GML_Overview/Data_Types.md) (single precision floating point value, or undefined if the instance is not physics enabled)

#### Example:

if (phy\_speed\_x > 0) || (phy\_speed\_y > 0)
{
    phy\_rotation += sqrt(sqr(phy\_speed\_x) + sqr(phy\_speed\_y)) /10;
}

The above code checks the linear speed and if either vector is not 0, it then calculates the actual speed and uses that to set the rotation.