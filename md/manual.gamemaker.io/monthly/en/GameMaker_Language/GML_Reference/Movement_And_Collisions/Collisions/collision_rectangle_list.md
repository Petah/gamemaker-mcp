---
title: "collision_rectangle_list"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Collisions/collision_rectangle_list.htm"
converted: "2025-09-14T04:00:02.882Z"
---

# collision\_rectangle\_list

This function is the same as the [collision\_rectangle()](../../../../../../../GameMaker_Language/GML_Reference/Movement_And_Collisions/Collisions/collision_rectangle.md) function, only instead of just detecting one instance / tile map in collision at a time, it will detect multiple instances / tile maps. You supply the x/y positions of the top left and bottom right of the area to check along with the object / tile map to check for, and you can set the check to be precise (in which case all instances being checked will need to have _precise_ collision masks) and whether the check should include the calling instance or not.

You supply a [DS list](../../Data_Structures/DS_Lists/DS_Lists.md) too, so the [id](../../Asset_Management/Instances/Instance_Variables/id.md) values of any instances (or tile maps) that are colliding with the calling instance will be added to the end of the given list. You can [clear](../../Data_Structures/DS_Lists/ds_list_clear.md) the list before calling this function so that it only contains results from this function call. You also have the option to order the instances based on their distances from the centre of the rectangular area to their origins. The function returns the number of instances / tile maps found, or 0 if none are found.

In addition to objects and instances, the function also accepts:

-   The special keywords **all** and **other**
-   A [Tile Map Element ID](../../Asset_Management/Rooms/Tile_Map_Layers/layer_tilemap_get_id.md)
-   An array containing a combination of objects, instances, Tile Maps and the keywords **all**/**other**

Passing an array allows you to check for collisions against multiple objects and/or Tile Maps in one call.

#### Syntax:

collision\_rectangle\_list(x1, y1, x2, y2, obj, prec, notme, list, ordered);

| Argument | Type | Description |
| --- | --- | --- |
| x1 | Real | The x coordinate of the left side of the rectangle to check. |
| y1 | Real | The y coordinate of the top side of the rectangle to check. |
| x2 | Real | The x coordinate of the right side of the rectangle to check. |
| y2 | Real | The y coordinate of the bottom side of the rectangle to check. |
| obj | Object Asset or Object Instance or Tile Map Element ID or Array | An object, instance, tile map ID, keywords all/other, or array containing these items |
| prec | Boolean | Whether the check is based on precise collisions (true, which is slower) or its bounding box in general (false, faster). |
| notme | Boolean | Whether the calling instance, if relevant, should be excluded (true) or not (false). |
| list | DS List | The DS list to use to store the IDs of colliding instances. |
| ordered | Boolean | Whether the list should be ordered by distance (true) or not (false). |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md) (The number of instances / tile maps found to be in collision)

#### Example:

var \_list = ds\_list\_create();
var \_num = collision\_rectangle\_list(x - 100, y - 100, x + 100, y + 100, obj\_Enemy, false, true, \_list, false);
if (\_num > 0)
{
    for (var i = 0; i < \_num; ++i;)
    {
        instance\_destroy(\_list\[| i\]);
    }
}
ds\_list\_destroy(\_list);

The code above will check a rectangular area 100 pixels around the calling instance position for collisions with instances of "obj\_Enemy". If there are any collisions, then the pre-created list is looped through and each instance that was in the collision is destroyed.