---
title: "layer_get_target_room"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/General_Layer_Functions/layer_get_target_room.htm"
converted: "2025-09-14T03:59:36.248Z"
---

# layer\_get\_target\_room

This function will return the current room being targeted by the layer functions. See [layer\_set\_target\_room()](layer_set_target_room.md) for more information.

#### Syntax:

layer\_get\_target\_room()

#### Returns:

[Room Asset](../../../../../The_Asset_Editors/Rooms.md)

#### Example:

if (layer\_get\_target\_room() != room)
{
    layer\_reset\_target\_room();
}

The above code checks the current target room and if it is not the current room then the layer target room is reset.