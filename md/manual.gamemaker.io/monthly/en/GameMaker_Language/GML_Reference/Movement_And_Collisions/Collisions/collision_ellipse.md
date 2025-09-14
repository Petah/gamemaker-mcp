---
title: "collision_ellipse"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Collisions/collision_ellipse.htm"
converted: "2025-09-14T04:00:02.720Z"
---

# collision\_ellipse

collision\_ellipse uses the first four arguments (x1,y1,x2,y2) to define the width and height of an ellipse within the current room and then checks to see if **any** object or tile map that is defined by the "obj" argument is in collision with that area. This collision can be checked as precise or not, and you may also choose to check for the instance running the code itself or not. Consider this image:

![Collision ellipse example](../../../../assets/Images/Scripting_Reference/GML/Reference/Movement_Collisions/collision_ellipse_illustration.png)Here, the instance in the middle is using a collision ellipse to check for ball objects. Now, the blue ones do _not_ have a precise bounding box and as you can see, even if the sprite is not actually touching the ellipse, the collision can still happen (even if you set the precise option in the function to true) as the bounding box of that sprite over-laps the elliptical area defined by collision\_circle. On the other hand, the green balls will only be considered in collision if the actual sprite over-laps the defined ellipse. Remember, for precise collisions to be considered _both_ the object sprite and the collision function must have precise marked as on.

This function will return the unique [id](../../Asset_Management/Instances/Instance_Variables/id.md "Hyperlink [../../Asset_Management/Instances/Instance_Variables/id.htm]") of the instance being collided with, or the [Tile Map Element ID](../../Asset_Management/Rooms/Tile_Map_Layers/layer_tilemap_get_id.md) of the tile map found. If no collisions are found, [noone](../../../GML_Overview/Instance_Keywords.md "Hyperlink [../../../GML_Overview/Instance_Keywords.htm]") is returned.

In addition to objects and instances, the function also accepts:

-   The special keywords **all** and **other**
-   A [Tile Map Element ID](../../Asset_Management/Rooms/Tile_Map_Layers/layer_tilemap_get_id.md)
-   An array containing a combination of objects, instances, Tile Maps and the keywords **all**/**other**

Passing an array allows you to check for collisions against multiple objects and/or Tile Maps in one call.

#### Syntax:

collision\_ellipse(x1, y1, x2, y2, obj, prec, notme);

| Argument | Type | Description |
| --- | --- | --- |
| x1 | Real | The x coordinate of the left side of the ellipse to check. |
| y1 | Real | The y coordinate of the top side of the ellipse to check. |
| x2 | Real | The x coordinate of the right side of the ellipse to check. |
| y2 | Real | The y coordinate of the bottom side of the ellipse to check. |
| obj | Object Asset or Object Instance or Tile Map Element ID or Array | An object, instance, tile map ID, keywords all/other, or array containing these items |
| prec | Boolean | Whether the check is based on precise collisions (true, which is slower) or its bounding box in general (false, faster). |
| notme | Boolean | Whether the calling instance, if relevant, should be excluded (true) or not (false). |

#### Returns:

[Object Instance](../../Asset_Management/Instances/Instance_Variables/id.md) or [Tile Map Element ID](../../Asset_Management/Rooms/Tile_Map_Layers/layer_tilemap_get_id.md)

#### Example:

if (collision\_ellipse(50, 50, 200, 100, obj\_Player, false, true) != noone)
{
    instance\_create\_layer(obj\_Player.x, obj\_Player.y, "Effects", obj\_Splash);
}

This will check an elliptical zone within the bounds of 50x, 50y and 200x, 100y for the object "obj\_Player". If there is a collision with that object, then it will create an instance of "obj\_Splash" at the x/y coordinates of obj\_Player.