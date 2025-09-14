---
title: "layer_reset_target_room"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/General_Layer_Functions/layer_reset_target_room.htm"
converted: "2025-09-14T03:59:36.383Z"
---

# layer\_reset\_target\_room

This function is used to reset the layer target to the current room. See the function [layer\_set\_target\_room()](layer_set_target_room.md) for further information.

#### Syntax:

layer\_reset\_target\_room()

#### Returns:

N/A

#### Example:

layer\_set\_target\_room(rm\_Game);
var l = layer\_get\_id("SpriteAssets");
repeat(50)
{
    layer\_sprite\_create(l, irandom(1000), irandom(1000), spr\_Trees);
}
layer\_reset\_target\_room();

The above code sets the target room to the room "rm\_Game" and then gets the layer handle for the layer called "SpriteAssets" in that room. This layer handle is then used to add 50 random sprite assets to the layer, before the layer target is reset to the current room.