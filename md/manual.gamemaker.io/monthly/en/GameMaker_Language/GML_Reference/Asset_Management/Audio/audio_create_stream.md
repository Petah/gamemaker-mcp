---
title: "audio_create_stream"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_create_stream.htm"
converted: "2025-09-14T03:59:32.034Z"
---

# audio\_create\_stream

With this function you can create a new sound which can then be used in the regular audio functions to stream audio directly from an external OGG file source.

The function requires the path to the file (which can be an included file, for example) and will return the new sound for use.

NOTE After you no longer need the sound you should call the function [audio\_destroy\_stream](audio_destroy_stream.md) with the sound index to remove it from memory otherwise you may get a memory leak. This will slow down and eventually crash your game.

NOTE This functionality is not available for the HTML5 target platform.

#### Syntax:

audio\_create\_stream(filename);

| Argument | Type | Description |
| --- | --- | --- |
| filename | String | Path to the file (OGG only) to stream the audio from. |

#### Returns:

[Sound Asset](../../../../The_Asset_Editors/Sounds.md)

#### Example:

snd = audio\_create\_stream("Music/Track1.ogg");
audio\_play\_sound(snd, 0, true);

The above code creates a new sound index in the variable snd from the given file, then plays this sound.