---
title: "part_system_update"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Systems/part_system_update.htm"
converted: "2025-09-14T03:59:52.135Z"
---

# part\_system\_update

This function will advance the given particle system one step in game time and can be used to simulate the particle system behaviour when automatic updating is off, or it can be used to advance a particle system to a specific point all in one step. For example, if you have a particle system for snow, and you want it to appear that the snow is falling right from the moment the player enters the room then you may wish to advance your snow particles for a few seconds in the Create event of an instance so that the first time they are drawn, there are particles all over the screen (the code example below shows this). You can also use this function when automatic updating of the system is switched off by the function [part\_system\_automatic\_update](part_system_automatic_update.md) to move the system along.

#### Syntax:

part\_system\_update(ind);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Particle System Instance | The particle system to update. |

#### Returns:

N/A

#### Example:

repeat (game\_get\_speed(gamespeed\_fps) \* 3)
{
    part\_system\_update(global.RainSys);
}

The above code will advance the particle system indexed in the global variable RainSys by 3 seconds.