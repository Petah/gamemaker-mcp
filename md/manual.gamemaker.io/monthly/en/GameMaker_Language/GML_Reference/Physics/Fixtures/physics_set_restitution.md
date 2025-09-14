---
title: "physics_set_restitution"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Fixtures/physics_set_restitution.htm"
converted: "2025-09-14T04:00:05.262Z"
---

# physics\_set\_restitution

When you bind a fixture to an instance using [physics\_fixture\_bind](physics_fixture_bind.md) this returns an "id" for the bound fixture. You can use this id to set the restitution value of the bound fixture, _not_ the "base" fixture, at any time using this function. Restitution is usually set as a value between 0 and 1, but you can use higher values if required, although the results may be unpredictable.

NOTE To make the physics engine use the new value in all cases, you'll need to deactivate and reactivate the physics instance using [phy\_active](../Physics_Variables/phy_active.md). See [Updating Existing Contacts](Fixtures.htm#h).

#### Syntax:

physics\_set\_restitution(fixture, restitution)

| Argument | Type | Description |
| --- | --- | --- |
| fixture | Physics Fixture ID | the id of the bound fixture |
| restitution | Real | the new restitution value to apply |

#### Returns:

N/A

#### Example:

var rest = physics\_get\_restitution(fix\_id);
physics\_set\_restitution(fix\_id, rest \* 2);

The code above gets the current restitution value for the bound physics properties of the instance and then sets them to a different value.