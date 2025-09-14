---
title: "collision_point"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Collisions/collision_point.htm"
converted: "2025-09-14T04:00:02.812Z"
---

# collision\_point

collision\_point checks the point specified by the arguments x,y for a collision with **any** instance of the object or tile map specified by the argument obj.

This function will return the unique [id](../../Asset_Management/Instances/Instance_Variables/id.md "Hyperlink [../../Asset_Management/Instances/Instance_Variables/id.htm]") of the instance being collided with, or the [Tile Map Element ID](../../Asset_Management/Rooms/Tile_Map_Layers/layer_tilemap_get_id.md) of the tile map found. If no collisions are found, [noone](../../../GML_Overview/Instance_Keywords.md "Hyperlink [../../../GML_Overview/Instance_Keywords.htm]") is returned.

This check can be either precise or not, but for precise collisions to be enabled, the object or instance that you are checking for _must_ also have precise collisions enabled for their sprite. If not, the default check is based on bounding boxes. The following image illustrates how this works:

![Collision point example](../../../../assets/Images/Scripting_Reference/GML/Reference/Movement_Collisions/collision_point_illustration.png)Remember, for precise collisions to be considered _both_ the object sprite and the collision function must have precise marked as on. It should also be noted that the return value of the function can be the id of _any one_ of the instances considered to be in collision, so if three instance overlap at that point, any one of their ids could be the return value of the function.

In addition to objects and instances, the function also accepts:

-   The special keywords **all** and **other**
-   A [Tile Map Element ID](../../Asset_Management/Rooms/Tile_Map_Layers/layer_tilemap_get_id.md)
-   An array containing a combination of objects, instances, Tile Maps and the keywords **all**/**other**

Passing an array allows you to check for collisions against multiple objects and/or Tile Maps in one call.

#### Syntax:

collision\_point(x, y, obj, prec, notme);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x coordinate of the point to check. |
| y | Real | The y coordinate of the point to check. |
| obj | Object Asset or Object Instance or Tile Map Element ID or Array | An object, instance, tile map ID, keywords all/other, or array containing these items |
| prec | Boolean | Whether the check is based on precise collisions (true, which is slower) or its bounding box in general (false, faster). |
| notme | Boolean | Whether the calling instance, if relevant, should be excluded (true) or not (false). |

#### Returns:

[Object Instance](../../Asset_Management/Instances/Instance_Variables/id.md) or [Tile Map Element ID](../../Asset_Management/Rooms/Tile_Map_Layers/layer_tilemap_get_id.md)

#### Example:

if (collision\_point(x, y, obj\_Cursor, false, true) != noone)
{
    score += 10;
}

Here we are checking the point at the position of the object that has the code for the object "obj\_Cursor". If there is one, then we add 10 onto the score variable.