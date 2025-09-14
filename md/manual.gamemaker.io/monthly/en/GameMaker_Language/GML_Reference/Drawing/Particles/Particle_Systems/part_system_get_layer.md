---
title: "part_system_get_layer"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Systems/part_system_get_layer.htm"
converted: "2025-09-14T03:59:52.065Z"
---

# part\_system\_get\_layer

This function retrieves the layer handle for the given particle system.

You supply the particle system handle (as returned by the function [part\_system\_create\_layer](part_system_create_layer.md)) and the function will return the handle of the layer.

#### Syntax:

part\_system\_get\_layer(ind);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Particle System Instance | The particle system handle to get the layer handle of |

#### Returns:

[Layer](../../../Asset_Management/Rooms/General_Layer_Functions/layer_get_id.md) or 0 (if the layer is an internally managed one)

#### Example:

var \_effects\_layer = layer\_get\_id("Particles");
if (part\_system\_get\_layer(global.p\_sys) != \_effects\_layer)
{
    part\_system\_layer(global.p\_sys, \_effects\_layer);
}

The above code will check a particle system to see what layer it is on and if it is not on the given layer it will be changed.