---
title: "phy_bullet"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Physics_Variables/phy_bullet.htm"
converted: "2025-09-14T04:00:05.764Z"
---

# phy\_bullet

This variable defines whether or not the instance is extremely fast moving (for example a bullet). The default value is false but if set to true this tells GameMaker that the instance will be moving at such high speeds that it will require more expensive collision detection to ensure it doesn't pass through other instances undetected

#### Syntax:

phy\_bullet;

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md) (or undefined if the instance is not physics enabled)

#### Example:

with (instance\_create\_layer(x, y, "Bullets", obj\_Shoot))
{
    phy\_bullet = true;
    physics\_apply\_local\_impulse(0, 10, 0, 200);
}

The above code creates a new instance and then defines it as being a "bullet" in the physics world before giving it a massive impulse along the y axis.