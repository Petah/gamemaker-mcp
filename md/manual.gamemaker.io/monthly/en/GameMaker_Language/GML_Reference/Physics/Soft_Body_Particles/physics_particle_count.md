---
title: "physics_particle_count"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Soft_Body_Particles/physics_particle_count.htm"
converted: "2025-09-14T04:00:06.265Z"
---

# physics\_particle\_count

This function will return the number of particles that are active in a physics enabled room.

#### Syntax:

physics\_particle\_count()

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

if (physics\_particle\_count() < physics\_particle\_get\_max\_count())
{
    physics\_particle\_create(0, x, y, 0, 0, c\_white, 1, 1)
}

The above code will check to see if there are less than the maximum number of permitted particles in the room, and if so create one more.