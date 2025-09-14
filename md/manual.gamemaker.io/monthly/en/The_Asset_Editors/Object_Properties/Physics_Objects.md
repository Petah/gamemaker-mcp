---
title: "Physics Objects"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Object_Properties/Physics_Objects.htm"
converted: "2025-09-14T04:00:15.963Z"
---

# Physics Objects

When you first create a new object resource, there is a check-box marked **Uses Physics**, which is _not_ checked by default. Selecting this option will radically change the behaviour of your object when an instance of it is placed in a room, as this switches on the object's physical properties and means that its "traditional" movement and collision functions are no longer valid (but only when the room it is placed on is also marked as being a physics room. See the section on the [Room Editor Properties](../Room_Properties/Room_Properties.md)). When you check this, the object resource window opens a new chained window for the physics editor:

![Object Editor Physics](../../assets/Images/Asset_Editors/Editor_Objects_Physics.png)

NOTE You can enable Physics for any object at runtime by [assigning a Fixture to it](../../GameMaker_Language/GML_Reference/Physics/Fixtures/Fixtures.md).

Before you start to edit the values for the physics behaviours it's a good idea to first set the **collision shape**. With the "normal" collision system your collisions are based off of the mask of the sprite assigned to the object, but with physics enabled **this is no longer the case**. We need to assign a **collision shape** to the object ourselves (this is properly called a **fixture**, see [The Physics Functions](../../GameMaker_Language/GML_Reference/Physics/Physics.md) for more information), which can either be a circle, a rectangle or a polygon shape that you yourself define. Clicking on the **Modify Collision Shape** button will open the following chained window to edit the shape:

![Object Editor Physics Shape Editor](../../assets/Images/Asset_Editors/Editor_Objects_PhysicsShape.png)This looks similar to the [Path Editor](../Paths.md), and functions in much the same way. However, depending on the mask you have chosen, it can be rather more restrictive:

-   If you have a **circular** mask, then you can only pull any of the path points to make the circle diameter larger or smaller
-   If you have **rectangular** mask, then you can move any of the four corners, but the corresponding ones will adjust position automatically to always maintain a rectangle
-   If you have a **custom** (polygon) mask, it must have a minimum of 3 and a maximum of 32 points, and it must be convex (see image below).

![Object Editor Physics Shape Type](../../assets/Images/Asset_Editors/Editor_Object_PhysicsShape.png)Once you have set up your shape, you then need to define the basic physical properties that your object is to have. These are configured by changing the following parameters:

