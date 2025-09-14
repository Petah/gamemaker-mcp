---
title: "Collisions"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Collisions/Collisions.htm"
converted: "2025-09-14T04:00:02.656Z"
---

# Collisions

When planning motions or deciding on certain actions, it is often important to see whether there are collisions with other objects at certain places within the game world, and often choosing the right collision function for the job is the most important task of all. GameMaker has a number of built-in functions to help you deal with collisions correctly and in accordance with the needs of your project.

NOTE Collision checks are limited to the space that the checking instance is placed in, so e.g. an instance on a Display UI layer cannot collide with instances placed on a room layer or a Viewport UI layer. This applies to both the Collision events and [Collision functions](Collisions.md).

## How To Check Collisions

### Collisions With Objects

The simplest way to check for collisions against objects is to use [place\_meeting](place_meeting.md).

Step Event

if (!place\_meeting(x + 4, y, obj\_rock))
{
    x += 4;
}

This checks for collisions against instances of obj\_rock only. If there is no rock at x + 4, it changes the X position to move the instance there.

### Collisions With Multiple Objects

You can check for collisions against multiple objects, in two ways:

-   Assign a [parent](../../../../The_Asset_Editors/Object_Properties/Parent_Objects.md) to those objects, and check against that single parent
-   Or, pass an [array](../../../GML_Overview/Arrays.md) containing the objects you want to check against

Using the second method of passing an array, your code would look like this:

if (!place\_meeting(x + 4, y, \[obj\_rock, obj\_bush\]))
{
    x += 4;
}

This checks for collisions against instances of obj\_rock and obj\_bush in the same function call.

TIP It is recommended to use the parenting method for multiple collision checks, as you can use the same parent in multiple function calls, without having to keep track of an array.

The [place\_meeting](place_meeting.md) function only returns true or false. If you need to access the instance that was found in collision, use [instance\_place](../../Asset_Management/Instances/instance_place.md), which returns an instance handle.

### Collisions With Tile Maps

In addition to objects, you can also pass a [Tile Map Element ID](../../Asset_Management/Rooms/Tile_Map_Layers/layer_tilemap_get_id.md) to a collision function. This will check for collisions with that Tile Map.

Use [layer\_tilemap\_get\_id](../../Asset_Management/Rooms/Tile_Map_Layers/layer_tilemap_get_id.md) to get the Tile Map ID for a layer, and then pass that ID into a collision function.

Create Event

tilemap = layer\_tilemap\_get\_id("TileLayer");

Step Event

if (!place\_meeting(x + 4, y, tilemap))
{
    x += 4;
}

You can combine objects and Tile Maps when passing an array to a collision function.

Keep in mind:

-   Collisions against Tile Maps are checked using the collision mask of the sprite used for the Tile Set, which can be modified in [The Sprite Editor](../../../../The_Asset_Editors/Sprites.md). This means that Tile Maps that do not have a Tile Set asset attached (or the Tile Set does not have a sprite) will not work with collision functions (it will always return false).
-   "**Disable Source Sprite Export**" needs to be **unchecked** in your Tile Set's [editor](../../../../The_Asset_Editors/Tile_Sets.md) for tile collisions to work, since the sprite is needed for collision checking.
-   A function like [instance\_place](../../Asset_Management/Instances/instance_place.md) or [collision\_circle](collision_circle.md) (and other equivalents) may return 0 if a collision was found with a Tile Map having the ID 0. This means you should not use the return value as a boolean condition. Instead, check whether the return value is not [noone](../../../GML_Overview/Instance%20Keywords/noone.md), meaning a collision was found.

## Bounding Boxes

Some instances will use a rectangular bounding box for checking collisions (unless a different mask shape is selected).

These bounding boxes use an inclusive system, i.e. they include the bottom-most and right-most edges. This means that the bounding box for a 16x16 collision mask is generated from (0.0, 0.0) to (16.0, 16.0) (relative to the instance).

NOTE You can get these values using the [bbox\_left](../../Asset_Management/Sprites/Sprite_Instance_Variables/bbox_left.md), [bbox\_top](../../Asset_Management/Sprites/Sprite_Instance_Variables/bbox_top.md), [bbox\_right](../../Asset_Management/Sprites/Sprite_Instance_Variables/bbox_right.md) and [bbox\_bottom](../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/bbox_bottom.md) variables.

NOTE Since the bounding box is inclusive (as explained above), it will always extend 1 pixel beyond its bottom-right corner compared to the sprite's bounding box. For example, a 16x16 square sprite's [right edge offset](../../Asset_Management/Sprites/Sprite_Information/sprite_get_bbox_right.md) will be 15.0 (the 16th pixel when starting from 0), however an instance using this sprite will give you a [bbox\_right](../../Asset_Management/Sprites/Sprite_Instance_Variables/bbox_right.md) of 16 (+ its X position).

For two instances to be in collision, their bounding boxes have to overlap. At a pixel level, an overlap is counted when the centre of that pixel is covered.

For example, if you're trying to collide with a bounding box covering the area from (0.0, 0.0) to (16.0, 16.0), the edge of your mask has to touch the area between  (0.5, 0.5) and (15.5, 15.5) for a collision to be counted.

