---
title: "vertex_texcoord"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_texcoord.htm"
converted: "2025-09-14T03:59:53.516Z"
---

# vertex\_texcoord

This function sets the texture coordinates to use for the vertex currently being defined for the custom primitive.

You supply the vertex buffer to write the data into as well as the UV position on the texture page to use.

NOTE To get the UV range of a specific asset on the texture page you can use [sprite\_get\_uvs](../../Asset_Management/Sprites/Sprite_Information/sprite_get_uvs.md), [font\_get\_uvs](../../Asset_Management/Fonts/font_get_uvs.md) and [tileset\_get\_uvs](../../Asset_Management/Tilsets/tileset_get_uvs.md).

#### Syntax:

vertex\_texcoord(buffer, u, v);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Vertex Buffer | The vertex buffer to write the information to. |
| u | Real | The first texture coordinate on the texture page to use (0 - 1). |
| v | Real | The second texture coordinate on the texture page to use (0 - 1). |

#### Returns:

N/A

#### Example:

vertex\_texcoord(buff, 0, 0);

The above code sets the UV coordinates of the vertex being defined to the top-left corner of the texture page that will be used to draw it.