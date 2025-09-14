---
title: "part_system_create"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Systems/part_system_create.htm"
converted: "2025-09-14T03:59:51.959Z"
---

# part\_system\_create

This function creates a new particle system and returns its handle.

The system will be assigned a managed layer and will be set to have a depth of 0. Managed layers are not accessible to the user and are used only for internal management when depth is used instead of layers. Normally you would use the function [part\_system\_create\_layer](part_system_create_layer.md) instead of this one.

Optionally you can provide a [Particle System Asset](../../../../../The_Asset_Editors/Particle_Systems.md) created using [The Particle System Editor](../../../../../The_Asset_Editors/Particle_Systems.md). Doing so will create the system defined in that asset, with all of its emitters.

NOTE A particle system created using this function needs to be cleaned up manually using [part\_system\_destroy](../../../../../../../../GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Systems/part_system_destroy.md) when no longer used, otherwise you risk a memory leak that will negatively impact your final game.

#### Syntax:

part\_system\_create(\[partsys\]);

| Argument | Type | Description |
| --- | --- | --- |
| partsys | Particle System Asset | OPTIONAL The particle system asset to create an instance of |

#### Returns:

[Particle System Instance](part_system_create.md)

#### Example:

Create Event

part\_sys = part\_system\_create();
part\_emitter = part\_emitter\_create(part\_sys);
part\_emitter\_region(part\_sys, part\_emitter, 0, room\_width, 0, room\_height, ps\_shape\_rectangle, ps\_distr\_linear);
part\_type = part\_type\_create();
part\_type\_shape(part\_type, pt\_shape\_disk);

part\_emitter\_stream(part\_sys, part\_emitter, part\_type, 2);

Clean Up Event

part\_system\_destroy(part\_sys);
part\_type\_destroy(part\_type);

The code above shows how to set up a basic particle system with an emitter and destroy it afterwards.

In the Create event, a particle system instance is created using part\_system\_create and an emitter is added to it. The emitter is configured to emit particles all across the room using a linear distribution. After that, a particle type is created and its shape is set to a disk shape. Lastly, the particle emitter is set to emit two particles of the created type every frame.

In the Clean Up event, the particle system is destroyed with a call to [part\_system\_destroy](../../../../../../../../GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Systems/part_system_destroy.md), which also destroys the emitter. The particle type is destroyed separately using [part\_type\_destroy](../Particle_Types/part_type_destroy.md).