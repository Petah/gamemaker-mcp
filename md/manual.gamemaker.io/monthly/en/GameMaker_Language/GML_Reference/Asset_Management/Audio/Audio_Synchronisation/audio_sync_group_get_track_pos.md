---
title: "audio_sync_group_get_track_pos"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Synchronisation/audio_sync_group_get_track_pos.htm"
converted: "2025-09-14T03:59:31.960Z"
---

# audio\_sync\_group\_get\_track\_pos

This function returns the current play position of the given sync group. The group index is the value returned when you created the group using the function [audio\_create\_sync\_group()](audio_create_sync_group.md), and the return value is the time in seconds that the tracks have been playing.

NOTE This functionality is not available for the HTML5 target platform.

#### Syntax:

audio\_sync\_group\_get\_track\_pos(group\_index);

| Argument | Type | Description |
| --- | --- | --- |
| group_index | Audio Sync Group ID | The group index to get the position of. |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

var real\_secs = audio\_sync\_group\_get\_track\_pos(sg);
var secs = real\_secs mod 60;
var mins = string(real\_secs div 60);
if (secs > 9)
{
    secs = string(secs);
}
else
{
    secs = "0" + string(secs);
}

draw\_text(32, 32, "Time = " + mins + ":" + secs);

The above code gets the time position for the sync group indexed in the variable "sg", then uses this value to draw the time played on the screen.