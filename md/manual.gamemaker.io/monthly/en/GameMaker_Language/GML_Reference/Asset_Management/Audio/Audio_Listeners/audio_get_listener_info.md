---
title: "audio_get_listener_info"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Listeners/audio_get_listener_info.htm"
converted: "2025-09-14T03:59:31.398Z"
---

# audio\_get\_listener\_info

This function will create a [DS map](../../../Data_Structures/DS_Maps/DS_Maps.md) and populate it with information for the given listener.

**NOTE** You are responsible for the destruction of the returned DS Map using the appropriate function.

The DS map will contain the following keys:

-   "**name**" - The name of the listener, as a string, with "default" being the standard listener name on most target platforms
-   "**mask**" - The bit-mask for the listener
-   "**index**" - The unique index value of the listener

The mask value can be used to set a sound or emitter to play from multiple listeners at once, simply using the bitwise or "|" to generate a mask for the sound (see the example code below), while the index is used to set the properties like position or velocity for a given listener using functions like [audio\_listener\_set\_position()](audio_listener_set_position.md).

#### Syntax:

audio\_get\_listener\_info(num);

| Argument | Type | Description |
| --- | --- | --- |
| num | Real or Audio Listener ID | The listener number to get the data for. |

#### Returns:

[DS Map](../../../Data_Structures/DS_Maps/ds_map_create.md)

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