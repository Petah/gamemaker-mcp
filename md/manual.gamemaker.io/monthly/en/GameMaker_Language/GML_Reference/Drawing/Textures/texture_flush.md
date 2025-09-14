---
title: "texture_flush"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Textures/texture_flush.htm"
converted: "2025-09-14T03:59:54.980Z"
---

# texture\_flush

This function can be used to "flush" a texture page or a group of texture pages, i.e.: remove them from VRAM when no longer required. The textures stay in RAM.

You supply the unique **texture page ID** (as found in the array from [texturegroup\_get\_textures](texturegroup_get_textures.md)) to flush a single page, or you can supply a **texture group name** (as defined in the [Texture Group Editor](../../../../Settings/Texture_Groups.md)) to flush all the texture pages in the group.

**WARNING** This will not work on HTML5 when WebGL is disabled or not supported by the browser. WebGL can be allowed or set to be required in the [HTML5 Game Options](../../../../Settings/Game_Options/HTML5.md) under **Graphics**.

#### Syntax:

texture\_flush(tex\_id);

| Argument | Type | Description |
| --- | --- | --- |
| tex_id | Texture or String | The texture page pointer or a texture group name (a string) |

#### Returns:

N/A

#### Example:

var \_tex\_array = texturegroup\_get\_textures( "MainMenu");
for (var i = 0; i < array\_length(\_tex\_array); ++i;)
{
    texture\_flush(\_tex\_array\[i\]);
}

The above code will flush all the texture pages under the texture group "MainMenu".