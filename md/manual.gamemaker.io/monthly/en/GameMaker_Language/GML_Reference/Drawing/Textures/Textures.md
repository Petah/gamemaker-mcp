---
title: "Textures"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Textures/Textures.htm"
converted: "2025-09-14T03:59:54.934Z"
---

# Textures

The following functions are all related to "textures", i.e.: images that are stored in VRAM to be used as sprites or other graphical elements within your game.

Textures refer to:

-   [Texture Pages](../../../../Settings/Texture_Information/Texture_Pages.md) created by GameMaker, which contain:
    -   Sprites that you add to [Texture Groups](../../../../Settings/Texture_Groups.md) or place on a [Separate Texture Page](../../../../Settings/Texture_Information/Texture_Pages.htm#h)
    -   Font glyphs
    -   [Tile Sets](../../Asset_Management/Tilsets/Tile_Sets.md)
-   [Surfaces](../Surfaces/Surfaces.md): custom textures that provide a canvas that you can draw anything to

## Function Reference

### Texture Page Info

The following functions are used to retrieve information about specific images and their position or size on the [Texture Page](../../../../Settings/Texture_Information/Texture_Pages.md) as well as set certain texture features:

-   [​texture\_get\_width](texture_get_width.md)
-   [texture\_get\_height](texture_get_height.md)
-   [texture\_get\_texel\_width](texture_get_texel_width.md)
-   [texture\_get\_texel\_height](texture_get_texel_height.md)
-   [texture\_get\_uvs](texture_get_uvs.md)
-   [texture\_set\_stage](texture_set_stage.md)
-   [texture\_global\_scale](texture_global_scale.md)

### VRAM Management

The following functions are related to managing the VRAM associated with individual textures as well as whole texture groups:

-   [draw\_texture\_flush](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Textures/draw_texture_flush.md)
-   [texture\_prefetch](texture_prefetch.md)
-   [texture\_flush](texture_flush.md)
-   [sprite\_flush](../../Asset_Management/Sprites/Sprite_Manipulation/sprite_flush.md)
-   [sprite\_flush\_multi](../../Asset_Management/Sprites/Sprite_Manipulation/sprite_flush_multi.md)
-   [sprite\_prefetch](../../Asset_Management/Sprites/Sprite_Manipulation/sprite_prefetch.md)
-   [sprite\_prefetch\_multi](../../Asset_Management/Sprites/Sprite_Manipulation/sprite_prefetch_multi.md)
-   [draw\_flush](../draw_flush.md)

### Debugging

The following functions are primarily for use to debug the project and ensure efficient use of texture memory:

-   [texture\_debug\_messages](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Textures/texture_debug_messages.md)
-   [texture\_is\_ready](texture_is_ready.md)
-   [texturegroup\_get\_textures](texturegroup_get_textures.md)
-   [texturegroup\_get\_sprites](texturegroup_get_sprites.md)
-   [texturegroup\_get\_fonts](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Textures/texturegroup_get_fonts.md)
-   [texturegroup\_get\_tilesets](texturegroup_get_tilesets.md)
-   [texturegroup\_get\_names](texturegroup_get_names.md)

### [Dynamic Textures](../../../../Settings/Texture_Information/Dynamic_Textures.md)

-   [texturegroup\_load](texturegroup_load.md)
-   [texturegroup\_unload](texturegroup_unload.md)
-   [texturegroup\_set\_mode](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Textures/texturegroup_set_mode.md)
-   [texturegroup\_get\_status](texturegroup_get_status.md)