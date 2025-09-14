---
title: "object_set_solid"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Objects/object_set_solid.htm"
converted: "2025-09-14T03:59:34.499Z"
---

# object\_set\_solid

With this function you can flag a specific object as being solid or not (for more information on the "solid" flag see the section on the [Object Editor](../../../../The_Asset_Editors/Objects.md)). This means that all instances of this object that are created _after solid has been changed_ will be created with this new state, while instances that are already in the room may not be affected.

Please note that this is not an instance function! You can set the solid flag of individual instances using the [solid](../Instances/Instance_Variables/solid.md) variable and so have ten instances all flagged as solid even though the object in question has the flag set to false in the IDE, and even if you change the solid flag of the object to true using this function, all instances that currently in the room will remain as they were, and only instances created after calling the function will start with solid flagged as true.

#### Syntax:

object\_set\_solid( index, solid );

| Argument | Type | Description |
| --- | --- | --- |
| index | Object Asset | The index of the object to change. |
| solid | Boolean | The new solidity of the object (true=solid, false=not solid). |

#### Returns:

N/A

#### Example:

if (!object\_get\_solid(obj\_Block))
{
    object\_set\_solid(obj\_Block, true);
}

The above code checks the solid flag of the object "obj\_Block" and if it is false then it is changed to be flagged as true.