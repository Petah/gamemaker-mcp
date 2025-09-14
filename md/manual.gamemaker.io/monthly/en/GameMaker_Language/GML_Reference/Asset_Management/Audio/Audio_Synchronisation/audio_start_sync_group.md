---
title: "audio_start_sync_group"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Synchronisation/audio_start_sync_group.htm"
converted: "2025-09-14T03:59:31.907Z"
---

# audio\_start\_sync\_group

With this function you can start playing a previously created sync group. You need to supply the _group index_ which is the value returned when you created the group using the function [audio\_create\_sync\_group()](audio_create_sync_group.md).

NOTE This functionality is not available for the HTML5 target platform.

#### Syntax:

audio\_start\_sync\_group(group\_index);

| Argument | Type | Description |
| --- | --- | --- |
| group_index | Audio Sync Group ID | The group index to play. |

#### Returns:

N/A

#### Example:

sg = audio\_create\_sync\_group(true);
audio\_play\_in\_sync\_group(sg, sound1);
audio\_play\_in\_sync\_group(sg, sound2);
audio\_sound\_gain(sound2, 0, 0);
audio\_play\_in\_sync\_group(sg, sound3);
audio\_sound\_gain(sound3, 0, 0);
audio\_play\_in\_sync\_group(sg, sound4);
audio\_sound\_gain(sound4, 0, 0);
audio\_start\_sync\_group(sg);

The above creates a new sync group and assigns the index of the group to the variable "sg". Four sounds are then added to the group, with the gain for three of them set to 0. Finally the sync group is played.