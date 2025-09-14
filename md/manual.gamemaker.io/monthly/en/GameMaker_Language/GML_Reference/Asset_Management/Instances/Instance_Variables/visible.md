---
title: "visible"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/visible.htm"
converted: "2025-09-14T03:59:33.631Z"
---

# visible

An instance can be flagged as _visible_ or not by setting this variable to true (visible) or false (invisible).

This works by telling GameMaker to skip the draw event for this instance, so care must be taken when using this as it means that no code placed in the draw event will be run while the instance is not visible. Also note that if the [layer](layer.md) that the instance is assigned to is flagged as invisible, setting this variable to true will have no effect until the layer itself is flagged as visible too.

NOTE During Draw events, this variable will become **read-only** and attempting to change it will throw a fatal error.

#### Syntax:

visible

#### Returns:

[Boolean](../../../../GML_Overview/Data_Types.md)

#### Example:

if (other.visible == true)
{
    x = xprevious;
    y = yprevious;
}

The above code will check the visible flag of the "other" instance in a _collision event_ and if it is set to true, it will move the current instance back to its previous position.