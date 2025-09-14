---
title: "layer_sequence_get_x"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sequence_Layers/layer_sequence_get_x.htm"
converted: "2025-09-14T03:59:36.733Z"
---

# layer\_sequence\_get\_x

With this function you supply the sequence element ID - as returned by [layer\_sequence\_create()](layer_sequence_create.md) or by one of the [layer element functions](../General_Layer_Functions/General_Layer_Functions.md) - and it will return the current X position in the game room for the sequence.

#### Syntax:

layer\_sequence\_get\_x(sequence\_element\_id)

| Argument | Type | Description |
| --- | --- | --- |
| sequence_element_id | Sequence Element ID | The unique ID value of the sequence element to target |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

if (layer\_sequence\_get\_x(title\_sequence) != room\_width / 2)
{
    layer\_sequence\_x(title\_sequence, room\_width / 2);
}

The above code checks the X position of the sequence element ID stored in the variable "title\_sequence", and if it's not set to half the room width, it is set to this value.