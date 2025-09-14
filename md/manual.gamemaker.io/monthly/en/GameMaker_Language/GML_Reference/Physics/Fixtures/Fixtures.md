---
title: "Fixtures"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Fixtures/Fixtures.htm"
converted: "2025-09-14T04:00:04.812Z"
---

# Fixtures

Before an instance in GameMaker can have physical properties it must have a fixture assigned to it. A fixture binds a shape or form to the instance and this adds material properties such as density, friction, and restitution.

Your physics object will already have a basic fixture assigned to it via [The Object Editor](../../../../The_Asset_Editors/Objects.md) if it has **Uses Physics** checked. This fixture cannot be changed at runtime, although you can assign additional fixtures using the functions listed on this page. If you do not wish to use the default fixture, disable **Uses Physics** for your object and assign a fixture at runtime which will enable Physics for the instance.

Fixtures can be boxes, circles, polygons or any other simple shape you wish as GameMaker provides functions that enable you to define your own shape point by point, and then once you have your shape you can go ahead and define its physical properties too. These properties are what govern the way the instance with the fixture assigned to it will react with other instances in the physics world.

### Creating a Basic Fixture

Creating a fixture requires you to call and store the value from [physics\_fixture\_create](physics_fixture_create.md), set up a shape (see shape functions in the list below), add [points](physics_fixture_add_point.md), assign any optional properties and then [bind](physics_fixture_bind.md) the fixture to an instance:

fix = physics\_fixture\_create();

physics\_fixture\_set\_polygon\_shape(fix);

// Basic 60x60 square
physics\_fixture\_add\_point(fix, -30, -30);
physics\_fixture\_add\_point(fix, 30, -30);
physics\_fixture\_add\_point(fix, 30, 30);
physics\_fixture\_add\_point(fix, -30, 30);

physics\_fixture\_set\_collision\_group(fix, 1);
physics\_fixture\_set\_density(fix, 1);

physics\_fixture\_bind(fix, id);

The code above sets the collision group to 1 so the fixture collides with other fixtures (as this is the default collision group for fixtures created via the IDE) and sets a density so it is affected by gravity. It then binds the fixture to the current instance. You can test this by calling [physics\_draw\_debug](../The_Physics_World/physics_draw_debug.md) in a Draw event to draw the fixtures associated with the instance to the screen for debugging purposes.

NOTE You can only define a fixture within a room that has [Physics](../../../../The_Asset_Editors/Room_Properties/Room_Properties.htm#physics) enabled.

NOTE You can define one fixture and have it bound to multiple instances (think of a pool table, where all the balls have the same physical properties, yet each one is a discreet entity). You can also bind multiple fixtures to a single instance and combine the physical properties (for example, using two triangular polygon fixtures to create a star).

### Properties

You can define the following properties for a fixture:

-   **Density:** A material's density is defined as its mass per unit volume. It is, essentially, a measurement of how tightly matter is crammed together. If you wish your fixture to be _static_ (i.e.: immovable) then the density should be set to 0, essentially making it infinitely dense. _Kinematic_ objects that move with constant velocity and are not physically affected by collisions are also defined using a density of 0.
-   **Friction:** Friction is the force resisting the relative motion of solid surfaces, fluid layers, and material elements sliding against each other.
-   **Linear Damping:** This is the generalised force that causes a moving object to lose momentum. In the "real world" things don't generally happen forever. For example, a paper airplane will fly for a short while but eventually it will fall due to the air friction that acts upon it causing it to slow down. In the physics world that we create such things are difficult to model and so each fixture is given its own linear damping to simulate this type of "generalised friction".
-   **Angular Damping:** As above, this is a generalised force that is applied to an object to stop it spinning eternally.
-   **Restitution:** In physics, restitution is defined as "the return of an object or system to its original state after elastic deformation", but as the fixtures in GameMaker are really rigid bodies and cannot be deformed, think of this as basically how "bouncy" the fixture is.

So as you can see, with just a few simple functions, GameMaker can help you to create complex systems and interactions which will give your games an unprecedented sense of realism.

### Updating Existing Contacts

Two physics instances are "in contact" when their bounding boxes overlap (i.e. the rectangular regions surrounding their actual shapes). In this case, calling one of the physics\_set\_\* functions on a bound fixture _will change_ the value of the property, but in order to force the physics engine to also _take this new value into account_, you'll need to deactivate and reactivate the physics instance using [phy\_active](../Physics_Variables/phy_active.md):

var \_new\_friction = 100;
phy\_active = false;
physics\_set\_friction(fixture\_id, \_new\_friction);
phy\_active = true;

## Function Reference

### General

The following functions are for creating, binding, setting collisions and then deleting fixtures:

-   [physics\_fixture\_create](physics_fixture_create.md)
-   [physics\_fixture\_bind](physics_fixture_bind.md)
-   [physics\_fixture\_bind\_ext](physics_fixture_bind_ext.md)
-   [physics\_fixture\_set\_collision\_group](physics_fixture_set_collision_group.md)
-   [physics\_fixture\_delete](physics_fixture_delete.md)
-   [physics\_remove\_fixture](physics_remove_fixture.md)

### Shapes

A fixture must be given a shape or else it will not be detected by the physics world, and this shape can be defined by the following functions:

-   [physics\_fixture\_set\_box\_shape](physics_fixture_set_box_shape.md)
-   [physics\_fixture\_set\_circle\_shape](physics_fixture_set_circle_shape.md)
-   [physics\_fixture\_set\_edge\_shape](physics_fixture_set_edge_shape.md)
-   [physics\_fixture\_set\_chain\_shape](physics_fixture_set_chain_shape.md)
-   [physics\_fixture\_set\_polygon\_shape](physics_fixture_set_polygon_shape.md)
-   [physics\_fixture\_add\_point](physics_fixture_add_point.md)

### Setting Properties

In order for your physics enabled instance to react properly to the world around it, the fixtures you use must have specific properties defined that will give the fixture bounce, friction, mass, etc. The following functions are used to set these properties of the fixture:

-   [physics\_fixture\_set\_density](physics_fixture_set_density.md)
-   [physics\_fixture\_set\_friction](physics_fixture_set_friction.md)
-   [physics\_fixture\_set\_linear\_damping](physics_fixture_set_linear_damping.md)
-   [physics\_fixture\_set\_angular\_damping](physics_fixture_set_angular_damping.md)
-   [physics\_fixture\_set\_restitution](physics_fixture_set_restitution.md)
-   [physics\_fixture\_set\_sensor](physics_fixture_set_sensor.md)
-   [physics\_fixture\_set\_kinematic](physics_fixture_set_kinematic.md)
-   [physics\_fixture\_set\_awake](physics_fixture_set_awake.md)

### Modifying Bound Fixtures

You can also set certain properties of the fixture _after_ it has been bound to an instance. When binding the "base" fixture, you can choose to store the unique index for the bound physical properties in a variable. This can then be used in the following functions to change certain properties, or to get the current values for them:

-   [physics\_get\_friction](physics_get_friction.md)
-   [physics\_get\_density](physics_get_density.md)
-   [physics\_get\_restitution](physics_get_restitution.md)
-   [physics\_set\_friction](physics_set_friction.md)
-   [physics\_set\_density](physics_set_density.md)
-   [physics\_set\_restitution](physics_set_restitution.md)
-   [physics\_mass\_properties](../physics_mass_properties.md)