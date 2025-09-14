---
title: "collision_line"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Collisions/collision_line.htm"
converted: "2025-09-14T04:00:02.767Z"
---

# collision\_line

collision\_line checks along a line from point x1,y1 to point x2,y2 for a collision with **any** instance of the object or tile map specified by the argument "obj".

This function will return the unique [id](../../Asset_Management/Instances/Instance_Variables/id.md "Hyperlink [../../Asset_Management/Instances/Instance_Variables/id.htm]") of the instance being collided with, or the [Tile Map Element ID](../../Asset_Management/Rooms/Tile_Map_Layers/layer_tilemap_get_id.md) of the tile map found. If no collisions are found, [noone](../../../GML_Overview/Instance_Keywords.md "Hyperlink [../../../GML_Overview/Instance_Keywords.htm]") is returned.

This check can be either precise or not, but for precise collisions to be enabled, the object or instance that you are checking for _must_ also have precise collisions enabled for their sprite. If not, the default check is based on bounding boxes. The following image illustrates how this works:

![Collision line example](https://manual.gamemaker.io/monthly/en/assets/Images/Scripting_Reference/GML/Reference/Movement_Collisions/collision_line_illustration.png)Remember, for precise collisions to be considered _both_ the object sprite and the collision function must have precise marked as on. It should also be noted that the return value of the function can be the id of _any one_ of the instances considered to be in collision along the line, so if three instance overlap the defined line, any one of their ids could be the return value of the function.

In addition to objects and instances, the function also accepts:

-   The special keywords **all** and **other**
-   A [Tile Map Element ID](../../Asset_Management/Rooms/Tile_Map_Layers/layer_tilemap_get_id.md)
-   An array containing a combination of objects, instances, Tile Maps and the keywords **all**/**other**

Passing an array allows you to check for collisions against multiple objects and/or Tile Maps in one call.

#### Syntax:

collision\_line(x1, y1, x2, y2, obj, prec, notme);

| Argument | Type | Description |
| --- | --- | --- |
| x1 | Real | The x coordinate of the start of the line. |
| y1 | Real | The y coordinate of the start of the line. |
| x2 | Real | The x coordinate of the end of the line. |
| y2 | Real | The y coordinate of the end of the line. |
| obj | Object Asset or Object Instance or Tile Map Element ID or Array | An object, instance, tile map ID, keywords all/other, or array containing these items |
| prec | Boolean | Whether the check is based on precise collisions (true, which is slower) or its bounding box in general (false, faster). |
| notme | Boolean | Whether the calling instance, if relevant, should be excluded (true) or not (false). |

#### Returns:

[Object Instance](../../Asset_Management/Instances/Instance_Variables/id.md) or [Tile Map Element ID](../../Asset_Management/Rooms/Tile_Map_Layers/layer_tilemap_get_id.md)

#### Example:

with (obj\_Enemy)
{
    if (collision\_line(100, 400, 100, 600, id, false, false) != noone) instance\_destroy();
}

This code gets all instances of "obj\_Enemy" to check along a line from 100x, 400y to 100x, 600y for a collision with themselves, and if there is one then they are destroyed.