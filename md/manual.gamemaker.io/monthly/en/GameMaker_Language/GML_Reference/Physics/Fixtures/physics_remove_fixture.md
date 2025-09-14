---
title: "physics_remove_fixture"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Fixtures/physics_remove_fixture.htm"
converted: "2025-09-14T04:00:05.215Z"
---

# physics\_remove\_fixture

This function removes (or "un-binds") a fixture from an instance or instances.

It requires the unique "id" of the bound fixture (as returned by the function [physics\_fixture\_bind](physics_fixture_bind.md) and it will remove all the currently defined physics properties for the instance, permitting you to redefine a new fixture and bind that to the instance. In this way you can change the instances physical properties without having to destroy and re-create it.

#### Syntax:

physics\_remove\_fixture(id, fixture);

| Argument | Type | Description |
| --- | --- | --- |
| id | Object Instance | The ID of the instance to remove the fixture from |
| fixture | Physics Fixture ID | The ID of the fixture that is to be removed from the instance |

#### Returns:

N/A

#### Example:

physics\_remove\_fixture(id, my\_fix);

The code above will remove the fixture with the "id" stored in the variable "my\_fix" from the instance.