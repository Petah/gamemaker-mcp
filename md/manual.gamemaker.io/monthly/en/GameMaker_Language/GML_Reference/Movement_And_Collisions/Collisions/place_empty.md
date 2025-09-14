---
title: "place_empty"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Collisions/place_empty.htm"
converted: "2025-09-14T04:00:02.903Z"
---

# place\_empty

You can use this function to check and see if the calling instance would collide with _any other instance_ of an object or all instances in your game. For this to collision to resolve correctly, the instance running the code must have a valid collision mask (either for the sprite itself, or through the [mask\_index](../../Asset_Management/Sprites/Sprite_Instance_Variables/mask_index.md)) and it will only register collisions with those instances that also have a valid mask.

The function is testing if there are no collisions should the calling instance be placed at a specific position, and you can supply an optional argument to refine the check to only check if a position is free of collisions with instances of the given type. Note that if no optional object ID is supplied, the check will be done against _all_ instances within the room.

The collision checking will be either precise or based on the bounding box of the instance, depending on what kind of collision mask has been selected, but for precise collisions to work correctly, all instances in the check should have precise collision masks.

In addition to objects and instances, the function also accepts:

-   The special keywords **all** and **other**
-   A [Tile Map Element ID](../../Asset_Management/Rooms/Tile_Map_Layers/layer_tilemap_get_id.md)
-   An array containing a combination of objects, instances, Tile Maps and the keywords **all**/**other**

Passing an array allows you to check for collisions against multiple objects and/or Tile Maps in one call.

#### Syntax:

place\_empty(x, y, \[object\_id\]);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x position to check. |
| y | Real | The y position to check. |
| [object_id] | Object Asset or Object Instance or Tile Map Element ID or Array | OPTIONAL An object, instance, tile map ID, keywords all/other, or array containing these items |

#### Returns:

[Boolean](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

if (place\_empty(mouse\_x, mouse\_y, obj\_Enemy))
{
    x = mouse\_x;
    y = mouse\_y;
}

The above code will check for a collision with any other instance of the object "obj\_Enemy", as if the calling instance were to be placed at the same position as the mouse. If there is no collision detected, then the instance has its x/y coordinates set to those of the mouse.