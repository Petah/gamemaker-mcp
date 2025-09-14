---
title: "Lighting"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Lighting/Lighting.htm"
converted: "2025-09-14T03:59:50.946Z"
---

# Lighting

When working with 3D scenes, what you draw with the GameMaker functions may look rather "flat" because there is no lighting to give them realism and life. This means that the colours of the primitive faces are equal all over, independent of their orientation or position, therefore, to create more realistic looking scenes you must enable lighting and place lights at the correct places within the 3D world. This section outlines the functions available to help you achieve that.

NOTE The lighting functions require a [normal](../Primitives/vertex_format_add_normal.md) property in the [vertex format](../Primitives/Primitives_And_Vertex_Formats.md) of whatever's being drawn. This means this will not work with regular draw functions like [draw\_sprite](../Sprites_And_Tiles/draw_sprite.md), and vertex buffers that need to use lighting will need to use a vertex format with normals.

## Function Reference

-   [draw\_light\_define\_ambient](draw_light_define_ambient.md)
-   [draw\_light\_define\_point](draw_light_define_point.md)
-   [draw\_light\_define\_direction](draw_light_define_direction.md)
-   [draw\_light\_enable](draw_light_enable.md)
-   [draw\_set\_lighting](draw_set_lighting.md)
-   [draw\_light\_get\_ambient](draw_light_get_ambient.md)
-   [draw\_light\_get](draw_light_get.md)
-   [draw\_get\_lighting](draw_get_lighting.md)

For using these properties in your shaders, see: [Built-In Shader Constants](../../Asset_Management/Shaders/Shader_Constants.md)