The functions [collision\_point](collision_point.md) and [collision\_line](collision_line.md) are exceptions, where they don't have to cover the pixel centre but can be checked anywhere inside the pixel. In the above example, a point check at (15.99, 15.99) would return true, but (16.0, 16.0) would not.

## Simple Collision Checking

The following functions deal with the various ways in which you can have an instance check for collisions with another instance:

-   [place\_empty](../../../../../../../GameMaker_Language/GML_Reference/Movement_And_Collisions/Collisions/place_empty.md)
-   [place\_free](place_free.md)
-   [place\_meeting](place_meeting.md)
-   [position\_empty](position_empty.md)
-   [position\_meeting](../../../../../../../GameMaker_Language/GML_Reference/Movement_And_Collisions/Collisions/position_meeting.md)
-   [position\_change](position_change.md)
-   [position\_destroy](position_destroy.md)
-   [instance\_place](../../Asset_Management/Instances/instance_place.md)
-   [instance\_place\_list](../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Instances/instance_place_list.md)
-   [instance\_position](../../Asset_Management/Instances/instance_position.md)
-   [instance\_position\_list](../../Asset_Management/Instances/instance_position_list.md)

## Advanced Collision Checking

The following functions can be used for this (as well as other functions detailed in the sections relating to [**Moving Around**](../../../../../../../GameMaker_Language/GML_Reference/Movement_And_Collisions/Movement/Movement.md) and [**Instances**](../../Asset_Management/Instances/Instances.md)). These collision functions all work slightly differently but they maintain three common arguments which we will explain here:

-   **obj**: This is where we specify the object that the function has to check for a collision with. It can be an instance id, an object type, or the special GM keyword **all**. It is also worth noting that if the object type chosen is the designated **parent** of other objects, then all _children_ of that object will be included in this check too.
-   **prec**: This can be either true or false and relates to the precision of the collision checking. If set to true, then precise collisions are to be calculated (but only if the object being checked for has "precise" marked for its collision detection in its mask properties) which is a slightly more complex task for the CPU and so should be used with caution. If false then collisions will be calculated based on the bounding box of the object to be checked for.
-   **notme**: You may need to check for collisions with an object that has the same index as the object that runs the code, so to prevent the code finding a collision with itself, you can set this to true. If you are specifically looking for the instance of the object running the code, or it's not important, it can be left as false.

The basic functions will return either the ID of an instance found to be colliding, or the special keyword noone when there is no collision, while the _list_ functions will return the number of instances that are in collision and populate a pre-made DS list with their IDs. Note that if there are multiple collisions with the areas defined by these functions and instances of the given object, only _one_ instance ID is returned, and it can be _any one of the instances in the collision_.

The following functions exist that deal with advanced collisions.

-   [collision\_circle](collision_circle.md)
-   [collision\_circle\_list](../../../../../../../GameMaker_Language/GML_Reference/Movement_And_Collisions/Collisions/collision_circle_list.md)
-   [collision\_ellipse](collision_ellipse.md)
-   [collision\_ellipse\_list](collision_ellipse_list.md)
-   [collision\_line](collision_line.md)
-   [collision\_line\_list](../../../../../../../GameMaker_Language/GML_Reference/Movement_And_Collisions/Collisions/collision_line_list.md)
-   [collision\_point](collision_point.md)
-   [collision\_point\_list](collision_point_list.md)
-   [collision\_rectangle](../../../../../../../GameMaker_Language/GML_Reference/Movement_And_Collisions/Collisions/collision_rectangle.md)
-   [collision\_rectangle\_list](collision_rectangle_list.md)

## Collision Checking Without A Mask

All of the above functions are related to collision checking _instances_, and as such rely on the collision mask that is defined for the instance. However, there are many moments when you require to check for "collisions" with a point or an area, especially when your instance does not have a sprite assigned, when you are working with the mouse, etc. Therefore GameMaker also provides the following functions to help you in these situations:

-   [point\_in\_rectangle](point_in_rectangle.md)
-   [point\_in\_triangle](point_in_triangle.md)
-   [point\_in\_circle](point_in_circle.md)
-   [rectangle\_in\_rectangle](../../../../../../../GameMaker_Language/GML_Reference/Movement_And_Collisions/Collisions/rectangle_in_rectangle.md)
-   [rectangle\_in\_triangle](rectangle_in_triangle.md)
-   [rectangle\_in\_circle](rectangle_in_circle.md)

## Physics Collisions

When using the built-in physics, the above collision functions are not guaranteed to work for physics-enabled instances. This is mainly due to the fact that these instances no longer use the majority of the regular built-in variables (instead, physics-enabled instances have their [own set of variables](../../Physics/Physics_Variables/Physics_Variables.md)) and neither do they use the collision mask or bounding box, as they use [Fixtures](../../Physics/Fixtures/Fixtures.md) instead. However, there is a special function for testing collisions with physics enabled that checks for overlapping fixtures:

-   [physics\_test\_overlap](../../Physics/physics_test_overlap.md)
-   [physics\_raycast](../../Physics/physics_raycast.md)