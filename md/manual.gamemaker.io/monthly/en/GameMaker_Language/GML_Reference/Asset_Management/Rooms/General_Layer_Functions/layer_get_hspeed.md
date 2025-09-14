---
title: "layer_get_hspeed"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/General_Layer_Functions/layer_get_hspeed.htm"
converted: "2025-09-14T03:59:36.153Z"
---

# layer\_get\_hspeed

You can use this function to retrieve the horizontal speed (in pixels per game frame) of the layer within the currently scoped room. You supply the layer handle (which you get when you create the layer using [layer\_create()](layer_create.md)) or the layer name (as a string - this will have a performance impact) and the function returns a real number for the horizontal speed, where a positive value is to the right and a negative value to the left. Default is 0 (unless set in the room editor).

#### Syntax:

layer\_get\_hspeed(layer\_id)

| Argument | Type | Description |
| --- | --- | --- |
| layer_id | String or Layer | The handle of the layer to get the horizontal speed from |

#### Returns:

N/A

#### Example:

var lay\_id = layer\_get\_id("Sprites");
if (layer\_get\_hspeed(lay\_id) != 0 || layer\_get\_vspeed(lay\_id) != 0)
{
    layer\_hspeed(lay\_id, 0);
    layer\_vspeed(lay\_id, 0);
}

The above code checks the given layer horizontal and vertical speeds and if they are not both set to 0 then it is sets them to 0.