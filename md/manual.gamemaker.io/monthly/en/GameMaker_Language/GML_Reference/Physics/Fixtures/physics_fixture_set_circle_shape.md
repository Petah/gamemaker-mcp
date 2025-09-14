---
title: "physics_fixture_set_circle_shape"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Fixtures/physics_fixture_set_circle_shape.htm"
converted: "2025-09-14T04:00:04.996Z"
---

# physics\_fixture\_set\_circle\_shape

This function defines a circle shape for your fixture with a radius defined by the argument "rad".

#### Syntax:

physics\_fixture\_set\_circle\_shape(fixture, rad)

| Argument | Type | Description |
| --- | --- | --- |
| fixture | Physics Fixture ID | the index of the fixture |
| rad | Real | radius of the circle |

#### Returns:

N/A

#### Example:

physics\_fixture\_set\_circle\_shape(fix\_Ball, sprite\_get\_width(spr\_Ball) / 2);

The code above will apply a circle shape to the fixture indexed in the variable "fix\_Ball" with a radius the same as that of the width of the sprite "spr\_Ball" divided by 2.