---
title: "layer_background_visible"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Background_Layers/layer_background_visible.htm"
converted: "2025-09-14T03:59:35.620Z"
---

# layer\_background\_visible

Using this function you can toggle a background elements visibility. You supply the background element ID (which you get when you create a background element using [layer\_background\_create()](layer_background_create.md) or when you use the function [layer\_background\_get\_id()](layer_background_get_id.md)), and then set the visible argument to true or false. When set to true the element will be displayed, and when set to false, the element will not be displayed. Note that this is dependent on the layer visibility, and even if the background element is flagged as visible, it will not be drawn if the layer it is on is flagged as not visible.

#### Syntax:

layer\_background\_visible(background\_element\_id, visible)

| Argument | Type | Description |
| --- | --- | --- |
| background_element_id | Background Element ID | The unique ID value of the background element to change |
| visible | Boolean | The visibility toggle, which can be true or false |

#### Returns:

N/A

#### Example:

if (mouse\_check\_button\_pressed(mb\_left))
{
    var back = layer\_background\_get\_id(layer);
    if (layer\_background\_get\_visible(back))
    {
        layer\_background\_visible(back, false);
    }
    else
    {
        layer\_background\_visible(back, true);
    }
}

The above code checks for a mouse button press and if one is detected it will toggle the background visibility of the background element assigned to the layer the instance running the code is on.