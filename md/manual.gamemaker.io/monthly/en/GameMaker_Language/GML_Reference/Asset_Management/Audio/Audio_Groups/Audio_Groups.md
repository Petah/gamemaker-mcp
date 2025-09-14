---
title: "Audio Groups"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Groups/Audio_Groups.htm"
converted: "2025-09-14T03:59:31.205Z"
---

# Audio Groups

Your audio assets can be grouped together from the IDE so they can be loaded and unloaded into memory as required by your game.

You can create these **audio groups** from the [Audio Groups](../../../../../Settings/Audio_Groups.md) window - which can be opened from [The Tools Menu](../../../../../IDE_Navigation/Menus/The_Tools_Menu.md) at the top of the IDE - and you can assign your audio assets to a specific group from the [Sound Properties Window](../../../../../The_Asset_Editors/Sounds.md).

Each audio group has its own gain. The gain of all sounds in an audio group is multiplied by that audio group's gain. The default value is 1 but it can be changed using [audio\_group\_set\_gain](audio_group_set_gain.md) and retrieved using [audio\_group\_get\_gain](audio_group_get_gain.md) respectively.

NOTE All audio groups can be accessed in code through a constant that GameMaker defines for each of the groups. The default audio group is [audiogroup\_default](audiogroup_default.md). To get the name of the group as a string you can use [audio\_group\_name](audio_group_name.md).

NOTE Trying to play a sound using the audio\_play\_sound\* functions from an audio group that's not loaded will not play anything and return a sound instance index of -1. An error message is also output to the console.

## Function Reference

### Group Info

-   [audiogroup\_default](audiogroup_default.md)
-   [audio\_group\_name](audio_group_name.md)
-   [audio\_group\_get\_assets](audio_group_get_assets.md) / [audio\_sound\_get\_audio\_group](audio_sound_get_audio_group.md)

### Loading

-   [audio\_group\_load](audio_group_load.md)
-   [audio\_group\_unload](audio_group_unload.md)
-   [audio\_group\_is\_loaded](audio_group_is_loaded.md)
-   [audio\_group\_load\_progress](audio_group_load_progress.md)

### Playing Sounds

-   [audio\_group\_stop\_all](audio_group_stop_all.md)

### Audio Properties

-   [audio\_group\_set\_gain](audio_group_set_gain.md)
-   [audio\_group\_get\_gain](audio_group_get_gain.md)