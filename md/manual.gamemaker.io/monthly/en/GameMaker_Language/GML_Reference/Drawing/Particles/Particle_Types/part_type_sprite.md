---
title: "part_type_sprite"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Types/part_type_sprite.htm"
converted: "2025-09-14T03:59:52.611Z"
---

# part\_type\_sprite

This function sets a particle type to use a custom sprite from the game assets.

NOTE Use [part\_type\_shape](part_type_shape.md) to use one of the built-in particle shapes instead.

NOTE This function can be used to change the sprite of existing particles of a particle type.

### Usage Notes

-   You can select the sprite and then tell GameMaker to use the sprite and _animate_ it or not.
-   If you choose to animate it you can also choose to _stretch_ the animation; i.e. have the sub-images changed at an interval such that the animation will begin and end at the beginning and end of the lifetime of each particle created (so that if you have a lifetime set to a 15 step minimum and a 30 step maximum, no matter what value the lifetime has the animation will be made to fit, with it running faster for the shorter lifetimes and slower for the longer).
-   You can also select to choose a _random_ sub-image so that if the sprite isn't animated, a different image will be chosen at random to create the sprite, or if the particle is animated it will start the animation at a random point.
-   You can use [part\_type\_subimage](part_type_subimage.md) to change the sub-image of the sprite to create the particle with, or start the animation with, in case random is false.

#### Syntax:

part\_type\_sprite(ind, sprite, animate, stretch, random);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Particle Type | The index of the particle type to change |
| sprite | Sprite Asset | The sprite to set the particle type to |
| animate | Boolean | Whether to follow the sprite's animation normally (true) or not (false) |
| stretch | Boolean | Whether to stretch the sprite's animation to match the particle lifespan (true) or not (false), as set using part_type_life |
| random | Boolean | Whether to choose a random sub-image at the start (true) or not (false) |

#### Returns:

N/A

#### Example:

global.p1 = part\_type\_create();
part\_type\_sprite(global.p1 , spr\_Coins, 1, 0, 0);
part\_type\_size(global.p1, 1, 3, 0, 0);
part\_type\_scale(global.p1, 1, 1);
part\_type\_colour1(global.p1, c\_white);
part\_type\_alpha2(global.p1, 1, 0);
part\_type\_speed(global.p1, 2, 4, 0, 0);
part\_type\_direction(global.p1, 0, 180, 0, 0);
part\_type\_gravity(global.p1, 0.20, 270);
part\_type\_orientation(global.p1, 0, 0, 0, 0, 1);
part\_type\_blend(global.p1, 1);
part\_type\_life(global.p1, 15, 60);

The above code sets the particle type indexed in the global variable "p1" to the shape of the sprite indexed in "spr\_Coins", and then sets various other particle properties.