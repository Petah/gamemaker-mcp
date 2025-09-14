---
title: "layer_sequence_get_headdir"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sequence_Layers/layer_sequence_get_headdir.htm"
converted: "2025-09-14T03:59:36.651Z"
---

# layer\_sequence\_get\_headdir

With this function you supply the sequence element ID - as returned by [layer\_sequence\_create](layer_sequence_create.md) or by one of the [layer element functions](../General_Layer_Functions/General_Layer_Functions.md) - and it will return the current playhead direction, which will be one of the constants listed below.

| Constant | Description | Value |
| --- | --- | --- |
| seqdir_right | The sequence will play frames in an incremental order from left to right | 1 |
| seqdir_left | The sequence will play frames in a decremental order from right to left | -1 |

#### Syntax:

layer\_sequence\_get\_headdir(sequence\_element\_id)

| Argument | Type | Description |
| --- | --- | --- |
| sequence_element_id | Sequence Element ID | The unique ID value of the sequence element to target |

#### Returns:

[Constant](../../../../GML_Overview/Variables/Constants.md)

#### Example:

if layer\_sequence\_get\_headdir(title\_sequence) != seqdir\_left
{
    layer\_sequence\_headdir(title\_sequence, seqdir\_left);
}

The above code checks the current playhead direction of the sequence element ID stored in the variable title\_sequence, and if it's not set to seqdir\_left, it is set to this value.