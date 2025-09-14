---
title: "layer_add_instance"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/General_Layer_Functions/layer_add_instance.htm"
converted: "2025-09-14T03:59:35.956Z"
---

# layer\_add\_instance

This function can be used to move a given instance from the layer it is currently on to another layer.

You supply the layer handle (which you get when you create the layer using [layer\_create](layer_create.md)) or the layer name (as a string - this will have a performance impact) and the handle of the instance to move between layers. For example, say your player is on a layer that is at a lower depth than another layer and you want it to appear behind the layers between the two. You can use this function to switch the player from the foreground layer to the background layer and make it appear behind the other layers being drawn.

NOTE This function cannot be used to add a new instance to a layer. You **must** have created the instance previously and stored its reference in a variable.

**NOTE** This function is only valid within the scope of the current room and cannot be used when the scope has been changed using the function [layer\_set\_target\_room](layer_set_target_room.md).

#### Syntax:

layer\_add\_instance(layer\_id, instance\_id)

| Argument | Type | Description |
| --- | --- | --- |
| layer_id | String or Layer | The handle of the instance layer to target (or the layer name as a string) |
| instance_id | Object Instance | The handle of the instance to move over to the target layer |

#### Returns:

N/A

#### Example:

var near = instance\_nearest(x, y, obj\_Tree);
var layer\_id = layer\_get\_id("Instances Front");
layer\_add\_instance(layer\_id, near);

The above code will first get the handle of the nearest instance to the given x/y position and store it in a local variable. It then gets the handle for the layer named "Instances Front", and moves the found instance onto that layer.