---
title: "phy_sleeping"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Physics_Variables/phy_sleeping.htm"
converted: "2025-09-14T04:00:06.193Z"
---

# phy\_sleeping

This **read-only** variable returns whether or not the instance is currently "sleeping" (true) or not (false), A "sleeping" instance is one that is not actively engaged in any physical simulation. GameMaker will put objects to sleep to save simulation cycles when an instance is at rest and not in collision with another instance

#### Syntax:

phy\_sleeping;

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md) (or undefined if the instance is not physics enabled)

#### Example:

if (phy\_sleeping)
{
    instance\_destroy();
}

The above code checks to see if the object is being actively simulated or not and if it is not it is destroyed.