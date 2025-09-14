---
title: "Audio Recording"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Object_Properties/Async_Events/Audio_Recording.htm"
converted: "2025-09-14T04:00:15.523Z"
---

# Audio Recording

![Audio Recording Event](../../../assets/Images/Asset_Editors/Async_AudioRecording.png)This event can only be triggered by the [audio\_start\_recording](../../../GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Buffers/audio_start_recording.md) function and will return a [DS Map](../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/DS_Maps.md) stored in the variable [async\_load](../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.md), containing different key/value pairs depending on the callback from the function that has triggered the event.

The following keys will be available in the DS map:

-   "buffer\_id" - the ID of the temporary [buffer](../../../GameMaker_Language/GML_Reference/Buffers/Buffers.md) you can use to retrieve the audio data
-   "channel\_index" - the recording channel index as returned by the calling function that this data came from
-   "data\_len" - the length of data (in bytes) you've received

NOTE As mentioned at the start of this page, the variable [async\_load](../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.md) is only valid in the asynchronous events, as the DS map that is points to is created at the start of the event, then deleted again at the end. However, note that the temporary buffer in which all audio is stored with the map will also be removed at the end of the event so you should copy it to a custom buffer if you want to keep it for later use.

In the usage example below we will create a custom buffer to store our recorded audio, and also set our game to record from input source 0:

channel\_index = audio\_start\_recording(0);
audio\_buffer = buffer\_create(len, buffer\_fast, 1);

Every game step now that the recording is detected will trigger an asynchronous Audio Recording event where you can deal with the recorded input something like this:

var channel = async\_load\[? "channel\_index"\];
if (channel == channel\_index)
   {
   len = async\_load\[? "data\_len"\];
   buffer\_copy(async\_load\[? "buffer\_id"\], 0, len, audio\_buffer, 0);
   }

Here we simply check the "channel\_index" key to make sure it matches the value returned when we started recording, and if it does we copy the contents of the temporary buffer created for this event into our custom buffer. After that you can do what you want with the custom buffer - you could play it using the dedicated buffer audio functions, you could process it and send it over the network, you could save it to disk... Once you have your recorded audio in a buffer, you can do basically anything you want.