---
title: "part_type_create"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Types/part_type_create.htm"
converted: "2025-09-14T03:59:52.342Z"
---

# part\_type\_create

This function creates a new particle type. The return value should be stored in a variable for use in all subsequent particle functions.

NOTE The particle type needs to be cleaned up manually using [part\_type\_destroy](part_type_destroy.md) when no longer used, otherwise you risk a memory leak that will negatively impact your final game.

#### Syntax:

part\_type\_create()

#### Returns:

[Particle Type](part_type_create.md)

#### Example:

my\_part = part\_type\_create();

This will create a new particle type, storing its index in the variable my\_part.