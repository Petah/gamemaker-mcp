---
title: "part_emitter_create"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Emitters/part_emitter_create.htm"
converted: "2025-09-14T03:59:51.512Z"
---

# part\_emitter\_create

This function creates a new particle emitter in the given particle system.

The function will return the handle for the new emitter which must be stored in a variable and used in all further functions that reference the emitter, and the emitter itself must be destroyed when no longer being used to prevent memory leaks (this can be achieved using the specific emitter destroy functions ([part\_emitter\_destroy](part_emitter_destroy.md)/[part\_emitter\_destroy\_all](part_emitter_destroy_all.md)) or by destroying the whole particle system that the emitter belongs to ([part\_system\_destroy](../../../../../../../../GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Systems/part_system_destroy.md))).

NOTE Emitter IDs returned by this function are reused, e.g. if you first create three particle emitters they will have IDs 0, 1 and 2 assigned. If you then destroy the second emitter (which got an ID of 1) using [part\_emitter\_destroy](part_emitter_destroy.md) and then create another emitter, then this emitter will reuse the ID of 1. Since emitter ID 2 is in use, the next emitter will get an ID of 3, and so on.

#### Syntax:

part\_emitter\_create(ps);

| Argument | Type | Description |
| --- | --- | --- |
| ps | Particle System Instance | The particle system to create the emitter in. |

#### Returns:

[Particle Emitter](part_emitter_create.md)

#### Example:

p\_emit = part\_emitter\_create(Sname);

This will create a new particle emitter and store its handle in the variable p\_emit.