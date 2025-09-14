---
title: "instance_position_list"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/instance_position_list.htm"
converted: "2025-09-14T03:59:34.062Z"
---

# instance\_position\_list

With this function you can check a position for a collision with all instances of another object or tile maps.

When you use this you are checking a single point in the room, and the check will be done against the bounding box of the instances or against the mask of the instances if that object has precise collisions checked.

In addition to objects and instances, the function also accepts:

-   The special keywords **all** and **other**
-   A [Tile Map Element ID](../Rooms/Tile_Map_Layers/layer_tilemap_get_id.md)
-   An array containing a combination of objects, instances, Tile Maps and the keywords **all**/**other**

Passing an array allows you to check for collisions against multiple objects and/or Tile Maps in one call.

You supply a [DS list](../../Data_Structures/DS_Lists/DS_Lists.md) too, so the [id](Instance_Variables/id.md) values of any instances or tile maps that are colliding with the calling instance will be added to the end of the given list. You can [clear](../../Data_Structures/DS_Lists/ds_list_clear.md) the list before calling this function so that it only contains results from this function call. You also have the option to order the list based on the distance from the position being checked to the origin of the instances found to be in collision.

The function returns the number of instances / tile maps found, or 0 if none are found.

See: [Collisions](../../Movement_And_Collisions/Collisions/Collisions.md)

#### Syntax:

instance\_position\_list(x, y, obj, list, ordered);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x position to check for instances. |
| y | Real | The y position to check for instances. |
| obj | Object Asset or Object Instance or Tile Map Element ID or Array | An object, instance, tile map ID, keywords all/other, or array containing these items |
| list | DS List | The DS list to use to store the IDs of colliding instances. |
| ordered | Boolean | Whether the list should be ordered by distance (true) or not (false). |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md) (The number of instances / tile maps found to be in collision)

#### Example:

var \_list = ds\_list\_create();
var \_num = instance\_position\_list(mouse\_x, mouse\_y, all, \_list, false);
if (\_num > 0)
{
    for (var i = 0; i < \_num; ++i;)
    {
        instance\_destroy(\_list\[| i\]);
    }
}
ds\_list\_destroy(\_list);

The above code will check for a collision with all instances found at the mouse position. These will be added to a DS list, which is then looped through to destroy each of the instances in collision.