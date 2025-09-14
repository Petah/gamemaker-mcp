---
title: "physics_fixture_set_box_shape"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Fixtures/physics_fixture_set_box_shape.htm"
converted: "2025-09-14T04:00:04.953Z"
---

# physics\_fixture\_set\_box\_shape

This function defines a box shape for your fixture. It takes the _half_ width and height as the physics world uses this value far more than whole width/height values to determine things like collisions.

#### Syntax:

physics\_fixture\_set\_box\_shape(fixture, halfWidth, halfHeight)

| Argument | Type | Description |
| --- | --- | --- |
| fixture | Physics Fixture ID | the index of the fixture |
| halfWidth | Real | the half width of the box |
| halfHeight | Real | the half height of the box |

#### Returns:

N/A

#### Example:

physics\_fixture\_set\_box\_shape(fix\_Border, room\_width/2, 10);

The code above will apply a box shape to the fixture indexed in the variable "fix\_Border" with a width of the room and a height of 20 pixels.