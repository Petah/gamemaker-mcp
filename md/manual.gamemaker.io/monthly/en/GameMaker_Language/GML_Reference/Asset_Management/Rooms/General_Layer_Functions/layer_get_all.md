---
title: "layer_get_all"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/General_Layer_Functions/layer_get_all.htm"
converted: "2025-09-14T03:59:36.067Z"
---

# layer\_get\_all

This function will return an [array](../../../../GML_Overview/Arrays.md) populated with the unique ID values of each layer in the room.

#### Syntax:

layer\_get\_all()

#### Returns:

[Array](../../../../GML_Overview/Arrays.md) (populated with Layer IDs)

#### Example:

var a = layer\_get\_all();
for (var i = 0; i < array\_length(a); i++;)
{
    layer\_destroy(a\[i\]);
}

The above code retrieves all the layers in a room and adds their ID values to an array. This array is then parsed to destroy or the room layers.