---
title: "texturegroup_get_names"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Textures/texturegroup_get_names.htm"
converted: "2025-09-14T03:59:55.151Z"
---

# texturegroup\_get\_names

This function returns an array containing the names of all [Texture Groups](../../../../Settings/Texture_Groups.md) contained in the game.

NOTE The texture group that GameMaker adds the fallback texture to is included. Empty texture groups may not be included as they're filtered by the asset compiler.

#### Syntax:

texturegroup\_get\_names();

#### Returns:

[Array](../../../GML_Overview/Arrays.md) of [String](../../../GML_Overview/Data_Types.md)

#### Example:

var \_arr\_names = texturegroup\_get\_names();
show\_debug\_message("Texture Groups:\\n--------------");
array\_foreach(\_arr\_names, show\_debug\_message);

The above code gets the names of all texture groups using texturegroup\_get\_names and lists them in the debug output.