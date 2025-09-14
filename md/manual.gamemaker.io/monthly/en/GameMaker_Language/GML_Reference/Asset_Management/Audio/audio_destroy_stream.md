---
title: "audio_destroy_stream"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_destroy_stream.htm"
converted: "2025-09-14T03:59:32.074Z"
---

# audio\_destroy\_stream

If you have previously created an audio stream from a file using the function [audio\_create\_stream](audio_create_stream.md) and no longer need that sound, you can call this function to delete it from memory. Any further calls to the sound after it has been destroyed will give an error.

NOTE This will free up the stream but on the target platform this may not show up in a memory manager. This is because GameMaker pools memory resources to prevent memory allocation overhead, and so the memory will remain allocated until required for something else or re-used for a new stream.

**NOTE** This functionality is not available for the HTML5 target platform.

#### Syntax:

audio\_destroy\_stream(sound);

| Argument | Type | Description |
| --- | --- | --- |
| sound | Sound Asset | The sound asset, as returned by audio_create_stream |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md) (1 if the stream was successfully destroyed, -1 if it wasn't)

#### Example:

audio\_destroy\_stream(snd);

The above code removes the sound stored in the variable snd from memory.