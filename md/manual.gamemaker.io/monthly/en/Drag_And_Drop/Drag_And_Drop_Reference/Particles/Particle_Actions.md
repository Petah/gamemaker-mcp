---
title: "Particle Actions"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Particles/Particle_Actions.htm"
converted: "2025-09-14T03:59:27.185Z"
---

# Particle Action Library

![Particle Action Library](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Particles/Lib_Particles.png)For complex things in GameMaker you would normally have an _object_ and then create _instances_ of that object within the _room_. However, for graphics effects, this can be expensive as every instance comes with a "cost" in processing due to the variables it contains and the codes it has in the different events. You can reduce this cost by turning to tiles for drawing your graphics, or even using the _asset layer_ in the room editor, but both of those are generally only used for drawing simple graphics that maintain the same position over time and have few special effects. However, there is one other option for drawing fast yet versatile graphics effects in your games, and that is to use particles.

Particles are graphic resources with certain properties which are defined within a **particle system**. These properties cannot be manipulated directly for individual particles, but are changed through the actions that are used to define the individual **particle types** within the system. They are very useful for creating beautiful and flashy effects (or subtle and discreet ones!) like explosions, decals, rain, snow, star fields and debris in a game without the CPU or GPU overhead that using instances and/or tiles and assets have.

The basic setup for a particle system follows three steps:

-   **Create a Particle System**: The particle system is like a container that we will use to hold our different particle emitters as we use them. We use actions to define a series of visual aspects and behaviours for our particles, and then we use them from an emitter that has been placed in the "container" (the particle system) so that they can be seen.
-   **Create Particle Types**: Particle "types" are the definition of the graphic effect itself. You can have many different particle types, each with their own range of colours, alphas, sizes and movements, but its important to note _that you do not have control over individual particles_. You define a series of parameters and the particle will be created to have a random spread of behaviours chosen from them.
-   **Create Particle Emitters**: Emitters are used to burst or stream particles from within very clearly defined limits, and can be given special parameters to define exactly _how_ a given particle effect should be created. Emitters can be optional, as you can use the action [Burst Particles](Burst_Particles.md) to emulate many of the effects of an emitter, with the added bonus of not needing to worry about cleaning up the emitter later. Note, that emitters, unlike particles, must belong to a system for any particles being created to be seen.

You can get a more in-depth guide to setting up and using particles from the following page of the manual:

-   [Guide To Using Particles](../../../Additional_Information/Guide_To_Using_Particles.md)

Although particles are an excellent tool for creating effects, they do come with certain restrictions and rules of good practice which need to be followed unless you want your game to have issues:

-   The particle system, particle types and particle emitters all take up _memory_ and as such you should be very careful how you use them as it is very easy to cause a memory leak which will slow down and eventually crash your game, so each particle type and emitter (and possibly the system itself) should be destroyed the moment it is not needed.
-   Particles may be fast and light on the CPU and GPU, but they still require some processing and so you shouldn't have 40,000 of them bursting across the screen at a time. Limit them to those that are necessary to achieve a specific effect and no more.
-   If you define your own particle sprite instead of using one of the 14 included sprites, you should try to keep them as small as possible to achieve the effect you require.
-   Particles do _not_ interact with anything. Should you need them to have any type of interaction with the user or any other instances in your game, you should be looking at using instances instead as particles are purely graphic.
-   Even though there is no technical limit to the amount of emitters and particles you can create in one game, you should try and limit everything to the minimum number possible to keep memory use as low as possible.
-   On mobile devices, take care with particles as drawing them can be slow if they cover a large area of the screen (over-draw on mobile devices is one of the main causes of slowdown).
-   When targeting the HTML5 platform, note that unless you have WebGL enabled, you cannot have colour blending either (only the first of the particle colours will be used on non-WebGL canvas).

The following sections cover all actions for making your own particle systems:

|  | Create Particle System |
| --- | --- |
|  | Destroy Particle System |
|  | Clear Particle System |
|  | Pause Particle System |
|  | Update Particle System |
|  | Create Particle Type |
|  | Destroy Particle Type |
|  | Set Particle Size |
|  | Set Particle Sprite |
|  | Set Particle Shape |
|  | Set Particle Colour |
|  | Set Particle Alpha |
|  | Set Particle Life |
|  | Set Particle Speed |
|  | Set Particle Direction |
|  | Set Particle Orientation |
|  | Set Particle Gravity |
|  | Set Secondary Particles |
|  | Burst Particles |
|  | Create Particle Emitter |
|  | Destroy Particle Emitter |
|  | Emit Particles |
|  | Set Emitter Region |
|  | Do Effect |