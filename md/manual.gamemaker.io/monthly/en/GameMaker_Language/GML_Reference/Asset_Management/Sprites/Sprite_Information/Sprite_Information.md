---
title: "Sprite Information"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/Sprite_Information.htm"
converted: "2025-09-14T03:59:41.244Z"
---

# Sprite Information

The following functions can be used to get information about a sprite asset.

Please note that these functions get the information from the _base_ sprite (i.e. the sprite asset, as created in [The Asset Browser](../../../../../Introduction/The_Asset_Browser.md)) and not from the sprite as it is being used in an instance. For example, you can use the _sprite_ _instance variable_ [sprite\_width](../Sprite_Instance_Variables/sprite_width.md) to get the width of the sprite that an instance is using and this width will take into account any scaling that may have been applied. However, if you need to know the width of a sprite as it would be normally, with no transforms applied, you would need to use the [sprite\_get\_width](sprite_get_width.md) function below.

For more information on the sprite instance variables see the section on [Instance Variables](../../../../GML_Overview/Variables/Instance_Variables.md).

## Function Reference

### General

-   [sprite\_exists](../Sprite_Manipulation/sprite_exists.md)
-   [sprite\_get\_name](sprite_get_name.md)
-   [sprite\_get\_number](sprite_get_number.md)
-   [sprite\_get\_speed](sprite_get_speed.md)
-   [sprite\_get\_speed\_type](sprite_get_speed_type.md)
-   [sprite\_get\_width](sprite_get_width.md)
-   [sprite\_get\_height](sprite_get_height.md)
-   [sprite\_get\_xoffset](sprite_get_xoffset.md)
-   [sprite\_get\_yoffset](sprite_get_yoffset.md)

### Collision Mask

-   [sprite\_get\_bbox\_bottom](sprite_get_bbox_bottom.md)
-   [sprite\_get\_bbox\_left](sprite_get_bbox_left.md)
-   [sprite\_get\_bbox\_right](sprite_get_bbox_right.md)
-   [sprite\_get\_bbox\_top](sprite_get_bbox_top.md)
-   [sprite\_get\_bbox\_mode](sprite_get_bbox_mode.md)
-   [sprite\_get\_convex\_hull](sprite_get_convex_hull.md)

### Nine Slice

-   [sprite\_get\_nineslice](sprite_get_nineslice.md)

### Texture Page

-   [sprite\_get\_tpe](sprite_get_tpe.md)
-   [sprite\_get\_texture](sprite_get_texture.md)
-   [sprite\_get\_uvs](sprite_get_uvs.md)
-   [sprite\_get\_info](sprite_get_info.md)