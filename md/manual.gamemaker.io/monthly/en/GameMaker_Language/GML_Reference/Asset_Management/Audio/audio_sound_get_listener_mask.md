---
title: "audio_sound_get_listener_mask"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_sound_get_listener_mask.htm"
converted: "2025-09-14T03:59:32.439Z"
---

# audio\_sound\_get\_listener\_mask

This function will return the bit-mask data that defines which audio listeners a sound should be played from. See the section on [Audio Listeners](Audio_Listeners/Audio_Listeners.md) for more information.

#### Syntax:

audio\_sound\_get\_listener\_mask(soundID);

| Argument | Type | Description |
| --- | --- | --- |
| soundID | Sound Instance ID | The unique ID of the sound to get the mask of |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

var snd = audio\_play\_sound(snd\_PlayerDead, 10, false);
if audio\_sound\_get\_listener\_mask(snd) != global.PlayerMask
{
    audio\_sound\_set\_listener\_mask(snd, global.PlayerMask);
}

The above code plays a sound then checks the listener mask data for the sound, and if it's not the same as that which is stored in a global variable, it sets the listener(s) to play from using the mask data stored in the global variable.