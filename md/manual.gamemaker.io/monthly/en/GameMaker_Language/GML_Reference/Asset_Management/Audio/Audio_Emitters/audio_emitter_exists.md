---
title: "audio_emitter_exists"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Emitters/audio_emitter_exists.htm"
converted: "2025-09-14T03:59:30.840Z"
---

# audio\_emitter\_exists

This function returns whether an audio emitter exists (true) or not (false). Note that if the index you search for has not been initialised previously, this function will cause an error as it is searching for non-existent indices.

#### Syntax:

audio\_emitter\_exists(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Audio Emitter ID | The index of the emitter to check the existence of. |

#### Returns:

[Boolean](../../../../GML_Overview/Data_Types.md)

#### Example:

if (audio\_emitter\_exists(s\_emit))
{
    audio\_play\_sound\_on(s\_emit, snd\_Explode, false, 1);
}
else
{
    s\_emit = audio\_emitter\_create();
    audio\_play\_sound\_on(s\_emit, snd\_Explode, false, 1);
}

The above code checks to see if an emitter exists, indexed in the (previously initialised) variable "s\_emit". If it does then a sound is played through it, but if it does not, it is created and then the sound is played.