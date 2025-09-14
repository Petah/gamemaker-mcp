---
title: "position_meeting"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Collisions/position_meeting.htm"
converted: "2025-09-14T04:00:03.104Z"
---

# position\_meeting

With this function you can check a position for a collision with another instance or all instances of an object. When you use this you are checking a single point in the room for an instance or an object. This check will be done against the bounding box of the instance or against the mask of the instance if that instance has precise collisions checked. If you need to get the unique instance [**id**](../../Asset_Management/Instances/Instance_Variables/id.md) if the object being collided with you should use [instance\_position()](../../Asset_Management/Instances/instance_position.md).

In addition to objects and instances, the function also accepts:

-   The special keywords **all** and **other**
-   A [Tile Map Element ID](../../Asset_Management/Rooms/Tile_Map_Layers/layer_tilemap_get_id.md)
-   An array containing a combination of objects, instances, Tile Maps and the keywords **all**/**other**

Passing an array allows you to check for collisions against multiple objects and/or Tile Maps in one call.

#### Syntax:

position\_meeting(x, y, obj);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x position to check. |
| y | Real | The y position to check. |
| obj | Object Asset or Object Instance or Tile Map Element ID or Array | An object, instance, tile map ID, keywords all/other, or array containing these items |

#### Returns:

[Boolean](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

if (mouse\_check\_button(mb\_left))
{
    if (!position\_meeting(mouse\_x, mouse\_y, all))
    {
        instance\_create\_layer(mouse\_x, mouse\_y, "Walls", obj\_Wall);
    }
}

The above code checks for the left mouse button, and if it is pressed it checks the mouse x/y position for a collision with any instance. If there is none, then an instance of "obj\_Wall" is created.