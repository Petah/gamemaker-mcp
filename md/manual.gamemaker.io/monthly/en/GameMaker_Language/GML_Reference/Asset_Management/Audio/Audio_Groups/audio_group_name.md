---
title: "audio_group_name"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Groups/audio_group_name.htm"
converted: "2025-09-14T03:59:31.293Z"
---

# audio\_group\_name

This function returns a string containing the name of the given audio group for displaying or checking.

When you define an audio group in the [Audio Groups](../../../../../Settings/Audio_Groups.md) window, you give it a unique name which GameMaker turns into a constant to use as an ID value for the group. This function takes this ID and returns a string of the ID name you gave.

NOTE The default audio group is [audiogroup\_default](audiogroup_default.md).

#### Syntax:

audio\_group\_name(groupID);

| Argument | Type | Description |
| --- | --- | --- |
| groupID | Audio Group ID | The index value constant of the audio group to check (as defined in the Audio Groups Window) |

#### Returns:

[String](../../../../GML_Overview/Data_Types.md)

#### Example:

var \_name = audio\_group\_name(audiogroup\_level1);
draw\_text(32, 32, "Now Playing Group: " + \_name);

The above code retrieves the name of the given audio group constant and displays it on the screen.