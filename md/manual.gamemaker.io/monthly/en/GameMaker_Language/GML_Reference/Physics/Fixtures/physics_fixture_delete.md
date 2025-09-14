---
title: "physics_fixture_delete"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Fixtures/physics_fixture_delete.htm"
converted: "2025-09-14T04:00:04.902Z"
---

# physics\_fixture\_delete

Since once a fixture has been bound to an instance that instance maintains the fixtures properties, we can remove the fixture from memory with this function, particularly if we no longer plan to use it again. Please note that failure to remove fixtures after they are no longer needed may cause a memory leak which will slow down and eventually crash your game, so you should take care to clean up properly after defining and binding fixtures.

#### Syntax:

physics\_fixture\_delete(fixture)

| Argument | Type | Description |
| --- | --- | --- |
| fixture | Physics Fixture ID | the fixture that is to be deleted from memory |

#### Returns:

N/A

#### Example:

var fix, inst;
fix = physics\_fixture\_create();
physics\_fixture\_set\_circle\_shape(fix, 16);
physics\_fixture\_set\_density(fix, 1.0);
inst = instance\_create\_layer(x, y, "Instances", genericBodyObject);
physics\_fixture\_bind(fix, inst);
physics\_fixture\_delete(fix);

The code above will create a fixture and assign its index to the variable "fix". It then defines the shape and density of the fixture before binding it to the instance that was created with the index stored in the variable "inst". Finally, the fixture is deleted to prevent memory leaks as it is no longer needed.