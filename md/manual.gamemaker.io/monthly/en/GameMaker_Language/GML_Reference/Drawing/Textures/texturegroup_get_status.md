---
title: "texturegroup_get_status"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Textures/texturegroup_get_status.htm"
converted: "2025-09-14T03:59:55.182Z"
---

# texturegroup\_get\_status

This function returns the status of the given Dynamic Texture Group. The status will be one of the following constants:

| Texture Group Status Constant |
| --- |
| Constant | Description | Value |
| texturegroup_status_unloaded | The Texture Group is still on disk and not in memory | 0 |
| texturegroup_status_loading | The Texture Group is currently being loaded from disk | 1 |
| texturegroup_status_loaded | The Texture Group has been loaded into RAM | 2 |
| texturegroup_status_fetched | The Texture Group has been loaded and fetched into VRAM, ready for use | 3 |

For information on its use, see: [Dynamic Textures](../../../../Settings/Texture_Information/Dynamic_Textures.md)

#### Syntax:

texturegroup\_get\_status(groupname);

| Argument | Type | Description |
| --- | --- | --- |
| groupname | String | The name of the Texture Group as a string. These are defined in the Texture Groups window. |

#### Returns:

Texture Group Status Constant

#### Example:

var \_tg = "tg\_UI";
var \_status = texturegroup\_get\_status(\_tg);

if (\_status == texturegroup\_status\_unloaded)
{
    texturegroup\_load(\_tg);
}

This gets the status of the "**tg\_UI**" Texture Group, and if it's unloaded, it loads it.