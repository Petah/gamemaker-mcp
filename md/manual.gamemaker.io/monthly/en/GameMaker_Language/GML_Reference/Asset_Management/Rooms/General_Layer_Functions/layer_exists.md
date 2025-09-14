---
title: "layer_exists"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/General_Layer_Functions/layer_exists.htm"
converted: "2025-09-14T03:59:36.041Z"
---

# layer\_exists

This function can be used to check if the given **layer** exists. You supply the layer handle (which you get when you create the layer using [layer\_create()](layer_create.md)) or the layer name (as a string - this will have a performance impact) and the function will return a _boolean_ value of true if it exists or false if it does not.

NOTE This function works within the scope of the current target room - by default the room in which the function is called - which can be set using the function [layer\_set\_target\_room()](layer_set_target_room.md).

#### Syntax:

layer\_exists(layer\_name)

| Argument | Type | Description |
| --- | --- | --- |
| layer_name | String or Layer | The name of the layer (a string or handle) |

#### Returns:

[Boolean](../../../../GML_Overview/Data_Types.md)

#### Example:

if (!layer\_exists(global.tileLayer))
{
    global.tileLayer = layer\_create(1000);
}

The above code will check to see if the layer stored in the global variable actually exists, and if it does not then it is created.