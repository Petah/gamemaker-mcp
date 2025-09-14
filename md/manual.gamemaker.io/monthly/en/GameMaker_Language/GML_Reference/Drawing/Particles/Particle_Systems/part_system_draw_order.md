---
title: "part_system_draw_order"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Systems/part_system_draw_order.htm"
converted: "2025-09-14T03:59:52.021Z"
---

# part\_system\_draw\_order

With this function you can set the way in which particles are drawn when created on the screen. The default system uses an old > new look (the function is set to true), where old particles are drawn at a higher depth than newer ones and so appear "beneath" them new particles, but by setting this function to false you can reverse this order and have the new particles drawn higher and so appear "beneath" the older ones. The images below illustrate this, with the image on the left being the default value of true and the image on the right being false:

![Old to new particle example](../../../../../assets/Images/Scripting_Reference/GML/Reference/Drawing/frontback.gif) ![New to old particle example](../../../../../assets/Images/Scripting_Reference/GML/Reference/Drawing/backfront.gif)

NOTE When the particles are being drawn with an additive blend mode, the effect of this function may not always be obvious.

#### Syntax:

part\_system\_draw\_order(ind, oldtonew);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Particle System Instance | The particle system to change. |
| oldtonew | Boolean | Whether old particles should be drawn behind newer ones (true) or vice versa (false). |

#### Returns:

N/A

#### Example:

mysystem = part\_system\_create();
part\_system\_draw\_order(mysystem, true);

This will create a new particle system with the index mysystem, and then it sets particles to draw newer particles atop older ones.