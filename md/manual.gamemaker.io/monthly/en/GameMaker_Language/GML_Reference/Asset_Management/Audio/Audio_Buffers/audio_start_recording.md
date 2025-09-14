---
title: "audio_start_recording"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Buffers/audio_start_recording.htm"
converted: "2025-09-14T03:59:30.487Z"
---

# audio\_start\_recording

This function will start recording audio from the recorder source indexed. You can get the number of recorder sources using the function [audio\_get\_recorder\_count()](audio_get_recorder_count.md), and once you start recording the audio will be stored in a temporary buffer and start triggering an [Audio Recording Asynchronous Event](../../../../../The_Asset_Editors/Object_Properties/Async_Events/Audio_Recording.md). This event is triggered every step that recording takes place and will create the special [DS map](../../../Data_Structures/DS_Maps/DS_Maps.md) in the variable [async\_load](../../../../GML_Overview/Variables/Builtin_Global_Variables/async_load.md) with the following key/value pairs:

-   "**buffer\_id**" - the ID of the temporary buffer you can use to retrieve the audio data
-   "**channel\_index**" - the recording channel index (as returned by the function) this data came from
-   "**data\_len**" - the length of data (in bytes) you've received

Note that after the asynchronous event has been triggered, the audio in the temporary buffer will be wiped, so you should be copying its data into a custom buffer that you have previously created.

**NOTE** Most platforms support recording audio in some form, but that does not mean that all devices will permit it, even if the platform does, so you should always check that the [audio\_get\_recorder\_count()](audio_get_recorder_count.md) function returns a value greater than 0 to verify that recording devices are available before using the rest of the recording functions.

#### Syntax:

audio\_start\_recording(recorder\_index);

| Argument | Type | Description |
| --- | --- | --- |
| recorder_index | Real | The index of the recorder source to use. |

#### Returns:

[Buffer](../../../Buffers/buffer_create.md)

#### Example:

audio\_record = audio\_start\_recording(0);

The above code starts recording from the recorder source 0, storing the channel index of the recording in the variable "audio\_record" for use in the asynchronous [Audio Recording](../../../../../The_Asset_Editors/Object_Properties/Async_Events/Audio_Recording.md) event.