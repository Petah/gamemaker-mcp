---
title: "physics_particle_delete_region_box"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Soft_Body_Particles/physics_particle_delete_region_box.htm"
converted: "2025-09-14T04:00:06.322Z"
---

# physics\_particle\_delete\_region\_box

With this function you can delete (remove) all the particles that fall within the bounds of the defined rectangular area from the physics simulation in the current room. The function takes the x and y position for the center of the area to delete as well as the half width and height of the rectangle (in pixels) which defines the area.

#### Syntax:

physics\_particle\_delete\_region\_box(x, y, halfWidth, halfHeight)

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The x position of the center of the area to delete. |
| y | Real | The y position of the center of the area to delete. |
| halfWidth | Real | The half width of the rectangle. |
| halfHeight | Real | The half height of the rectangle. |

#### Returns:

N/A

#### Example:

physics\_particle\_delete\_region\_box(mouse\_x, mouse\_y, 32, 32);

The above code will delete all particles found in a rectangular area around the mouse position.