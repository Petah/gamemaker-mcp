---
title: "layer_x"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/General_Layer_Functions/layer_x.htm"
converted: "2025-09-14T03:59:36.505Z"
---

# layer\_x

You can use this function to set the x position of the layer within the currently scoped room.

You supply the layer handle (which you get when you create the layer using [layer\_create](layer_create.md)) or the layer name (as a string - this will have a performance impact) and the function will move the layer the given number of pixels along the horizontal axis of the room.

NOTE This function does not affect any [Instances](../../Instances/Instances.md) already contained or later added in the layer - they remain at their ([x](../../Instances/Instance_Variables/x.md), [y](../../Instances/Instance_Variables/y.md)) position - _unless_ those instances are controlled by a sequence (i.e. when [in\_sequence](../../Sequences/in_sequence.md) is true).

NOTE When a [UI layer](../../../../../The_Asset_Editors/Room_Properties/UI_Layers.md) is passed, this function will offset the positions of all asset elements within the layer, including Object Instances. It will not modify any of the style properties in the Flex Panel structure of the layer and the offset will only apply to asset elements.

#### Syntax:

layer\_x(layer\_id, x)

| Argument | Type | Description |
| --- | --- | --- |
| layer_id | String or Layer | The handle of the layer to set the x position of |
| x | Real | The x position in the room to set the layer to |

#### Returns:

N/A

#### Example:

var lay\_id = layer\_get\_id("Sprites");
if layer\_get\_x(lay\_id) != 0 || layer\_get\_y(lay\_id) != 0
{
    layer\_x(lay\_id, 0);
    layer\_y(lay\_id, 0);
}

The above code checks the given layer position and if it is not set to (0, 0) then it is set to that position.