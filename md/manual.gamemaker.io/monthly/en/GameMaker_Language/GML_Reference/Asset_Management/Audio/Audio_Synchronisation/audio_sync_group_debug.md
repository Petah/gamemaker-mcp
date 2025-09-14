---
title: "audio_sync_group_debug"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Synchronisation/audio_sync_group_debug.htm"
converted: "2025-09-14T03:59:31.936Z"
---

# audio\_sync\_group\_debug OBSOLETE

IMPORTANT This function is obsolete, please use [audio\_debug](../audio_debug.md) instead.

This function displays debug information about any given sync group (the group index is the value returned when the group was created using the function [audio\_create\_sync\_group](audio_create_sync_group.md)). You can call the function with a value of -1 to switch off the overlay.

When you are debugging the audio sync groups, the overlay will show:

-   Which sync group is debugging
-   How many channels are in it
-   How many times the sync group has failed (this means it's tried to do too much work)
-   A list of the channels
    -   Red means this channel is not currently doing any work
    -   Yellow means the channel is in initial state (not yet decoding or playing)
    -   Green means the track is currently seeking/decoding
    -   Purple means the channel has run out of data
-   A profiling bar that shows what work the decoding thread is doing
    -   blue means a file is being read for the first time
    -   red means the thread is reading a file to find out where to read from
    -   green means the thread is decoding data
    -   purple means the thread is sleeping until it needs to work

Note that for general debugging of audio, you also have the function [audio\_debug](../audio_debug.md).

NOTE This functionality is not available for the HTML5 target platform.

#### Syntax:

audio\_sync\_group\_debug(group\_index);

| Argument | Type | Description |
| --- | --- | --- |
| group_index | Audio Sync Group ID | The group index to debug, or -1 to switch off the debugging. |

#### Returns:

N/A

#### Example:

if (debug\_mode)
{
    audio\_sync\_group\_debug(sg);
}
else
{
    audio\_sync\_group\_debug(-1);
}

The above code will switch on or off the audio sync group debug overlay showing the sync group indexed in the variable sg depending on whether the game is run in debug mode or not.