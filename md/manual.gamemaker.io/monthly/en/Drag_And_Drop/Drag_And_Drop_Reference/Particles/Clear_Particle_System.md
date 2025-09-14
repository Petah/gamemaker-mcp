---
title: "Clear Particle System"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Particles/Clear_Particle_System.htm"
converted: "2025-09-14T03:59:27.011Z"
---

# ![Clear Particle System Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/i_Particles_Clear_Particle_System.png) Clear Particle System

With this action you can clear the given particle system to its **default** state, removing all emitters (there is also no need to call the [Destroy Particle Emitter](Destroy_Particle_Emitter.md) action as this is taken care of automatically) and clearing all particles from the screen. You supply the unique ID value for the system to clear, as returned when you created the system with the action [Create Particle System](Create_Particle_System.md). Care must be taken when using this action since it destroys all the emitters associated with the particle system - this means that any instance in the room that uses an emitter may give an error as that emitter no longer exists, so make sure that the action is only called when you are not going to be creating any new particles from that emitter (for more information on particle emitters see [Create Particle Emitter](Create_Particle_Emitter.md)).

NOTE This action will only **clear** the visible particles in the room, but it does not clear the particle properties nor does it remove them from memory. For that you should use the action [Destroy Particle Type](Destroy_Particle_Type.md).

#### Action Syntax:

![Clear Particle System Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/a_Particles_Clear_Particle_System.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| System | The unique ID value for the system to be destroyed |

#### Example:

![Clear Particle System Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/e_Particles_Clear_Particle_System.png)The above action block code will clear all the particles from the screen if the player has 0 or less lives and then restart the room.