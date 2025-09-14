---
title: "layer_get_element_layer"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/General_Layer_Functions/layer_get_element_layer.htm"
converted: "2025-09-14T03:59:36.108Z"
---

# layer\_get\_element\_layer

This function gets the handle to the layer that the given element is on.

You supply the unique element ID value (for example, as returned by the function that created the element or from [The Room Editor](../../../../../The_Asset_Editors/Rooms.md)) and the function will return the unique ID of the layer that the element is found on. If the element ID given is not a valid one, then the function will return -1.

#### Syntax:

layer\_get\_element\_layer(element\_id)

| Argument | Type | Description |
| --- | --- | --- |
| element_id | Layer Element ID | The unique ID value of the element to get the layer of |

#### Returns:

[Layer](layer_get_id.md) or -1 (if the element is invalid)

#### Example:

element = layer\_get\_element\_layer(asset\_1);

The above code gets the layer handle for the element with the ID stored in the variable asset\_1 and stores it in a variable.