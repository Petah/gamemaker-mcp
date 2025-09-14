---
title: "physics_fixture_set_linear_damping"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Fixtures/physics_fixture_set_linear_damping.htm"
converted: "2025-09-14T04:00:05.111Z"
---

# physics\_fixture\_set\_linear\_damping

Damping is used to reduce the physics world velocity of instances, and differs from friction in that friction only occurs when two instances with fixtures are in contact. Damping is also much cheaper to simulate than friction, but please note that damping is not a replacement for friction; the two effects can, and should, be used together. Here is an image to illustrate damping:

![Linear damping illustration](../../../../assets/Images/Scripting_Reference/GML/Reference/Physics/physics_fixture_set_linear_damping_image.png)Damping parameters should be between 0 and infinity, with 0 meaning no damping, and infinity meaning full damping. Normally you will use a damping value between 0 and 1, but you can use any non-negative value if required.

#### Syntax:

physics\_fixture\_set\_linear\_damping(fixture, damping)

| Argument | Type | Description |
| --- | --- | --- |
| fixture | Physics Fixture ID | the index of the fixture |
| damping | Real | the damping of the fixture, usually between 0 and 1 |

#### Returns:

N/A

#### Example:

physics\_fixture\_set\_linear\_damping(fix\_Ball, 0.1);

The code above will set the linear damping of the fixture indexed in "fix\_ball" to 0.1.