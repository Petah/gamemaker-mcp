---
title: "physics_set_friction"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Fixtures/physics_set_friction.htm"
converted: "2025-09-14T04:00:05.248Z"
---

# physics\_set\_friction

When you bind a fixture to an instance using [physics\_set\_friction](physics_set_friction.md) this returns an "id" for the bound fixture. You can use this id to set the friction value of the bound fixture, _not_ the "base" fixture, at any time using this function. Note that the friction is usually set to a value between 0 and 1, but you can use any non-negative value if required.

NOTE To make the physics engine use the new value in all cases, you'll need to deactivate and reactivate the physics instance using [phy\_active](../Physics_Variables/phy_active.md). See [Updating Existing Contacts](Fixtures.htm#h).

#### Syntax:

physics\_set\_friction(fixture, friction)

| Argument | Type | Description |
| --- | --- | --- |
| fixture | Physics Fixture ID | the id of the bound fixture |
| friction | Real | the new friction value to apply |

#### Returns:

N/A

#### Example:

var fric = physics\_get\_friction(fix\_id);
physics\_set\_friction(fix\_id, fric + 0.1);

The code above gets the current friction value for the bound physics properties of the instance and then sets them to a different value.