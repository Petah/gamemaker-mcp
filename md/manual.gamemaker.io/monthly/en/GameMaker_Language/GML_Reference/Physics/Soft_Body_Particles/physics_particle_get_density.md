---
title: "physics_particle_get_density"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Soft_Body_Particles/physics_particle_get_density.htm"
converted: "2025-09-14T04:00:06.462Z"
---

# physics\_particle\_get\_density

With this function you can find out what the current density is for particles in the physics simulation (you can set this value using [physics\_particle\_set\_density()](physics_particle_set_density.md)).

#### Syntax:

physics\_particle\_get\_damping()

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

if (physics\_particle\_get\_density() < 1)
{
    physics\_particle\_set\_density(physics\_particle\_get\_density() + 0.01);
}

The above code will check the current density value for all particles in the system and if it is less than 1 then it will add 0.01 to it.