---
title: "audio_emitter_set_listener_mask"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Emitters/audio_emitter_set_listener_mask.htm"
converted: "2025-09-14T03:59:31.148Z"
---

# audio\_emitter\_set\_listener\_mask

This function can be used to set the bit-mask for an emitter so that all sounds played through the emitter will play only from those listeners specified. You can create a bit-mask by using the [audio\_get\_listener\_info()](../Audio_Listeners/audio_get_listener_info.md) and then using the bitwise or ("|") to create a custom mask with those listeners that you require the sound to play from, and then apply this custom mask to the emitter. This mask will over-ride the default mask or that which you may have set using the function [audio\_set\_listener\_mask()](../Audio_Listeners/audio_set_listener_mask.md).

#### Syntax:

audio\_emitter\_set\_listener\_mask(emitterID, mask);

| Argument | Type | Description |
| --- | --- | --- |
| emitterID | Audio Emitter ID | The unique ID of the emitter to set the mask of |
| mask | Real | The bitmask data to set for the sound |

#### Returns:

N/A

#### Example:

s\_emit = audio\_emitter\_create();
audio\_emitter\_set\_listener\_mask(snd, global.PlayerMask);

The above code creates an audio emitter and then sets the listener(s) to play from using the mask data stored in a global variable.