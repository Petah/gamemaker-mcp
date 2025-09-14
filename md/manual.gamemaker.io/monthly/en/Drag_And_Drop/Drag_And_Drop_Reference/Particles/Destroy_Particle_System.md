---
title: "Destroy Particle System"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Particles/Destroy_Particle_System.htm"
converted: "2025-09-14T03:59:27.108Z"
---

# ![Destroy Particle System Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/i_Particles_Destroy_Particle_System.png) Destroy Particle System

This action will "destroy" the given particle system (ie: free up the memory used by the particle system). You supply the unique ID value for the system to destroy, as returned when you created the system with the action [Create Particle System](Create_Particle_System.md). This action should be called whenever you no longer need a particle system in your game, or whenever you wish to re-create the particle system (for example, just before calling a [Restart Game](../Game/Restart_Game.md)). Note that if the particle system has _not_ been flagged as **Persistent** then you do not need to call this action, as the particle system (and any emitters associated with it) will be automatically cleaned up on room end.

**IMPORTANT!** This function will also destroy and remove any emitters that may have been created and associated with the system being destroyed (see [Create Particle Emitter](Create_Particle_Emitter.md) for more information).

#### Action Syntax:

![Destroy Particle System Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/a_Particles_Destroy_Particle_System.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| System | The unique ID value for the system to be destroyed |

#### Example:

![Destroy Particle System Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/e_Particles_Destroy_Particle_System.png)The above action block code will check for the "Space" key being pressed and if it is detected then it removes the particle system and different particle types defined in the given global variables and then restarts the game.