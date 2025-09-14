---
title: "part_system_automatic_update"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Systems/part_system_automatic_update.htm"
converted: "2025-09-14T03:59:51.911Z"
---

# part\_system\_automatic\_update

This function controls whether GameMaker should update the particle system automatically or not.

Normally you would not need to use this function as the default value of true (automatic update is on) is what you wish to happen. However, for special effects or for pausing the game, you can set this to false and it will prevent any updates being carried out on the given particle system unless _explicitly_ commanded by the use of the function [part\_system\_update](part_system_update.md) or you use this function again to turn automatic updates on. No updating means that particles created in this system will no longer change position, colour or any other parameter and that emitters will cease to work too, "freezing" the system at the exact point in which the automatic update was set to false.

NOTE If you are using the simple effects created by the functions [effect\_create\_above](../effect_create_above.md) or [effect\_create\_below](../../../../../../../../GameMaker_Language/GML_Reference/Drawing/Particles/effect_create_below.md) then you can use the values of 0 (for below effects) or 1 (for above effects) as the particle system index and so toggle the automatic update for these too (this will also work to toggle updating for the GML Visual particle effects).

#### Syntax:

part\_system\_automatic\_update(ind, automatic);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Particle System Instance | The particle system to change. |
| automatic | Boolean | Whether automatic updating is on (true) or not (false). |

#### Returns:

N/A

#### Example:

if (global.pause)
{
    part\_system\_automatic\_update(global.Sname, false);
}

The above code will switch off the particle updates if the global variable pause is true.