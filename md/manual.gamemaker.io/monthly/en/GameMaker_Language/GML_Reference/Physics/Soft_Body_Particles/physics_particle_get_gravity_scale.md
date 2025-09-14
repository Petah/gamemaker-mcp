---
title: "physics_particle_get_gravity_scale"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Soft_Body_Particles/physics_particle_get_gravity_scale.htm"
converted: "2025-09-14T04:00:06.474Z"
---

# physics\_particle\_get\_gravity\_scale

With this function you can find out what the current gravity scale factor is for particles in the physics simulation (you can set this value using [physics\_particle\_set\_gravity\_scale()](physics_particle_set_gravity_scale.md)).

#### Syntax:

physics\_particle\_get\_gravity\_scale()

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

physics\_particle\_set\_gravity\_scale(physics\_particle\_get\_gravity\_scale() + 0.1);

The above code will set the gravity scale.