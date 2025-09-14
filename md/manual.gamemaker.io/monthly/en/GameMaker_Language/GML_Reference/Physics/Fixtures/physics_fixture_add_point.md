---
title: "physics_fixture_add_point"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Fixtures/physics_fixture_add_point.htm"
converted: "2025-09-14T04:00:04.834Z"
---

# physics\_fixture\_add\_point

This function defines the points of a polygon which has previously been set to the fixture using either [physics\_fixture\_set\_polygon\_shape](physics_fixture_set_polygon_shape.md) or it can be used to add points to a chain of edge fixtures using the function [physics\_fixture\_set\_chain\_shape](physics_fixture_set_chain_shape.md). For a polygon shape, the points are relative to the origin of the fixture, with the 0, 0 position of the x/y axis being the centre, and the subsequent coordinates being calculated as usual in GameMaker with down/right being +x, +y and up/left being -x, -y. Here is an illustration to help you visualise this process:

![Physics polygon points example](../../../../assets/Images/Scripting_Reference/GML/Reference/Physics/physics_fixture_add_point_image.png)As you can see, any simple **convex** polygon can be modelled in this way, but **concave** polygons are _not_ supported at this moment. Finally, to close the polygon, you must bind the fixture to an instance. You should note too that you must also have at least **three** points defined for your polygon before binding it to an instance or you will get an error and that adding a point to a fixture that does not have a polygon shape set previously will also cause an error. Note too that the maximum number of points permitted for a fixture is **32**.

For chain shapes, which are simply a series of connected edge shapes, this function will set a point as a "connection" to chain the edges together at. Therefore, you need to have defined at least two points before binding the fixture to the instance, otherwise you will get an error. However, unlike for polygons, you are not limited to a maximum of 32 points and can add as many as you require to create the chain and the points are defined in actual room coordinates, rather than relative to the instance.

#### Syntax:

physics\_fixture\_add\_point(fixture, xpos, ypos)

| Argument | Type | Description |
| --- | --- | --- |
| fixture | Physics Fixture ID | the index of the fixture |
| xpos | Real | the x position of the point (relative to the fixture origin for polygon shapes) |
| ypos | Real | the y position of the point (relative to the fixture origin for polygon shapes) |

#### Returns:

N/A

#### Example:

physics\_fixture\_set\_polygon\_shape(fix\_ship);
physics\_fixture\_add\_point(fix\_ship, 0,0);
physics\_fixture\_add\_point(fix\_ship, -40, 100);
physics\_fixture\_add\_point(fix\_ship, 40, 100);

The code above will apply a polygon shape to the fixture indexed in the variable fix\_ship and then defines three points to create a triangular shape.