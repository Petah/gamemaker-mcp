---
title: "Particle Types"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Types/Particle_Types.htm"
converted: "2025-09-14T03:59:52.152Z"
---

# Particle Types

Particles are the graphic effects that can be created by the use of particle systems in a game. The particles that you define using these functions can be used in any system that you create and the normal procedure would be to define all your particles once at the start of a game and store their index values in global variables. These global variables can then be used to burst, emit or create particles at any time throughout the game. You can also create, use and then destroy particles as needed if memory is an issue or if you wish many different types but only at specific points in your game. Whatever you choose, particles are a very versatile resource!

Particle types, unlike emitters, are **not** tied to particle systems and so destroying any systems making use of particle types will not destroy those types.

TIP If you prefer a more visual approach to creating particles and don't need the extensive functionality that GML Code offers, you can also create a [Particle System Asset](../../../../../The_Asset_Editors/Particle_Systems.md) using [The Particle System Editor](../../../../../The_Asset_Editors/Particle_Systems.md). Additionally, you can generate the GML Code for it using the editor's **Copy GML to Clipboard** ![](../../../../../assets/Images/Icons/Icon_GML_To_Clipboard.png).

NOTE Some particle properties have an \*\_incr and \*\_wiggle parameter; changing these will affect _existing_ particles of the given particle type. This gives you a limited way to influence existing particles in a particle system.

Particles are created from particle types, which need to be created and have their index stored in a variable so that all further particle routines can access them correctly. The following functions are used to create, check for, clear and destroy particle types:

-   [part\_type\_exists](part_type_exists.md)
-   [part\_type\_create](part_type_create.md)
-   [part\_type\_destroy](part_type_destroy.md)
-   [part\_type\_clear](part_type_clear.md)

Once you have created your particle type you should give it a _shape_. This can be one of the 14 built-in shapes which are 64x64 pixel sprites with alpha blending, or you can use your own sprites which can be animated, static, random sub-images or a specific sub-image. The following functions define the visual base shape of each particle:

-   [part\_type\_shape](part_type_shape.md)
-   [part\_type\_sprite](part_type_sprite.md)
-   [part\_type\_subimage](part_type_subimage.md)

The following image shows the 14 built-in particle types that you can choose from:

![The different built-in particle sprites](https://manual.gamemaker.io/monthly/en/assets/Images/Scripting_Reference/GML/Reference/Drawing/Particle_Sprites.png)Once you have chosen the sprite for the particle type (either a default shape or your own) you can indicate the size and scale of it. The size can be specified as a range and all particles will be created with a size chosen from within the given range. The scale is the "base" value for the x and y axis scale of the particle _before_ any size variations are added and the following functions are used to control these values:

-   [part\_type\_size](part_type_size.md)
-   [part\_type\_size\_x](part_type_size_x.md)
-   [part\_type\_size\_y](../../../../../../../../GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Types/part_type_size_y.md)
-   [part\_type\_scale](part_type_scale.md)

Particles can also have an orientation and motion. As with most particle functions, the speed, direction and orientation are resolved as a random value that is selected from a given range and can be set with the following functions:

-   [part\_type\_speed](part_type_speed.md)
-   [part\_type\_direction](../../../../../../../../GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Types/part_type_direction.md)
-   [part\_type\_gravity](part_type_gravity.md)
-   [part\_type\_orientation](../../../../../../../../GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Types/part_type_orientation.md)

Once you have the style and movement of your particles sorted out, you can then set their colour and alpha values, both of which can be set as an absolute value during the whole lifespan of the particle, or as a scale of values that go from one to the other gradually. Note that there is also a special function that permits you to set the blending for particles and their surroundings, and this can be either normal or additive and gives some fantastic effects- The functions governing colour, alpha and blending are:

-   [part\_type\_colour\_mix](part_type_colour_mix.md)
-   [part\_type\_colour\_rgb](../../../../../../../../GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Types/part_type_colour_rgb.md)
-   [part\_type\_colour\_hsv](part_type_colour_hsv.md)
-   [part\_type\_colour1](part_type_colour1.md)
-   [part\_type\_colour2](../../../../../../../../GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Types/part_type_colour2.md)
-   [part\_type\_colour3](part_type_colour3.md)
-   [part\_type\_alpha1](../../../../../../../../GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Types/part_type_alpha1.md)
-   [part\_type\_alpha2](part_type_alpha2.md)
-   [part\_type\_alpha3](../../../../../../../../GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Types/part_type_alpha3.md)
-   [part\_type\_blend](part_type_blend.md)

Particles exist on-screen for a limited amount of time and this is called their "lifetime". Particle lifetimes are measured in steps and (like previous functions) this is expressed as a range of values from which the particle will be given a specific lifetime. There are also a couple of interesting functions which can be used to make particles generate _other_ particles, either each step or when they "die" (i.e.: Are removed from the screen), but be very careful with these functions as they can quickly create thousands of particles and crash the game! The functions that set lifetime and step or death emitting are as follows:

-   [part\_type\_life](part_type_life.md)
-   [part\_type\_step](../../../../../../../../GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Types/part_type_step.md)
-   [part\_type\_death](part_type_death.md)