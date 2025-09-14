---
title: "Physics"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Physics.htm"
converted: "2025-09-14T04:00:05.697Z"
---

# Physics

The integration of a dedicated physics library to GameMaker means that you can now take control over all aspects of the physical behaviour of objects within your game world, particularly collisions and object interaction. The "traditional" collision system (which GameMaker defaults to) is a "reactive" system, where you check for a collision and _then_ react to that collision with code that you place in individual objects. This is fine for simple games, but when you have a large number of objects and have to code how they all react to different situations in the game world, it quickly becomes obvious that this system is just not enough. That's when you have to turn to the GameMaker physics system.

The physics system works in a very different way to normal collisions. It is more of a "passive" system where you define a series of properties for your objects in the game world, as well as the properties of the game world itself, before any collisions or interactions occur. These coded "rules" will then govern the way everything in your game world interacts. In this way, with a few simple code and the correct room setup, you can create very complex interactions between objects and the world which will occur and resolve _without_ you having to code for every single possible outcome.

There are a few things that you should note when working with the GameMaker physics world:

-   The physics system exists "apart" from the basic room and instance structure of GameMaker meaning that its timings and functions are not necessarily tied into the room speed and step order like everything else.
-   The physics system replaces many of the normal instance functions... for example, rather than set a speed and a direction for an instance, if it has been declared as being a fully simulated physical body, you would use a _force_ or _impulse_ to get it to move around in the game world, or if it is not physics enabled you will need to set the x an y positions yourself. This takes a bit of getting used to, so experiment with the physics functions and get to know how everything works before trying to integrate them into your project.
-   You should limit the number of instances that are created, as well as the number of collisions and collision groups that the physics world has to deal with. You _cannot_ have thousands of instances, all with physical properties and collisions and expect everything to work fine due to the fact that physics requires some pretty intensive calculations, so limit yourself and optimise where possible.
-   When setting up collisions, use parents as much as possible since the collision system has a limited number of _collision bits_ available to assign to instances for Box2D to detect collisions. For example, if you have five different wall objects, don't check for five collisions, rather, create a parent object and assign it to the five walls then have ONE collision check with the parent. The physical properties of the objects are _not inherited_ only the collisions. In this way you can keep your game optimised and error free.
-   Try not to move instances from one point of the room to another in any way other than using the physics functions (i.e.: do not set the x/y coordinates manually). Although this can be done and in some circumstances it may be necessary, this is generally to be avoided due to the unpredictable results that it may have on the physics engine, especially when trying to resolve collisions.
-   Care should be taken when binding fixtures, as they can be bound to objects and instances independently. This means that if you bind a fixture to (for example) "o\_Wall", **all** instances of that object will get the fixture. If you only want to bind a fixture to one instance, then use that instance's id in the appropriate function.
-   Please be aware that due to differences in floating point precision you may find that versions of your game for different target platforms may exhibit subtly different behaviour to the standard Windows version, though each version will be self-consistent across subsequent executions.
-   To prevent instabilities in the physical simulation Box2D constrains to upper limits the amount a body may rotate and translate within a single update. The apparent limitations will vary according to the accuracy of the physical simulation in accordance with the number of updates and update speed of the physics world, and also in accordance with the physics world scaling. This means that (for example) if you have a world update speed of 60, the maximum movement speed would be 20.

Information on the physics functions can be found on the following pages:

-   [The Physics World](The_Physics_World/The_Physics_World.md)
-   [Forces](Forces/Forces.md)
-   [Fixtures](Fixtures/Fixtures.md)
-   [Joints](Joints/Joints.md)
-   [Soft Body Particles](Soft_Body_Particles/Soft_Body_Particles.md)
-   [Physics Variables](Physics_Variables/Physics_Variables.md)

There are also a couple of special physics functions which may be useful for more advanced physics simulations. The first is for performing a ray cast, the second is for testing for possible collisions at a specific point in the room and the last is for generating custom mass and inertia properties within an instance:

-   [physics\_raycast](physics_raycast.md)
-   [physics\_test\_overlap](physics_test_overlap.md)
-   [physics\_mass\_properties](physics_mass_properties.md)

Finally, there is a function specifically for outputting debug information:

-   [physics\_debug](physics_debug.md)