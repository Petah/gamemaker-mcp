---
title: "sprite_get_convex_hull"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_convex_hull.htm"
converted: "2025-09-14T03:59:41.341Z"
---

# sprite\_get\_convex\_hull

This function generates the points of a convex hull for the given sprite or one of its subimages and returns them as an array containing the points as (x, y) pairs.

The sprite can be one added through [The Asset Browser](../../../../../Introduction/The_Asset_Browser.md), or one added at runtime, using [sprite\_add](../Sprite_Manipulation/sprite_add.md) or one of the [other functions for creating sprites at runtime](../Sprite_Manipulation/Sprite_Manipulation.htm#func_ref_creating_modifying_sprites).

The convex hull is a set of points that surround the sprite's pixels as closely as possible. Any "holes" in the sprite are included in the convex hull.

![](../../../../../assets/Images/Scripting_Reference/GML/Reference/Sprites/convex_hull_examples.png)

Different sprites with their convex hull shape. The red dots mark the shape's points.

The returned array contains the (x, y) coordinates of the points in pairs, e.g., element 0 holds the x coordinate of the first point and element 1 its y coordinate, element 2 holds the x coordinate of the second point and element 3 its y coordinate, etc.

NOTE The function returns the points in _counterclockwise_ order. If you use these points to create a polygon fixture for use with the physics engine you need to pass them in reverse order to specify them in _clockwise_ order. See [physics\_fixture\_add\_point](../../../Physics/Fixtures/physics_fixture_add_point.md).

#### Syntax:

sprite\_get\_convex\_hull(sprite, \[max\_pts\]);

| Argument | Type | Description |
| --- | --- | --- |
| sprite | Sprite Asset | The sprite to generate the convex hull of |
| max_pts | Real | OPTIONAL The maximum number of points to return in the array or no maximum if not specified (as many points as it takes to generate the shape) |
| subimg | Real | OPTIONAL The subimage of the sprite (defaults to 0) |

#### Returns:

[Array](../../../../GML_Overview/Arrays.md)

#### Example 1: Basic Use

var \_arr\_coordinates = sprite\_get\_convex\_hull(sprite\_index);

The above code gets the convex hull of the calling instance's [sprite\_index](../Sprite_Instance_Variables/sprite_index.md) and assigns the result to a temporary variable \_arr\_coordinates.

#### Example 2: Creating a Polygon Fixture

Create Event

var \_arr\_coordinates = sprite\_get\_convex\_hull(spr\_rock);
var \_num\_points = array\_length(\_arr\_coordinates)/2;
var \_fix = physics\_fixture\_create();
physics\_fixture\_set\_density(\_fix, 0);
physics\_fixture\_set\_polygon\_shape(\_fix);
for(var i = \_num\_points-1;i >= 0;i--)
{
    var \_x = \_arr\_coordinates\[i \* 2\];
    var \_y = \_arr\_coordinates\[i \* 2 + 1\];
    physics\_fixture\_add\_point(\_fix, \_x, \_y);
}
fix\_bound = physics\_fixture\_bind(\_fix, id);
physics\_fixture\_delete(\_fix);

The above code shows how to create a polygon fixture out of the convex hull of a sprite.

First, the convex hull of a sprite spr\_rock is obtained using sprite\_get\_convex\_hull and stored in a variable \_arr\_coordinates. As the array contains an x and y coordinate for every point, the number of points is the array's length divided by 2. This value is stored in another variable \_num\_points.

Next, a fixture is created and its density set to 0. The fixture's shape is then set to a polygon shape and the points are added in a [for](../../../../GML_Overview/Language_Features/for.md) loop. Note that the points are added in reverse order since the points of polygon fixtures need to be defined _in clockwise order_.

Finally, the fixture is bound to the instance running the code and deleted. The bound fixture is stored in an instance variable fix\_bound in order to keep track of it so it can be properly cleaned up later on.