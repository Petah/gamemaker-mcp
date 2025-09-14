---
title: "object_get_persistent"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Objects/object_get_persistent.htm"
converted: "2025-09-14T03:59:34.358Z"
---

# object\_get\_persistent

This function will tell you whether the object you are checking has been flagged as "persistent" or not. A persistent object is one that will cause any instances of it to be carried through from room to room unless they are explicitly destroyed. Please note that this is not an instance function! So, you can have a persistent object and a non-persistent instance of the same object and vice versa. You can set an individual instances persistent flag using the [persistent](../Instances/Instance_Variables/persistent.md) instance variable.

#### Syntax:

object\_get\_persistent(obj);

| Argument | Type | Description |
| --- | --- | --- |
| obj | Object Asset | The index of the object to check. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (!persistent) && (object\_get\_persistent(object\_index))
{
    persistent = true;
}

The above code will check the instance running it to see if it is persistent or not as well as check the object index of the instance to see if it is flagged as persistent or not. If the instance is _not_ persistent yet the object index is flagged as persistent, it will set "persistent" to true for that instance.