---
title: "layer_get_name"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/General_Layer_Functions/layer_get_name.htm"
converted: "2025-09-14T03:59:36.195Z"
---

# layer\_get\_name

This function gets the name of the given layer.

You supply the unique layer handle value and if the layer is one of the named layers created in [The Room Editor](../../../../../The_Asset_Editors/Rooms.md), then the function will return a string with the layer name. If the layer is not one of the Room Editor ones (i.e.: it was created using [layer\_create](layer_create.md)) then an empty string "" will be returned.

#### Syntax:

layer\_get\_name(layer\_id)

| Argument | Type | Description |
| --- | --- | --- |
| layer_id | Layer | The handle of the layer to get the name of |

#### Returns:

[String](../../../../GML_Overview/Data_Types.md)

#### Example:

var \_arr\_layers = layer\_get\_all();
var \_arr\_layers\_named = \[\];
for (var i = 0; i < array\_length(\_arr\_layers); i++)
{
    if (layer\_get\_name(\_arr\_layers\[i\]) != "")
    {
        array\_push(\_arr\_layers\_named, \_arr\_layers\[i\]);
    }
}

The above code gets the IDs of all the layers in the room and then loops through them to see if they're named layers. If they are they are then their ID is added to a list.