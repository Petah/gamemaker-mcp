---
title: "Audio Playback"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Object_Properties/Async_Events/Audio_Playback.htm"
converted: "2025-09-14T04:00:15.483Z"
---

# Audio Playback

![Audio Playback Event](../../../assets/Images/Asset_Editors/Async_AudioPlayback.png)This event can only be triggered by the [audio queue](../../../GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Buffers/Audio_Buffers.md) play functions and will return a [DS Map](../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/DS_Maps.md) stored in the variable [async\_load](../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.md), containing different key/value pairs relating to the audio queue that has triggered the event. The event is triggered by a callback when you have selected an audio queue to playback and a buffer in that audio queue has finished playing.

The following keys will be available in the DS map:

-   "queue\_id" - the queue index for the queue that has finished playing, as returned by the function [audio\_create\_play\_queue()](../../../GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Buffers/audio_create_play_queue.md).
-   "buffer\_id" - the [buffer](../../../GameMaker_Language/GML_Reference/Buffers/Buffers.md) that is no longer being played from.
-   "queue\_shutdown" - this is set to 0 during normal playback and 1 when the event is received because [audio\_free\_play\_queue()](../../../GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Buffers/audio_free_play_queue.md) has been called. When this is set to 1, you don't want to queue up any further data.

Since an audio queue can be created from multiple buffers, this event can be triggered multiple times for one queue as the end of each section of buffered audio is reached, hence the "buffer\_id" key.

NOTE The variable [async\_load](../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.md) is only valid in the asynchronous events, as the DS map that it points to is created at the start of the event, then deleted again at the end, with this variable being reset to an invalid handle (holding \-1). However, all further data structures created from the event must be cleaned up using the appropriate functions.

In the example of use given below we will create an audio queue with 10 buffered audio sounds added to it and then play the queue:

audio\_queue = audio\_create\_play\_queue(buffer\_s16, 11052, audio\_mono);
for (var i = 0; i < 10; i++;)
   {
   audio\_queue\_sound(audio\_queue, audio\_buffer\[i\], 0, buffer\_get\_size(audio\_buffer\[i\]));
   }
audio\_play\_sound(audio\_queue, 0, true);

Every game step now that the recording is detected will trigger an asynchronous Audio Recording event where you can deal with the recorded input something like this:

var queue = async\_load\[? "queue\_id"\];
var num = 0;
if (queue == audio\_queue)
   {
   for (var i = 0; i < 10; i++;)
      {
      if async\_load\[? "buffer\_id"\] == audio\_buffer\[i\]
         {
         buffer\_seek(audio\_buffer\[i\], buffer\_seek\_start, 0);
         num = i;
         }
      }
   if (num == 9)
      {
      audio\_stop\_sound(audio\_queue);
      audio\_free\_play\_queue(audio\_queue);
      }
 }

Here we check the queue ID and if it's the one we want, we then check the value in the "buffer\_id" key to get the buffer that has finished playing. We also then set a local var to that ID for checking later and set the buffer back to the start for that sound. Once our local variable reaches 9, indicating that the queue has finished, we stop the sound playing and free the queue.