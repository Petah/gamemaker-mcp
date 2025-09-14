---
title: "Emit Particles"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Particles/Emit_Particles.htm"
converted: "2025-09-14T03:59:27.157Z"
---

# ![Emit Particles Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/i_Particles_Emit_Particles.png) Emit Particles

This action is used to create particles from an emitter. You supply the particle system ID that the emitter belongs to (as returned by the action [Create Particle System](Create_Particle_System.md)) and then the actual emitter ID (as returned by the action [Create Particle Emitter](Create_Particle_Emitter.md)), and finally the particle type to create (as returned by the action [Create Particle Type](Create_Particle_Type.md)). You can then select to "Burst" or "Stream" the particles from the emitter, as well as give the number of them you want to create.

When you choose to stream particles, you do not need to place this action in a game frame event like the Step Event or the Draw event, but instead simply call it once in the Create Event (for example) and the emitter will stream particles every game frame until you call this action again to stop it (by setting the count value to 0). If you choose to burst the particles, then you can call this in any event you choose and the particles will be created once.

#### Action Syntax:

![Emit Particles Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/a_Particles_Emit_Particles.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| System | The ID of the system that the emitter is in |
| Emitter | The ID of the emitter to use |
| Type | The ID of the particle type to create |
| Event | The event type for the particles, either "Burst" or "Stream" |
| Count | The number of particles to burst or stream |

#### Example:

![Emit Particles Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/e_Particles_Create_Particle_Emitter.png)The above action block code will create a particle emitter, set its region, and then set it to emit a stream of particles.