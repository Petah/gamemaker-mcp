---
title: "part_type_destroy"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Types/part_type_destroy.htm"
converted: "2025-09-14T03:59:52.377Z"
---

# part\_type\_destroy

This function removes the specified particle type from the game.

When you use this function, all particles of the given type will disappear from the room and the particle itself is removed from memory, so this function should be used only when you no longer need the particle.

#### Syntax:

part\_type\_destroy(ind);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Particle Type | The index of the particle type to destroy. |

#### Returns:

N/A

#### Example:

if (part\_particles\_count(smoke\_sys) == 0)
{
    part\_type\_destroy(smoke\_part);
    part\_system\_destroy(smoke\_sys);
    instance\_destroy();
}
else
{
    alarm\[0\] = 1;
}

The above code checks a particle system to see if any particles are currently visible in the room and if not, the particles, the system and the instance are destroyed.