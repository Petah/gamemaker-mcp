---
title: "audio_emitter_get_listener_mask"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Emitters/audio_emitter_get_listener_mask.htm"
converted: "2025-09-14T03:59:30.974Z"
---

# audio\_emitter\_get\_listener\_mask

This function will return the bit-mask data that defines which audio listeners an emitter should play sounds from. For more information see the section on [Audio Listeners](../Audio_Listeners/Audio_Listeners.md).

#### Syntax:

audio\_emitter\_get\_listener\_mask(emitterID);

| Argument | Type | Description |
| --- | --- | --- |
| emitterID | Audio Emitter ID | The unique ID of the emitter to get the mask of |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

s\_emit = audio\_emitter\_create();
if (audio\_emitter\_get\_listener\_mask(s\_emit) != global.PlayerMask)
{
    audio\_emitter\_set\_listener\_mask(snd, global.PlayerMask);
}

The above code creates an emitter then checks the listener mask data for it, and if it's not the same as that which is stored in a global variable, it sets the listener(s) to play from using the mask data stored in the global variable.