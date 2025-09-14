---
title: "part_system_depth"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Systems/part_system_depth.htm"
converted: "2025-09-14T03:59:51.994Z"
---

# part\_system\_depth

With this function you can set the draw depth for the particle system, much the same as you can set the _render depth_ of different layers within the room, where a low draw depth means that it will appear on top of all things drawn with a higher depth, and a high draw depth placing it below everything with a lower draw depth.

NOTE Depth values are approximate. If you try to draw things at depth values close to the maximum depth and minimum depth, they may not be drawn due to inaccuracies introduced by the calculations.

#### Syntax:

part\_system\_depth(ind, depth);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Particle System Instance | The particle system to change. |
| depth | Real | The depth at which to set the particle system. |

#### Returns:

N/A

#### Example:

global.Sname = part\_system\_create();
part\_system\_depth(global.Sname, -1000);

The above code will create a particle system and store its index in the global variable Sname. this system is then given a low depth of -1000, meaning that it will appear above everything with a higher draw depth.