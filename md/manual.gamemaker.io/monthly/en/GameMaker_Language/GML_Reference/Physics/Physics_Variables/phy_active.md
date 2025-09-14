---
title: "phy_active"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Physics_Variables/phy_active.htm"
converted: "2025-09-14T04:00:05.725Z"
---

# phy\_active

This variable controls whether or not the instance is currently "active".

Setting it to false will prevent the instance from participating in the physics world, and setting it to true will have it participating again. Please note that this is not the same as [deactivating the instance](../../Asset_Management/Instances/Deactivating_Instances/Deactivating_Instances.md), as the instance is still visible on the screen and can still be changed through code, rather this function just prevents it from participating in the physics simulation.

#### Syntax:

phy\_active

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md) (or undefined if the instance is not physics enabled)

#### Example:

if (keyboard\_check\_pressed(ord"P"))
{
    global.Pause = !global.Pause;
    with (obj\_Parent)
    {
        phy\_active = !global.Pause;
    }
}

The above code will detect a keypress of the letter "P" and then toggle the global variable "Pause" from true to false and back again. This variable is then used to set whether physics is active or not in the children instances of the object indexed in the variable "obj\_Parent".