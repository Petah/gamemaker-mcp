---
title: "layer_background_stretch"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Background_Layers/layer_background_stretch.htm"
converted: "2025-09-14T03:59:35.604Z"
---

# layer\_background\_stretch

Using this function you can toggle a background element sprite to stretch to fit the room or remain at 1:1 with the resolution. You supply the background element ID (which you get when you create a background element using [layer\_background\_create()](layer_background_create.md) or when you use the function [layer\_background\_get\_id()](layer_background_get_id.md)), and then set the stretch argument to true or false. When set to true the element sprite will be stretched to fit the room (either scaled up or scaled down depending on the sizes of the sprite and the room), and when set to false, the element sprite will be displayed at its native resolution.

#### Syntax:

layer\_background\_stretch(background\_element\_id, stretch)

| Argument | Type | Description |
| --- | --- | --- |
| background_element_id | Background Element ID | The unique ID value of the background element to change |
| stretch | Boolean | The stretch toggle, which can be true or false |

#### Returns:

N/A

#### Example:

if (mouse\_check\_button\_pressed(mb\_left))
{
    var back = layer\_background\_get\_id(layer);
    if (layer\_background\_get\_stretch(back))
    {
        layer\_background\_stretch(back, false);
    }
    else
    {
        layer\_background\_stretch(back, true);
    }
}

The above code checks for a mouse button press and if one is detected it will toggle the stretching of the background element sprite assigned to the layer the instance running the code is on.