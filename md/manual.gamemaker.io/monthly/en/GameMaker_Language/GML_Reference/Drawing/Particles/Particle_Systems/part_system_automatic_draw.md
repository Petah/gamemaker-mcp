---
title: "part_system_automatic_draw"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Systems/part_system_automatic_draw.htm"
converted: "2025-09-14T03:59:51.895Z"
---

# part\_system\_automatic\_draw

This function can be used to switch off the drawing of a particle system so that any updates done to the system (automatic or otherwise) will not be seen.

This is a purely visual option and when set to false you will not be able to see the particles as they are not drawn, but they still exist and are changing position, colour, etc. as they would normally. When automatic drawing is off, you can _explicitly_ order GameMaker to draw the current state of the particle system using the function [part\_system\_drawit](part_system_drawit.md), and if you set this function to true again you can switch automatic drawing back on.

NOTE If you are using the simple effects created by the functions [effect\_create\_above](../effect_create_above.md) or [effect\_create\_below](../effect_create_below.md) then you can use the values of 0 (for below effects) or 1 (for above effects) as the particle system index and so toggle the automatic update for these too (this will also work to toggle updating for the GML Visual particle effects).

#### Syntax:

part\_system\_automatic\_draw(ind, automatic);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Particle System Instance | The particle system to change. |
| automatic | Boolean | Whether automatic drawing is on (true) or not (false). |

#### Returns:

N/A

#### Example:

part\_system\_automatic\_draw(global.Sname, false);

The above code switches off automatic drawing for the particle system indexed in the global variable Sname.