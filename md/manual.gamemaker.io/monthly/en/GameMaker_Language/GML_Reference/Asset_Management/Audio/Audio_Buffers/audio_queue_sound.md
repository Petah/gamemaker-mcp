---
title: "audio_queue_sound"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Buffers/audio_queue_sound.htm"
converted: "2025-09-14T03:59:30.469Z"
---

# audio\_queue\_sound

This function will add the data from a buffer into the audio queue that you previously created using the function [audio\_create\_play\_queue()](audio_create_play_queue.md). You specify the queue index to add to, and the buffer ID to get the data from as well as the position (offset) within the buffer and the number of bytes to add. Once you have added audio from a buffer to a queue, the buffer cannot be deleted until you have first freed the queue using the function [audio\_free\_play\_queue()](audio_free_play_queue.md), and the buffer properties should match those of the queue that you are adding the sound to.

#### Syntax:

audio\_queue\_sound(queueIndex, bufferId, bufferOffset, bufferLength);

| Argument | Type | Description |
| --- | --- | --- |
| queueIndex | Audio Queue ID | The index of the queue to add to. |
| bufferId | Buffer | The buffer to add to the queue. |
| bufferOffset | Real | The offset within the source buffer to start from. |
| bufferLength | Real | The length of the buffer (the number of the bytes in the buffer). |

#### Returns:

N/A

#### Example:

len = async\_load\[? "data\_len"\];
audio\_buff = buffer\_create(len, buffer\_fast, 1);
buffer\_copy(async\_load\[? "buffer\_id"\], 0, len, buff, 0);
audio\_queue\_sound(audio\_queue, audio\_buff, 0, len);
audio\_play\_sound(audio\_queue, 10, 0);

The above code would be called in the asynchronous [Audio Recording](../../../../../The_Asset_Editors/Object_Properties/Async_Events/Audio_Recording.md) event and assigns some recorded data to a buffer, which is then added to an audio queue. This is then played.