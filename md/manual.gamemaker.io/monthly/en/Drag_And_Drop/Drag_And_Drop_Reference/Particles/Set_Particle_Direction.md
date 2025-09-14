---
title: "Set Particle Direction"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Particles/Set_Particle_Direction.htm"
converted: "2025-09-14T03:59:27.266Z"
---

# ![Set Particle Direction Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/i_Particles_Set_Particle_Direction.png) Set Particle Direction

This action is used to set the particle direction, which can be static or set to increase / decrease over time. You supply the unique ID value for the type to set the size of (as returned when you created the type with the action [Create Particle Type](Create_Particle_Type.md)) and then give a range of initial starting directions, then the increase amount and finally the "wiggle". The direction a particle is created at is calculated such that 0 is right, 90 is up, 180 is left and 270 is down, so a minimum setting of -45 and a maximum setting of 45 will emit particles only moving to the right, for example.

The option to increase a particle direction enables you to input a value which will be added on to the base direction value each game frame of the particle lifetime. So setting this value to, for example, 0.1 will add 0.1 to the direction each game frame. Note that you can use negative values here too to make the particle move in the opposite direction down too, so positive values will make the particle spiral anti-clockwise, and negative clockwise. Note that the minimum direction _decrement_ that is accepted is -0.01 and the minimum _increment_ is 0.01.

Finally you can set the "wiggle" option. This is a value that will be generated randomly between 0 and the value you give and then added or subtracted to the direction each step of the particles lifetime, causing the drawn image to fluctuate in direction. Obviously larger values are more pronounced than smaller ones, and this value can even be a negative with the maximum range being between -20 and 20.

#### Action Syntax:

![Set Particle Direction Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/a_Particles_Set_Particle_Direction.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Type | The unique ID value for the particle type to set the direction of |
| Min Dir | The minimum direction for the particle type (from -360 to +360, default 0) |
| Max Dir | The maximum direction for the particle type (from -360 to +360, default 360) |
| Increase | The value to add on to the particle type direction every game frame (can be negative, minimum +/-0.01) |
| Wiggle | The maximum value to randomly be added or subtracted from the particles direction per step (+/-20). |

#### Example:

![Define Particle Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/e_Particles_Create_Particle_Type.png)The above action block code will create a new particle type and assign its unique ID value to a global variable. It then proceeds to set all the properties for the particle type.