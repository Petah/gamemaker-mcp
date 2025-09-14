---
title: "part_system_colour"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Systems/part_system_colour.htm"
converted: "2025-09-14T03:59:51.944Z"
---

# part\_system\_colour

This function changes the blend colour and alpha that the given particle system is rendered with. This is similar to [image\_blend](../../../Asset_Management/Sprites/Sprite_Instance_Variables/image_blend.md) and [image\_alpha](../../../Asset_Management/Sprites/Sprite_Instance_Variables/image_alpha.md) in instances.

#### Syntax:

part\_system\_colour(ind, color, alpha);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Particle System Instance | The particle system to change. |
| color | Colour | The new colour of the particle system. |
| alpha | Real | The new alpha of the particle system. |

#### Returns:

N/A

#### Example:

part\_system\_colour(pt\_sys, c\_red, 0.5);

This changes the colour of a particle system to red, with an alpha of 0.5.