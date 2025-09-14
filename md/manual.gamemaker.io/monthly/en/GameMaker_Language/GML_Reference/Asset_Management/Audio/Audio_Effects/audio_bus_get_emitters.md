---
title: "audio_bus_get_emitters"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Effects/audio_bus_get_emitters.htm"
converted: "2025-09-14T03:59:30.739Z"
---

# audio\_bus\_get\_emitters

This function returns an array of the [Audio Emitters](../Audio_Emitters/Audio_Emitters.md) that are connected to the given [AudioBus Struct](AudioBus.md).

NOTE To get the audio bus that an audio emitter is connected to, use [audio\_emitter\_get\_bus](../Audio_Emitters/audio_emitter_get_bus.md).

#### Syntax:

audio\_bus\_get\_emitters(bus);

| Argument | Type | Description |
| --- | --- | --- |
| bus | AudioBus Struct | The audio bus to get the connected emitters from |

#### Returns:

[Array](../../../../GML_Overview/Arrays.md) of [Audio Emitter ID](../Audio_Emitters/audio_emitter_create.md)

#### Example:

var \_emitters = audio\_bus\_get\_emitters(bus\_fx);

The above code calls audio\_bus\_get\_emitters to get the emitters connected to an audio bus bus\_fx. The returned array is stored in a temporary variable \_emitters.