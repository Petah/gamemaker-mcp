---
title: "Set Particle Orientation"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Particles/Set_Particle_Orientation.htm"
converted: "2025-09-14T03:59:27.313Z"
---

# ![Set Particle Orientation Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/i_Particles_Set_Particle_Orientation.png) Set Particle Orientation

This action is used to set the particle orientation - the angle at which the particle images will be drawn - which can be static or set to increase / decrease over time. You supply the unique ID value for the type to set the size of (as returned when you created the type with the action [Create Particle Type](Create_Particle_Type.md)) and then give a range of initial starting orientations, then the increase amount and finally the "wiggle". The orientation a particle is created at is calculated such that 0 is right, 90 is up, 180 is left and 270 is down, so a minimum setting of 0 and a maximum setting of 360 will emit particles where each one will be rotated by a random amount around 360° (note that this does **not** affect particle direction).

The option to increase a particle orientation enables you to input a value which will be added on to the base orientation angle each game frame of the particle lifetime. So setting this value to, for example, 0.1 will add 0.1 to the image angle each game frame. Note that you can use negative values here too to make the particle rotate in the opposite direction too, so positive values will make the particle rotate anti-clockwise, and negative rotate clockwise. Note that the minimum orientation _decrement_ that is accepted is -0.01 and the minimum _increment_ is 0.01.

You can also set the "wiggle" option for the particle orientation. This is a value that will be generated randomly between 0 and the value you give and then added or subtracted to the particle image angle each step of the particles lifetime, causing the drawn image to fluctuate in its rotation. Obviously larger values are more pronounced than smaller ones, and this value can even be a negative with the maximum range being between -20 and 20.

Finally, you can choose to have the orientation as _relative_ or not to the particle direction. This means that while the particle has a direction (and speed) set, the particle image will be orientated based on that vector. Bear in mind that if you have the particle speed set to reduce and it reaches 0 during the particle lifetime, the lack of speed sets the direction to the default value of 0° and so a relative orientation will cause the particle image to "jump" to a different orientation angle.

#### Action Syntax:

![Set Particle Orientation Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/a_Particles_Set_Particle_Orientation.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Type | The unique ID value for the particle type to set the orientation of |
| Min Angle | The minimum orientation for the particle type (from -360 to +360, default 0) |
| Max Angle | The maximum orientation for the particle type (from -360 to +360, default 360) |
| Increase | The value to add on to the particle type orientation every game frame (can be negative, minimum +/-0.01) |
| Wiggle | The maximum value to randomly be added or subtracted from the particles orientation per step (+/-20). |
| Relative To Direction | Whether to set the particle image angle relative to the direction of the particle's motion (enabled) or not (disabled). |

#### Example:

![Define Particle Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/e_Particles_Create_Particle_Type.png)The above action block code will create a new particle type and assign its unique ID value to a global variable. It then proceeds to set all the properties for the particle type.