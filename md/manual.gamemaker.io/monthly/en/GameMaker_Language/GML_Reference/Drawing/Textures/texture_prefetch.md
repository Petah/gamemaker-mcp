---
title: "texture_prefetch"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Textures/texture_prefetch.htm"
converted: "2025-09-14T03:59:55.108Z"
---

# texture\_prefetch

This function can be used to "prefetch" a texture page or a group of texture pages, i.e.: load them into VRAM when required.

You supply the unique **texture page ID** (as found in the array from [texturegroup\_get\_textures](texturegroup_get_textures.md)) to prefetch a single page, or you can supply a **texture group name** (as defined in the [Texture Group Editor](../../../../Settings/Texture_Groups.md)) to prefetch all the texture pages in the group.

NOTE There is a performance hit as the texture is uploaded to texture memory on most devices, so it's recommended that you call texture\_prefetch on any required graphics at the start of a level to avoid any stalls.

**WARNING** This will not work on HTML5 when WebGL is disabled or not supported by the browser. WebGL can be allowed or set to be required in the [HTML5 Game Options](../../../../Settings/Game_Options/HTML5.md) under **Graphics**.

#### Syntax:

texture\_prefetch(tex\_id);

| Argument | Type | Description |
| --- | --- | --- |
| tex_id | Texture or String | The texture page pointer or a texture group name (a string) |

#### Returns:

N/A

#### Example:

var \_tex\_array = texturegroup\_get\_textures( "MainMenu");
for (var i = 0; i < array\_length(\_tex\_array); ++i;)
{
    texture\_prefetch(\_tex\_array\[i\]);
}

The above code will prefetch all the texture pages under the texture group "MainMenu".