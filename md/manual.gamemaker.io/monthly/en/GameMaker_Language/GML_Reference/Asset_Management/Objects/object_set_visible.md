---
title: "object_set_visible"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Objects/object_set_visible.htm"
converted: "2025-09-14T03:59:34.527Z"
---

# object\_set\_visible

With this function you can flag a specific object as being visible or not (for more information on the "visible" flag see the section on the [Object Editor](../../../../../../../The_Asset_Editors/Objects.md)). This means that all instances of this object that are created _after visible has been changed_ will be created with this new state, while instances that are already in the room may not be affected.

Please note that this is not an instance function! You can set the visible flag of individual instances using the [visible](../Instances/Instance_Variables/visible.md) variable and so have ten instances all flagged as visible even though the object in question has the flag set to false in the IDE, and even if you change the visible flag of the object to true using this function, all instances that currently in the room will remain as they were, and only instances created after calling the function will start with visible flagged as true.

#### Syntax:

object\_set\_visible( index, vis );

| Argument | Type | Description |
| --- | --- | --- |
| index | Object Asset | The index of the object to change. |
| vis | Boolean | The new visibility of the object (true=visible, false=invisible). |

#### Returns:

N/A

#### Example:

if (!object\_get\_visible(obj\_Block))
{
    object\_set\_visible(obj\_Block, true);
}

The above code checks the visible flag of the object "obj\_Block" and if it is false then it is changed to be flagged as true.