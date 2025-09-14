---
title: "instance_place"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/instance_place.htm"
converted: "2025-09-14T03:59:33.995Z"
---

# instance\_place

With this function you can check a position for a collision with another instance or all instances of an object using the collision mask of the instance that runs the code for the check. When you use this you are effectively asking GameMaker to move the instance to the new position, check for a collision, move back and tell you if a collision was found or not.

In addition to objects and instances, the function also accepts:

-   The special keywords **all** and **other**
-   A [Tile Map Element ID](../Rooms/Tile_Map_Layers/layer_tilemap_get_id.md)
-   An array containing a combination of objects, instances, Tile Maps and the keywords **all**/**other**

Passing an array allows you to check for collisions against multiple objects and/or Tile Maps in one call.

This will work for precise collisions, but only if both the instance and the object being checked for have precise collision masks selected otherwise only bounding box collisions are applied.

This function will return the unique [id](Instance_Variables/id.md) of the instance being collided with, or the [Tile Map Element ID](../Rooms/Tile_Map_Layers/layer_tilemap_get_id.md) of the tile map found, but if that is not needed it is slightly faster to use the function [place\_meeting()](../../Movement_And_Collisions/Collisions/place_meeting.md). If no collisions are found, [noone](../../../GML_Overview/Instance%20Keywords/noone.md) is returned.

See: [Collisions](../../Movement_And_Collisions/Collisions/Collisions.md)

#### Syntax:

instance\_place(x, y, obj);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x position to check for instances. |
| y | Real | The y position to check for instances. |
| obj | Object Asset or Object Instance or Tile Map Element ID or Array | An object, instance, tile map ID, keywords all/other, or array containing these items |

#### Returns:

[Object Instance](Instance_Variables/id.md) or [Tile Map Element ID](../Rooms/Tile_Map_Layers/layer_tilemap_get_id.md)

#### Example:

var \_inst = instance\_place(x, y, obj\_Enemy);
if (\_inst != noone)
{
    hp -= \_inst.dmg;
    instance\_destroy(\_inst);
}

The above code will check for a collision with instances of "obj\_Enemy" and if there is one, it will reduce the "hp" variable by the amount stored in the colliding instance's "dmg" variable and then destroy the colliding instance.