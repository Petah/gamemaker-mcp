---
title: "Set Secondary Particles"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Particles/Set_Secondary_Particles.htm"
converted: "2025-09-14T03:59:27.391Z"
---

# ![Set Secondary Particles Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/i_Particles_Set_Secondary_Particles.png) Set Secondary Particles

This action permits you to use a second particle type along with the primary particle. You give the primary particle type ID value (which should be the same as the value used when you created the particle using the [Create Particle Type](Create_Particle_Type.md) action) and then you can choose to have it emit a secondary particle type each game frame that it exists and/or at the end of each primary particle's lifespan. You must give another particle ID value for the "Secondary" and then a number to be created in the "Count".

If the Event selected is "Per Step" then each game frame that a primary particle exists on screen it will emit the given number of secondary particles - for example, you could have a rocket with "flame" particles, and each flame particle emits a secondary "smoke" particle. If the event is set to "On Death", then the secondary particles will now only be emitted when a particle of the primary type reaches the end of its lifespan - for example, you could have an "explosion" particle that emits a "dust" particle at the end of its life.

It is important to note that you _cannot_ use the same particle type ID as the primary particle as for secondary particles, and that you can very quickly encounter performance issues when using this action as it's easy to create thousands of particles very quickly this way - so take care to limit the lifespan and number of particles being created by both the primary and secondary particle types. Also note that you can assign a secondary particle to any particle type and so can create "particle chains" where one particle creates another each step and then this particle creates another when it reaches the end of its lifespan, etc... Although, again, care should be taken when chaining particles in this way to make sure that performance does not suffer. You can also call this action twice for a single particle type and have it stream on step as well as burst on death.

#### Action Syntax:

![Set Secondary Particles Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/a_Particles_Set_Secondary_Particles.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Type ID | The ID value for the particle type to give the secondary particle to |
| Event | When to create the secondary particle, either "Per Step" or "On Death" |
| Secondary | The ID value for the particle type to emit in the chosen secondary Event |
| Count | The number of secondary particles to be created in the chosen secondary Event |

#### Example:

![Set Secondary Particles Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/e_Particles_Set_Secondary_Particles.png)The above action block code will assign two secondary particles to the particle with the ID stored in the variable "p\_fire".