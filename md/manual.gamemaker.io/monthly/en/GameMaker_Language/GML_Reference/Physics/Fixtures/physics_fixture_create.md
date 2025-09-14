---
title: "physics_fixture_create"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Fixtures/physics_fixture_create.htm"
converted: "2025-09-14T04:00:04.887Z"
---

# physics\_fixture\_create

The first step in setting up a fixture is creating it with this function. The returning index should be stored in a variable to be used in all further functions that are used to define and use this fixture.

NOTE You can only define a fixture within a room that has [Physics](../../../../The_Asset_Editors/Room_Properties/Room_Properties.htm#physics) enabled.

#### Syntax:

physics\_fixture\_create()

#### Returns:

[Physics Fixture ID](physics_fixture_create.md)

#### Example:

fix\_Ball = physics\_fixture\_create();

The code above will create a fixture and store its index in the variable "fix\_Ball".