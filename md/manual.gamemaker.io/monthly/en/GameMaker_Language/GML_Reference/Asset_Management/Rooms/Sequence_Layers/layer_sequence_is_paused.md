---
title: "layer_sequence_is_paused"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sequence_Layers/layer_sequence_is_paused.htm"
converted: "2025-09-14T03:59:36.847Z"
---

# layer\_sequence\_is\_paused

With this function you supply the sequence element ID - as returned by [layer\_sequence\_create()](layer_sequence_create.md) or by one of the [layer element functions](../General_Layer_Functions/General_Layer_Functions.md) - and it will check if the sequence is currently paused or not, returning true if it is paused, and false if it is not.

#### Syntax:

layer\_sequence\_is\_paused(sequence\_element\_id)

| Argument | Type | Description |
| --- | --- | --- |
| sequence_element_id | Sequence Element ID | The unique ID value of the sequence element to target |

#### Returns:

[Boolean](../../../../GML_Overview/Data_Types.md)

#### Example:

if (layer\_sequence\_is\_paused(title\_sequence) != 0)
{
    layer\_sequence\_play(title\_sequence);
}

The above code checks if the sequence element ID stored in the variable "title\_sequence" is paused, and if it is it starts it playing.