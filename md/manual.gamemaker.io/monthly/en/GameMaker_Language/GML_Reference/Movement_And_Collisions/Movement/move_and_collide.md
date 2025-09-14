---
title: "move_and_collide"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Movement/move_and_collide.htm"
converted: "2025-09-14T04:00:03.633Z"
---

# move\_and\_collide

This function moves the instance by the given distance on the X and Y axes, while avoiding the given object or tile map.

It allows your instance to move while navigating slopes or small steps that would otherwise prevent it from being able to move.

The function returns an [array](../../../GML_Overview/Arrays.md) containing the IDs of the instances and tile maps it collided with.

### obj Argument

In addition to objects and instances, the function also accepts:

-   The special keywords **all** and **other**
-   A [Tile Map Element ID](../../Asset_Management/Rooms/Tile_Map_Layers/layer_tilemap_get_id.md)
-   An array containing a combination of objects, instances, Tile Maps and the keywords **all**/**other**

Passing an array allows you to check for collisions against multiple objects and/or Tile Maps in one call.

### How Does It Work?

The function will move your instance step-by-step, checking for collisions at each step/iteration. The obj argument is the object, instance or [tile map](../../Asset_Management/Rooms/Tile_Map_Layers/layer_tilemap_get_id.md) it should avoid, and by default the function moves your instance in 4 steps (which you can change with the num\_iterations argument).

At each iteration, it moves your instance by point\_distance(0, 0, dx, dy)/num\_iterations pixels in the given direction, and then checks for collisions. If num\_iterations is 4, and you want to move (8, 0),  it will move your instance by 2 pixels each iteration before checking for collisions.

If a collision is found during an iteration, it will try to move around it by moving your instance the same amount in a direction perpendicular to dx, dy, or toward the vector given in the optional xoff, yoff arguments.

If, at any iteration, the function finds a collision in the direction dx, dy and is able to move around it (either in a perpendicular direction or in the xoff, yoff direction), movement in that other direction will be counted as an iteration.

### Speed Limit

The optional max\_x\_move and max\_y\_move arguments let you specify the maximum distance your instance can move on the X and Y axes.

This serves to avoid a common problem in platformers, where the downward velocity (gravity) of the player is added to its horizontal speed when it hits the ground, making it walk faster for one frame.

NOTE This function uses the sprite collision mask of the instance to check for collisions (see [The Sprite Editor](../../../../The_Asset_Editors/Sprites.md) for more info).

#### Syntax:

move\_and\_collide(dx, dy, obj, \[num\_iterations\], \[xoff\], \[yoff\], \[max\_x\_move\], \[max\_y\_move\]);

| Argument | Type | Description |
| --- | --- | --- |
| dx | Real | The distance to try to move along the X axis |
| dy | Real | The distance to try to move along the Y axis |
| obj | Object Asset or Object Instance or Tile Map Element ID or Array | An object, instance, tile map ID, keywords all/other, or array containing these items |
| num_iterations | Real | OPTIONAL The number of steps to take, e.g. if (dx, dy) is (10, 0) and the number of steps to take is 5, then every iteration the instance will move the instance by 10/5 = 2 pixels before checking collisions. The default value is 4. |
| xoff | Real | OPTIONAL The x component of the direction in which to move in case of a collision; specify 0 to use the default behaviour (perpendicular direction of movement) |
| yoff | Real | OPTIONAL The y component of the direction in which to move in case of a collision; specify 0 to use the default behaviour (perpendicular direction of movement) |
| max_x_move | Real | OPTIONAL The maximum speed the instance should move on the X axis; specify -1 for no limit (which is the default behaviour) |
| max_y_move | Real | OPTIONAL The maximum speed the instance should move on the Y axis; specify -1 for no limit (which is the default behaviour) |

#### Returns:

[Array](../../../GML_Overview/Arrays.md) of [Object Instance](../../Asset_Management/Instances/Instance_Variables/id.md)s

#### Example 1: Basic Movement

move\_and\_collide(8, 0, all);

The above code will try to move the calling instance to the right 8 pixels and avoid instances of any object (indicated by the all keyword). Since the num\_iterations argument is not provided, the number of iterations is 4.

#### Example 2: Showing Instances Collided With

var \_colliding\_instances = move\_and\_collide(speed\_x, speed\_y, obj\_terrain);

for (var i = 0; i < array\_length(\_colliding\_instances); i++)
{
    var \_collider = \_colliding\_instances\[i\];
    with (\_collider)
    {
        show\_debug\_message("Collision with instance {0}", id);
    }
}

The above code executes the move\_and\_collide function in the calling instance. It tries to move it using the custom speed\_x and speed\_y variables, and tries to avoid instances of obj\_terrain. The instances that the calling instance collides with are stored in a temporary array \_colliding\_instances and shown using a for loop and [show\_debug\_message](../../../../../../../GameMaker_Language/GML_Reference/Debugging/show_debug_message.md).

#### Example 3: Tile Map

var \_tilemap = layer\_tilemap\_get\_id("Tiles\_1");

move\_and\_collide(8, 0, \_tilemap);

The above code will try to move the calling instance to the right 8 pixels and avoid colliding with tiles in the layer "Tiles\_1".

As you only need to get your tile map ID once, you can move the first line to the Create event.