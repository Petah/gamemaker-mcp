---
title: "texture_is_ready"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Textures/texture_is_ready.htm"
converted: "2025-09-14T03:59:55.092Z"
---

# texture\_is\_ready

This function can be used to check if a specific texture page has been unpacked and is ready for use, or if a group of texture pages have been unpacked and are ready for use.

You supply the unique **texture page ID** (as found in the array from [texturegroup\_get\_textures](texturegroup_get_textures.md)) or the texture group ID string (as defined in the [Texture Group Editor](../../../../Settings/Texture_Groups.md)), and the function will return true if they have been unpacked, or false otherwise.

#### Syntax:

texture\_is\_ready(tex\_id);

| Argument | Type | Description |
| --- | --- | --- |
| tex_id | Texture or String | The texture page pointer or a texture group name (a string) |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

var \_tex\_array = texturegroup\_get\_textures( "MainMenu");
for (var i = 0; i < array\_length(\_tex\_array); ++i;)
{
    if !texture\_is\_ready(\_tex\_array\[i\])
    {
        texture\_prefetch(\_tex\_array\[i\]);
    }
}

The above code will retrieve the texture page IDs for the texture group "MainMenu", then check to see if they are unpacked, and if they are not they are prefetched into VRAM.