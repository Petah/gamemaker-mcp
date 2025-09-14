---
title: "Particle Systems"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Systems/Particle_Systems.htm"
converted: "2025-09-14T03:59:51.777Z"
---

# Particle Systems

Before you can create particles you need to create a particle system. This is a "container" where you place your particles and emitters (if you need them) ready for use, and you can put as many or as few particles into any one system as you think necessary, and you can have as many systems as you think necessary too. However, it is always better to keep this number as small as possible due to the fact that each system, emitter and particle takes up memory and having too many of them may slow your game down or cause problems. For example, if you need some effects to appear above instances, and other effects to appear below instances, you would create two systems and set their depths to get the desired effect, with all particles that are added to each system being drawn at the depth you specify.

Since a particle system is a dynamically created resource, you must create it and store the returned handle in a variable to reference the system in all further function calls, and it is very important that you also destroy the system when it is no longer needed or else you will have a memory leak that will slow down and eventually crash your game. It is also worth noting that particle systems will live on forever after they are created, even if the handle is no longer stored. So even if you change room or restart the game, the systems and the particles will remain, and be visible, in all further rooms so you better make sure you destroy them once you no longer need them.

TIP If you prefer a more visual approach to creating particles and don't need the extensive functionality that GML Code offers, you can also create a [Particle System Asset](../../../../../The_Asset_Editors/Particle_Systems.md) using [The Particle System Editor](../../../../../The_Asset_Editors/Particle_Systems.md). Additionally, you can generate the GML Code for it using the editor's **Copy GML to Clipboard** ![](../../../../../assets/Images/Icons/Icon_GML_To_Clipboard.png).

## Copy GML to Clipboard

Using [The Particle System Editor](../../../../../The_Asset_Editors/Particle_Systems.md)'s **Copy GML to Clipboard** button ![](../../../../../assets/Images/Icons/Icon_GML_To_Clipboard.png) you can generate the GML Code needed to create a particle system that's identical to the one you created. The code could, for example, go in an object's Create event:

Create Event

var \_ps = part\_system\_create();
part\_system\_draw\_order( \_ps, true);

var \_ptype1 = part\_type\_create();
part\_type\_shape( \_ptype1, pt\_shape\_sphere );
part\_type\_size( \_ptype1, 1, 1, 0, 0 );
part\_type\_scale( \_ptype1, 1, 1);
part\_type\_speed( \_ptype1, 2, 2, 0, 0);
part\_type\_direction( \_ptype1, 0, 0, 4, 0);
part\_type\_gravity( \_ptype1, 0, 270);
part\_type\_orientation( \_ptype1, 0, 0, 0, 0, false);
part\_type\_colour3( \_ptype1, $7F7FFF, $FFFFFF, $FFEFBC );
part\_type\_alpha3( \_ptype1, 1, 1, 0.169);
part\_type\_blend( \_ptype1, true);
part\_type\_life( \_ptype1, 80, 80);

var \_pemit1 = part\_emitter\_create( \_ps );
part\_emitter\_region( \_ps, \_pemit1, -64, 64, -64, 64, ps\_shape\_rectangle, ps\_distr\_linear );
part\_emitter\_stream(\_ps, \_pemit1, \_ptype1, 1);

part\_system\_position(\_ps, room\_width/2, room\_height/2);

As the above code shows, emitters start streaming particles if you've configured them to be in **Stream** mode. By default, the particle system's position is set to the center of the room.

IMPORTANT The particle system, emitters and types have to be destroyed manually (e.g. in the Clean Up event) to prevent memory leaks. Since emitters exist within systems, destroying a particle system destroys its emitters automatically.

## Function Reference

### Setting Up

-   [part\_system\_exists](part_system_exists.md)
-   [part\_system\_create](part_system_create.md)
-   [part\_system\_create\_layer](part_system_create_layer.md)
-   [part\_system\_get\_layer](part_system_get_layer.md)
-   [part\_system\_layer](part_system_layer.md)
-   [part\_system\_depth](part_system_depth.md)
-   [part\_system\_position](part_system_position.md)
-   [part\_system\_angle](../../../../../../../../GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Systems/part_system_angle.md)
-   [part\_system\_global\_space](part_system_global_space.md)
-   [part\_system\_colour](part_system_colour.md)
-   [part\_system\_clear](part_system_clear.md)
-   [part\_system\_destroy](../../../../../../../../GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Systems/part_system_destroy.md)
-   [part\_particles\_clear](part_particles_clear.md)
-   [part\_particles\_count](part_particles_count.md)

### Updating and Drawing

Once particles are added to a particle system and then burst or streamed into the room, they are normally automatically updated each step and drawn based on the parameters that you have used to define them. However it can sometimes be necessary to control when and how the system is updated as well as how the system should be drawn, and for that GameMaker provides the following functions:

-   [part\_system\_automatic\_update](part_system_automatic_update.md)
-   [part\_system\_automatic\_draw](../../../../../../../../GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Systems/part_system_automatic_draw.md)
-   [part\_system\_update](part_system_update.md)
-   [part\_system\_drawit](part_system_drawit.md)
-   [part\_system\_draw\_order](part_system_draw_order.md)

### Creating Particles

You can use [particle emitters](../Particle_Emitters/Particle_Emitters.md) to burst or stream particles from an area, but in many cases these are not necessary and it is actually better to just create the particles directly using the following functions:

-   [part\_particles\_create](part_particles_create.md)
-   [part\_particles\_create\_colour](part_particles_create_colour.md)
-   [part\_particles\_burst](part_particles_burst.md)