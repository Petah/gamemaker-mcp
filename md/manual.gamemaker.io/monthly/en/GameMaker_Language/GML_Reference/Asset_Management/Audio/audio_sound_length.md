---
title: "audio_sound_length"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_sound_length.htm"
converted: "2025-09-14T03:59:32.501Z"
---

# audio\_sound\_length

This function returns the length of the given sound in seconds.

The sound can either be a referenced from index for an individual sound instance being played which has been stored in a variable when using any of the audio\_play\_sound\_ functions, or an actual sound asset from [The Asset Browser](../../../../Introduction/The_Asset_Browser.md).

NOTE For [audio streams](audio_create_stream.md) created at runtime on HTML5 and GX.games, this function may return \-1 if called before the runtime is able to retrieve the length of the audio stream.

#### Syntax:

audio\_sound\_length(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Sound Asset or Sound Instance ID | The index of the sound to check. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

var \_len = audio\_sound\_length(snd\_Beam);
audio\_play\_sound(snd\_Beam, 1, false);
alarm\[0\] = game\_get\_speed(gamespeed\_fps) \* \_len;

The above code gets the length (in seconds) of the sound indexed in the variable snd\_Beam, then plays the sound and sets an alarm to go off when the sound has finished playing using the length of the sound to calculate the time needed for the alarm.

NOTE The alarm will trigger at around the same time the sound stops playing. You can also use the [Audio Playback Ended](../../../../The_Asset_Editors/Object_Properties/Async_Events/Audio_Playback_Ended.md) event if you need to execute some code at the exact time that playback of the audio ends.