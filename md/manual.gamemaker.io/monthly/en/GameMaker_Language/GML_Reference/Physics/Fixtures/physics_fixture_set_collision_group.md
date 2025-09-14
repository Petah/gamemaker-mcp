---
title: "physics_fixture_set_collision_group"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Fixtures/physics_fixture_set_collision_group.htm"
converted: "2025-09-14T04:00:05.010Z"
---

# physics\_fixture\_set\_collision\_group

Once you have created your fixture you can define it as being part of a collision group. This means that you can tell instances with that fixture to _always_ collide or _never_ collide with other instance that have fixtures bound to them with the same collision group. The values that can be assigned are based on positive or negative numbers, with 0 being the default value (meaning that the instance with this fixture setting is ignored unless a collision event is created for it). Here is an image to help explain:

![Collision groups example](../../../../assets/Images/Scripting_Reference/GML/Reference/Physics/physics_fixture_set_collision_group_image.png)As you can see, setting collision groups can be very useful to create complex physical bodies that interact with the physical world around them, but not with each other. However, it should be noted that due to the complexity of calculating collisions based on groups like this, it is recommend that you try to keep the number of groups in use in any one room to an absolute minimum.

NOTE The values for the collision group can range from -32,768 to 32,767 (both **inclusive**).

#### Syntax:

physics\_fixture\_set\_collision\_group(fixture, group);

| Argument | Type | Description |
| --- | --- | --- |
| fixture | Physics Fixture ID | The fixture that is to be bound |
| group | Real | The group that this fixture is assigned to (either a positive value, 0, or a negative value) |

#### Returns:

N/A

#### Example:

physics\_fixture\_set\_collision\_group(fix\_Wheel, -1);

The code above will set the fixture indexed in the variable "fix\_Wheel" to be part of the group "-1".