---
title: "Particle Emitters"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Emitters/Particle_Emitters.htm"
converted: "2025-09-14T03:59:51.467Z"
---

# Particle Emitters

Particle **emitters** are used by GameMaker to emit particles over an area of the screen which can have different forms and distributions. They can also either create a continuous stream of particles or they can burst out a number of particles all at once, depending on the way the functions are used.

TIP If you prefer a more visual approach to creating particles and don't need the extensive functionality that GML Code offers, you can also create a [Particle System Asset](../../../../../The_Asset_Editors/Particle_Systems.md) using [The Particle System Editor](../../../../../The_Asset_Editors/Particle_Systems.md). Additionally, you can generate the GML Code for it using the editor's **Copy GML to Clipboard** ![](../../../../../assets/Images/Icons/Icon_GML_To_Clipboard.png).

Since a particle emitter is a dynamically created resource, you must create it and store the returned index in a variable to reference the emitter in all further function calls, and it is very important that you also destroy the emitter when it is no longer needed or else you will have a memory leak that will slow down and eventually crash your game.

Particle emitters are tied to a particle system at creation so [destroying the particle system](../../../../../../../../GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Systems/part_system_destroy.md) will destroy its associated emitters as well. However you can also individually [destroy](part_emitter_destroy.md) emitters while the system continues to exist.

## Function Reference

NOTE Each of these functions takes the particle syst[em](../Particle_Systems/Particle_Systems.md) to which it belongs as a first argument.

-   [part\_emitter\_exists](../../../../../../../../GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Emitters/part_emitter_exists.md)
-   [part\_emitter\_create](part_emitter_create.md)
-   [part\_emitter\_clear](part_emitter_clear.md)
-   [part\_emitter\_region](part_emitter_region.md)
-   [part\_emitter\_relative](part_emitter_relative.md)
-   [part\_emitter\_burst](part_emitter_burst.md)
-   [part\_emitter\_stream](part_emitter_stream.md)
-   [part\_emitter\_destroy](part_emitter_destroy.md)
-   [part\_emitter\_destroy\_all](part_emitter_destroy_all.md)
-   [part\_emitter\_enable](../../../../../../../../GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Emitters/part_emitter_enable.md)
-   [part\_emitter\_delay](part_emitter_delay.md)
-   [part\_emitter\_interval](../../../../../../../../GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Emitters/part_emitter_interval.md)