---
title: "place_meeting"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Collisions/place_meeting.htm"
converted: "2025-09-14T04:00:02.942Z"
---

# place\_meeting

With this function you can check a position for a collision with another instance, or all instances of an object, using the collision mask of the instance that runs the code. When you use this you are effectively asking GameMaker to move the instance to the new position, check for a collision, move back and tell you if a collision was found or not.

This will work for precise collisions, but only if both the instance and the object being checked for have precise collision masks selected. Otherwise, only bounding box collisions are applied.

In addition to objects and instances, the function also accepts:

-   The special keywords **all** and **other**
-   A [Tile Map Element ID](../../Asset_Management/Rooms/Tile_Map_Layers/layer_tilemap_get_id.md)
-   An array containing a combination of objects, instances, Tile Maps and the keywords **all**/**other**

Passing an array allows you to check for collisions against multiple objects and/or Tile Maps in one call.

If you need to get the **id** handle of the instance being collided with, you should use [instance\_place()](../../Asset_Management/Instances/instance_place.md).

![Place meeting example](../../../../assets/Images/Scripting_Reference/GML/Reference/Movement_Collisions/place_meeting.png)See: [Collisions](Collisions.md)

#### Syntax:

place\_meeting(x, y, obj);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x position to check. |
| y | Real | The y position to check. |
| obj | Object Asset or Object Instance or Tile Map Element ID or Array | An object, instance, tile map ID, keywords all/other, or array containing these items |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example 1:

if (keyboard\_check(vk\_left))
{
    if (!place\_meeting(x - 5, y, obj\_wall))
    {
        x -= 5;
    }
}

The above code checks to see if there is _not_ a collision to the left of the instance and moves the instance if there is none.

#### Example 2:

var \_tilemap = layer\_tilemap\_get\_id("Tiles\_1");

if (keyboard\_check(vk\_left))
{
    if !place\_meeting(x - 5, y, \[obj\_wall, obj\_bush, \_tilemap\])
    {
        x -= 5;
    }
}

This is the same logic as the last example, however it uses an array to check for collisions against two types of objects (obj\_wall, obj\_bush) and the Tile Map for a Tile Layer called "Tiles\_1".

As you only need to get your tile map ID once, you can move the first line to the Create event.