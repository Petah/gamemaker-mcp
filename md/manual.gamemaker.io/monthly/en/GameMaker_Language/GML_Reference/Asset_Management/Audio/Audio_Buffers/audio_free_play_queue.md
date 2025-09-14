---
title: "audio_free_play_queue"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Buffers/audio_free_play_queue.htm"
converted: "2025-09-14T03:59:30.419Z"
---

# audio\_free\_play\_queue

This function is used to free up the memory associated with the given audio queue. The queue index is the value returned when you created the queue using the function [audio\_create\_play\_queue()](audio_create_play_queue.md), and this function should be called when the queue is no longer required to prevent memory leaks. Freeing the queue will stop any sound that is playing, and you cannot delete the buffer that a sound is being streamed from until the queue it is assigned to has been freed.

This function will trigger an [Audio Playback Asynchronous Event](../../../../../The_Asset_Editors/Object_Properties/Async_Events/Audio_Playback.md), and in this event a special [DS map](../../../Data_Structures/DS_Maps/DS_Maps.md) will be created in the variable [async\_load](../../../../GML_Overview/Variables/Builtin_Global_Variables/async_load.md) with the following key/value pairs:

-   "**queue\_id**" - the queue that has finished playing data
-   "**buffer\_id**" - the buffer that is no longer being played from
-   "**queue\_shutdown**" - this is set to 0 during normal playback and 1 when the event is received because you have freed the queue with this function. When this is set to 1, you don't want to queue up any further data.

#### Syntax:

audio\_free\_play\_queue(queueIndex);

| Argument | Type | Description |
| --- | --- | --- |
| queueIndex | Audio Queue ID | The index of the queue to free. |

#### Returns:

N/A

#### Example:

var q\_id = async\_load\[? "queue\_id"\];
if (q\_id == audio\_queue)
{
    audio\_free\_play\_queue(audio\_queue);
    buffer\_delete(audio\_buffer);
}

The above code would go in the asynchronous [Audio Playback](../../../../../The_Asset_Editors/Object_Properties/Async_Events/Audio_Playback.md) event and checks to see if the audio that has finished playing is from the "audio\_queue" and if it is it frees the queue and the buffer associated with it.