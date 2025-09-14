---
title: "Set Particle Size"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Particles/Set_Particle_Size.htm"
converted: "2025-09-14T03:59:27.345Z"
---

# ![Set Particle Size Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/i_Particles_Set_Particle_Size.png) Set Particle Size

This action is used to set the particle size, which can be static or set to increment / decrement over time. You supply the unique ID value for the type to set the size of (as returned when you created the type with the action [Create Particle Type](Create_Particle_Type.md)) and then give a range of initial starting sizes, then the increase amount and finally the "wiggle". The size a particle is created at is a scalar value, where 1 is the same size as the base particle image, 0.5 would be half the size of the base image and a value of 2 would be double. If the minimum and maximum sizes are not the same, then initial size for any particle created will be a random value between them.

The option to increase a particle size enables you to input a value which will be added on to the base scalar value each game frame of the particle lifetime. So setting this value to, for example, 0.1 will add 0.1 to the scale value each game frame. Note that you can use negative values here too to make the particle image scale down too. Note that the minimum scale _decrement_ that is accepted is -0.01 and the minimum _increment_ is 0.01.

Finally you can set the "wiggle" option. This is a value that will be generated randomly between 0 and the value you give and then added or subtracted to the size each step of the particles lifetime, causing the drawn image to fluctuate in size. Obviously larger values are more pronounced than smaller ones, and this value can even be a negative with the maximum range being between -20 and 20.

#### Action Syntax:

![Set Particle Size Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/a_Particles_Set_Particle_Size.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Type | The unique ID value for the particle type to set the size of |
| Min Size | The minimum scale for the particle type (default 0.1) |
| Max Size | The maximum scale for the particle type (default 1) |
| Increase | The value to add on to the particle type size every game frame (can be negative, minimum +/-0.01) |
| Wiggle | The maximum value to randomly be added or subtracted from the particles size per step (+/-20). |

#### Example:

![Define Particle Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/e_Particles_Create_Particle_Type.png)The above action block code will create a new particle type and assign its unique ID value to a global variable. It then proceeds to set all the properties for the particle type.