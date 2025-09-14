---
title: "sprite_collision_mask"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_collision_mask.htm"
converted: "2025-09-14T03:59:42.001Z"
---

# sprite\_collision\_mask

With this function you can set the properties of the collision mask that a sprite should have. For information on sprite masks, see: [Collision Mask](../../../../../The_Asset_Editors/Sprites.htm#p)

You can supply one of the following bbox modes for the bboxmode argument:

| Bounding Box Mode Constant |
| --- |
| Constant | Description |
| bboxmode_automatic | Automatic - The bounding box will be calculated automatically, based on the tolerance setting for the sprite |
| bboxmode_fullimage | Full Image - The bounding box will be set to use the full width and height of the sprite, regardless of the tolerance and "empty" pixels |
| bboxmode_manual | Manual - The bounding box is set manually to user defined values, specified either in sprite_collision_mask along with the mode, or separately in sprite_set_bbox |

If you select either automatic or full image as the bounding box mode, then the individual bounding box values can be set to 0. However for a user defined mask, you will have to set these values. The different bounding box values are always relative to the top left corner of the sprite (irrespective of the x and y origin) which is considered position (0, 0).

Setting the kind of mask sets the general shape for the mask itself, but note that anything other than a rectangular mask will require more processing power when resolving collisions, with a subsequent drop in performance. In general, you should only use mask types other than rectangular when absolutely necessary.

NOTE This function does not permit the **rotated rectangle** collision mask kind.

NOTE Spine sprites can only use the bboxmode\_fullimage and bboxmode\_manual modes, using bboxkind\_rectangular on either mode, or bboxkind\_spine only in full image mode.

The kind of mask that can be set will be one of the following constants, passed into the kind argument:

| Bounding Box Kind (Shape) Constant |
| --- |
| Constant | Description |
| bboxkind_rectangular | A rectangular (non-rotating) rectangle collision mask shape, usable for Spine sprites |
| bboxkind_ellipse | An elliptical collision mask shape |
| bboxkind_diamond | A diamond collision mask shape |
| bboxkind_precise | A precise collision mask, where the mask will conform to the non-transparent pixels of the sprite, based on the tolerance value given (see below)) |
| bboxkind_spine | Apart from rectangle, this is the only valid option for Spine sprites. It enables more precise collision checking against the mesh in the sprite. |


Finally, tolerance is used to define how precise the mask is (when used with a "full image" mask, this will have no effect), with a tolerance of 0 meaning that the mask will follow every single pixel that has a transparency over 0, while other values will shift the collision mask perimeter depending on the transparency of the pixels.

NOTE This function will only work on added sprites or duplicated sprites and **not** directly on pre-made assets. You can duplicate sprites using the function [sprite\_duplicate()](sprite_duplicate.md).

#### Syntax:

sprite\_collision\_mask(ind, sepmasks, bboxmode, bbleft, bbtop, bbright, bbbottom, kind, tolerance);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Sprite Asset | The index of the sprite to set the bounding box of. |
| sepmasks | Boolean | Whether to create collision masks for each sub-image of the sprite (true), or one mask for all (false). |
| bboxmode | Real | What kind of bounding box to use. 0 = automatic, 1 = full image, 2 = user defined. |
| bbleft | Real | The maximum left position of the bounding box. |
| bbtop | Real | The maximum top position of the bounding box. |
| bbright | Real | The maximum right position of the bounding box. |
| bbbottom | Real | The maximum bottom position of the bounding box. |
| kind | Bounding Box Kind (Shape) Constant | The kind of mask, a constant (see the table in the description). |
| tolerance | Real | Indicates the tolerance in the transparency value (0=no tolerance, 255=full tolerance). |

#### Returns

N/A

#### Example:

spr = sprite\_add("player\_5.png", 16, true, true, 0, 0);
sprite\_collision\_mask(spr, true, 1, 0, 0, 0, 0, 0, 0);

The above code loads a sprite from an external source and stores the new index in the variable "spr". The code then sets the new sprite to have a precise collision mask for each of its sub-images.