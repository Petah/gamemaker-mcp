---
title: "audio_free_buffer_sound"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Buffers/audio_free_buffer_sound.htm"
converted: "2025-09-14T03:59:30.404Z"
---

# audio\_free\_buffer\_sound

With this function you can free up the pointer index value associated with the sound ID. Freed sounds will not be available for playing, and if multiple instances of the sound are being played they will all be stopped. Note that before you can delete the buffer itself, you must first free all sound ID's associated with it.

#### Syntax:

audio\_free\_buffer\_sound(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Sound Asset | The index of the buffered sound to free. |

#### Returns:

N/A

#### Example:

audio\_free\_buffer\_sound(soundID);

The above code frees the buffered sound indexed in the variable "soundID".