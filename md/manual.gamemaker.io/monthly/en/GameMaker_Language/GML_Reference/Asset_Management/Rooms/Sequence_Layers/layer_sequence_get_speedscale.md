---
title: "layer_sequence_get_speedscale"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sequence_Layers/layer_sequence_get_speedscale.htm"
converted: "2025-09-14T03:59:36.719Z"
---

# layer\_sequence\_get\_speedscale

With this function you supply the sequence element ID - as returned by [layer\_sequence\_create()](layer_sequence_create.md) or by one of the [layer element functions](../General_Layer_Functions/General_Layer_Functions.md) - and it will return the current playback speed scale. This is the _multiplier_ value used to slow down or speed up the playback speed. A value of 1 is the default value, and values lower than 1 mean that playback is slowed down and values greater than 1 mean that playback is sped up.

#### Syntax:

layer\_sequence\_get\_speedscale(sequence\_element\_id)

| Argument | Type | Description |
| --- | --- | --- |
| sequence_element_id | Sequence Element ID | The unique ID value of the sequence element to target |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

if (layer\_sequence\_get\_speedscale(title\_sequence) != 1)
{
    layer\_sequence\_speedscale(title\_sequence, 1);
}

The above code checks the current playhead speed scale of the sequence element ID stored in the variable "title\_sequence", and if it's not set to 1 it is set to this value.