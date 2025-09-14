---
title: "physics_fixture_set_awake"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Fixtures/physics_fixture_set_awake.htm"
converted: "2025-09-14T04:00:04.938Z"
---

# physics\_fixture\_set\_awake

When you start a room with physics, or bind fixtures to instances, the fixtures are always considered to be "awake"... that is to say, they are processing events and interacting with the surrounding instances. However this can sometimes lead to problems, especially if you have a number of instances with fixtures that are side by side when a room starts (think of a tower made of various instances with fixtures) as with them being "awake" they will move and possibly change position due to the sudden start of gravity and collisions affecting them. In these cases you can use this function to flag the fixture as been "asleep", in which case it will not be processing anything when it is first created in the room.

#### Syntax:

physics\_fixture\_set\_awake(fixture, state)

| Argument | Type | Description |
| --- | --- | --- |
| fixture | Physics Fixture ID | the index of the fixture |
| flag | Boolean | whether a fixture is awake (true) or not (false) |

#### Returns:

N/A

#### Example:

physics\_fixture\_set\_awake(fix\_Cloud, true);

The code above flag the fixture as being "awake" when bound to an instance.