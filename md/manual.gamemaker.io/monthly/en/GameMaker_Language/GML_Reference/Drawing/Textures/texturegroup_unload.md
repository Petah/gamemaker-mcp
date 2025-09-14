---
title: "texturegroup_unload"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Textures/texturegroup_unload.htm"
converted: "2025-09-14T03:59:55.256Z"
---

# texturegroup\_unload

This function is used to unload a loaded [Dynamic Texture Group](../../../../Settings/Texture_Information/Dynamic_Textures.md) from memory back into disk, in its original, compressed form.

You can't unload a default (non-dynamic) Texture Group.

For information on its use, see: [Dynamic Textures](../../../../Settings/Texture_Information/Dynamic_Textures.md)

#### Syntax:

texturegroup\_unload(groupname);

| Argument | Type | Description |
| --- | --- | --- |
| groupname | String | The name of the Texture Group as a string. These are defined in the Texture Groups window. |

#### Returns:

N/A

#### Example:

texturegroup\_unload("tg\_UI");

This will unload the Dynamic Texture Group with the name "**tg\_UI**".