---
title: "layer_sequence_headdir"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sequence_Layers/layer_sequence_headdir.htm"
converted: "2025-09-14T03:59:36.802Z"
---

# layer\_sequence\_headdir

With this function you can set the direction for the given sequence playhead. You supply the sequence element ID as returned by [layer\_sequence\_create](layer_sequence_create.md) or by one of the [layer element functions](../General_Layer_Functions/General_Layer_Functions.md), and then give the playhead direction which should be one of the following constants:

| Constant | Description | Value |
| --- | --- | --- |
| seqdir_right | The sequence will play frames in an incremental order from left to right | 1 |
| seqdir_left | The sequence will play frames in a decremental order from right to left | -1 |

#### Syntax:

layer\_sequence\_headdir(sequence\_element\_id, direction)

| Argument | Type | Description |
| --- | --- | --- |
| sequence_element_id | Sequence Element ID | The unique ID value of the sequence element to target |
| direction | Sequence Direction Constant | The playhead direction, a constant, listed above |

#### Returns:

N/A

#### Example:

var \_seq = layer\_sequence\_create("Background", 0, 0, seq\_AnimatedBackground);
layer\_sequence\_headdir(\_seq, seqdir\_left);

The above code creates a new sequence and stores its ID in a local variable \_seq. This ID is then used to set the playhead direction to decrement frames (right to left playback).