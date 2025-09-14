---
title: "part_type_clear"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Types/part_type_clear.htm"
converted: "2025-09-14T03:59:52.237Z"
---

# part\_type\_clear

This function "resets" a particle type, returning all the values for each of the type's properties (life, colour, alpha, orientation, etc.) to their defaults.

NOTE This function does not remove any particles currently visible in the room, for that you should be using [part\_particles\_clear](../Particle_Systems/part_particles_clear.md).

#### Syntax:

part\_type\_clear(ind);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Particle Type | The index of the particle type to clear. |

#### Returns:

N/A

#### Example:

part\_type\_clear(global.explode\_part);

The above code will clear the particle type indexed in the global variable explode\_part to its default values.