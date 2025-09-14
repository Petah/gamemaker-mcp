---
title: "Sprites And Tiles"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/Sprites_And_Tiles.htm"
converted: "2025-09-14T03:59:53.588Z"
---

# Sprites And Tiles

Even though you can set up backgrounds in the room editor and you can assign sprites to instances, often this is not flexible enough for the game you are making. For example, if you have an instance that has to draw a menu, you may want to display various button sprites at a time, or if you have a game with scrolling parallax backgrounds you will need to be able to set them through code in a controller instance of some type. In these situations you should be using the following functions which can draw sprite and background assets anywhere in the room with some of the functions also permitting you to manipulate the shape, size, colour and alpha of the sprite to achieve special effects.

You can assign a sprite to an instance and by default GameMaker will draw it with the properties given by the various [sprite variables](../../Asset_Management/Sprites/Sprite_Instance_Variables/Sprite_Instance_Variables.md), however if you add anything into the draw event, you are "taking control" and must tell GameMaker exactly what to draw. This means that if you must use the following functions to define exactly what it is the instance is to draw and where about in the room it is to draw it:

-   [draw\_self](draw_self.md)
-   [draw\_sprite](draw_sprite.md)
-   [draw\_sprite\_ext](draw_sprite_ext.md)
-   [draw\_sprite\_general](draw_sprite_general.md)
-   [draw\_sprite\_part](draw_sprite_part.md)
-   [draw\_sprite\_part\_ext](draw_sprite_part_ext.md)
-   [draw\_sprite\_stretched](draw_sprite_stretched.md)
-   [draw\_sprite\_stretched\_ext](draw_sprite_stretched_ext.md)
-   [draw\_sprite\_pos](draw_sprite_pos.md)
-   [draw\_sprite\_tiled](draw_sprite_tiled.md)
-   [draw\_sprite\_tiled\_ext](draw_sprite_tiled_ext.md)

If you are using SVG/SWF format sprites, then there are also additional options for controlling the anti-aliasing used when drawing (see [Importing Non-Bitmap Sprites](../../../../../../../Settings/Texture_Information/Non-Bitmap_Sprites.md) for more information on these types of sprites). Note that these functions work on a _global_ level and will set the AA on all vector sprites drawn after they have been called.

-   [draw\_enable\_swf\_aa](draw_enable_swf_aa.md)
-   [draw\_set\_swf\_aa\_level](draw_set_swf_aa_level.md)
-   [draw\_get\_swf\_aa\_level](draw_get_swf_aa_level.md)
-   [draw\_enable\_svg\_aa](draw_enable_svg_aa.md)
-   [draw\_set\_svg\_aa\_level](draw_set_svg_aa_level.md)
-   [draw\_get\_svg\_aa\_level](draw_get_svg_aa_level.md)

Apart from those functions listed above, there are also two special functions designed for use with skeletal animations (see [Importing Non-Bitmap Sprites](../../../../../../../Settings/Texture_Information/Non-Bitmap_Sprites.md) for more information on these types of sprites, and the section [Skeletal Animations](../../Asset_Management/Sprites/Skeletal_Animation/Skeletal_Animation.md) for specific functions related to these types of sprites):

-   [draw\_skeleton](../../Asset_Management/Sprites/Skeletal_Animation/Drawing_And_Miscellaneous/draw_skeleton.md)
-   [draw\_skeleton\_instance](../../Asset_Management/Sprites/Skeletal_Animation/Drawing_And_Miscellaneous/draw_skeleton_instance.md)
-   [draw\_skeleton\_collision](../../Asset_Management/Sprites/Skeletal_Animation/Drawing_And_Miscellaneous/draw_skeleton_collision.md)
-   [draw\_skeleton\_time](../../Asset_Management/Sprites/Skeletal_Animation/Drawing_And_Miscellaneous/draw_skeleton_time.md)

Tiles are drawn automatically based on the data that they contain, the tile set used and the tile map properties. However you _can_ draw individual tiles or tile maps using the following functions:

-   [draw\_tile](draw_tile.md)
-   [draw\_tilemap](draw_tilemap.md)