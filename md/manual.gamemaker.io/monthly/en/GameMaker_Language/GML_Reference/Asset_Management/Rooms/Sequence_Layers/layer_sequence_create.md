---
title: "layer_sequence_create"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sequence_Layers/layer_sequence_create.htm"
converted: "2025-09-14T03:59:36.589Z"
---

# layer\_sequence\_create

With this function you can create an instance of a sequence asset on the given layer. You supply the layer handle which can be a string of the layer name - as defined in [The Room Editor](../../../../../The_Asset_Editors/Rooms.md) - or the unique layer handle - as returned by the function [layer\_get\_id](../General_Layer_Functions/layer_get_id.md), as well as the X and Y position in the room to create the sequence at, and finally the ID of the sequence to create. The sequence ID is the name constant that you defined in the Asset Browser for the sequence. The function will return the unique ID of the sequence element, which can then be used in all further layer functions for sequences, or it can be used to retrieve the sequence instance struct using the function [layer\_sequence\_get\_instance](layer_sequence_get_instance.md).

It is worth noting that if the sequence contains any object tracks, their instances will be created as soon as the sequence element itself is created, regardless of where their asset keys are positioned on the [Dope Sheet](../../../../../The_Asset_Editors/Sequence_Properties/Using_The_Dope_Sheet.md). The Sequence controller simply toggles the [visibility](../../Instances/Instance_Variables/visible.md) of the instance to hide and show it depending on the position and duration of the track's asset key and does _not_ repeatedly create and destroy it. As a result, instances will run their Create events when the sequence element is created and not when their asset keys begin.

NOTE All instances that are created for the object tracks are created on the same layer as the sequence instance.

#### Syntax:

layer\_sequence\_create(layer\_id, x, y, sequence\_id)

| Argument | Type | Description |
| --- | --- | --- |
| layer_id | String or Layer | The handle of the layer to target |
| x | Real | The x position in the room to create the sequence at |
| y | Real | The y position in the room to create the sequence at |
| sequence_id | Sequence Asset | The sequence asset to use, as defined in the Asset Browser |

#### Returns:

[Sequence Element ID](layer_sequence_create.md)

#### Example:

var \_s = layer\_sequence\_create("Background", 0, 0, seq\_AnimatedBackground);
layer\_sequence\_pause(\_s);

The above code creates a new sequence on the layer "Background" then pauses it.