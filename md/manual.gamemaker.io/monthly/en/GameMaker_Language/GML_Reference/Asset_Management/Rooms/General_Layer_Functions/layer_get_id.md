---
title: "layer_get_id"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/General_Layer_Functions/layer_get_id.htm"
converted: "2025-09-14T03:59:36.168Z"
---

# layer\_get\_id

This function can be used to get the unique handle for a given **layer**.

In the IDE, all layers have a name and a type, and to be able to edit or change them through code you must get the **layer handle**. This function is used to retrieve this handle by using the name (a string) of the layer (as written in the IDE).

If you create a new layer through code using the function [layer\_create()](layer_create.md) then that function will return the handle instead (dynamically created layers do not get names unless specified).

Note that if you give the name of a layer that does not exist in the current room, the function will return -1.

#### Syntax:

layer\_get\_id(layer\_name)

| Argument | Type | Description |
| --- | --- | --- |
| layer_name | String | The name of the layer (a string) |

#### Returns:

[Layer](layer_get_id.md) or -1 (if the layer specified doesn't exist)

#### Example:

var near = instance\_nearest(x, y, obj\_Tree);
var layer\_id = layer\_get\_id("Instances Front");
layer\_add\_instance(layer\_id, near);

The above code will first get the index of the nearest instance to the given x/y position and store it in a local variable. It then gets the unique instance layer handle for the layer named "Instances Front", and moves the found instance onto that layer.