---
title: "object_get_physics"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Objects/object_get_physics.htm"
converted: "2025-09-14T03:59:34.371Z"
---

# object\_get\_physics

This function will tell you whether the object you are checking has been flagged as "physics enabled"  - in which case it'll return true, - or not - in which case it will return false.

#### Syntax:

object\_get\_physics(obj);

| Argument | Type | Description |
| --- | --- | --- |
| obj | Object Asset | The index of the object to check. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (object\_get\_physics(object\_index))
{
    phy\_active = true;
}

The above code will check the instance running it to see if the object it is created from is physics enabled, and if it is it activates the physics simulation for the instance.