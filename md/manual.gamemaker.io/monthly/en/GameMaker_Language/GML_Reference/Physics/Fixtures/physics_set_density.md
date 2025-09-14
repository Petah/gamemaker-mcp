---
title: "physics_set_density"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Fixtures/physics_set_density.htm"
converted: "2025-09-14T04:00:05.234Z"
---

# physics\_set\_density

When you bind a fixture to an instance using [physics\_fixture\_bind](physics_fixture_bind.md) this returns an "id" for the bound fixture. You can use this id to set the density value of the bound fixture, _not_ the "base" fixture, at any time using this function.

NOTE To make the physics engine use the new value in all cases, you'll need to deactivate and reactivate the physics instance using [phy\_active](../Physics_Variables/phy_active.md). See [Updating Existing Contacts](Fixtures.htm#h).

#### Syntax:

physics\_set\_density(fixture, density)

| Argument | Type | Description |
| --- | --- | --- |
| fixture | Physics Fixture ID | the id of the bound fixture |
| density | Real | the new density value to apply |

#### Returns:

N/A

#### Example:

var density = physics\_get\_density(fix\_id);
physics\_set\_density(fix\_id, density - 0.1);

The code above gets the current density value for the bound physics properties of the instance and then sets them to a different value.