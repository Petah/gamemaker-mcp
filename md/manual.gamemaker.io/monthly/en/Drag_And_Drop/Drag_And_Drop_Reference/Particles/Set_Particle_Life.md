---
title: "Set Particle Life"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Particles/Set_Particle_Life.htm"
converted: "2025-09-14T03:59:27.298Z"
---

# ![Set Particle Life Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/i_Particles_Set_Particle_Life.png) Set Particle Life

This action will set the lifespan of the given particle type. You first specify the particle type ID value (which is the value returned when you created the particle using the [Create Particle Type](Create_Particle_Type.md) action) and then you can set the minimum and maximum lifespan of the particle in game frames. For example, if your game has a frames per second of 60, then setting both the lifespan values here to 60 will mean that the particles will last 1 second on screen before disappearing. If you use two different values then each particle spawned will have a random lifespan set within the given minimum and maximum. Note that all values should be positive integers.

**IMPORTANT!** Setting very long lifespans and then emitting hundreds of particles, can cause issues on less powerful machines and on mobile devices. Take care when setting particle lifespan to maximise the visual effect but minimise the performance cost, and only use very long lifespan particles sparingly.

#### Action Syntax:

![Set Particle Life Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/a_Particles_Set_Particle_Life.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Type | The ID value for the global type to set the lifespan of |
| Min Life | The minimum lifespan for a particle (in game frames) |
| Max Life | The maximum lifespan for a particle (in game frames) |

#### Example:

![Define Particle Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/e_Particles_Create_Particle_Type.png)The above action block code will create a new particle type and assign its unique ID value to a global variable. It then proceeds to set all the properties for the particle type.