---
title: "audio_get_type"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/audio_get_type.htm"
converted: "2025-09-14T03:59:32.171Z"
---

# audio\_get\_type

When adding audio to GameMaker it can be either _streamed_ or _in memory_. If you need to know whether a given sound index is for streamed audio or not you can use this function which will return 1 for streamed, 0 for sound in memory, and will throw a fatal error if the index does not point to a valid sound resource.

#### Syntax:

audio\_get\_type(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Sound Asset | The index of the sound to check. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md) (1: streamed, 0: in memory, -1: any error)

#### Example:

type = audio\_get\_type(snd\_Music\_1);

The above code checks the type of audio indexed in the variable "snd\_Music\_1" and stores the returned value in the variable "type".