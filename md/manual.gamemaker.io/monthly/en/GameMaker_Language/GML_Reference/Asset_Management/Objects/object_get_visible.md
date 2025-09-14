---
title: "object_get_visible"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Objects/object_get_visible.htm"
converted: "2025-09-14T03:59:34.417Z"
---

# object\_get\_visible

This function will tell you whether the object you are checking has been flagged as "visible" (runs its draw event) or not (does not run its draw event). Please note that this is not an instance function! So, you can have a visible object and an invisible instance of the same object and vice versa. You can set an individual instances visibility using the [visible](../Instances/Instance_Variables/visible.md) instance variable.

#### Syntax:

object\_get\_visible(obj);

| Argument | Type | Description |
| --- | --- | --- |
| obj | Object Asset | The index of the object to check. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (!visible) && (object\_get\_visible(object\_index))
{
    visible = true;
}

The above code will check the instance running it to see if it is visible or not as well as check the object index of the instance to see if it is flagged as visible or not. If the instance is _not_ visible yet the object index is flagged as on, it will set "visible" to true for that instance.