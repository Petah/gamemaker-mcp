---
title: "layer_set_target_room"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/General_Layer_Functions/layer_set_target_room.htm"
converted: "2025-09-14T03:59:36.438Z"
---

# layer\_set\_target\_room

This function tells GameMaker that _all further layer functions should be applied to the given room_. In this way you can procedurally change or generate layers and layer contents in a room that is not the current room.

When you are finished adding layers or layer elements to a room, call the function [layer\_reset\_target\_room](layer_reset_target_room.md) to reset the room target or call this function again with a room argument of \-1.

WARNING While targeting another room, you can use all the regular layer functions, **except** you cannot create instances using [instance\_create\_layer](../../Instances/instance_create_layer.md) or [instance\_create\_depth](../../Instances/instance_create_depth.md), nor will the layer function [layer\_add\_instance](layer_add_instance.md) be available.

#### Syntax:

layer\_set\_target\_room(room);

| Argument | Type | Description |
| --- | --- | --- |
| room | Room Asset | The room to target for all further layer functions, or -1 for the current room |

#### Returns:

N/A

#### Example:

layer\_set\_target\_room(rm\_Game);
var l = layer\_get\_id("SpriteAssets");
repeat(50)
{
    var \_x = irandom(1000);
    var \_y = irandom(1000);
    layer\_sprite\_create(l, \_x, \_y, spr\_Trees);
}
layer\_reset\_target\_room();

The above code sets the target room to the room "rm\_Game" and then gets the layer handle for the layer called "SpriteAssets" in that room. This layer handle is then used to add 50 random sprite assets to the layer, before the layer target is reset to the current room.