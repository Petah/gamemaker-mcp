---
title: "sprite_create_from_surface"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_create_from_surface.htm"
converted: "2025-09-14T03:59:42.023Z"
---

# sprite\_create\_from\_surface

With this function you can create a sprite from a previously initialised surface (the surface handle is returned when you create the surface using [surface\_create()](../../../Drawing/Surfaces/surface_create.md)). The x and y coordinates that you then input in the function should be relative to the (0,0) position of the _surface_ (the top left corner) and not the game window (nor the view if you have one active). The width and height arguments are in pixels and define the width and height of the part of the surface to use.

When removeback is enabled, the alpha channel of the source surface is ignored and GameMaker picks the colour of the _bottom left_ pixel in the surface to be the "background colour". All pixels matching that colour are made transparent and all other pixels remain opaque, even those that were previously transparent. In the vast majority of cases, you will not need to use this and can keep it at false.

If you do enable the removeback argument, you may also want GameMaker to smooth the edges of the sprite by setting the "smooth" argument to true. All this does is create a semi-transparent border around the edges of the sprite after it has had its background removed.

Finally you can also specify the x and y _origin_ for the sprite. This is the point where the sprite is "fixed" onto the instance that uses it, and is always calculated as relative to the 0,0 top left corner of one sprite sub-image. So, for example, a sprite that is 32 x 32 pixels with these values set to (16,16) will have its origin in the center.

By default all new sprites have their bounding boxes calculated automatically (the exact bbox will depend on the size and transparency of the sprite), however you may wish to customise this, in which case you should also use the function [sprite\_collision\_mask()](sprite_collision_mask.md).

**NOTE** When you create a sprite in GameMaker with this method you must remember to remove it again (with [sprite\_delete()](sprite_delete.md)) when no longer needed, otherwise there is risk of a memory leak which will slow down and eventually crash your game.

NOTE This function will only work with surfaces that use the [surface\_rgba8unorm](../../../Drawing/Surfaces/surface_create.md) (default) surface format.

#### Syntax:

sprite\_create\_from\_surface(index, x, y, w, h, removeback, smooth, xorig, yorig);

| Argument | Type | Description |
| --- | --- | --- |
| index | Surface | The handle of the surface to create from. |
| x | Real | The x position to copy from. |
| y | Real | The y position to copy from. |
| w | Real | The width of the area to be copied (from the x position). Must be greater than 0. |
| h | Real | The height of the area to be copied (from the y position). Must be greater than 0. |
| removeback | Boolean | Indicates whether to make all pixels with the background colour (left-bottom pixel) transparent. |
| smooth | Boolean | Indicates whether to smooth the edges. |
| xorig | Real | Indicates the x position of the origin in the sprite. |
| yorig | Real | Indicates the y position of the origin in the sprite. |

#### Returns

[Sprite Asset](../../../../../The_Asset_Editors/Sprites.md)

#### Example:

var surf;
surf = surface\_create(32, 32);
surface\_set\_target(surf);
draw\_clear\_alpha(c\_black, 0);
draw\_sprite(spr\_Body, 0, 0, 0);
draw\_sprite(spr\_Clothes, 0, 0, 0);
draw\_sprite(spr\_Hair, 0, 0, 0);
spr\_custom = sprite\_create\_from\_surface(surf, 0, 0, 32, 32, false, false, 16, 16);
surface\_reset\_target();
surface\_free(surf);

The above code creates a surface and stores its index in the local variable "surf". It then targets that surface, clears it and draws several sprites on top of each other. Finally it creates a new sprite from the composite image drawn on the surface and assigns its index to "spr\_Custom" before freeing up the memory used by the surface.