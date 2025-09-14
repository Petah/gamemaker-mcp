---
title: "Soft Body Particles"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Soft_Body_Particles/Soft_Body_Particles.htm"
converted: "2025-09-14T04:00:06.252Z"
---

# Soft Body Particles

GameMaker uses the Box2D rigid body physics library, and as such does not permit soft body physics. However the [**Liquid Fun**](https://google.github.io/liquidfun/) extension adds _particles_ to the physics system, which permit the creation of simulated soft-bodies using rigid body physics. Basically, you can create a _shape_ of particles that maintain cohesion and so simulate a full body, which, due to the interaction of the particles, gives the impression of a soft body. You can also use the physics particles to simulate liquids and other particle-based physics systems.

Before you start to create your physics particles you will need to set the basic physics properties for them, as you would a _fixture_ in the regular physics. Note though that setting these properties will affect _all particles created previously_ as well as any new particles that you create, so you would normally only use these functions at the start of the game or level. However there are specific functions available to set the particle _flags_ for individual particles (and groups of particles) which will change their properties like "bounciness" or "viscosity", enabling you to create different types of particle within the ranges of these global settings.

The following functions are available for setting and getting global particle system data:

-   [physics\_particle\_count](physics_particle_count.md)
-   [physics\_particle\_group\_count](physics_particle_group_count.md)
-   [physics\_particle\_set\_max\_count](physics_particle_set_max_count.md)
-   [physics\_particle\_set\_radius](physics_particle_set_radius.md)
-   [physics\_particle\_set\_density](physics_particle_set_density.md)
-   [physics\_particle\_set\_damping](physics_particle_set_damping.md)
-   [physics\_particle\_set\_gravity\_scale](physics_particle_set_gravity_scale.md)
-   [physics\_particle\_get\_max\_count](physics_particle_get_max_count.md)
-   [physics\_particle\_get\_radius](physics_particle_get_radius.md)
-   [physics\_particle\_get\_density](physics_particle_get_density.md)
-   [physics\_particle\_get\_damping](physics_particle_get_damping.md)
-   [physics\_particle\_get\_gravity\_scale](physics_particle_get_gravity_scale.md)

You also have the following functions available for setting _flags_ on individual particles (or groups of particles), as well as for getting information, like position or colour, from a single particle or a single group:

-   [physics\_particle\_set\_flags](physics_particle_set_flags.md)
-   [physics\_particle\_set\_category\_flags](physics_particle_set_category_flags.md)
-   [physics\_particle\_set\_group\_flags](physics_particle_set_group_flags.md)
-   [physics\_particle\_get\_group\_flags](physics_particle_get_group_flags.md)
-   [physics\_particle\_group\_get\_inertia](physics_particle_group_get_inertia.md)
-   [physics\_particle\_group\_get\_mass](physics_particle_group_get_mass.md)
-   [physics\_particle\_group\_get\_centre\_x](physics_particle_group_get_centre_x.md)
-   [physics\_particle\_group\_get\_centre\_y](physics_particle_group_get_centre_y.md)
-   [physics\_particle\_group\_get\_vel\_x](physics_particle_group_get_vel_x.md)
-   [physics\_particle\_group\_get\_vel\_y](physics_particle_group_get_vel_y.md)
-   [physics\_particle\_group\_get\_ang\_vel](physics_particle_group_get_ang_vel.md)
-   [physics\_particle\_group\_get\_x](physics_particle_group_get_x.md)
-   [physics\_particle\_group\_get\_y](physics_particle_group_get_y.md)
-   [physics\_particle\_group\_get\_angle](physics_particle_group_get_angle.md)
-   [physics\_particle\_get\_data](physics_particle_get_data.md)
-   [physics\_particle\_get\_data\_particle](physics_particle_get_data_particle.md)
-   [physics\_particle\_group\_get\_data](physics_particle_group_get_data.md)

You can create particles in two ways - individually or in groups. Individual particles will behave exactly as defined by the global settings and the flags that were set when they were created, but groups of particles can exhibit different behaviours depending on their _group flags_. These _group flags_ can be set to different values to give the group different properties, like penetration and rigidity.

The following functions are available for creating particles:

-   [physics\_particle\_create](physics_particle_create.md)
-   [physics\_particle\_group\_begin](physics_particle_group_begin.md)
-   [physics\_particle\_group\_circle](physics_particle_group_circle.md)
-   [physics\_particle\_group\_box](physics_particle_group_box.md)
-   [physics\_particle\_group\_polygon](physics_particle_group_polygon.md)
-   [physics\_particle\_group\_add\_point](physics_particle_group_add_point.md)
-   [physics\_particle\_group\_end](physics_particle_group_end.md)
-   [physics\_particle\_group\_join](physics_particle_group_join.md)
-   [physics\_particle\_group\_delete](physics_particle_group_delete.md)

Not only can you create particles, but you can delete them too, either individually or in a region. The following functions are available for deleting particles from the system:

-   [physics\_particle\_delete](physics_particle_delete.md)
-   [physics\_particle\_delete\_region\_circle](physics_particle_delete_region_circle.md)
-   [physics\_particle\_delete\_region\_box](physics_particle_delete_region_box.md)
-   [physics\_particle\_delete\_region\_poly](physics_particle_delete_region_poly.md)

Unless you have activated the debug drawing using [physics\_draw\_debug()](../The_Physics_World/physics_draw_debug.md), you won't see any particles on the screen when you create them. Therefore to actually see the particles, you need to draw them to the screen in the **Draw Event** of an instance using the following functions (note that you can also draw them using the regular draw\_sprite functions if you get the data for each particle using the function [physics\_particle\_get\_data()](physics_particle_get_data.md)):

-   [physics\_particle\_draw](physics_particle_draw.md)
-   [physics\_particle\_draw\_ext](physics_particle_draw_ext.md)