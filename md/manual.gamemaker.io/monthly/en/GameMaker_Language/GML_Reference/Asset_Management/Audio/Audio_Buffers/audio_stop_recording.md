---
title: "audio_stop_recording"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Buffers/audio_stop_recording.htm"
converted: "2025-09-14T03:59:30.501Z"
---

# audio\_stop\_recording

This function will stop recording on the given recorder channel (the channel index is returned when you call the function [audio\_start\_recording()](audio_start_recording.md)). When you stop recording, no further [Audio Recording Asynchronous Events](../../../../../The_Asset_Editors/Object_Properties/Async_Events/Audio_Recording.md) will be triggered for the given recorder channel, so you would normally use this function in the actual asynchronous event to ensure that you have captured all the data.

**NOTE** Most platforms support recording audio in some form, but that does not mean that all devices will permit it, even if the platform does, so you should always check that the [audio\_get\_recorder\_count()](audio_get_recorder_count.md) function returns a value greater than 0 to verify that recording devices are available before using the rest of the recording functions.

#### Syntax:

audio\_stop\_recording(channel\_index);

| Argument | Type | Description |
| --- | --- | --- |
| channel_index | Real | The index of the recorder channel to stop. |

#### Returns:

N/A

#### Example:

audio\_stop\_recording(audio\_channel);

The above code tells GameMaker to stop recording on the given audio channel index.