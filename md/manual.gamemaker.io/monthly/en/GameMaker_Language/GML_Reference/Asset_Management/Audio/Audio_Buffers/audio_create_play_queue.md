---
title: "audio_create_play_queue"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Buffers/audio_create_play_queue.htm"
converted: "2025-09-14T03:59:30.390Z"
---

# audio\_create\_play\_queue

This function prepares a buffer queue for audio. You pass the data format (only buffer\_u8 or buffer\_s16 are currently supported), the sample rate (which can be between 1000Hz and 48000Hz), and the channels that the audio requires from one of the constants listed below:

| Constant | Description |
| --- | --- |
| audio_mono | Mono (single channel) audio. |
| audio_stereo | Stereo (dual channel) audio. |
| audio_3d | 3D (5.1) audio. |

Note that you should free up any audio queues created with this function when no longer required to prevent memory leaks using the function [audio\_free\_play\_queue()](audio_free_play_queue.md).

This function will trigger [Audio Playback Asynchronous Events](../../../../../The_Asset_Editors/Object_Properties/Async_Events/Audio_Playback.md) for each buffer in the queue that reaches its end. In this event a special [DS map](../../../Data_Structures/DS_Maps/DS_Maps.md) will be created in the variable [async\_load](../../../../GML_Overview/Variables/Builtin_Global_Variables/async_load.md) with the following key/value pairs:

-   "**queue\_id**" - the queue
-   "**buffer\_id**" - the buffer that is no longer being played from
-   "**queue\_shutdown**" - this is set to 0 during normal playback and 1 when the event is received because [audio\_free\_play\_queue()](audio_free_play_queue.md) has been called. When this is set to 1, you don't want to queue up any further data.

#### Syntax:

audio\_create\_play\_queue(queueFormat, queueRate, queueChannels);

| Argument | Type | Description |
| --- | --- | --- |
| queueFormat | Buffer Data Type Constant | The format of the buffer data to use (buffer_u8 or buffer_s16). |
| queueRate | Real | The sample rate of the data in the buffer queue. |
| queueChannels | Audio Channel Constant | The channels to use from one of the constants listed above. |

#### Returns:

[Audio Queue ID](audio_create_play_queue.md)

#### Example:

audio\_queue = audio\_create\_play\_queue(buffer\_s16, 11052, audio\_mono);

The above code creates a new audio queue and assigns its ID to a variable for future reference.