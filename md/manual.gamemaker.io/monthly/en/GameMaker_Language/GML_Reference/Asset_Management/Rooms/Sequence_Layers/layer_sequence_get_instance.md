---
title: "layer_sequence_get_instance"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sequence_Layers/layer_sequence_get_instance.htm"
converted: "2025-09-14T03:59:36.678Z"
---

# layer\_sequence\_get\_instance

With this function you supply the sequence element ID - as returned by [layer\_sequence\_create()](layer_sequence_create.md) or by one of the [layer element functions](../General_Layer_Functions/General_Layer_Functions.md) - and it will return the sequence _instance_ [struct](../../../../GML_Overview/Structs.md). You can find out more about the format of the sequence instance struct on [The Sequence Instance Struct](../../Sequences/Sequence_Structs/The_Sequence_Instance_Struct.md) page.

#### Syntax:

layer\_sequence\_get\_instance(sequence\_element\_id)

| Argument | Type | Description |
| --- | --- | --- |
| sequence_element_id | Sequence Element ID | The unique ID value of the sequence element to target |

#### Returns:

[Sequence Instance Struct](../../Sequences/Sequence_Structs/The_Sequence_Instance_Struct.md)

#### Example:

var \_seq = layer\_sequence\_create("Background", 0, 0, seq\_AnimatedBackground);
var \_struct = layer\_sequence\_get\_instance(\_seq);
\_struct.speedScale = 0.5;

The above code creates a new sequence element and then retrieves its sequence instance ID. This is then used to change the playback speed scale property of the sequence instance.