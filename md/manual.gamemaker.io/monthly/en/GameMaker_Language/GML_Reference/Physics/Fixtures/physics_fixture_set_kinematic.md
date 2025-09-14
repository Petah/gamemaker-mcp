---
title: "physics_fixture_set_kinematic"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Fixtures/physics_fixture_set_kinematic.htm"
converted: "2025-09-14T04:00:05.098Z"
---

# physics\_fixture\_set\_kinematic

There will be certain instances in a physics based game which you want to move around but do not wish to be acted on by forces such as gravity, nor forces incurred by collisions with dynamic objects (think of moving platforms in a platform game, for example). For such objects simply setting the density of a fixture to 0 will mean that the physics will assume that the object is intended to be static. However, should you set the [phy\_speed\_x](../Physics_Variables/phy_speed_x.md), [phy\_speed\_y](../Physics_Variables/phy_speed_y.md) or [phy\_angular\_velocity](../Physics_Variables/phy_angular_velocity.md) variables for an instance that has had such a fixture bound to it, it will be converted into a kinematic object and begin movement. Change the instance from static to kinematic mid-simulation can be expensive in terms of processing (depending on the state of the instances in the physics world) and therefore it is recommended to set the fixture to be kinematic using this function prior to binding it to an instance, so that it will be unaffected by collisions and forces (such as gravity) but may move with constant linear and/or angular velocity.

#### Syntax:

physics\_fixture\_set\_kinematic(fixture)

| Argument | Type | Description |
| --- | --- | --- |
| fixture | Physics Fixture ID | the index of the fixture |

#### Returns:

N/A

#### Example:

physics\_fixture\_set\_kinematic(fix\_Cloud);

The code above will indicate that the fixture indexed in "fix\_Cloud" should be marked as kinematic.