[DensityDensity](Physics_Objects.htm#)

The density of something is defined as its mass per unit volume, which basically means how much mass is crammed into the space it takes up in the world. So, a balloon would have a low density as it has little mass that occupies a large space, while a lead bar would have a high density as it has a great mass, yet occupies little space. In the GameMaker 2D physics world, mass is calculated automatically for you from the values you input for the density and by the surface area of the shape you define for the fixture. This will have a direct impact on how much inertia a fixture has as well as how it reacts to collisions and forces, so if you make a small shape with a high density it will have a very large mass (like a bar of lead), but if you define a large shape with a low density it will have a much smaller mass (like a balloon).

Note that setting the density to 0 will create a "static" fixture that is essentially infinmitely dense and will not be affected by external forces or collisions, except in special cases where the instance has been created as **kinematic** (see below for more details).

[RestitutionRestitution](Physics_Objects.htm#)

In physics, restitution is defined as "the return of an object or system to its original state after elastic deformation", but as the fixtures in the GameMaker are really rigid bodies and cannot be deformed, restitution is really a way of saying how "bouncy" the fixture is. This setting will affect how much an object "bounces" when it collides with other objects and is codependent on other forces that act on the instance like gravity and friction.

[Collision GroupCollision Group](Physics_Objects.htm#)

The default collision group for all physics objects is 1, a _positive_ collision group. Instances of objects that are in the same _positive_ collision group (i.e. three objects are all in group 1) _always_ collide with each other, even if they don't have a collision event. Physics objects with a collision group of 0 will interact as normal, which means they **must have a collision event to interact** (a simple comment will do to trigger the collision), otherwise no collision will be registered. Instances of objects with a _negative_ collision group (i.e. four objects assigned -1) _never_ collide, and any collision events between them will be ignored.

NOTE Using collision groups dramatically increases the processing required by the physics system and should be used only when absolutely necessary, and you should have as few groups as possible.

[Linear DampingLinear Damping](Physics_Objects.htm#)

Damping is used to reduce the physics world velocity of an instance as it moves through the room. In principle this is like friction against a surface in the "real" world, but in the GameMaker physics system, friction is actually only applied when two instances with collision shapes (fixtures) are in contact. So, you can consider linear damping as more like "air friction" that gradually slows any moving physics instance over time, without the need for contact with any other physics instance.

[Angular DampingAngular Damping](Physics_Objects.htm#)

If you think about any rotating object in the "real world", unless it has a motor or is in space, its rotation will slow down over time due to the influence of external forces (like mechanical friction or friction against the air or water surrounding it). We can use the angular damping option to simulate this effect and reduce the velocity of rotation of instances in the physics world, as without it, any rotating instance would continue to rotate infinitely.

[FrictionFriction](Physics_Objects.htm#)

Friction is the force that resists the relative motion of material elements sliding against each other, which in the GameMaker physics world, translates as the loss of momentum caused by the collision of two instances with physics fixtures. So, when two instances collide, their motion is affected by this value, with a high friction causing a larger loss of momentum than a lower value.

Finally there are three extra options that can be flagged as on or off for your fixture, **Sensor**, **Start Awake** and **Kinematic**. Each of these flags will change the behaviour of your fixture in the following ways:

[SensorSensor](Physics_Objects.htm#)

By checking this box, you are telling GameMaker to basically "ignore" the physical properties of the object, but still return a collision event with the objects around it. In this way you can have an instance with no physical presence in the room, but which can react to the collision of another instance, like the player, and do something in turn, like open a door, or trigger some sort of action in another place in the room.

NOTE A sensor fixture will fire off the collision event when the collision **first occurs only**, meaning you don't get a stream of collision events as the two bodies continue to overlap (which is what would traditionally occur). If they stop overlapping and overlap subsequently there will be another collision event triggered.

[Start AwakeStart Awake](Physics_Objects.htm#)

This is checked by default and represents the initial "state" of the fixture at the start of the room it has been placed in. Normally you want it to be awake (ie: participating in the physics world) right from the start, but sometimes this can lead to certain instabilities and unwanted effects due to the abrupt start of the physics simulation. To avoid these effects, you can un-check this flag and the instance will be created with the fixture asleep, and it will not participate in the physics simulation unless something acts upon it.

NOTE Physics instances will be flagged as "asleep" when they are no longer under any movement or having interaction with any other physics instance, and an "asleep" instance is simply one that is not currently being fully processed by the physics simulation (which saves on CPU overhead).

[KinematicKinematic](Physics_Objects.htm#)

There will be certain instances in a physics based game which you want to move around but do not wish to be acted on by forces such as gravity, nor forces incurred by collisions with dynamic objects (think of moving platforms in a platform game, for example). For such objects simply setting the density of the fixture to 0 will mean that the physics will assume that the object is intended to be **static** and it will not react at all to anything. However, checking this box will make a static object **kinematic** and although it will still be unaffected by collisions and forces like gravity, it can now be moved around or rotated using the appropriate variables (see [phy\_position\_x](../../GameMaker_Language/GML_Reference/Physics/Physics_Variables/phy_position_x.md) and [phy\_position\_y](../../GameMaker_Language/GML_Reference/Physics/Physics_Variables/phy_position_y.md), for example).