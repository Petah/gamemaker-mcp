---
title: "texturegroup_get_textures"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Textures/texturegroup_get_textures.htm"
converted: "2025-09-14T03:59:55.196Z"
---

# texturegroup\_get\_textures

This function can be used to retrieve the **texture page IDs** of the individual pages that make up a texture group. You supply the texture group ID string (as defined in the Texture Group Editor), and the function will return a 1D array, where each entry in the array is a single texture page ID. If the function fails - ie: an invalid group is given, or the group has no texture assigned to it - then the array will be empty (0 length).

#### Syntax:

texturegroup\_get\_textures(tex\_id);

| Argument | Type | Description |
| --- | --- | --- |
| tex_id | String | The name of the texture group to check (a string) |

#### Returns:

[Array](../../../GML_Overview/Arrays.md) of [Texture](../../Asset_Management/Sprites/Sprite_Information/sprite_get_texture.md)s

#### Example:

var \_tex\_array = texturegroup\_get\_textures( "MainMenu");
for (var i = 0; i < array\_length(\_tex\_array); ++i;)
{
    if texture\_is\_ready(\_tex\_array\[i\])
    {
        texture\_prefetch(\_tex\_array\[i\]);
    }
}

The above code will retrieve the texture page IDs for the texture group "MainMenu", then check to see if they are unpacked, and if they are them they are placed into VRAM.