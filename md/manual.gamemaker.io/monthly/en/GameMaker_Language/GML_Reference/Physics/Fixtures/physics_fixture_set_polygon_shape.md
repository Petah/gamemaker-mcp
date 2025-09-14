---
title: "physics_fixture_set_polygon_shape"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Fixtures/physics_fixture_set_polygon_shape.htm"
converted: "2025-09-14T04:00:05.126Z"
---

# physics\_fixture\_set\_polygon\_shape

This function sets a polygon shape for your fixture, but you will need to use [physics\_fixture\_add\_point](physics_fixture_add_point.md) to actually define the shape of this polygon relative to the origin of the fixture. The polygon is closed when the fixture is bound to an instance. You should note too that this function _must_ be called before defining any points, and you must also have at least three points defined for your polygon before binding it to an instance or you will get an error.

#### Syntax:

physics\_fixture\_set\_polygon\_shape(fixture)

| Argument | Type | Description |
| --- | --- | --- |
| fixture | Physics Fixture ID | the index of the fixture |

#### Returns:

N/A

#### Example:

physics\_fixture\_set\_polygon\_shape(fix\_ship);
physics\_fixture\_add\_point(fix\_ship, 0,0);
physics\_fixture\_add\_point(fix\_ship, -40, 100);
physics\_fixture\_add\_point(fix\_ship, 40, 100);

The code above will apply a polygon shape to the fixture indexed in the variable fix\_ship and then defines three points to create a triangular shape.