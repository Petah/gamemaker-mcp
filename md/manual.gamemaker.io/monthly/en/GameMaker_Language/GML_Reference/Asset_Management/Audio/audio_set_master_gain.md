---
title: "audio_set_master_gain"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_set_master_gain.htm"
converted: "2025-09-14T03:59:32.379Z"
---

# audio\_set\_master\_gain

With this function you can set the absolute value for the global volume of all sounds and music for a specific listener.

The default listener index is 0, but you can use the function [audio\_get\_listener\_info](Audio_Listeners/audio_get_listener_info.md) to get the different indices available for the target platform. The gain value is based on a linear scale from 0 (silent) to 1 (full volume) and will affect the relative volume of all sounds and music played from within your game through that listener.

NOTE Use [db\_to\_lin](db_to_lin.md) and [lin\_to\_db](lin_to_db.md) to convert back and forth between linear gains and gains expressed in decibels (dB).

#### Syntax:

audio\_set\_master\_gain(listenerIndex, gain);

| Argument | Type | Description |
| --- | --- | --- |
| listenerIndex | Real or Audio Listener ID | The index of the listener to set the gain on. |
| gain | Real | Value for the global volume (0 to 1). |

#### Returns:

N/A

#### Example:

var num = audio\_get\_listener\_count();
for( var i = 0; i < num; i++;)
{
    var info = audio\_get\_listener\_info(i);
    audio\_set\_master\_gain(info\[? "index"\], 0.75);
    ds\_map\_destroy(info);
}

The above code loops through the available listeners and then sets their master gain to 0.75.