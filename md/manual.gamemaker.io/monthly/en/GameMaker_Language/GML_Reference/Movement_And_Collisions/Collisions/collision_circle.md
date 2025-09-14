---
title: "collision_circle"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Collisions/collision_circle.htm"
converted: "2025-09-14T04:00:02.676Z"
---

# collision\_circle

collision\_circle creates a circular zone of the radius given by the user around the points x1, y1 and then checks that zone for a collision with **any** instance of the object / instance / tile map specified by the argument "obj".

This check can be either precise or not, but for precise collisions to be enabled, the object or instance that you are checking for _must_ also have precise collisions enabled for their sprite. If not, the default check is based on bounding boxes. The following image illustrates how this works:

![Collision circle example](../../../../assets/Images/Scripting_Reference/GML/Reference/Movement_Collisions/collision_circle_illustration.png)Here, the instance in the middle is using a collision circle to check for ball objects. Now, the blue ones do _not_ have a precise bounding box and as you can see, even if the sprite is not actually touching the circle, the collision can still happen (even if you set the precise option in the function to true) as the bounding box of that sprite over-laps the circular area defined by collision\_circle. On the other hand, the green balls will only be considered in collision if the actual sprite over-laps with the defined circle. Remember, for precise collisions to be considered _both_ the object sprite and the collision function must have precise marked as on.

This function will return the unique [id](../../Asset_Management/Instances/Instance_Variables/id.md "Hyperlink [../../Asset_Management/Instances/Instance_Variables/id.htm]") of the instance being collided with, or the [Tile Map Element ID](../../Asset_Management/Rooms/Tile_Map_Layers/layer_tilemap_get_id.md) of the tile map found. If no collisions are found, [noone](../../../GML_Overview/Instance_Keywords.md "Hyperlink [../../../GML_Overview/Instance_Keywords.htm]") is returned.

In addition to objects and instances, the function also accepts:

-   The special keywords **all** and **other**
-   A [Tile Map Element ID](../../Asset_Management/Rooms/Tile_Map_Layers/layer_tilemap_get_id.md)
-   An array containing a combination of objects, instances, Tile Maps and the keywords **all**/**other**

Passing an array allows you to check for collisions against multiple objects and/or Tile Maps in one call.

#### Syntax:

collision\_circle(x1, y1, rad, obj, prec, notme);

| Argument | Type | Description |
| --- | --- | --- |
| x1 | Real | The x coordinate of the center of the circle to check. |
| y1 | Real | The y coordinate of the center of the circle to check. |
| rad | Real | The radius (distance in pixels from its center to its edge). |
| obj | Object Asset or Object Instance or Tile Map Element ID or Array | An object, instance, tile map ID, keywords all/other, or array containing these items |
| prec | Boolean | Whether the check is based on pixel-perfect collisions (true = slow) or its bounding box in general (false = fast). |
| notme | Boolean | Whether the calling instance, if relevant, should be excluded (true) or not (false). |

#### Returns:

[Object Instance](../../Asset_Management/Instances/Instance_Variables/id.md) or [Tile Map Element ID](../../Asset_Management/Rooms/Tile_Map_Layers/layer_tilemap_get_id.md)

#### Example:

if (collision\_circle(x, y, 20, obj\_Cursor, false, true) != noone)
{
    image\_index = 1;
}
else image\_index = 0;

The code above will check a circular are with a 20pixel radius for a collision with "obj\_Cursor" and if there is one it will set the image\_index of the object running the code to 1, but if there is not it will set the image\_index of the object to 0.