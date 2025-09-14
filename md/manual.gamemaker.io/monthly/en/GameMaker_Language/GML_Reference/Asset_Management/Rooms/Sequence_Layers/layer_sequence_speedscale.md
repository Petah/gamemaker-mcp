---
title: "layer_sequence_speedscale"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sequence_Layers/layer_sequence_speedscale.htm"
converted: "2025-09-14T03:59:36.892Z"
---

# layer\_sequence\_speedscale

With this function you can change the playback speed of the given sequence. You supply the sequence element ID as returned by [layer\_sequence\_create()](layer_sequence_create.md) or by one of the [layer element functions](../General_Layer_Functions/General_Layer_Functions.md) and then a speed scale value. This value is a _multiplier_, where 1 is the default playback speed and values less than 1 will slow the playback and values larger than 1 will speed it up, eg: a value of 0.5 would be half playback speed, while a value of 2 would be double playback speed.

#### Syntax:

layer\_sequence\_speedscale(sequence\_element\_id, speedscale)

| Argument | Type | Description |
| --- | --- | --- |
| sequence_element_id | Sequence Element ID | The unique ID value of the sequence element to target |
| speedscale | Real | The speed scale to use (a multiplier), default is 1 |

#### Returns:

N/A

#### Example:

var \_seq = layer\_sequence\_create("Background", 0, 0, seq\_AnimatedBackground);
layer\_sequence\_speedscale(\_seq, 0.75);

The above code creates a new sequence on the layer of the calling instance and then sets its speed scale value to 0.75 (three-quarters default playback speed).