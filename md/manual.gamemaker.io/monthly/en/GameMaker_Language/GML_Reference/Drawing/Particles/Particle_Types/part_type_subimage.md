---
title: "part_type_subimage"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/Particle_Types/part_type_subimage.htm"
converted: "2025-09-14T03:59:52.646Z"
---

# part\_type\_subimage

This function sets the sub-image (or frame) to use for the given particle type, if it uses a custom sprite set using [part\_type\_sprite](part_type_sprite.md).

### Usage Notes

-   The effect of this function depends on the arguments passed to [part\_type\_sprite](part_type_sprite.md):
    -   This function will have no effect if the particle type's sprite is set to use a random sub-image.
    -   If the sprite isn't set to random:
        -   When animate is set to true, the sprite animation will loop, starting at the sub-image set by this function.
        -   When animate is set to false, the particle will use the sub-image as set by this function during its lifetime.

#### Syntax:

part\_type\_subimage(ind, subimg);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Particle Type | The index of the particle type |
| subimg | Real | The sub-image (frame) to use |

#### Returns:

N/A

#### Example 1: Non Animated Sprite Sub-image

pt = part\_type\_create();
part\_type\_sprite(pt, spr\_cards, false, false, false);
part\_type\_subimage(pt, 2);

The code above creates a new particle type and stores its index in an instance variable pt. It then configures the particle type using [part\_type\_sprite](part_type_sprite.md) to use a custom sprite asset spr\_cards that won't play its animation and doesn't use a random sub-image. Finally, the sub-image to use is set to 2 in the call to part\_type\_subimage. As a result, all particles of this type will display sub-image 2 of spr\_cards for their entire lifetime.

#### Example 2: Animated Sprite That Starts Playing at Sub-image

pt = part\_type\_create();
part\_type\_sprite(pt, spr\_cards, true, false, false);
part\_type\_subimage(pt, 2);

The code above creates a new particle type and stores the index in an instance variable pt. It then configures the particle type using [part\_type\_sprite](part_type_sprite.md) to use a custom sprite asset spr\_cards that will play its animation. Since the random argument set to false, a random sub-image isn't chosen for the sprite. Instead, the sub-image provided in the call to part\_type\_subimage is used instead. As a result, all particles of this particle type will use the sprite spr\_cards, animated all starting the animation at sub-image (or frame) 2.