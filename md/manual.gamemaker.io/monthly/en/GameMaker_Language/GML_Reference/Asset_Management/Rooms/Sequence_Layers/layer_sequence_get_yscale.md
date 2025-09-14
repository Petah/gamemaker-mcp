---
title: "layer_sequence_get_yscale"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sequence_Layers/layer_sequence_get_yscale.htm"
converted: "2025-09-14T03:59:36.781Z"
---

# layer\_sequence\_get\_yscale

With this function you supply the sequence element ID - as returned by [layer\_sequence\_create()](layer_sequence_create.md) or by one of the [layer element functions](../General_Layer_Functions/General_Layer_Functions.md) - and it will return the current scale along the Y axis of the sequence element in the game room.

#### Syntax:

layer\_sequence\_get\_yscale(sequence\_element\_id)

| Argument | Type | Description |
| --- | --- | --- |
| sequence_element_id | Sequence Element ID | The unique ID value of the sequence element to target |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

var \_ys = layer\_sequence\_get\_yscale(title\_sequence)
if (\_ys < 1)
{
    \_ys += 0.01;
    layer\_sequence\_yscale(title\_sequence, \_ys);
}

The above code retrieves the current scale along the Y axis of the sequence element with the ID stored in the variable "title\_sequence", and if it's less than 1, then 0.01 is added to the current Y scale.