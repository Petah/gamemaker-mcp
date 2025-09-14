---
title: "audio_sound_get_audio_group"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Groups/audio_sound_get_audio_group.htm"
converted: "2025-09-14T03:59:31.346Z"
---

# audio\_sound\_get\_audio\_group

This function returns the ID of the [audio group](../../../../../Settings/Audio_Groups.md) the given sound asset or sound instance belongs to.

#### Syntax:

audio\_sound\_get\_audio\_group(sound\_index);

| Argument | Type | Description |
| --- | --- | --- |
| sound_index | Sound Asset or Sound Instance ID | The index of a sound asset or instance |

#### Returns:

[Audio Group ID](Audio_Groups.md)

#### Example:

var \_group = audio\_sound\_get\_audio\_group(snd\_animal);

The above code gets the ID of the audio group assigned to the sound snd\_animal and stores it in a temporary variable \_group.