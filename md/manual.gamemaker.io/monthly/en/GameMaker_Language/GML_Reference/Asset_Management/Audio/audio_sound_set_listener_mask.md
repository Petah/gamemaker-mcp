---
title: "audio_sound_set_listener_mask"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_sound_set_listener_mask.htm"
converted: "2025-09-14T03:59:32.534Z"
---

# audio\_sound\_set\_listener\_mask

This function can be used to set the bit-mask for a sound so that it will play only from those listeners specified. You can create a bit-mask by using the [audio\_get\_listener\_info()](Audio_Listeners/audio_get_listener_info.md) and then using the bitwise or ("|") to create a custom mask with those listeners that you require the sound to play from, and then apply this custom mask to the sound after you have played it. This mask will over-ride the default mask or that which you may have set using the function [audio\_set\_listener\_mask()](Audio_Listeners/audio_set_listener_mask.md).

This function can only be used on a sound after it has been set to play and requires the sound ID as returned by the function used to play the sound.

#### Syntax:

audio\_sound\_set\_listener\_mask(soundID, mask);

| Argument | Type | Description |
| --- | --- | --- |
| soundID | Sound Instance ID | The unique ID of the sound to set the mask of |
| mask | Real | The bitmask data to set for the sound |

#### Returns:

N/A

#### Example:

var snd = audio\_play\_sound(snd\_PlayerDead, 10, false);
audio\_sound\_set\_listener\_mask(snd, global.PlayerMask);

The above code plays a sound then sets the listener(s) to play from using the mask data stored in a global variable.