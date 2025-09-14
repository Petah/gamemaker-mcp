---
title: "audio_get_listener_mask"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Listeners/audio_get_listener_mask.htm"
converted: "2025-09-14T03:59:31.410Z"
---

# audio\_get\_listener\_mask

This function will return the bit-mask data that defines the current default (global) mask for the audio listeners.

#### Syntax:

audio\_get\_listener\_mask();

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

var g\_mask = audio\_get\_listener\_mask();
if (g\_mask != global.Audio\_Mask)
{
    var num = audio\_get\_listener\_count();
    global.Audio\_Mask = 0;

    for(var i = 0; i < num; ++i)
    {
        var info = audio\_get\_listener\_info(i);
        var m = audio\_listener\_get\_data(info\[? "mask"\]);
        global.Audio\_Mask = global.Audio\_Mask | m;
        ds\_map\_destroy(info);
    }
    audio\_set\_listener\_mask(mask);
}

The above code gets the current listener mask data and compares it to the data stored in a global variable. If they are not the same, the code checks the number of listeners available then loops through them and gets their mask bits, which are then combined to create a single mask which is applied to the audio system to define the global listeners.