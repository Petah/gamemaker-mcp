---
title: "layer_get_x"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/General_Layer_Functions/layer_get_x.htm"
converted: "2025-09-14T03:59:36.304Z"
---

# layer\_get\_x

You can use this function to retrieve the x position of the layer within the currently scoped room. You supply the layer handle (which you get when you create the layer using [layer\_create()](layer_create.md)) or the layer name (as a string - this will have a performance impact) and the function returns a real number for the x position of the layer, relative to the (0,0) position of the room. Default is 0.

#### Syntax:

layer\_get\_x(layer\_id)

| Argument | Type | Description |
| --- | --- | --- |
| layer_id | String or Layer | The handle of the layer to get the x position of |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

var lay\_id = layer\_get\_id("Sprites");
if (layer\_get\_x(lay\_id) != 0 || layer\_get\_y(lay\_id) != 0)
{
    layer\_x(lay\_id, 0);
    layer\_y(lay\_id, 0);
}

The above code checks the given layer position and if it is not set to (0, 0) then it is set to that position.