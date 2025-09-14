---
title: "layer_sequence_get_length"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sequence_Layers/layer_sequence_get_length.htm"
converted: "2025-09-14T03:59:36.691Z"
---

# layer\_sequence\_get\_length

With this function you supply the sequence element ID - as returned by [layer\_sequence\_create()](layer_sequence_create.md) or by one of the [layer element functions](../General_Layer_Functions/General_Layer_Functions.md) - and it will return the length of the sequence. This is the number of frames that the sequence will run for.

#### Syntax:

layer\_sequence\_get\_length(sequence\_element\_id)

| Argument | Type | Description |
| --- | --- | --- |
| sequence_element_id | Sequence Element ID | The unique ID value of the sequence element to target |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

var \_frames = layer\_sequence\_get\_length(my\_seq);
alarm\[0\] = frames;

The above code retrieves the number of frames that a sequence will run then uses this value to set an alarm.