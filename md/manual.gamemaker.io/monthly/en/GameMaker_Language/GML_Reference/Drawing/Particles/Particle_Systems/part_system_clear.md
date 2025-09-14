---
title: "part_system_clear"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Systems/part_system_clear.htm"
converted: "2025-09-14T03:59:51.924Z"
---

# part\_system\_clear

This function clears the given particle system to its default state, removing all emitters and resetting its depth and position (if they had been changed).

You should be careful using this function as if you have any instance setting or bursting or any other action using an emitter associated with this system, you will get an error unless you are using the [part\_emitter\_exists](../../../../../../../../GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Emitters/part_emitter_exists.md) function to check. There is also no need to call the [part\_emitter\_exists](../../../../../../../../GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Emitters/part_emitter_exists.md) function as this is taken care of automatically too.

NOTE This function will clear the visible particles in the particle system, but it does **not** clear the particle properties, nor does it remove them from memory. For that you should use the functions [part\_type\_clear](../Particle_Types/part_type_clear.md) and [part\_type\_destroy](../Particle_Types/part_type_destroy.md).

#### Syntax:

part\_system\_clear(ind);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Particle System Instance | The particle system to clear. |

#### Returns:

N/A

#### Example:

part\_system\_clear(global.Sname);

The above code will clear the particle system indexed in the global variable Sname to its default state.