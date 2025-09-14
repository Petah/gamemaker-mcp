---
title: "gravity_direction"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/gravity_direction.htm"
converted: "2025-09-14T03:59:33.526Z"
---

# gravity\_direction

gravity\_direction is one of the "built-in" properties all instances have and can be used to set the direction of movement when the instances [gravity](gravity.md) is greater than 0. Note that directions in GameMaker are usually calculated as 0° being right, 90° being up, 180° being left and 270° being down.

#### Syntax:

gravity\_direction;

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md) (single precision floating point value)

#### Example:

if (place\_meeting(x, y, obj\_switch))
{
    gravity\_direction += 180;
}

The above code will change the gravity\_direction if the player object meets an instance of "obj\_switch".