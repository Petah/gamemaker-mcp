---
title: "Destroy Particle Emitter"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Particles/Destroy_Particle_Emitter.htm"
converted: "2025-09-14T03:59:27.083Z"
---

# ![Destroy Particle Emitter Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/i_Particles_Destroy_Particle_Emitter.png) Destroy Particle Emitter

This action will "destroy" the given particle emitter, ie: free up the memory used by the particle emitter. You supply the particle system ID that the emitter belongs to (as returned by the action [Create Particle System](Create_Particle_System.md)) and then the actual emitter ID (as returned by the action [Create Particle Emitter](Create_Particle_Emitter.md)). This action should be called whenever you no longer need a particle emitter in your game, or whenever you wish to re-create the particle emitter (for example, just before calling a [Game Restart](../Game/Restart_Game.md)). Note that if the particle system the emitter has been assigned to has _not_ been flagged as **Persistent** then you do _not need to call this action_, as the emitter will be automatically cleaned up on room end along with the particle system.

#### Action Syntax:

![Destroy Particle Emitter Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/a_Particles_Destroy_Particle_Emitter.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| System | The ID value of the system that contains the emitter |
| Emitter | The ID value of the emitter to destroy |

#### Example:

![Destroy Particle Emitter Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/e_Particles_Destroy_Particle_Emitter.png)The above action block code will check an instance variable and if it is over 100 it will destroy the emitter assigned to the instance and then go to the next room.