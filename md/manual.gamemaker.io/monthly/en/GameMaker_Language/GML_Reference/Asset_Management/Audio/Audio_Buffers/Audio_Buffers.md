---
title: "Audio Buffers"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Buffers/Audio_Buffers.htm"
converted: "2025-09-14T03:59:30.347Z"
---

# Audio Buffers

You can use **audio buffers** to load, save and manipulate audio files within your games. These buffers are created beforehand using the appropriate [buffer functions](../../../Buffers/Buffers.md) and then you can use the following functions to create a sound to use in your project:

-   [audio\_create\_buffer\_sound](audio_create_buffer_sound.md)
-   [audio\_free\_buffer\_sound](audio_free_buffer_sound.md)

When you create a sound from an audio buffer, you are _not_ creating a new sound in memory, but rather pointing to the position within the buffer where the sound is stored. You should not change this buffer after a sound has been associated with it otherwise you will get unexpected results, and you cannot delete the buffer while a sound is associated with it. Instead, free the sound (or sounds) first then delete the buffer.

Once you have created your new audio resource from a buffer, you can use its handle in any of the regular audio functions to play it, change its gain or pitch, pause it, etc.

NOTE The buffer used to load the audio **can only support PCM sounds**, so formats like OGG are not supported.

## Audio Buffer Queues

Another feature of buffered audio is that you can use a buffer to create a queue of audio which can then be streamed to the device running your project. An audio queue takes a regular buffer which you have previously filled with audio data, and enables you to "point" to parts of it and tell GameMaker to stream the audio in a given order from that buffer. The available functions for audio queues are:

-   [audio\_create\_play\_queue](audio_create_play_queue.md)
-   [audio\_free\_play\_queue](audio_free_play_queue.md)
-   [audio\_queue\_sound](audio_queue_sound.md)

Once a queue has been created, you can then use the returned queue index just as you would the sound index for any normal sound to play it, pause it, or change its gain and pitch. The few things you cannot do are get the track length, set the track position or use the loop functions, but other than that, an audio queue can be used just like any other sound. You should also note that some of the audio queue functions will also trigger an [Audio Playback Asynchronous Event](../../../../../The_Asset_Editors/Object_Properties/Async_Events/Audio_Playback.md).

NOTE Attempting to play an empty queue using the audio\_play\_sound\* functions will not play anything and return a sound instance index of -1. You can queue new audio data after a queue has become empty and then play a new sound from the queue (creating a new sound instance).

## Recording

Audio buffers will also permit you to record sound from any of the available sources (like microphones), which can then be queued and streamed using the above functions (for example). Recording audio will trigger an [Audio Recording Asynchronous Event](../../../../../The_Asset_Editors/Object_Properties/Async_Events/Audio_Recording.md) which will contain specific information about what is being recorded.

For recording audio, the following functions are available:

-   [audio\_start\_recording](audio_start_recording.md)
-   [audio\_stop\_recording](audio_stop_recording.md)
-   [audio\_get\_recorder\_count](audio_get_recorder_count.md)
-   [audio\_get\_recorder\_info](audio_get_recorder_info.md)

NOTE Most platforms **except HTML5** support recording audio in some form, but that does not mean that all devices will permit it, even if the platform does, so you should always check that the [audio\_get\_recorder\_count()](audio_get_recorder_count.md) function returns a value greater than 0 to verify that recording devices are available before using the rest of the recording functions.