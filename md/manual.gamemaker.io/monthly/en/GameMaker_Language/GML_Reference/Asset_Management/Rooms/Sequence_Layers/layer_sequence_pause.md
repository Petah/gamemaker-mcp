---
title: "layer_sequence_pause"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sequence_Layers/layer_sequence_pause.htm"
converted: "2025-09-14T03:59:36.860Z"
---

# layer\_sequence\_pause

With this function you can pause the playback of the given sequence. You supply the sequence element ID as returned by [layer\_sequence\_create()](layer_sequence_create.md) or by one of the [layer element functions](../General_Layer_Functions/General_Layer_Functions.md) and the function will pause the sequence until you begin playback again using the function [layer\_sequence\_play()](layer_sequence_play.md).

#### Syntax:

layer\_sequence\_pause(sequence\_element\_id)

| Argument | Type | Description |
| --- | --- | --- |
| sequence_element_id | Sequence Element ID | The unique ID value of the sequence element to target |

#### Returns:

N/A

#### Example:

var \_seq = layer\_sequence\_create("Background", 0, 0, seq\_AnimatedBackground);
if (global.Pause)
{
    layer\_sequence\_pause(\_seq);
}

The above code creates a new sequence and stores its ID in a local variable. It then checks to see if the game is paused, and if it is it pauses the playback of the sequence.