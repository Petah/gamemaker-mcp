---
title: "layer_sequence_get_xscale"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sequence_Layers/layer_sequence_get_xscale.htm"
converted: "2025-09-14T03:59:36.753Z"
---

# layer\_sequence\_get\_xscale

With this function you supply the sequence element ID - as returned by [layer\_sequence\_create()](layer_sequence_create.md) or by one of the [layer element functions](../General_Layer_Functions/General_Layer_Functions.md) - and it will return the current scale along the X axis of the sequence element in the game room.

#### Syntax:

layer\_sequence\_get\_xscale(sequence\_element\_id)

| Argument | Type | Description |
| --- | --- | --- |
| sequence_element_id | Sequence Element ID | The unique ID value of the sequence element to target |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

var \_xs = layer\_sequence\_get\_xscale(title\_sequence)
if (\_xs < 1)
{
    \_xs += 0.01;
    layer\_sequence\_xscale(title\_sequence, \_xs);
}

The above code retrieves the current scale along the X axis of the sequence element with the ID stored in the variable "title\_sequence", and if it's less than 1, then 0.01 is added to the current X scale.