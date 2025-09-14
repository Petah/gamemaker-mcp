---
title: "physics_get_friction"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Fixtures/physics_get_friction.htm"
converted: "2025-09-14T04:00:05.189Z"
---

# physics\_get\_friction

When you bind a fixture to an instance using [physics\_fixture\_bind](physics_fixture_bind.md) this returns an "id" for the bound fixture. You can use this id to get the friction value of the bound fixture (_not_ the "base" fixture) at any time using this function.

#### Syntax:

physics\_get\_friction(fixture)

| Argument | Type | Description |
| --- | --- | --- |
| fixture | Physics Fixture ID | the id of the bound fixture |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

var fric = physics\_get\_friction(fix\_id);
physics\_set\_friction(fix\_id, fric + 0.1);

The code above gets the current friction value for the bound physics properties of the instance and then sets them to a different value.