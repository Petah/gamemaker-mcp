---
title: "audio_get_recorder_info"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Buffers/audio_get_recorder_info.htm"
converted: "2025-09-14T03:59:30.454Z"
---

# audio\_get\_recorder\_info

This function will return a [DS Map](../../../Data_Structures/DS_Maps/DS_Maps.md) with information about the given recorder source index. You can find out how many recorder sources are available using the function [audio\_get\_recorder\_count()](audio_get_recorder_count.md), and the map returned will contain the following key/value pairs:

-   "**name**" - a name to describe the device
-   "**index**" - the index to be used to record
-   "**data\_format**" - the format data will be returned in (this is currently always buffer\_s16 but other formats may be supported in the future)
-   "**sample\_rate**" - the sample rate (in Hz) of the data returned (currently clamped to 16000hz but this may change in future)
-   "**channels**" - the constant audio\_mono (further constants for stereo and 3D may be supported in the future)

Note that while the function creates a DS map for you, it does _not_ remove it again later and so you should be destroying the map yourself when it is no longer needed to prevent any memory leaks.

**NOTE** Most platforms support recording audio in some form, but that does not mean that all devices will permit it, even if the platform does, so you should always check that the [audio\_get\_recorder\_count()](audio_get_recorder_count.md) function returns a value greater than 0 to verify that recording devices are available before using the rest of the recording functions.

#### Syntax:

audio\_get\_recorder\_info(recorder\_index);

| Argument | Type | Description |
| --- | --- | --- |
| recorder_index | Real | The index of the recorder source to get the information from. |

#### Returns:

[DS Map](../../../Data_Structures/DS_Maps/ds_map_create.md)

#### Example:

len = async\_load\[? "data\_len"\];
audio\_buff = buffer\_create(len, buffer\_fast, 1);
buffer\_copy(async\_load\[? "buffer\_id"\], 0, len, buff, 0);
audio\_queue\_sound(audio\_queue, audio\_buff, 0, len);
audio\_play\_sound(audio\_queue, 10, 0);

The above code would be called in the asynchronous [Audio Recording](../../../../../The_Asset_Editors/Object_Properties/Async_Events/Audio_Recording.md) event and assigns some recorded data to a buffer, which is then added to an audio queue. This is then played.