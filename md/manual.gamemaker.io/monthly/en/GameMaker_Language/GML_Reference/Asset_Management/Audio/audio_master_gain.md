---
title: "audio_master_gain"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_master_gain.htm"
converted: "2025-09-14T03:59:32.221Z"
---

# audio\_master\_gain

With this function you can set the absolute value for the global volume of all sounds and music.

It is based on a linear scale from 0 (silent) to any value greater than 0, although normally you'd consider the maximum volume as 1. Anything over 1 can be used but, depending on the sound used and the platform being compiled to, you may get distortion or clipping when the sound is played back. This function will affect the relative volume of all sounds and music played from within your game.

NOTE This function sets the master gain of the _default_ listener. Use [audio\_set\_master\_gain](audio_set_master_gain.md) to set the master gain for a specific listener.

NOTE Audio devices and/or operating systems can sometimes attempt to change the audio's amplitude in order to protect the user from what would otherwise be very loud sounds, for example by normalising the audio stream or by clipping the amplitude to 1. How this is handled is specific to the audio device or OS that's handling your game's audio. As a result, increasing gains might have an inconsistent effect.

NOTE Use [db\_to\_lin](db_to_lin.md) and [lin\_to\_db](lin_to_db.md) to convert back and forth between linear gains and gains expressed in decibels (dB).

#### Syntax:

audio\_master\_gain(gain);

| Argument | Type | Description |
| --- | --- | --- |
| gain | Real | Value for the global volume (0 to 1) |

#### Returns:

N/A

#### Example:

if (keyboard\_check(vk\_up))
{
    if vol < 1 vol += 0.05;
    audio\_master\_gain(vol);
}
if (keyboard\_check(vk\_down))
{
    if vol > 0 vol -= 0.05;
    audio\_master\_gain(vol);
}

The above code checks for key-presses of the up and down arrow keys, which then increase or decrease the variable "vol". This variable is then used to set the global gain of all sound and music in the game.