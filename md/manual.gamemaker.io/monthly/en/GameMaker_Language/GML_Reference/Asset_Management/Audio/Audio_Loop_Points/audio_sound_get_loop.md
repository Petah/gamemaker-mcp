---
title: "audio_sound_get_loop"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Loop_Points/audio_sound_get_loop.htm"
converted: "2025-09-14T03:59:31.664Z"
---

# audio\_sound\_get\_loop

This function returns whether the given sound instance being played is set to loop.

#### Syntax:

audio\_sound\_get\_loop(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Sound Instance ID | The index of the sound instance |

#### Returns:

[Boolean](../../../../GML_Overview/Data_Types.md)

#### Example:

var \_loop = audio\_sound\_get\_loop(snd\_car);

The above code calls audio\_sound\_get\_loop on an existing sound asset snd\_car and stores the result in a temporary variable \_loop.