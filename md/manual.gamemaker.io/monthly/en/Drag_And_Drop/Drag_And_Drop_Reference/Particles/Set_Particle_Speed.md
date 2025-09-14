---
title: "Set Particle Speed"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Particles/Set_Particle_Speed.htm"
converted: "2025-09-14T03:59:27.360Z"
---

# ![Set Particle Speed Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/i_Particles_Set_Particle_Speed.png) Set Particle Speed

This action is used to set the particle's movement speed, which can be static or set to increase / decrease over time. You supply the unique ID value for the type to set the size of (as returned when you created the type with the action [Create Particle Type](Create_Particle_Type.md)) and then give a range of initial starting speeds, then the increase amount and finally the "wiggle". The speed a particle is created at is calculated as pixels-per-game-frame, so a minimum setting of 2 and a maximum setting of 5 will emit particles moving at anywhere between 2 and 5 pixels-per-game-frame.

The option to increase a particle speed enables you to input a value which will be added on to the base speed value each game frame of the particle lifetime. So setting this value to, for example, 0.1 will add 0.1 to the speed each game frame. Note that you can use negative values here too to make the particle slow down too, although the speed will never go below 0. Note that the minimum speed _decrement_ that is accepted is -0.01 and the minimum _increment_ is 0.01.

Finally you can set the "wiggle" option. This is a value that will be generated randomly between 0 and the value you give and then added or subtracted to the speed each step of the particles lifetime, causing the drawn image to fluctuate in speed. Obviously larger values are more pronounced than smaller ones, and this value can even be a negative with the maximum range being between -20 and 20.

#### Action Syntax:

![Set Particle Speed Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/a_Particles_Set_Particle_Speed.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Type | The unique ID value for the particle type to set the size of |
| Min Speed | The minimum speed for the particle type (default 0.1) |
| Max Speed | The maximum speed for the particle type (default 1) |
| Increase | The value to add on to the particle type speed every game frame (can be negative, minimum +/-0.01) |
| Wiggle | The maximum value to randomly be added or subtracted from the particles speed per step (+/-20). |

#### Example:

![Define Particle Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/e_Particles_Create_Particle_Type.png)The above action block code will create a new particle type and assign its unique ID value to a global variable. It then proceeds to set all the properties for the particle type.