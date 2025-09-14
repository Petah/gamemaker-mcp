---
title: "part_system_layer"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Systems/part_system_layer.htm"
converted: "2025-09-14T03:59:52.102Z"
---

# part\_system\_layer

This function moves a particle system from its current layer to a new one.

You supply the particle system handle (as returned by the function [part\_system\_create\_layer](part_system_create_layer.md)) and then the layer handle (as returned by the function [layer\_create](../../../Asset_Management/Rooms/General_Layer_Functions/layer_create.md) or the name of the layer to use as a string - for example "instance\_layer" - as defined in the Room Editor), and the system will be moved to the new layer.

#### Syntax:

part\_system\_layer(ps, layer);

| Argument | Type | Description |
| --- | --- | --- |
| ps | Particle System Instance | The particle system handle |
| layer | String or Layer | The new layer handle |

#### Returns:

N/A

#### Example:

if (part\_system\_get\_layer(global.p\_sys) != "effects\_layer")
{
    part\_system\_layer(global.p\_sys, "effects\_layer";
}

The above code will check a particle system to see what layer it is on and if it is not on the given layer it will be changed.