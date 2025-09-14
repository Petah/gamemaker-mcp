---
title: "collision_rectangle"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Collisions/collision_rectangle.htm"
converted: "2025-09-14T04:00:02.859Z"
---

# collision\_rectangle

collision\_rectangle uses the first four arguments (x1,y1,x2,y2) to define an area within the current room and then checks to see if **any** object or tile map that is defined by the "obj" argument is in collision with that area. This collision can be checked as precise or not, and you may also choose to check for the instance running the code itself or not. Consider this image:

![Collision rectangle example](../../../../assets/Images/Scripting_Reference/GML/Reference/Movement_Collisions/collision_rectangle_illustration.png)Here, the instance in the middle is using a collision rectangle to check for ball objects. Now, the blue ones do _not_ have a precise bounding box and as you can see, even if the sprite is not actually touching the rectangle, the collision will still happen (even if you set the precise option in the function to true) as the bounding box of that sprite over-laps the collision\_rectangle. On the other hand, the green balls will only be considered in collision if the actual sprite over-laps the rectangle. Remember, for precise collisions to be considered _both_ the object sprite and the collision function must have precise marked as on.

This function will return the unique [id](../../Asset_Management/Instances/Instance_Variables/id.md "Hyperlink [../../Asset_Management/Instances/Instance_Variables/id.htm]") of the instance being collided with, or the [Tile Map Element ID](../../Asset_Management/Rooms/Tile_Map_Layers/layer_tilemap_get_id.md) of the tile map found. If no collisions are found, [noone](../../../../../../../GameMaker_Language/GML_Overview/Instance_Keywords.md "Hyperlink [../../../GML_Overview/Instance_Keywords.htm]") is returned.

In addition to objects and instances, the function also accepts:

-   The special keywords **all** and **other**
-   A [Tile Map Element ID](../../Asset_Management/Rooms/Tile_Map_Layers/layer_tilemap_get_id.md)
-   An array containing a combination of objects, instances, Tile Maps and the keywords **all**/**other**

Passing an array allows you to check for collisions against multiple objects and/or Tile Maps in one call.

#### Syntax:

collision\_rectangle(x1, y1, x2, y2, obj, prec, notme);

| Argument | Type | Description |
| --- | --- | --- |
| x1 | Real | The x coordinate of the left side of the rectangle to check. |
| y1 | Real | The y coordinate of the top side of the rectangle to check. |
| x2 | Real | The x coordinate of the right side of the rectangle to check. |
| y2 | Real | The y coordinate of the bottom side of the rectangle to check. |
| obj | Object Asset or Object Instance or Tile Map Element ID or Array | An object, instance, tile map ID, keywords all/other, or array containing these items |
| prec | Boolean | Whether the check is based on precise collisions (true, which is slower) or its bounding box in general (false, faster). |
| notme | Boolean | Whether the calling instance, if relevant, should be excluded (true) or not (false). |

#### Returns:

[Object Instance](../../Asset_Management/Instances/Instance_Variables/id.md) or [Tile Map Element ID](../../Asset_Management/Rooms/Tile_Map_Layers/layer_tilemap_get_id.md)

#### Example:

var inst;
inst = collision\_rectangle(50, 50, 200, 100, obj\_Ball, false, true);
if (inst != noone)
{
    instance\_destroy(inst);
}

This short code uses collision\_rectangle check an area in the room from 50x, 50y (top left of the rectangle) to 200x, 200y (bottom right of the rectangle) for an instance of an object called "obj\_ball". It stores the return value in a temporary variable which is then checked to see if that value is an instance id, or the keyword [**noone**](../../../../../../../GameMaker_Language/GML_Overview/Instance_Keywords.md). If it is _not_ **noone** then it uses the stored instance id to destroy the object.