---
title: "Set Particle Shape"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Particles/Set_Particle_Shape.htm"
converted: "2025-09-14T03:59:27.326Z"
---

# ![Set Particle Shape Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/i_Particles_Set_Particle_Shape.png) Set Particle Shape

This action can be used to set the built-in sprite shape that a particle should use when drawing. You supply the unique ID value for the type to set the shape of (as returned when you created the type with the action [Create Particle Type](Create_Particle_Type.md)) and the shape to use. Particle shapes are simply white sprites that have been created for GameMaker to use specifically as particles and consist of the following forms:

![](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/Particle_Types.png)

NOTE If you use this action then you should **not** use the action [Set Particle Sprite](Set_Particle_Sprite.md) as you can only have a sprite **or** a shape, but not both.

#### Action Syntax:

![Set Particle Shape Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/a_Particles_Set_Particle_Shape.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Type | The ID value for the type to set the shape of |
| Shape | The shape to use for the particle type |

#### Example:

![Set Particle Shape Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/e_Particles_Set_Particle_Shape.png)The above action block code will create a new particle type and assign its unique ID value to a global variable. It then proceeds to set all the properties for the particle type.