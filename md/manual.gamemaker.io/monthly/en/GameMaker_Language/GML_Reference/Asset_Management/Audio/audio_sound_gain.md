---
title: "audio_sound_gain"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_sound_gain.htm"
converted: "2025-09-14T03:59:32.399Z"
---

# audio\_sound\_gain

With this function you can fade a sound asset or instance in or out over a given length of time, or it can be used to set the sound gain instantly.

NOTE Audio devices and/or operating systems can sometimes attempt to change the audio's amplitude in order to protect the user from what would otherwise be very loud sounds, for example by normalising the audio stream or by clipping the amplitude to 1. How this is handled is specific to the audio device or OS that's handling your game's audio. As a result, increasing gains might have an inconsistent effect.

The time is measured in milliseconds, and the function requires that you input a final level of gain for the sound to have reached by the end of that time. This gain can be between 0 (silent) and any value greater than 0, although normally you'd consider the maximum volume as 1. Anything over 1 can be used but, depending on the sound used and the platform being compiled to, you may get distortion or clipping when the sound is played back. Note that the gain scale is linear, and to instantly change the gain, simply set the time argument to 0.

NOTE Use [db\_to\_lin](db_to_lin.md) and [lin\_to\_db](lin_to_db.md) to convert back and forth between linear gains and gains expressed in decibels (dB).

This function will affect _all_ instances of the sound that are playing currently in the room if the index is a sound asset, and the final volume will be the volume at which all further instances of the sound will be played. However, if you have used the index returned from a function like [audio\_play\_sound](audio_play_sound.md) it will only affect that one instance of the sound.

The default asset-level gain is the value of the "Volume" slider in [The Sound Editor](../../../../The_Asset_Editors/Sounds.md):

![](../../../../assets/Images/Scripting_Reference/GML/Reference/Audio/Audio_Asset_Gain_IDE.png)

#### Syntax:

audio\_sound\_gain(index, volume, time);

| Argument | Type | Description |
| --- | --- | --- |
| index | Sound Asset or Sound Instance ID or Audio Queue ID | The index of the sound to set the gain for. |
| volume | Real | The new linear gain value. |
| time | Real | The length for the change in gain in milliseconds. |

#### Returns:

N/A

#### Example 1:

var snd = audio\_play\_sound(snd\_fountain, 10, true);
audio\_sound\_gain(snd, 0, 0);
audio\_sound\_gain(snd, 1, 5000);

The above code assigns the index of a sound to be played to the local variable snd. This variable is then used to reduce the volume of that specific sound to 0 and fade up to full volume over 5 seconds.

#### Example 2:

audio\_sound\_gain(snd\_fountain, 0.5, 0);
var snd = audio\_play\_sound(snd\_fountain, 0, true, 2);

The above code first sets the gain of the sound asset snd\_fountain to 0.5. It then plays this sound using [audio\_play\_sound](audio_play_sound.md)  and sets the gain of this new sound instance to 2 (using the optional "gain" parameter of the function).