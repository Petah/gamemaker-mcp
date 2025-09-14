---
title: "texturegroup_load"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Textures/texturegroup_load.htm"
converted: "2025-09-14T03:59:55.226Z"
---

# texturegroup\_load

This function is used to load a [Dynamic Texture Group](../../../../Settings/Texture_Information/Dynamic_Textures.md) from disk into RAM.

By default, it will also decompress and fetch the group into VRAM. This can be disabled by setting the second argument to false, which will leave you to manually [pre-fetch](texture_prefetch.md) it later or have it fetched automatically when an image is drawn from it.

If the Texture Group was loaded successfully, the function returns 0, otherwise it returns -1.

For information on its use, see: [Dynamic Textures](../../../../Settings/Texture_Information/Dynamic_Textures.md)

#### Syntax:

texturegroup\_load(groupname, \[prefetch=true\]);

| Argument | Type | Description |
| --- | --- | --- |
| groupname | String | The name of the Texture Group as a string. These are defined in the Texture Groups window. |
| prefetch | Boolean | OPTIONAL If true (default), the group is decompressed and fetched into VRAM. If false, it's only loaded into RAM, remaining compressed. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

var \_loaded = texturegroup\_load("tg\_UI");

if (\_loaded < 0)
{
    show\_debug\_message("tg\_UI could not be loaded.");
}

This will attempt to load the Dynamic Texture Group with the name "**tg\_UI**" into memory and also pre-fetch it.

If the Texture Group wasn't loaded, it prints a message to the output log.