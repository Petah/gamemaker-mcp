---
title: "part_particles_burst"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Systems/part_particles_burst.htm"
converted: "2025-09-14T03:59:51.801Z"
---

# part\_particles\_burst

This function creates a single burst of all the particles contained in the given [Particle System Asset](../../../../../The_Asset_Editors/Particle_Systems.md). The particles are created in the given particle system instance ind.

The function gives you a quick way to add a particle effect that you made in [The Particle System Editor](../../../../../The_Asset_Editors/Particle_Systems.md) to an existing particle system.

This is as if you'd add the emitters inside that particle system asset to the given particle system and then call [part\_emitter\_burst](../Particle_Emitters/part_emitter_burst.md) on all of them.

NOTE Particles won't be created for any disabled emitters in the [Particle System Asset](../../../../../The_Asset_Editors/Particle_Systems.md) (which is **Enabled** unchecked).

#### Syntax:

part\_particles\_burst(ind, x, y, partsys);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Particle System Instance | The index of the particle system in which to create the particles |
| x | Real | The x position to burst the particles |
| y | Real | The y position to burst the particles |
| partsys | Particle System Asset | The particle system asset of which to burst particles |

#### Returns:

N/A

#### Example 1:

Create Event

ps = part\_system\_create\_layer("Effects", false);

repeat(10)
{
    var \_x = random(room\_width);
    var \_Y = random(room\_height);
    part\_particles\_burst(ps, \_x, \_y, ps\_Fireworks);
}

The code above first creates a new particle system on a room layer named "Effects" and stores the index in an instance variable ps. The part\_particles\_burst function is then called 10 times in a [repeat](../../../../GML_Overview/Language_Features/repeat.md) loop to add particles from a [Particle System Asset](../../../../../The_Asset_Editors/Particle_Systems.md) ps\_Fireworks to the particle system ps.

#### Example 2:

Create Event

ps = part\_system\_create\_layer("Effects", false);

layer\_script\_begin("Effects", method({ps}, function()
{
    part\_particles\_burst(ps, random(room\_width), random(room\_height), ps\_Fireworks);
}));

The code above also creates a new particle system on a room layer named "Effects". It then sets a [method](../../../Variable_Functions/method.md) as the layer begin script. The method gets the particle system ID ps via the struct. Inside it, the function part\_particles\_burst is used to create particles of the ps\_Fireworks [Particle System Asset](../../../../../The_Asset_Editors/Particle_Systems.md) at random positions in the room. This way, particles are created continuously, since the layer begin scripts run every step. The layer begin script can be removed to end the creation of particles from the asset.