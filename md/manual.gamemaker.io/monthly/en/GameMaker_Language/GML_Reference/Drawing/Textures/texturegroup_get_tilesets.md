---
title: "texturegroup_get_tilesets"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Textures/texturegroup_get_tilesets.htm"
converted: "2025-09-14T03:59:55.208Z"
---

# texturegroup\_get\_tilesets

With this function you can retrieve the tileset index of each of the tilesets assigned to texture pages within the given texture group. You supply the texture group ID string (as defined in the texture Group Editor) and the function will return a 1D array where each entry contains the tileset index for a tileset resource. If the function fails - ie: an invalid group is given, or the group has no texture assigned to it - then the array will be empty (0 length).

#### Syntax:

texturegroup\_get\_tilesets(tex\_id);

| Argument | Type | Description |
| --- | --- | --- |
| tex | String | The name of the texture group to check (a string) |

#### Returns:

[Array](../../../GML_Overview/Arrays.md)

#### Example:

var \_tex\_array = texturegroup\_get\_tilesets( "MainMenu");
for (var i = 0; i < array\_length(\_tex\_array); ++i;)
{
    show\_debug\_message("Tileset " + string(i) + " Index:" + string(tex\_array\[i\]));
}

The above code will retrieve the tileset indexes for the texture group "MainMenu", then display those IDs in the console output window.