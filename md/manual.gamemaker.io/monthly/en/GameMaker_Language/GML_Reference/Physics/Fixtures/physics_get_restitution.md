---
title: "physics_get_restitution"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Fixtures/physics_get_restitution.htm"
converted: "2025-09-14T04:00:05.202Z"
---

# physics\_get\_restitution

When you bind a fixture to an instance using [physics\_fixture\_bind](physics_fixture_bind.md) this returns an "id" for the bound fixture. You can use this id to get the restitution (the "bounciness" property) value of the bound fixture, _not_ the "base" fixture, at any time using this function.

#### Syntax:

physics\_get\_restitution(fixture)

| Argument | Type | Description |
| --- | --- | --- |
| fixture | Physics Fixture ID | the id of the bound fixture |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

var rest = physics\_get\_restitution(fix\_id);
physics\_set\_restitution(fix\_id, rest \* 2);

The code above gets the current restitution value for the bound physics properties of the instance and then sets them to a different value.