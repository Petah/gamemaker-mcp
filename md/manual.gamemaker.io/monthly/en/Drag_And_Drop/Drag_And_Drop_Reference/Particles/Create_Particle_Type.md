---
title: "Create Particle Type"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Particles/Create_Particle_Type.htm"
converted: "2025-09-14T03:59:27.066Z"
---

# ![Create Particle Type Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/i_Particles_Create_Particle_Type.png) Create Particle Type

In your projects you can have multiple different particle _types_, each with their own properties like direction and colour, etc... which are set using the different particle type actions. However you first need to create a **particle type** using this action, which essentially allocates a small amount of memory to hold all the particle details so that you can use the particles at any time in the future. You give a variable to hold the unique ID value for the particle type, and then in all future actions relating to this particle you can call the variable. You can choose to flag this variable as being a temporary local variable, but that will mean that it is discarded at the end of the action script or event, meaning that the particle type will still exist but leave you without any means to access it, so care must be taken when using this (in general particle types will never need to be stored in a temporary local variable, but for certain things, like drawing particles to a surface, it may be required).

NOTE A particle type, once created, remains resident in the system memory for the duration of the game, and so if you need to recreate it at any point (for example, if you call the [Restart Game](../Game/Restart_Game.md) action), then you **must destroy the current particle type** otherwise you get a memory leak. This happens when a resource is added to memory and then "de-referenced", meaning that GameMaker has no way to interact with that resource any more. This leads to the memory being clogged by inaccessible resources which in turn can cause issues with your game. To destroy a particle type when no longer required use the action [Destroy Particle Type](Destroy_Particle_Type.md).

You can also set the **Blend** mode to be used for the particles. By default they will be drawn with a "normal" blend mode, so colours will not be modified by what was drawn underneath the particle, however when the "Blend" option is enabled, they will be drawn using _additive_ blending, which means that things will be drawn with changes to the colours based on what was drawn under the particle. Additive blending gives very bright and "glowing" effects, and is ideal for explosions, lasers, fire, etc. while normal blending is better for things like rain, smoke, and debris effects. The image below shows the same effect with additive blending off (left) and on (right):

![](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/Particle_Blending.gif)

#### Action Syntax:

![Create Particle Type Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/a_Particles_Create_Particle_Type.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Target | The target variable to hold the returned type ID value |
| Blend | Whether the particle type should use additive blending |

#### Example:

![Define Particle Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/e_Particles_Create_Particle_Type.png)The above action block code will create a new particle type and assign its unique ID value to a global variable. It then proceeds to set all the properties for the particle type.