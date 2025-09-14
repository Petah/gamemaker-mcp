---
title: "Set Particle Alpha"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Particles/Set_Particle_Alpha.htm"
converted: "2025-09-14T03:59:27.233Z"
---

# ![Set Particle Alpha Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/i_Particles_Set_Particle_Alpha.png) Set Particle Alpha

This action will set the alpha for when you create the particle as well as the alpha over its lifetime. You first specify the particle type ID value (which should be the same as the value returned when you created the particle using the [Create Particle Type](Create_Particle_Type.md) action) and then you can set the alpha values to use.

You can pick three alpha values to use, and the particle will blend between them over the lifetime of the particle. For example, if a particle has 0.5, 1 and 0 as its alpha values, and a lifetime of 60 game frames, then when it is created (frame 0) it will be at 0.5 alpha, then it will fade towards a full alpha of 1 (frame 30), before fading on to be invisible with an alpha of 0 (frame 60).

#### Action Syntax:

![Set Particle Alpha Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/a_Particles_Set_Particle_Alpha.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Type | The unique ID value for the particle type to set the colour of |
| Start | The initial alpha to use |
| Middle | The in between alpha to use |
| End | The final alpha to use |

#### Example:

![Define Particle Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/e_Particles_Create_Particle_Type.png)The above action block code will create a new particle type and assign its unique ID value to a global variable. It then proceeds to set all the properties for the particle type.