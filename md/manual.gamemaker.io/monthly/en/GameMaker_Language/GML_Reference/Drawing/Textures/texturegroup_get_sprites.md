---
title: "texturegroup_get_sprites"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Textures/texturegroup_get_sprites.htm"
converted: "2025-09-14T03:59:55.164Z"
---

# texturegroup\_get\_sprites

With this function you can retrieve the sprite index of each of the sprites assigned to texture pages within the given texture group. You supply the texture group ID string (as defined in the texture Group Editor) and the function will return a 1D array where each entry contains the sprite index for a sprite resource. If the function fails - ie: an invalid group is given, or the group has no texture assigned to it - then the array will be empty (0 length).

#### Syntax:

texturegroup\_get\_sprites(tex\_id);

| Argument | Type | Description |
| --- | --- | --- |
| tex | String | The name of the texture group to check (a string) |

#### Returns:

[Array](../../../GML_Overview/Arrays.md)

#### Example:

var \_tex\_array = texturegroup\_get\_sprites( "MainMenu");
for (var i = 0; i < array\_length(\_tex\_array); ++i;)
{
    show\_debug\_message("Sprite " + string(i) + " Index:" + string(tex\_array\[i\]));
}

The above code will retrieve the sprite indexes for the texture group "MainMenu", then display those IDs in the console output window.