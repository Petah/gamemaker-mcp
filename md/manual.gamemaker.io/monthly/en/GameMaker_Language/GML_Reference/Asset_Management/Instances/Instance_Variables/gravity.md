---
title: "gravity"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/gravity.htm"
converted: "2025-09-14T03:59:33.514Z"
---

# gravity

gravity is one of the "built-in" variables all instances have and, when set, will apply a constant force in the [gravity\_direction](gravity_direction.md) of the instance, influencing both the instance [speed](speed.md) and [direction](direction.md). Note that gravity is a cumulative force and will accelerate the object if you choose not to cap the final speed, and it's usual that you'd set this variable to small decimal values like 0.01. If you set the gravity to 0, then no gravity will be applied to the instance (this is the default value).

#### Syntax:

gravity;

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md) (single precision floating point value)

#### Example:

if (!place\_meeting(x, y + 1, obj\_Ground))
{
    gravity = 0.01;
}
else
{
    gravity = 0;
}

The above code will only apply gravity if the instance does not find any instances of "obj\_Ground" beneath it.