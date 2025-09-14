---
title: "audio_set_listener_mask"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Listeners/audio_set_listener_mask.htm"
converted: "2025-09-14T03:59:31.611Z"
---

# audio\_set\_listener\_mask

When using multiple listeners on a system, you can set the bit-mask for a sound and have it heard from the flagged listener only. However, you can also set the _global_ mask using this function and all sounds played normally will be heard from the listeners flagged by this mask, without the need to set the mask for each sound individually.

#### Syntax:

audio\_set\_listener\_mask(mask);

| Argument | Type | Description |
| --- | --- | --- |
| mask | Real | The bit-mask data to set for the listeners |

#### Returns:

N/A

#### Example:

var num = audio\_get\_listener\_count();
var mask = 0; for(var i = 0; i < num; ++i;)
{
    var info = audio\_get\_listener\_info(i);
    var m = audio\_listener\_get\_data(info\[? "mask"\]);
    mask = mask | m;
    ds\_map\_destroy(info);
}
audio\_set\_listener\_mask(mask);

The above code checks the number of listeners available then loops through them gets their mask bits, which are then combined to create a single bit mask which is applied to the global listener.