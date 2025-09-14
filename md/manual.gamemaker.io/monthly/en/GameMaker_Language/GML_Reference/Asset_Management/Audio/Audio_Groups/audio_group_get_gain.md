---
title: "audio_group_get_gain"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Groups/audio_group_get_gain.htm"
converted: "2025-09-14T03:59:31.237Z"
---

# audio\_group\_get\_gain

This function returns the gain of the audio group with the given ID.

#### Syntax:

audio\_group\_get\_gain(groupID);

| Argument | Type | Description |
| --- | --- | --- |
| groupID | Audio Group ID | The ID of the audio group |

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md) (the gain of the audio group)

#### Example:

var \_default\_group\_gain = audio\_group\_get\_gain(audiogroup\_default);

This gets the gain of the default audio group and stores it in a variable.