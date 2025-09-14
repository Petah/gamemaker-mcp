---
title: "solid"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/solid.htm"
converted: "2025-09-14T03:59:33.605Z"
---

# solid

An instance can be flagged as _solid_ through the object properties in the [Object Editor](../../../../../The_Asset_Editors/Objects.md), or by changing the value of this built-in variable. If solid is set to true then, when a collision is detected, the colliding instance is returned automatically to the position it was at in the step previous to the collision (and then any code or actions are run in the collision event). If it is set to false, all positioning must be dealt with through the collision event.

#### Syntax:

solid

#### Returns:

[Boolean](../../../../GML_Overview/Data_Types.md)

#### Example:

if (other.solid == true)
{
    x = xprevious;
    y = yprevious;
}

The above code will check the solid flag of the "other" instance in a collision and if it is set to true move that instance back to its previous position.